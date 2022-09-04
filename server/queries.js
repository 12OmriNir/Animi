const { query } = require("./db");
const shortid = require("shortid");

async function addProduct(req, res) {
  const newProduct = {
    id: shortid.generate(),
    name: req.body.name,
    category: req.body.category,
    origin: req.body.origin,
    character: req.body.character,
    description: req.body.description,
    price: req.body.price,
    is_in_stock: req.body.isInStock,
    image_url: req.body.imageUrl,
  };
  try {
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
    let insertProduct = await query(string, params);
    res.send(newProduct);
  } catch (e) {
    console.log("error", e);
  }
}

async function deleteProduct(req, res) {
  const productID = req.params.id;

  try {
    let string = `DELETE FROM animi.products WHERE id = '${productID}'`;
    let requestedParking = await query(string);

    let rePrint = "SELECT * FROM animi.products";
    let requestedRePrint = await query(rePrint);
    res.send(requestedRePrint.rows);
  } catch (e) {
    console.log("error", e);
  }
}

async function getProducts(req, res) {
  const filters = {
    category: req.body.category,
    origin: req.body.origin,
    character: req.body.character,
    minPrice: req.body.minPrice,
    maxPrice: req.body.maxPrice,
  };

  let text = "SELECT * FROM animi.products"

  const params = [
    filters.category,
    filters.origin,
    filters.character,
    filters.minPrice,
    filters.maxPrice
  ]

  try {
    const results = await query(text, params);
    res.send(results.rows);
  } catch (err) {
    throw err;
  }
}

module.exports = {
  addProduct,
  deleteProduct,
  getProducts,
};
