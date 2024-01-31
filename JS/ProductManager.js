import * as fs from "fs/promises";

export default class ProductManager {
  constructor() {
    this.products = [];
    this.path = "./Data/Products.txt";
  }

  async addProduct(data) {
    this.products.forEach((product) => {
      if (data.code == product.code) {
        throw new Error("O campo code não pode ser repetido.");
      }
    });
    if (
      !data.code ||
      !data.description ||
      !data.title ||
      !data.thumbmail ||
      !data.price ||
      !data.stock
    ) {
      throw new Error(
        "Todos os campos são obrigatorios ao cadastrar um Produto."
      );
    }
    //adicionando o produto ao array!
    this.products = [...this.products, data];
    //escrevendo no arquivo txt.
    await fs.writeFile(this.path, JSON.stringify(this.products));

    console.log("Novo produto adicionado com sucesso");
  }

  async getProductById(id) {
    console.log("ID:", id);
    const products = JSON.parse(await fs.readFile(this.path, "utf-8"));

    const foundProduct = products.filter((prod) => prod.id === id);

    console.log("88888888877777766666", foundProduct);
    if (!foundProduct) {
      throw new Error("Produto não encontrado!!");
    }

    return foundProduct;
  }

  async getproducts() {
    const allProducts = JSON.parse(await fs.readFile(this.path, "utf-8"));
    return allProducts;
  }
}
