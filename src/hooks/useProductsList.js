import { useState, useEffect, useContext } from "react";
import { getProductsList as getList } from "../services/products";
import {FiltersContext} from "../context/filters";


export const Category = {
  ALL: "all",
  SMARTPHONES: "smartphones",
  LAPTOPS: "laptops",
  FRAGRANCES: "fragrances",
  SKINCARE: "skincare",
  GROCERIES: "groceries",
  HOME_DECORATION: "home-decoration",
};

export const defaultFilters = {
  page: 1,
  priceFrom: 0,
  category: Category.ALL,
};

export function useProductsList() {
  const [productList, setProductsList] = useState(null);
  const {filters, setFilters} = useContext(FiltersContext);

  function getProductsList() {
    const list = getList();

    list.products = list.products.filter(
      (product) => product.price >= filters.priceFrom
    );
    list.products = list.products.filter(
      (product) =>
        filters.category === Category.ALL || product.category === filters.category
    );
    setProductsList(list);
  }

  useEffect(() => {
    getProductsList();
  }, [filters]);

  return { productList, getProductsList };
}
