import ProductManager from "./src/JS/ProductManager.js";

const producManager = new ProductManager("./Data/Products.txt");

const createCode = () => {
  const code = "P:" + Math.floor(Math.random() * 100).toString();
  return code;
};

const rolex = {
  code: createCode(),
  description: "Relogio Rolex",
  price: 10000000,
  stock: 1,
  thumbmail:
    "https://www.google.com/search?sca_esv=601184441&sxsrf=ACQVn08L64aP2klg8XLP3ySRoLrQ8N-bXQ:1706129684612&q=rolex&tbm=isch&source=lnms&sa=X&ved=2ahUKEwiSuqqu9PaDAxUMqZUCHdbHDXcQ0pQJegQIGRAB&biw=1280&bih=679&dpr=2#imgrc=FbXLdB8m5Dck0M",
  title: "Rolex",
};
const appWatch = {
  code: createCode(),
  description: "Relogio apple",
  price: 1000,
  stock: 12,
  thumbmail:
    "https://www.google.com/search?sca_esv=601184441&sxsrf=ACQVn08L64aP2klg8XLP3ySRoLrQ8N-bXQ:1706129684612&q=rolex&tbm=isch&source=lnms&sa=X&ved=2ahUKEwiSuqqu9PaDAxUMqZUCHdbHDXcQ0pQJegQIGRAB&biw=1280&bih=679&dpr=2#imgrc=FbXLdB8m5Dck0M",
  title: "Apple watch",
};

for (let i = 0; i <= 100; i++) {
  const code = createCode();
  const appWatch = {
    code: code,
    description: `relogio ${i}`,
    price: i + 10 * 10,
    stock: i + 2 * 5,
    title: "Apple watch",
    thumbmail:
      "https://www.google.com/search?sca_esv=601184441&sxsrf=ACQVn08L64aP2klg8XLP3ySRoLrQ8N-bXQ:1706129684612&q=rolex&tbm=isch&source=lnms&sa=X&ved=2ahUKEwiSuqqu9PaDAxUMqZUCHdbHDXcQ0pQJegQIGRAB&biw=1280&bih=679&dpr=2#imgrc=FbXLdB8m5Dck0M",
  };
  await producManager.addProduct(appWatch);
}

// await producManager.addProduct(appWatch);

// const found = await producManager.getProductById(2);

// const allproducts = await producManager.getproducts();
// console.log(allproducts);

// await producManager.updateProduct(2, { price: 55 });

// await producManager.deleteProduct(1);
