import * as fs from "fs/promises";

export default class ProductManager {
  constructor(path) {
    this.products = [];
    this.path = path;
  }
  async readFile() {
    try {
      const data = await fs.readFile(this.path, "utf8");
      if (!data) {
        return [];
      }
      const files = JSON.parse(data);
      return files;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async saveFile(product) {
    try {
      await fs.writeFile(this.path, JSON.stringify(product));
    } catch (error) {
      console.log(error);
    }
  }

  async addProduct(data) {
    if (
      !data.code ||
      !data.description ||
      !data.title ||
      !data.thumbmail ||
      !data.price ||
      !data.stock
    ) {
      console.log(data);
      throw new Error(
        "Todos os campos são obrigatorios ao cadastrar um Produto."
      );
    }
    const prodFile = await this.readFile();
    const generateId = () => {
      const id = prodFile.length + 1;
      return id;
    };

    const product = {
      id: generateId(),
      ...data,
    };

    //adicionando o produto ao array!
    this.products = [...this.products, product];

    console.log(this.products);

    //escrevendo no arquivo txt.
    await this.saveFile(this.products);
  }

  async getProductById(id) {
    const products = await this.readFile();

    const foundProduct = products.filter((prod) => prod.id === +id);

    if (!foundProduct) {
      return "Produto não encotrado";
    }

    return foundProduct;
  }

  async getproducts(limit) {
    if (limit === undefined || limit === "") {
      const allProducts = await this.readFile();
      return allProducts;
    }
    const allProducts = await this.readFile();
    const filtredProducts = allProducts.slice(0, +limit);

    return filtredProducts;
  }

  async updateProduct(productId, updatedProductData) {
    const products = await this.readFile();
    const index = products.findIndex((product) => product.id === productId);

    if (index !== -1) {
      // Atualiza o produto no array
      products[index] = { ...products[index], ...updatedProductData };

      // Salva o array atualizado no arquivo
      await this.saveFile(products);

      console.log("Produto atualizado com sucesso:", products[index]);
    } else {
      console.error(`Produto com Id:${productId} não encontrado`);
    }
  }

  async deleteProduct(productId) {
    const products = await this.readFile();
    const index = products.findIndex((product) => product.code === productId);

    if (index !== -1) {
      // Remove o produto do array
      const deletedProduct = products.splice(index, 1)[0];

      // Salva o array atualizado no arquivo
      await this.saveFile(products);

      console.log("Produto deletado com sucesso:", deletedProduct);
    } else {
      console.error(`Produto com Id:${productId} não encontrado`);
    }
  }
}
