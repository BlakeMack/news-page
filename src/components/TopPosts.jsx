export default function TopPosts (props) {
  return (
    <div className="top-posts">
      <div className="top-image-container">
        <img src={`src/assets/images/${props.image}.jpg`} alt="" />
      </div>
      <div className="top-posts-text">
        <h2 className="post-number">{props.number}</h2>
        <h2 className="post-title">{props.title}</h2>
        <p className="post-paragraph">{props.paragraph}</p>
      </div>
    </div>
  )
}
