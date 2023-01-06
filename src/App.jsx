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
      <div className='all-top-posts-container'>
        <TopPosts number={"01"} title={"Reviving Retro PCs"} paragraph={"what happens when old PCs are given modern upgrades?"} image={"image-retro-pcs"}/>
        <TopPosts number={"02"} title={"Top 10 Laptops of 2022"} paragraph={"Our best picks for various needs and budgets."} image={"image-top-laptops"}/>
        <TopPosts number={"03"} title={"The Growth of Gaming"} paragraph={"How the pandemic has sparked fresh opportunities."} image={"image-gaming-growth"}/>
      </div>
    </>
  )
}

export default App
