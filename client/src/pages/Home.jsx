import React from "react";
import ProductsList from "../components/ProductsList";
import Filter from "../components/Filter";


const filters = {
  category : '',
  origin : '',
  character : '',
  minPrice : 0,
  maxPrice : 1000
}


const Home = ({products, loadProducts,isManagerOnline,password}) =>  {
  
  const filterProducts = (charFilter, originFilter, categoryFilter, priceMinFilter, priceMaxFilter) => {
    filters.character = charFilter;
    filters.origin = originFilter;
    filters.category = categoryFilter;
    filters.minPrice = priceMinFilter;
    filters.maxPrice = priceMaxFilter;
    loadProducts(filters)
  }


  return (
    <div><div className="container d-lg-flex gap-lg-3 gap-lg-3 main-fix">
      <Filter products={products} key={products.id}  filterProducts={filterProducts} password={password} isManagerOnline={isManagerOnline} />
      <ProductsList products={products} key={products.id} />
    </div>
    </div>
  );
  }
export default Home
