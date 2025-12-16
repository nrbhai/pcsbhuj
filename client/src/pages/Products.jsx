import React, { useContext, useState, useMemo } from 'react';
import ProductsContext from '../context/ProductsContext';
import parseProducts from '../utils/parseProducts';
import styles from './Products.module.css';

export default function Products() {
  const { products, setProducts } = useContext(ProductsContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const categories = ['All', ...new Set(products.map(p => p.category || 'Other'))];

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            (p.description && p.description.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = categoryFilter === 'All' || p.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, categoryFilter]);

  const handleFileChange = async e => {
    const file = e.target.files[0];
    if (!file) return;
    setLoading(true);
    setError(null);
    try {
      const parsed = await parseProducts(file);
      // Add IDs if missing
      const parsedWithIds = parsed.map((p, i) => ({ ...p, id: p.id || Date.now() + i }));
      setProducts(prev => [...prev, ...parsedWithIds]);
    } catch (err) {
      setError(err.message || 'Failed to parse file');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Product Catalog</h1>
          <p>Explore our wide range of premium electronics and IT solutions.</p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.controls}>
          <div className={styles.searchFilter}>
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
            <select 
              value={categoryFilter} 
              onChange={(e) => setCategoryFilter(e.target.value)}
              className={styles.categorySelect}
            >
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          
          <div className={styles.viewToggles}>
            <button 
              className={`${styles.viewBtn} ${viewMode === 'grid' ? styles.active : ''}`}
              onClick={() => setViewMode('grid')}
              title="Grid View"
            >
              Grid
            </button>
            <button 
              className={`${styles.viewBtn} ${viewMode === 'list' ? styles.active : ''}`}
              onClick={() => setViewMode('list')}
              title="List View"
            >
              List
            </button>
          </div>
        </div>

        <div className={styles.uploadSection}>
          <label className={styles.uploadBtn}>
            Upload Product List (CSV/Excel)
            <input
              type="file"
              accept=".csv,.xlsx"
              onChange={handleFileChange}
              disabled={loading}
              hidden
            />
          </label>
          {loading && <span className={styles.info}>Processing...</span>}
          {error && <span className={styles.error}>{error}</span>}
        </div>

        {viewMode === 'grid' ? (
          <div className={styles.grid}>
            {filteredProducts.map(p => (
              <div key={p.id} className={styles.card}>
                <div className={styles.cardImage}>
                  <img src={p.imageUrl || '/images/logo.svg'} alt={p.name} onError={(e) => e.target.src = '/images/logo.svg'} />
                  {p.category && <span className={styles.categoryBadge}>{p.category}</span>}
                </div>
                <div className={styles.cardContent}>
                  <h3>{p.name}</h3>
                  <p className={styles.description}>{p.description}</p>
                  <div className={styles.cardFooter}>
                    <div className={styles.priceTag}>
                      ₹{p.price}
                    </div>
                    <a 
                      href={`https://wa.me/919825034580?text=I am interested in ${p.name}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.enquireBtn}
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map(p => (
                  <tr key={p.id}>
                    <td><strong>{p.name}</strong></td>
                    <td><span className={styles.tableBadge}>{p.category}</span></td>
                    <td>{p.description}</td>
                    <td>₹{p.price}</td>
                    <td>
                      <a 
                        href={`https://wa.me/919825034580?text=I am interested in ${p.name}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.tableBtn}
                      >
                        Enquire
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {filteredProducts.length === 0 && (
          <div className={styles.noResults}>
            <h3>No products found</h3>
            <p>Try adjusting your search or filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}
