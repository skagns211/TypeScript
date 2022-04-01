import React, {useState, useEffect} from "react"
import styled from "styled-components"
import { layout, color, flexbox, space } from "styled-system"
import { useForm } from "react-hook-form"
import axios from "axios";

interface Color {
  backgroundColor?: string
  width?: string
  height?: string
}

interface Layout extends Space {
  display?: string
  flexDirection?: string
  flex?: string
  flexWrap?: string
  alignItems?: string
  alignContent?: string
  justifyContent?: string
  flexGrow?: string
}

interface Space {
  mt?: string
  ml?: string
  m?: string
  p?: string
  pt?: string
}

const Movies = () => {
  const [data, setData] = useState<any[]>();
    const API = process.env.REACT_APP_API;
    useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API}`)
      .then((res) => {
        console.log(res.data.results)
        setData(res.data.results)
      })
    }, [])
    console.log(data)
    return (
      <StyledTest width="100vw" height="100vh" backgroundColor="black">
        <ImgContainer display="flex" flexWrap="wrap" flex="1 1 50%" flexGrow="1" pt="10%">
        {data && data.map((el: any, idx: number) => {
          return <Img width="10rem" m="1.5rem 1rem 0 1rem" key={idx} src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}></Img>
        })}
        </ImgContainer>
      </StyledTest>
    )
}

const StyledTest = styled.div<Color>`
    ${layout}
    ${color}
`
const ImgContainer = styled.div<Layout>`
  ${color}
  ${layout}
  ${flexbox}
  ${space}
`

const Img = styled.img<Space>`
  ${layout}
  ${space}
`

export default Movies;