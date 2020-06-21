import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

export default function Layout({ children }) {
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          Pandas Eating Lots
        </h3>
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
          text-decoration:none;
        `}
      >
        About
      </Link>
      <Link
        to={`/contact/`}
        css={css`
          float: right;
          margin-right:8px;
          text-decoration:none;
        `}
      >
        Contact
      </Link>
      <Link
        to={`/shop/`}
        css={css`
          float: right;
          margin-right:8px;
          text-decoration:none;
        `}
      >
        Shop
      </Link>
      {children}
    </div>
  )
}
