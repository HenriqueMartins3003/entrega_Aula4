import ProductManager from "./JS/ProductManager.js";

const createId = () => {
  const id = Math.floor(Math.random() * 100);
  return id;
};

const producManager = new ProductManager();

const rolex = {
  code: createId(),
  description: "Relogio Rolex",
  price: 10000000,
  stock: 1,
  thumbmail:
    "https://www.google.com/search?sca_esv=601184441&sxsrf=ACQVn08L64aP2klg8XLP3ySRoLrQ8N-bXQ:1706129684612&q=rolex&tbm=isch&source=lnms&sa=X&ved=2ahUKEwiSuqqu9PaDAxUMqZUCHdbHDXcQ0pQJegQIGRAB&biw=1280&bih=679&dpr=2#imgrc=FbXLdB8m5Dck0M",
  title: "Rolex",
};

const rolex2 = {
  code: 75,
  description: "Relogio Rolex",
  price: 10000000,
  stock: 1,
  thumbmail:
    "https://www.google.com/search?sca_esv=601184441&sxsrf=ACQVn08L64aP2klg8XLP3ySRoLrQ8N-bXQ:1706129684612&q=rolex&tbm=isch&source=lnms&sa=X&ved=2ahUKEwiSuqqu9PaDAxUMqZUCHdbHDXcQ0pQJegQIGRAB&biw=1280&bih=679&dpr=2#imgrc=FbXLdB8m5Dck0M",
  title: "Rolex",
};

await producManager.addProduct(rolex);
await producManager.addProduct(rolex2);

const found = await producManager.getProductById(75);

const allproducts = await producManager.getproducts();
