import { useState, useEffect } from 'react'
import './App.css'

const URL_API = 'https://kingdomsofereloth.com/wp-json/wp/v2/posts'

export default function App () {
  const [posts, setPosts] = useState([])

  useEffect(getPosts, [])

  function getPosts () {
    fetch(URL_API)
      .then(response => response.json())
      .then(data => {
        setPosts(data)
      })
  }

  const RenderPost = ({ post }) => (
    <article key={post.id}>
      <img src={post.yoast_head_json.og_image[0].url} alt='Post Image' />
      <h2>{post.title.rendered}</h2>
      <p>{post.yoast_head_json.og_description.split(' ', 20).join(' ') + '...'}</p>
    </article>
  )

  return (
    <main>
      <h1>Hola</h1>
      {posts.map((post) => (
        <RenderPost post={post} key={post.id} />
      ))}
    </main>
  )
}
