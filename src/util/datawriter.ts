import { Product } from '../interfaces/products';
import * as fs from 'fs';
import path from 'path';

export function exportToCSV(
  products: Product[],
  header: string,
  directory: string,
  filename: string,
  searchTerm: string,
): void {
  let csvContent: string;

  if (products.length === 0) {
    csvContent = `"No products are available for the search term: ${searchTerm}"`;
  } else {
    csvContent = [
      header,
      ...products.map(
        (product) =>
          `"${product.name.replace(/\n/g, ' ')}",${product.price.toFixed(2)},${searchTerm},${
            product.link
          }`,
      ),
    ].join('\n');
  }

  // Create the directory if it doesn't exist
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }

  // Write CSV content to a file within the directory
  const filePath = path.join(directory, filename);

  // Write CSV content to a file
  fs.writeFileSync(filePath, csvContent);
  console.log('CSV file written successfully.');
}
