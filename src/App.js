import React, { useState } from "react";

import MovieList from "./components/MovieList";
import Navbars from "./components/Navbars";

function App() {
  const [name, setName] = useState("");
  const [hover, setHover] = useState(null);
  const [rating, setRating] = useState(null);

  return (
    <div className="App">
      <Navbars
        setName={setName}
        setHover={setHover}
        setRating={setRating}
        hover={hover}
        rating={rating}
      />
      <MovieList setName={name} setRating={rating} />
    </div>
  );
}

export default App;
