import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
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
    `)
    return (
        <div className="container mx-auto px-4">
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <header className="text-4xl">
                <Link to="/">{data.site.siteMetadata.title}</Link>
            </header>
            <nav>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                    <Link to="/" className="font-medium text-gray-500 hover:text-gray-900">Home</Link>
                    <Link to="/about" className="font-medium text-gray-500 hover:text-gray-900">About</Link>
                </div>
            </nav>
            <main>
                {children}
            </main>
        </div>
    );
}

export default Layout;