import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [cards, setCards] = useState([]);

  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await a.json();
    setCards(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container mx-auto grid grid-cols-4 gap-14">
        {cards.map((card) => {
          return (
            <>
              <div
                key={card.id}
                className="card max-w-[500px] border border-purple-950 "
              >
                <img
                  src={"https://wallpapercave.com/wp/wp9109485.jpg"}
                  width={280}
                  height={250}
                  alt={"Coding Image"}
                />
                <h1>
                  <b>Title: </b>
                  {card.title}
                </h1>
                <p>
                  <b>Body: </b>
                  {card.body}
                </p>
                <p>
                  <b>userId: </b>
                  {card.userId}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;
