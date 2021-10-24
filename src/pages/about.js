import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image';

const AboutPage = () => {
    return (
        <Layout pageTitle="About">
            <p>Hi there! I'm the proud creator of this site, which I build with Gastby.</p>
            <StaticImage
                alt="logo"
                src="../images/icon.png"
            />
        </Layout>
    );
}

export default AboutPage;