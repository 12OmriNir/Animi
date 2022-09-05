const { query } = require("./db");

async function addProduct(newProduct) {
  let string = `INSERT INTO animi.products (id,product_name,category,origin,character,description,price,is_in_stock,image_url) VALUES
         ($1,$2,$3,$4,$5,$6,$7,$8,$9)`;
  const params = [
    newProduct.id,
    newProduct.name,
    newProduct.category,
    newProduct.origin,
    newProduct.character,
    newProduct.description,
    newProduct.price,
    newProduct.is_in_stock,
    newProduct.image_url,
  ];
  return await query(string, params);
}

async function deleteProduct(productID) {
  let string = `DELETE FROM animi.products WHERE id = $1`;
  const values = [productID];
  await query(string, values);
}

async function getProducts(filters) {
  let currentParams = 3;

  const values = [filters.minPrice, filters.maxPrice];
  let text = `SELECT * FROM animi.products WHERE price BETWEEN $1 AND $2`;

  if (filters["category"]) {
    text += ` AND category = ${"$" + currentParams}`;
    currentParams++;
    values.push(filters.category);
  }

  if (filters["origin"]) {
    text += ` AND origin = ${"$" + currentParams}`;
    currentParams++;
    values.push(filters.origin);
  }

  if (filters["character"]) {
    text += ` AND character = ${"$" + currentParams}`;
    currentParams++;
    values.push(filters.character);
  }

  try {
    const results = await query(text, values);
    return results.rows;
  } catch (err) {
    throw err;
  }
}

async function getProductById(id) {
  try {
    const text = `SELECT * FROM animi.products WHERE id = $1`;
    const product = await query(text, [id]);
    // .then((res)=>console.log(res.rows))
    if (product.rowCount > 0) {
      return product.rows[0];
    } else {
      return null;
    }
  } catch (err) {
    throw err;
  }
}

module.exports = {
  addProduct,
  deleteProduct,
  getProducts,
  getProductById,
};
