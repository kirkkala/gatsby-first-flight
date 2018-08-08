import React from "react";
import Link from "gatsby-link";
import Container from "../components/container";

export default () => (
  <Container>
    <h1>Page 2</h1>
    <p>Hello world from my second Gatsby page</p>
    <p>See the amazing <Link to="/counter/">counter</Link></p>
    <p><Link to="/">back home</Link></p>
  </Container>
);