import * as fs from "fs/promises";

export default class ProductManager {
  constructor() {
    this.products = [];
    this.path = "./Data/Products.txt";
  }
  #lerArquivo = async () => {
    const arquivos = JSON.parse(await fs.readFile(this.path, "utf-8"));
    return arquivos;
  };

  #salvarArquivo = async (product) => {
    await fs.writeFile(this.path, JSON.stringify(product));
  };
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
    await this.#salvarArquivo(this.products);

    console.log("Novo produto adicionado com sucesso");
  }

  async getProductById(id) {
    const products = await this.#lerArquivo();

    const foundProduct = products.filter((prod) => prod.code === id);

    if (!foundProduct) {
      throw new Error("Produto não encontrado!!");
    }

    return foundProduct;
  }

  async getproducts() {
    const allProducts = await this.#lerArquivo();
    return allProducts;
  }

  async updateProduct(productId, updatedProductData) {
    const products = await this.#lerArquivo();
    const index = products.findIndex((product) => product.code === productId);

    if (index !== -1) {
      // Atualiza o produto no array
      products[index] = { ...products[index], ...updatedProductData };

      // Salva o array atualizado no arquivo
      await this.#salvarArquivo(products);

      console.log("Produto atualizado com sucesso:", products[index]);
    } else {
      console.error(`Produto com Id:${productId} não encontrado`);
    }
  }

  async deleteProduct(productId) {
    const products = await this.#lerArquivo();
    const index = products.findIndex((product) => product.code === productId);

    if (index !== -1) {
      // Remove o produto do array
      const deletedProduct = products.splice(index, 1)[0];

      // Salva o array atualizado no arquivo
      await this.#salvarArquivo(products);

      console.log("Produto deletado com sucesso:", deletedProduct);
    } else {
      console.error(`Produto com Id:${productId} não encontrado`);
    }
  }
}
