import React from "react"
import Product from "./Product"
import Title from "../Global/title"
import { StaticQuery, graphql } from "gatsby"

const getProducts = graphql`
  {
    products: allContentfulCoffeeproduct {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight: 426) {
              src
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default function Products() {
  return (
    <StaticQuery
      query={getProducts}
      render={data => {
        console.log(data.products.edges)
        return (
          <section className="py-5">
            <div className="container">
              <Title title="our products" />
              <div className="row">
                {data.products.edges.map(({ node: product }) => {
                  return <Product key={product.id} product={product} />
                })}
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}
