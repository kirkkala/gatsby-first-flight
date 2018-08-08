import React from "react";
import Link from "gatsby-link";
import Container from "../components/container";

export default () => (
  <Container>
    <h1>Foobar Gatsby!</h1>
    <p>Nothing really to see here</p>
    <p><Link to="/page-2">The second page</Link><br />
      <Link to="/counter">The counter</Link></p>
    <p><Link to="/">back home</Link></p>
  </Container>
);