import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import styled from "styled-components";
import css from "@styled-system/css";
import { color, layout, space, flexbox, border, position } from "styled-system";

interface Color {
  bg?: string;
}

interface Position extends Layout {
  position?: string;
  top?: string;
  zindex?: number;
  ratio?: number;
}

interface Space extends Color {
  m?: string;
  mt?: string;
  p?: string;
  pt?: string;
  border?: string;
}

interface Layout extends Space {
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  width?: string;
  alignItems?: string;
  alignContent?: string;
  overflow?: string;
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
  const ratio = filterdData && 240 * ((filterdData[0].vote_average * 10) / 100);
  console.log(ratio);

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
      <Div overflow="hiddne" position="relative">
        <StarImg
          ratio={ratio}
          position="absolute"
          src="/img/star.png"
          width="15rem"
          height="50"
        />
        <Div top="0">
          <EmptyImg src="/img/empty.png" width="15rem" height="50" />
        </Div>
      </Div>
      <Title color="white">{filterdData && filterdData[0].title}</Title>
      <Overview
        color="white"
        m="0 30rem 0 30rem"
        p="1rem 3rem 1rem 3rem"
        border="1px solid white"
        bg="black"
      >
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

const Div = styled.div<Position>`
  ${position}
  ${layout}
`;

const Img = styled.img<Layout>`
  ${layout}
`;
const a = 179;
const StarImg = styled.img<Position>`
  ${position}
  ${layout}
  ${css({
    clip: `rect(0 ${({ ratio }: any) => ratio}px 50px 0)`,
  })}
`;

const EmptyImg = styled.img<Position>`
  ${layout}
  ${position}
`;

const Title = styled.h1`
  ${color}
`;

const Overview = styled.div<Space>`
  ${color}
  ${space}
  ${border}
  ${css({
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
      transform: "scale(2.5) translateY(-1px)",
    },
  })}
`;

export default Movie;
