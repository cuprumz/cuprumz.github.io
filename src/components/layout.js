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
        <div className={layout.container}>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <header className={layout.siteTitle}>{data.site.siteMetadata.title}</header>
            <nav>
                <ul className={layout.navLinks}>
                    <li className={layout.navLinkItem}>
                        <Link to="/" className={layout.NavLinkText}>Home</Link>
                    </li>
                    <li className={layout.navLinkItem}>
                        <Link to="/blog" className={layout.NavLinkText}>Blog</Link>
                    </li>
                    <li className={layout.navLinkItem}>
                        <Link to="/about" className={layout.NavLinkText}>About</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={layout.heading}>{pageTitle}</h1>
                { children }
            </main>
        </div>
    );
}

export default Layout;