import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

// interface dataProp {
//   data: [];
// };

const Movie = () => {
  const API = process.env.REACT_APP_API;
  const [data, setData] = useState<any[]>();
  const [movie, setMovie] = useState<any>();
  const movie_id = useParams().id;
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API}`)
      .then((res) => {
        setData(res.data.results);
      });
  }, []);
  const filterdData =
    data &&
    data.filter((el: any) => {
      return el.id === Number(movie_id);
    });
  useEffect(() => {
    if (filterdData) {
      setMovie(filterdData);
    }
  }, []);
  console.log(movie);
  return (
    <div>
      <img
      // src={`https://image.tmdb.org/t/p/w500${filterdData.backdrop_path}`}
      ></img>
    </div>
  );
};

export default Movie;
