import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  /*
  // { useNavigate } instead of { useHistory }
  const navigate = useNavigate();

  // Should be used inside in a useEffect() or HTTP request (not plain like this)
  navigate("/anyLocation", { replace: true }); // To redirect, instead of Replacing
  navigate(-1); // go back once
  navigate(1); // go forward once
  */

  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">A Carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">An Online Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
