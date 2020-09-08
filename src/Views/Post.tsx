import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { blog } from "../api"

const Post = () => {
  interface Types {
    postId: number
  }

  const { id } = useParams()
  const [postData, setPostData] = useState(Object)
  const postId = parseInt(id)

  useEffect(() => {
    setPostData(blog.filter((item) => item.id === postId)[0])
  }, [postId])

  return (
    <div className="container">
      <h2 className="title">{postData.id}</h2>
    </div>
  )
}

export default Post
