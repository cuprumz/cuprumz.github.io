import * as React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import * as layout from './layout.module.css'

const Layout = ({pageTitle, children}) => {
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
            <header className="text-4xl">{data.site.siteMetadata.title}</header>
            <nav>
                <ul className={layout.navLinks}>
                    <li className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        <Link to="/" className="text-xl">Home</Link>
                    </li>
                    <li className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        <Link to="/blog" className="text-xl">Blog</Link>
                    </li>
                    <li className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        <Link to="/about" className="text-xl">About</Link>
                    </li>
                </ul>
            </nav>
            <main>
                { children }
            </main>
        </div>
    );
}

export default Layout;