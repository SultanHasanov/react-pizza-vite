import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PizzaDetails = () => {
  const { id } = useParams();
  const [pizza, setPizza] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get(`https://63642ce67b209ece0f42316d.mockapi.io/pizza/${id}`)
      .then((res) => {
        setPizza(res.data);
        console.log(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <h2>Загрузка...</h2>;
  }

  if (!pizza) {
    return <h2>Пицца не найдена</h2>;
  }

  return (
    <div className="pizza-details">
  <img src={pizza.imageUrl} alt={pizza.title} />
  <div className="pizza-info">
    <h2>{pizza.title}</h2>
    <p><b>Цена:</b> {pizza.price} ₽</p>
    <p><b>Размеры: </b>{pizza.sizes.join(", ")} см</p>
    <p><b>Описание:</b></p>
    <p>{pizza.description}</p>
  </div>
</div>

  );
};

export default PizzaDetails;
