import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../Context/Search";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const AeroProducts = () => {
  const [productData, setProductData] = useState([]);
  const [category, setCategory] = useState(null);
  const [order, setOrder] = useState(null);
  const [page,setPage] =useState(1)
  const [totalPages, setTotalPages] = useState(1);
  const { search } = useContext(SearchContext) || { search: "" };

  const getProductsData = () => {
    axios
      .get("http://localhost:3000/products", {
        params: {
          _page:page,
          _limit:10,
          category: category,
          _sort: "price",
          _order: order,
          q: search,
        },
      })
      .then((res) => {
        setProductData(res.data)
      const totalItems = parseInt(res.headers["x-total-count"], 10);
      setTotalPages(Math.ceil(totalItems / 10));
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getProductsData();
  }, [page,category, order, search]);
  return (
    <div>
      <div className="d-flex justify-content-between w-75 m-auto">
        <div className="ShowCategory">
          <select
            name=""
            id=""
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 border-rounded rounded-2"
          >
            <option value="">Show Filters</option>
            <option value="Women">Women</option>
            <option value="Men">Men</option>
            <option value="UNISEX">Unisex</option>
          </select>
        </div>
        <div className="SortBy">
          <select
            name=""
            id=""
            onChange={(e) => setOrder(e.target.value)}
            className="p-2 border-rounded rounded-2"
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
            <Link to={`/description/${item.id}`}>
              <img
                src={item.colors[0].image}
                alt={item.title}
                style={{ width: "100%" }}
              />
            </Link>

            <h5>{item.title}</h5>
            <h5> ${item.price}</h5>
          </div>
        ))}
      </div>

     <div className="d-flex w-25 justify-content-between m-auto align-items-center">
     <button type="button" class="button" onClick={()=>setPage(page - 1)}   disabled={page === 1}>
  <span class="button__text">Prev</span>
  <span class="button__icon"><FaArrowLeftLong /></span>
</button>
      <span className="fs-5">{page}</span>
      <button type="button" class="button"  onClick={()=>setPage(page + 1)}   disabled={page === totalPages}>
  <span class="button__text">Next</span>
  <span class="button__icon"><FaArrowRightLong /></span>
</button>
    </div>
     </div>
  );
};

export default AeroProducts;
