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
      <MainNews />
      <NewArticles />
      <TopPosts />
      <TopPosts />
      <TopPosts />
    </>
  )
}

export default App
