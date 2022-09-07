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
  let text = `SELECT * FROM animi.products`;
  let currentParams = 0;
  const wheres = [];

  const values = [];

  if(filters.minPrice && filters.maxPrice){
     wheres.push('price BETWEEN $1 AND $2')
     values.push(filters.minPrice, filters.maxPrice)
     currentParams += 2
  }
  else if(filters.minPrice){
    wheres.push('price >= $1')
    values.push(filters.minPrice)
    currentParams ++
  }
  else if(filters.maxPrice){
    wheres.push('price <= $1')
    values.push(filters.maxPrice)
    currentParams ++
  }

  if (filters.category) {
    wheres.push(`category = ${"$" + ++currentParams}`);
    values.push(filters.category);
    
  }

  if (filters.origin) {
    wheres.push(`origin = ${"$" + ++currentParams}`);
    values.push(filters.origin);
  }

  if (filters.character) {
    wheres(`character = ${"$" + ++currentParams}`);
    values.push(filters.character);
  }

  if(filters.name) {
    wheres.push(`product_name LIKE $${++currentParams}`) 
    values.push(filters.name + '%')
  }

  if(wheres.length){
    text += ` WHERE ${wheres.join(' AND ')}`
  }
  try {
    const results = await query(text, values);
    console.log('resultl!!!!!!!!!!!!!!',results)
    return results.rows;
  } catch (err) {
    throw err
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
