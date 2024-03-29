import React from "react"
import { Link } from "gatsby"
import Title from "../Global/title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              nemo quidem vel deleniti nam sequi eveniet eaque laudantium odio
              facilis voluptatem, id asperiores fugiat sit accusantium,
              inventore, saepe assumenda perspiciatis. Recusandae, eos tenetur!
              Accusamus quo sed assumenda numquam et minus ullam incidunt ea,
              necessitatibus iste expedita neque suscipit illo rerum!
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
