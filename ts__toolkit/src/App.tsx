import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Movies from "./component/Movies";
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`

export default App;