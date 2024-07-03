import { Layout } from "antd";
import React from "react";
import useCategory from "../hooks/useCategory";
import { Link } from "react-router-dom";
import "../styles/Categories.css"
const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div className="container">
        <Link to="/" className="navbar-brand">
          <h1 className="homw" style={{textAlign:"center"}}>🛒 HomePage</h1>
        </Link>
        <div className="row" style={{ marginTop: "10px" }}>
          {categories.map((c) => (
            <div className="col-md-3 mt-1" key={c._id}>
              <Link to={`/category/${c.slug}`} className="btn btn-primary custom-button">
                {c.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
