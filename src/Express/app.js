import express, { json } from "express";
import ProductManager from "../JS/ProductManager.js";

const app = express();
const producManager = new ProductManager("./Data/Products.txt");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/products", async (req, res) => {
  const limit = req.query.limit;

  try {
    const products = await producManager.getproducts(limit);
    return res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "Erro ao listar produtos" });
  }
});

app.get("/products/:pid", async (req, res) => {
  const id = req.params.pid;
  try {
    const prodById = await producManager.getProductById(id);
    if (prodById.length === 0) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }
    return res.status(200).json(prodById);
  } catch {
    res.status(500).json({ error: "Produto não encontrado" });
  }
});

export default app;
