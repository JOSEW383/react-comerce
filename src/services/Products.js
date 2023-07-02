import productsList from "../mocks/products_mock.json"; //Mock

class Product {
  constructor({ id, title, description, price, category, thumbnail }) {
    this.id = id; 
    this.title = title;
    this.description = description;
    this.price = price;
    this.category = category;
    this.thumbnail = thumbnail;
  }
}

class ProductList {
  constructor({ products, totalResults, response }) {
    this.products = products.map(
      (product) =>
        new Product({
          id: product.id,
          title: product.title,
          description: product.description,
          price: product.price,
          category: product.category,
          thumbnail: product.thumbnail,
        })
    );
    this.totalResults = totalResults;
    this.response = response;
  }
}

function getProductsFromMock(categoty, page) {
  let products = productsList.products;
  if (categoty !== "All") {
    products = products.filter((product) => product.type === categoty);
  }
  products = products.slice((page - 1) * 100, page * 100);

  return {
    products: products,
    totalResults: productsList.limit,
    Response: "true",
  };
}

export function getProductsList(categoty="All", page = 1) {
  //get json mock
  const responseJSON = getProductsFromMock(categoty, page);
  const productList = new ProductList({
    products: responseJSON.products ?? [],
    totalResults: responseJSON.totalResults ?? 0,
    response: responseJSON.Response ?? "false",
  });
  return productList;
}

export function getProductById(id) {
  const responseJSON = productsList.products.find(
    (product) => product.id === id
  );
  const product = new Product({
    id: responseJSON.id,
    title: responseJSON.title,
    description: responseJSON.description,
    price: responseJSON.price,
    category: responseJSON.category,
    thumbnail: responseJSON.thumbnail,
  });
  return product;
}
