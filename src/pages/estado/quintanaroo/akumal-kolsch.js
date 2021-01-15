import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../../../components/layout"

const Akumal = ({data}) => {

    return (
        <Layout>
            <div
                style={{
                    padding: "120px",
                    backgroundImage: `url(${data.fondo.childImageSharp.fluid.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div id="carouselExampleIndicators" className="carousel slide col-12 col-md-3" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <Img fluid={data.bottle.childImageSharp.fluid} />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                        <div className="col-12 col-md-9">
                            <h1 style={{fontSize: "5rem"}} className="main-title text-center">KÖLSCH</h1>
                            <p className="pt-sans-bold" style={{textAlign: "justify"}}>
                                Cerveza de origen alemán tipo ale; maltas pilsner, vienna, trigo malteado y lúpulos nobles alemanes como magnum y hallertauer tradition.
                                Sabores frutales bajos y amargo bajo medio el cual le otorga un balance perfecto.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout> 
    )

}

export const query = graphql`
    query {
        fondo: file(relativePath: {eq: "fondo-marca.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 100){
                ...GatsbyImageSharpFluid
              }
            }
        }
        bottle: file(relativePath: {eq: "bottle.png"}) {
            childImageSharp {
              fluid(maxWidth: 290, quality: 100){
                ...GatsbyImageSharpFluid
              }
            }
        }
    }
`

export default Akumal