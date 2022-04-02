import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { layout, color, flexbox, space } from "styled-system";
import css from "@styled-system/css";
import { useForm } from "react-hook-form";
import axios from "axios";

interface Color {
  backgroundColor?: string;
  width?: string;
  height?: string;
}

interface Layout extends Space {
  display?: string;
  flexDirection?: string;
  flex?: string;
  flexWrap?: string;
  alignItems?: string;
  alignContent?: string;
  justifyContent?: string;
  flexGrow?: string;
}

interface Space {
  mt?: string;
  ml?: string;
  m?: string;
  p?: string;
  pt?: string;
}
interface handleProp {
  handleGetData: any;
}

const Movies = ({ handleGetData }: handleProp) => {
  const navigate = useNavigate();
  const [data, setData] = useState<any[]>();
  const [movie, setMovie] = useState(0 as any);
  const API = process.env.REACT_APP_API;
  const toMovie = (id: number) => {
    setMovie(id);
  };
  useEffect(() => {
    handleGetData(data);
  });
  useEffect(() => {
    if (movie) {
      navigate(`/movie/${movie}`);
    }
  });
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API}`)
      .then((res) => {
        setData(res.data.results);
      });
  }, []);
  return (
    <StyledTest width="100vw" height="100vh">
      <ImgContainer display="flex" flexWrap="wrap" m="5rem 10rem 0 10rem">
        {data &&
          data.map((el: any, idx: number) => {
            return (
              <Img
                width="10rem"
                m="1.5rem 0 0 1rem"
                key={idx}
                src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                onClick={() => toMovie(el.id)}
              ></Img>
            );
          })}
      </ImgContainer>
    </StyledTest>
  );
};

const StyledTest = styled.div<Color>`
  ${layout}
  ${color}
`;
const ImgContainer = styled.div<Layout>`
  ${color}
  ${layout}
  ${flexbox}
  ${space}
`;

const Img = styled.img<Space>`
  ${layout}
  ${space}
  ${css({
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
      transform: "scale(1.15) translateY(-10px)",
    },
  })}
`;

export default Movies;
