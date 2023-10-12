// import Card from "react-bootstrap/Card";
// import { Link } from "react-router-dom";
// import AddToCartButton from "../AddToCartButton/AddToCartButton";
import style from "./ReviewList.module.css";
import ReviewCard from "./ReviewCard/ReviewCard";
import { useSelector } from "react-redux";

const ReviewList = () => {
  const rev = useSelector((state) => state.reviewList);
  return (
    <div className={style.mainContainer}>
      <div name="title">Feedback From Our Customers</div>
      <div>
        <p>estrellas(promedio) _____ 4.8 from 5 stars (por ejemplo)</p>
      </div>
      <div>
        <p>total de reviews</p>
      </div>
      <div>
        <p>aca el CRUD para la review del usuario</p>
      </div>
      <div>
        <p>aca la review del usuario logueado(charlar con belu)</p>
      </div>
      <div className={style.listContainer}>
        <p>listado de reviews(usar ReviewCard)</p>
      </div>
    </div>
  );
};

export default ReviewList;
