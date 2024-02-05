import app from "./src/Express/app.js";
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`server up on port ${PORT}`);
});
