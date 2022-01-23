import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

export default ({ pageTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  return (
    <div>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <header className="text-4xl font-semibold text-center my-6
      ">
        <Link to="/">{data.site.siteMetadata.title}</Link>
      </header>
      <hr />
    </div>
  );
};
