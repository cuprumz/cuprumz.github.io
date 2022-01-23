import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Header from './header';
import SideBar from './sidebar';
import Footer from './footer';

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
    <div>
      <div className="
        container mx-auto px-4
        grid lg:grid-cols-4 gap-4
        min-h-screen
        focus:outline-none focus:ring 
        ">
        <div className="lg:col-span-3">
          <Header pageTitle={pageTitle} />
          <main>
            {children}
          </main>
        </div>
        <div className="hidden lg:block h-full">
          <SideBar />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;