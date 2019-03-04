import React from 'react'
import Article from '../Article'
import './style.css'

export default function ArticleList({ articles }) {
  const articleElements = articles.map(a => 
    <li key = {a.id} className="article-list__li" style={{ marginBottom: '10px' }}>
      <Article article={a} />
    </li>
  )
  return (
    <ul>
      {articleElements}
      {/* <li><Article article={articles[0]} /></li>
      <li><Article article={articles[1]} /></li>
      <li><Article article={articles[2]} /></li> */}
    </ul>
  )
}