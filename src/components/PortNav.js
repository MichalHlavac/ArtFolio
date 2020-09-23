import React, { useContext } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import { LangContext } from "../LangContext";

const Nav = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Box = styled.div`
  @media only screen and (max-width: 830px) {
    width: 100%;
    height: auto;
  }
  @media only screen and (min-width: 830px) and (max-width: 1100px) {
    width: auto;
    height: 280px;
  }
  position: relative;
  box-sizing: border-box;
  width: auto;
  height: 370px;
  overflow: hidden;
  margin-bottom: 20px;
  text-align: center;
`;

const PortImg = styled.img`
  @media only screen and (max-width: 830px) {
    width: 100%;
    height: auto;
  }
  @media only screen and (min-width: 830px) and (max-width: 1100px) {
    width: auto;
    height: 280px;
  }
  height: 370px;
  max-width: 100%;
  width: auto;
  opacity: 1;
`;

export default function PortNav(props) {
  const [lang, setLang] = useContext(LangContext);

  const Articles = props.articles;
  const items = Articles.map((article, i) => (
    <Box key={i}>
      <Link
        to={`${lang === "en" ? `/${lang}` : ""}/portfolio/${
          lang === "en"
            ? article.image.replace(".", "_").toLowerCase()
            : article.image.replace(".", "_").toLowerCase()
        }`}
      >
        <PortImg
          src={article.image}
          alt={lang === "en" ? article.nameEn : article.name}
        />
      </Link>
    </Box>
  ));
  return <Nav>{items}</Nav>;
}
