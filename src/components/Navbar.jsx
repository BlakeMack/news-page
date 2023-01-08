import UseHover from "../hooks/useHover"

export default function Navbar () {

  return (
    <nav className="news-navbar">
      <h1 className="navbar-text">W.</h1>
      <div className="navigation-bar">
        <ul className="navigation-item">Home</ul>
        <ul className="navigation-item">New</ul>
        <ul className="navigation-item">Popular</ul>
        <ul className="navigation-item">Trending</ul>
        <ul className="navigation-item">Categories</ul>
      </div>
    </nav>
  )
}
