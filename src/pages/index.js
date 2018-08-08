import React from "react";
import Link from "gatsby-link";

export default () => <div style={{ color: '#333', background: 'pink' }}>
  <h1>Well hello Gatsby!</h1>
  <h2>What a Wunderful world.</h2>
  <ul>
    <li><Link to="/page-2">Page 2</Link></li>
    <li><Link to="/foobar">Foobar</Link></li>
    <li><Link to="/counter/">Counter</Link></li>
  </ul>
  <div>
    Random image from <a href="https://source.unsplash.com" target="_blank">Unsplash</a><br />
    <img src="https://source.unsplash.com/random/600x300" alt="Random image" />
  </div>
</div>

