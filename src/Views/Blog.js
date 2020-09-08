import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import moment from "moment"
import 'moment/locale/pl'
import { blog } from "../api"
import photo from "../assets/images/photo.jpg"

const Blog = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    setPosts(blog)
  }, [])

  return(
    <>
      {/* <img className="bg-img" src={photo} alt="bg" /> */}
      <div className="container section">
        <h2 className="headline headline--center">Blog</h2>
        <section className="blog">
          {posts.map((item) => (
            <NavLink to={`/blog/${item.id}`} className="blog__box" key={item.id}>
              <div className="blog__cover">
                <img src={photo} alt={item.title} />
              </div>
              <div className="blog__content">
                <h2 className="headline blog__title">
                  {item.title}
                </h2>
                <span className="blog__date">
                  {moment(item.date).format('LL')}
                </span>
                <p className="text blog__desc">
                  {item.prev}
                </p>
              </div>
            </NavLink>
          ))}
        </section>
      </div>
    </>
  )
}

export default Blog
