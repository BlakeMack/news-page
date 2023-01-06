import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MainNews from './components/MainNews'
import NewArticles from './components/NewArticles'
import TopPosts from './components/TopPosts'

function App() {

  return (
    <>
      <Navbar />
      <div className='news-articles-container'>
        <MainNews />
        <NewArticles />
      </div>
      <TopPosts />
      <TopPosts />
      <TopPosts />
    </>
  )
}

export default App
