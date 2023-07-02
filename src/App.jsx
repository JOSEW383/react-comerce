import "./App.css";
import Footer from "./components/Footer";
import ProductGrid from "./components/ProductGrid";
import NavBar from "./components/NavBar";
// import ProductPagination from "./components/ProductPagination";
import { useProductsList } from "./hooks/useProductsList";
import ProductFilter from "./components/ProductFilter";
import Cart from "./components/Cart";

function App() {
  const { productList, getProductsList } = useProductsList();

  // function handlePageChange(filters) {
  //   currentPage.current = filters.page;
  //   getProducts(filters);
  // }

  return (
    <>
      <NavBar />
      <Cart />
      <div className="app">
        <h1 className="app-title">React Comerce</h1>
        <ProductFilter />
        <ProductGrid productsList={productList} />
        {/* <ProductPagination
          currentPage={filters.page}
          handlePageChange={handlePageChange}
          totalPages={totalResults}
          factError={false}
        /> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
