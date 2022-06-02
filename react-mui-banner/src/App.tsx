import styled from "@emotion/styled";
import React from "react";

const Heading = styled.h1(() => {
  return {
    fontSize: 40,
    color: "#393E46",
  };
});

const Banner = styled.div(() => {
  return {
    backgroundColor: "#FFD369",
    padding: "20px 10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  };
});

const Button = styled.button({
    border: "none",
    outline: 0,
    padding: 12,
    color: "#FFD369",
    backgroundColor: "#393E46",
    textAlign: "center",
    cursor: "pointer",
    width: "auto",
    fontSize: 18,
    ":hover": {
      opacity: 0.7,
    },
  });

function App({}) {
  return (
    <Banner>
      <Heading>Banner heading</Heading>
      <Button>Shop now</Button>
    </Banner>
  );
}

export default App;
