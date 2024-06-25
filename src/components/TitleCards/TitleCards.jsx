import "./TitleCards.css";
// import cards_data from "../../assets/cards/Cards_data";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const cardsRef = useRef();
  const [apiData, setApiData] = useState([]);
  const handleWheel = (e) => {
    e.preventDefault();

    cardsRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjkwMTM4YzFhMzJkZGYxNTkzY2FlNTQ5MGUwNTc2ZSIsIm5iZiI6MTcxOTI0MjgwMy4zNzk3NSwic3ViIjoiNjY3OThlOWY3OWU1NjRlODc4YzI2N2EzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.dKRt-5t-_xb6DmH7XgO-ZbJObadYhjyRQk0tcBCEzN0",
      },
    };
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));
    cardsRef.current.addEventListener("wheel", handleWheel);
  }, [category]);

  // console.log(apiData);
  return (
    <div>
      <h2 className="titlecards">{title ? title : "Popular on Netflix"}</h2>
      <div className="cards-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          // console.log(card);
          return (
            <Link
              to={`/player/${card.id}`}
              className="card"
              key={`${card.original_title}-${index}`}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`}
                alt={card.original_title}
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
