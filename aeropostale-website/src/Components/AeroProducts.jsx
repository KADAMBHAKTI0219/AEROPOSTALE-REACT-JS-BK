import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../Context/Search";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { WishListContext } from "../Context/WishListContext";
import { CartContext } from "../Context/CartContext";
import { BiCart } from "react-icons/bi";

const AeroProducts = () => {
  const [productData, setProductData] = useState([]);
  const [category, setCategory] = useState(null);
  const [order, setOrder] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { AddWishListProduct } = useContext(WishListContext);
  const { addItemToCart } = useContext(CartContext);
  const { search } = useContext(SearchContext) || { search: "" };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productRes, sellerProductRes] = await Promise.all([
          axios.get("http://localhost:5000/products", {
            params: {
              category: category,
              _sort: "price",
              _order: order,
              q: search,
            },
          }),
          axios.get("http://localhost:5000/sellerProducts"),
        ]);

        const combinedData = [...productRes.data, ...sellerProductRes.data];
        
        // Total combined data count
        const totalItems = combinedData.length;

        // Calculate total pages based on combined data
        setTotalPages(Math.ceil(totalItems / 8));

        // Slice the combined data to get the items for the current page
        const startIndex = (page - 1) * 8;
        const paginatedData = combinedData.slice(startIndex, startIndex + 8);
        
        setProductData(paginatedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [page, category, order, search]);

  return (
    <div>
      <div className="d-flex justify-content-between flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row w-75 m-auto align-items-center topHeader">
        <div className="ShowCategory">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="border-rounded rounded-3 mb-2"
          >
            <option value="">Show Filters</option>
            <option value="Women">Women</option>
            <option value="Men">Men</option>
            <option value="UNISEX">Unisex</option>
          </select>
        </div>
        <div className="SortBy">
          <select
            onChange={(e) => setOrder(e.target.value)}
            className="border-rounded rounded-3 mb-2"
          >
            <option value="">Sort By</option>
            <option value="asc">Price Low To High</option>
            <option value="desc">Price High To Low</option>
          </select>
        </div>
      </div>
      <div className="productsContentMain">
        {productData.map((item) => (
          <div key={item.id} className="productsContent text-center">
            <div className="productsImagesEach">
              <Link to={`/description/${item.id}`}>
                <img
                  src={item.colors[0].image}
                  alt={item.title}
                  style={{ width: "100%" }}
                  className="productsImage"
                />
              </Link>
              <div className="WishListCartMainDiv">
                <button onClick={() => AddWishListProduct(item)} className="WishListBtn">
                  <span><FaHeart/></span>
                </button> 
                <button onClick={() => addItemToCart(item)} className="CartBtn">
                  <span><BiCart /></span>
                </button>
              </div>
            </div>
            <h5>{item.title}</h5>
            <h5>${item.price}</h5>
          </div>
        ))}
      </div>
      <div className="d-flex w-50 justify-content-between m-auto align-items-center">
        <button
          type="button"
          className="button"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          <span className="button__text1">Prev</span>
          <span className="button__icon1"><FaArrowLeftLong /></span>
        </button>
        <span className="fs-5">{page}</span>
        <button
          type="button"
          className="button"
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          <span className="button__text">Next</span>
          <span className="button__icon"><FaArrowRightLong /></span>
        </button>
      </div>
    </div>
  );
};

export default AeroProducts;
