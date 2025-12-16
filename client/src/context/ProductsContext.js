import React, { createContext, useState, useEffect } from 'react';

const ProductsContext = createContext({
  products: [],
  setProducts: () => {}
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Load from localStorage on mount, or use sample data
  useEffect(() => {
    const stored = localStorage.getItem('products');
    const parsedStored = stored ? JSON.parse(stored) : [];
    
    if (parsedStored.length > 0) {
      setProducts(parsedStored);
    } else {
      // Sample data
      const sampleData = [
        { id: 1, name: 'Lenovo IdeaPad Slim 3', category: 'Laptops', price: '35,990', description: 'Intel Core i3 12th Gen, 8GB RAM, 512GB SSD, 15.6" FHD', imageUrl: '/images/pic1.jpg' },
        { id: 2, name: 'HP 15s', category: 'Laptops', price: '42,500', description: 'AMD Ryzen 5 5500U, 8GB RAM, 512GB SSD, Windows 11', imageUrl: '/images/pic2.jpg' },
        { id: 3, name: 'CP Plus 2.4MP Dome Camera', category: 'CCTV', price: '1,250', description: 'Full HD IR Dome Camera, 20m IR Range', imageUrl: '/images/pic3.jpg' },
        { id: 4, name: 'Hikvision 4CH DVR', category: 'CCTV', price: '4,500', description: '4 Channel 1080p Lite DVR, H.265 Pro+', imageUrl: '/images/pic4.jpg' },
        { id: 5, name: 'Logitech Wireless Mouse', category: 'Accessories', price: '699', description: 'M170 Wireless Mouse, 12-month battery life', imageUrl: '/images/pic5.jpg' },
        { id: 6, name: 'Quick Heal Total Security', category: 'Software', price: '1,100', description: '1 User 1 Year, Ransomware Protection', imageUrl: '/images/pic6.jpg' },
        { id: 7, name: 'Dell Vostro 3420', category: 'Laptops', price: '38,000', description: 'Intel Core i3 11th Gen, 8GB/512GB SSD', imageUrl: '/images/pic7.jpg' },
        { id: 8, name: 'Epson EcoTank L3210', category: 'Printers', price: '12,999', description: 'All-in-One Ink Tank Printer', imageUrl: '/images/pic8.jpg' },
        { id: 9, name: 'D-Link N300 Router', category: 'Networking', price: '999', description: '300Mbps Wireless Router, 2 Antennas', imageUrl: '/images/pic9.jpg' },
        { id: 10, name: 'WD 1TB External HDD', category: 'Accessories', price: '4,200', description: 'USB 3.0 Portable Hard Drive', imageUrl: '/images/pic10.jpg' },
      ];
      setProducts(sampleData);
    }
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
