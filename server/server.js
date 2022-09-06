const express = require("express");
const shortid = require("shortid");
const cors = require("cors");
const {
  addProduct,
  deleteProduct,
  getProducts,
  getProductById,
  getProductIdByName,
} = require("./queries");
const app = express();
app.use(express.json());
app.use(cors());
const PORT = 3000;

app.use(cors());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/api/products", async (req, res) => {
  const filters = {
    category: req.query.category,
    origin: req.query.origin,
    character: req.query.character,
    minPrice: req.query.minPrice,
    maxPrice: req.query.maxPrice,
  };
  try {
    const products = await getProducts(filters);
    res.send(products);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get("/api/product/:id", async (req, res) => {
  try {
    const result = await getProductById(req.params.id);
    if (result === null) {
      res.status(404);
      res.send("this product does not exist");
    } else {
      res.send(result);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post("/api/product", async (req, res) => {
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
    await addProduct(newProduct);
    res.status(201);
    res.send(newProduct);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete("/api/product/:id", async (req, res) => {
  try {
    const productID = req.params.id;
    await deleteProduct(productID);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(PORT, function (err) {
  if (err) {
    console.log("Error in server setup");
  }
  console.log("Server listening on Port", PORT);
});
