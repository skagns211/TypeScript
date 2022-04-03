import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import styled from "styled-components";
import { color, layout, space, flexbox } from "styled-system";

interface Space {
  m?: string;
  mt?: string;
  p?: string;
}

interface Layout extends Space {
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  width?: string;
  alignItems?: string;
  alignContent?: string;
}

const Movie = () => {
  const API = process.env.REACT_APP_API;
  const [data, setData] = useState<any[]>();
  const movie_id = useParams().id;
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API}`)
      .then((res) => {
        setData(res.data.results);
      });
  }, []);
  const filterdData: any =
    data &&
    data.filter((el: any) => {
      return el.id === Number(movie_id);
    });
  console.log(filterdData && filterdData[0]);
  return (
    <StyledMovie
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt="5rem"
    >
      <Img
        src={`https://image.tmdb.org/t/p/w500${
          filterdData && filterdData[0].backdrop_path
        }`}
      ></Img>
      <Title color="white">{filterdData && filterdData[0].title}</Title>
      <Overview color="white" m="0 30rem 0 30rem">
        {filterdData && filterdData[0].overview}
      </Overview>
    </StyledMovie>
  );
};

const StyledMovie = styled.div<Layout>`
  ${layout}
  ${space}
  ${flexbox}
`;

const Img = styled.img<Layout>`
  ${layout}
`;

const Title = styled.h1`
  ${color}
`;

const Overview = styled.div<Space>`
  ${color}
  ${space}
`;

export default Movie;
