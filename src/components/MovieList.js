import React, { useState } from "react";
import { Form, ListGroup } from "react-bootstrap";
import MovieCard from "./MovieCard";

const MovieList = ({ setName, setRating }) => {
  const [list, setList] = useState([
    {
      name: "Dilwale Dulhania Le Jayenge",
      description:
        "You can't talk about Bollywood without mentioning Dilwale Dulhania Le Jayenge.",
      link: "http://",
      image: "index.js",
    },
    {
      name: "Pyaasa (1957)",
      description:
        "This 1957 musical romance is a classic. The story follows Vijay, an unsuccessful",
      link: "http://",
      image: "index.js",
    },
    {
      name: "Love Aaj Kal (2020)",
      description:
        "It's appropriate that this romantic movie was released on Valentine's Day. The",
      link: "http://",
      image: "index.js",
    },
    {
      name: " Mrs. Serial Killer (2020)",
      description:
        "If you like your crime dramas dark and twisty, then Mrs. Serial Killer is for you. The premise: A a man is arrested (and possibly framed) for a series of brutal murders.",
      link: "http://",
      image: "index.js",
    },
    {
      name: "Dilwale Dulhania Le Jayenge",
      description:
        "You can't talk about Bollywood without mentioning Dilwale Dulhania Le Jayenge.",
      link: "http://",
      image: "index.js",
    },
    {
      name: "Pyaasa (1957)",
      description:
        "This 1957 musical romance is a classic. The story follows Vijay, an unsuccessful",
      link: "http://",
      image: "index.js",
    },
    {
      name: "Love Aaj Kal (2020)",
      description:
        "It's appropriate that this romantic movie was released on Valentine's Day. The",
      link: "http://",
      image: "index.js",
    },
    {
      name: " Mrs. Serial Killer (2020)",
      description:
        "If you like your crime dramas dark and twisty, then Mrs. Serial Killer is for you. The premise: A a man is arrested (and possibly framed) for a series of brutal murders.",
      link: "http://",
      image: "index.js",
    },
    {
      name: "Love Aaj Kal (2020)",
      description:
        "It's appropriate that this romantic movie was released on Valentine's Day. The",
      link: "http://",
      image: "index.js",
    },
    {
      name: " Mrs. Serial Killer (2020)",
      description:
        "If you like your crime dramas dark and twisty, then Mrs. Serial Killer is for you. The premise: A a man is arrested (and possibly framed) for a series of brutal murders.",
      link: "http://",
      image: "index.js",
    },
    {
      name: "Dilwale Dulhania Le Jayenge",
      description:
        "You can't talk about Bollywood without mentioning Dilwale Dulhania Le Jayenge.",
      link: "http://",
      image: "index.js",
    },
    {
      name: "Pyaasa (1957)",
      description:
        "This 1957 musical romance is a classic. The story follows Vijay, an unsuccessful",
      link: "http://",
      image: "index.js",
    },
    {
      name: "Love Aaj Kal (2020)",
      description:
        "It's appropriate that this romantic movie was released on Valentine's Day. The",
      link: "http://",
      image: "index.js",
    },
    {
      name: " Mrs. Serial Killer (2020)",
      description:
        "If you like your crime dramas dark and twisty, then Mrs. Serial Killer is for you. The premise: A a man is arrested (and possibly framed) for a series of brutal murders.",
      link: "http://",
      image: "index.js",
    },
    {
      name: "Dilwale Dulhania Le Jayenge",
      description:
        "You can't talk about Bollywood without mentioning Dilwale Dulhania Le Jayenge.",
      link: "http://",
      image: "index.js",
    },
    {
      name: "Pyaasa (1957)",
      description:
        "This 1957 musical romance is a classic. The story follows Vijay, an unsuccessful",
      link: "http://",
      image: "index.js",
    },
    {
      name: "Love Aaj Kal (2020)",
      description:
        "It's appropriate that this romantic movie was released on Valentine's Day. The",
      link: "http://",
      image: "index.js",
    },
    {
      name: " Mrs. Serial Killer (2020)",
      description:
        "If you like your crime dramas dark and twisty, then Mrs. Serial Killer is for you. The premise: A a man is arrested (and possibly framed) for a series of brutal murders.",
      link: "http://",
      image: "index.js",
    },
    {
      name: "Love Aaj Kal (2020)",
      description:
        "It's appropriate that this romantic movie was released on Valentine's Day. The",
      link: "http://",
      image: "index.js",
    },
    {
      name: " Mrs. Serial Killer (2020)",
      description:
        "If you like your crime dramas dark and twisty, then Mrs. Serial Killer is for you. The premise: A a man is arrested (and possibly framed) for a series of brutal murders.",
      link: "http://",
      image: "index.js",
    },
  ]);
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [file, setFile] = useState("");
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
    setFile(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmission = (event) => {
  
    setList ([...list, {name: selectedFile.name , description: selectedFile.description ,imag: file }])
    
  };


  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return (
    <div
      style={{
        display: "inline-flex",
        flexWrap: "wrap",
        gap: "50px",
        margin: "80px 100px",
      }}
    >
      {list.forEach((movie, i) => (movie.rating = randomIntFromInterval(1, 5)))}
      {list.forEach((movie, i) => (i<=19 ? movie.image = `../img/m${i}.jpg` :movie.image = file   ))}

      {setRating > 0
        ? list
            .filter((movie) => movie.rating === setRating)
            .map((movie) => <MovieCard movie={movie} />)
        : setName === "" && setRating === 0
        ? list.map((movie) => <MovieCard movie={movie} useImage = {file}/>)
        : list.map(
            (movie) =>
              movie.name.toUpperCase().includes(setName.toUpperCase()) && (
                <MovieCard movie={movie} />
              )
          )}
            
           
      
      <img src={file} />
      <input type="file" name="file" onChange={changeHandler} />
      {isFilePicked ? (
        <div>
          <p>Filename: {selectedFile.description}</p>
          <p>Filename: {selectedFile.name}</p>
          <p>Filetype: {selectedFile.type}</p>
          <p>Size in bytes: {selectedFile.size}</p>
          <p>
            lastModifiedDate:{" "}
            {selectedFile.lastModifiedDate.toLocaleDateString()}
          </p>
        </div>
      ) : (
        <p>Select a file to show details</p>
      )}
      <div>
        <button onClick={() => handleSubmission()} >Submit </button>
      </div>

      
    </div>
  );
};

export default MovieList;
