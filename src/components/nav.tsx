import React from 'react';
import NextLink from 'next/link';

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT', id: 1 },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub', id: 2 },
];

const Nav = (): React.ReactElement => (
  <nav>
    <ul>
      <li>
        <NextLink href="/">
          <a>Home</a>
        </NextLink>
      </li>
      {links.map(({ id, href, label }) => (
        <li key={id}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>

    <style jsx>
      {`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
        }
        nav {
          text-align: center;
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
        nav > ul {
          padding: 4px 16px;
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
        a {
          color: #067df7;
          text-decoration: none;
          font-size: 13px;
        }
      `}
    </style>
  </nav>
);

export default Nav;
