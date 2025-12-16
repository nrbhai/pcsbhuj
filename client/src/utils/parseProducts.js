// parseProducts utility – default export
// Supports CSV via PapaParse and Excel via xlsx
export default async function parseProducts(file) {
  const ext = file.name.split('.').pop()?.toLowerCase();
  if (ext === 'csv') {
    return new Promise((resolve, reject) => {
      import('papaparse')
        .then(Papa => {
          Papa.default.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: results => {
              const data = results.data.map(p => ({
                id: p.id?.toString() ?? Date.now().toString(),
                name: p.name ?? '',
                category: p.category ?? 'Other',
                price: p.price ?? '0',
                description: p.description ?? '',
                imageUrl: p.imageUrl ?? ''
              }));
              resolve(data);
            },
            error: err => reject(err)
          });
        })
        .catch(reject);
    });
  }

  if (ext === 'xlsx') {
    const arrayBuffer = await file.arrayBuffer();
    const XLSX = await import('xlsx');
    const workbook = XLSX.read(arrayBuffer, { type: 'array' });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const json = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    const [header, ...rows] = json;
    return rows.map(row => {
      const obj = {};
      header.forEach((col, i) => (obj[col] = row[i]));
      return {
        id: obj.id?.toString() ?? Date.now().toString(),
        name: obj.name ?? '',
        category: obj.category ?? 'Other',
        price: obj.price ?? '0',
        description: obj.description ?? '',
        imageUrl: obj.imageUrl ?? ''
      };
    });
  }

  throw new Error('Unsupported file type. Use .csv or .xlsx');
}
