import React from "react";
import { Link } from "gatsby";

export default ({ blog }) => {
  return (
    <div className="mr-6 pt-6">
      <span
        className="
      md:hidden
      text-emerald-500
      text-xs
      "
      >
        Posted: {blog.frontmatter.date}
      </span>
      <h2>
        <Link
          className="
        hover:bg-green-300 transform transition
        text-2xl
        "
          to={`/post/${blog.slug}`}
        >
          {blog.frontmatter.title}
        </Link>
      </h2>
      <span
        className="
      hidden md:block
      text-emerald-500
      text-xs
      "
      >
        Posted: {blog.frontmatter.date}
      </span>
      <span>
        {blog.wordCount.words} words, {blog.timeToRead} minutes to read.
      </span>
      <div
        className="
      flex justify-center text-center
      "
      >
        <Link
          className="
          px-6
          py-1
          rounded-lg
          shadow-lg
          bg-brand
          hover:bg-brand-light hover:-translate-y-0.5 transform transition
          focus:outline-none focus:ring 
          active:bg-brand-dark
          inlineblock
          uppercase
          text-sm
          tracking-widest
          "
          to={`/post/${blog.slug}`}
        >
          阅读全文 »
        </Link>
      </div>
    </div>
  );
};
