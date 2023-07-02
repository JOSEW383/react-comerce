import React from "react";
import "./ProductFilter.css";
import { useId, useContext} from "react";
import { Category } from "../hooks/useProductsList";
import {FiltersContext} from "../context/filters";

function ProductFilter() {
  const minPriceId = useId();
  const categorySelectId = useId();
  const {filters, setFilters} = useContext(FiltersContext);


  function handleCustomRangeChange(e) {
    setFilters((prevState) => ({
      ...prevState,
      priceFrom: e.target.value,
    }));
  }

  function hanfleCustomSelectChange(e) {
    setFilters((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  }

  return (
    <div className="product-filters">
      <div className="price-from">
        <label className="form-label" htmlFor={minPriceId}>
          Price from
        </label>
        <input
          type="range"
          id={minPriceId}
          onChange={handleCustomRangeChange}
          defaultValue={filters.priceFrom}
          min="0"
          max="2000"
          step="100"
        ></input>
        <span>{filters.priceFrom}€</span>
      </div>
      <div className="price-category">
        <select
          aria-label="Category"
          id={categorySelectId}
          onChange={hanfleCustomSelectChange}
        >
          <option defaultValue value={Category.ALL}>
            All
          </option>
          <option value={Category.SMARTPHONES}>Smartphones</option>
          <option value={Category.LAPTOPS}>Laptops</option>
          <option value={Category.FRAGRANCES}>Fragrances</option>
          <option value={Category.SKINCARE}>Skincare</option>
          <option value={Category.GROCERIES}>Groceries</option>
          <option value={Category.HOME_DECORATION}>Home Decoration</option>
        </select>
      </div>
    </div>
  );
}

export default ProductFilter;
