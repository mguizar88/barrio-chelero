import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ClubChelero = ({data}) => (
  <Layout>
    <SEO title="Club Chelero" />
    <h1 className="main-title text-center theme-blue pt-5 mb-0">Club Chelero</h1>
    <p className="advantages theme-blue text-center mt-0 mb-5">
        SUBSCRIPCIÓN MENSUAL
    </p>
    <div className="container">
        <div className="row">
            <div className="col-12 col-md-6">
                <Img fluid={data.clubChelero.childImageSharp.fluid} />
            </div>
            <div className="col-12 col-md-6">
                <p className="pt-sans-bold theme-blue pt-4 text-justify">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parDuis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,.
                </p>
            </div>
        </div>
        <h2 className="main-title text-center theme-blue mt-5 mb-5">¿Como Funciona?</h2>
        <div className="row">
            <div className="col-12 col-md-4 text-center">
                <img className="club-icons" src={data.pricing.childImageSharp.fluid.src} />
                <p className="advantages gold-titles">Suscríbete</p> 
                <p className="advantages">
                    Elige la opción que prefieras 12 o 24 cervezas cada mes
                </p>
            </div>
            <div className="col-12 col-md-4 text-center">
                <img className="club-icons" src={data.van.childImageSharp.fluid.src} />
                <p className="advantages gold-titles">Recibe</p>
                <p className="advantages">
                    Barrio Chelero te enviará a la comodidad de tu hogar un pack diferente.
                </p>
            </div>
            <div className="col-12 col-md-4 text-center">
                <img className="club-icons" src={data.bottle.childImageSharp.fluid.src} />
                <p className="advantages gold-titles">Disfruta</p>
                <p className="advantages">
                    Descubre las cervezas que llegarán en tu pack.
                </p>
            </div>
        </div>
        <h2 className="main-title text-center theme-blue mt-5 mb-5">Suscríbete al club</h2>
        <Img style={{maxWidth: '400px', margin: '0 auto'}} className="mt-5 mb-5" fluid={data.logotipo.childImageSharp.fluid} />
        <div className="row justify-content-center">
            <div className="col-12 col-md-4">
                <Img fluid={data.club12.childImageSharp.fluid} />
                <button className="mt-3 club-subscribe-btn advantages theme-blue">SUSCRIBIR</button>
            </div>
            <div className="col-12 col-md-4">
                <Img fluid={data.club24.childImageSharp.fluid} />
                <button className="mt-3 club-subscribe-btn advantages theme-blue">SUSCRIBIR</button>
            </div>
        </div>
    </div>
  </Layout>
)

export const query = graphql`
    query{
        clubChelero: file(relativePath: {eq: "club-chelero.png"}) {
            childImageSharp {
                fluid(maxWidth: 680, quality: 100){
                ...GatsbyImageSharpFluid
                }
            }
        }
        pricing: file(relativePath: {eq: "pricing.png"}) {
            childImageSharp {
                fluid(maxWidth: 192, quality: 100){
                ...GatsbyImageSharpFluid
                }
            }
        }
        van: file(relativePath: {eq: "camion.png"}) {
            childImageSharp {
                fluid(maxWidth: 224, quality: 100){
                ...GatsbyImageSharpFluid
                }
            }
        }
        bottle: file(relativePath: {eq: "botella-de-cerveza.png"}) {
            childImageSharp {
                fluid(maxWidth: 172, quality: 100){
                ...GatsbyImageSharpFluid
                }
            }
        }
        logotipo: file(relativePath: {eq: "logotipo.png"}) {
            childImageSharp {
                fluid(maxWidth: 446, quality: 100){
                ...GatsbyImageSharpFluid
                }
            }
        }
        club12: file(relativePath: {eq: "club-12.png"}) {
            childImageSharp {
                fluid(maxWidth: 572, quality: 100){
                ...GatsbyImageSharpFluid
                }
            }
        }
        club24: file(relativePath: {eq: "club-24.png"}) {
            childImageSharp {
                fluid(maxWidth: 572, quality: 100){
                ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default ClubChelero
