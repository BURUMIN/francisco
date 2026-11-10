export default function PostCard({
  post,
  currentUser,
  commentDrafts,
  setCommentDrafts,
  onToggleLike,
  onCommentSubmit,
}) {
  const draft = commentDrafts[post.id] ?? '';

  return (
    <article className="post-card">
      <div className="post-header">
        <img src={post.avatar} alt={post.author} className="post-avatar" />
        <div className="post-meta">
          <div className="post-author">{post.author}</div>
          <div className="post-time">{post.date}</div>
        </div>
      </div>

      {post.text && <p className="post-text">{post.text}</p>}

      {post.image && <img src={post.image} alt="Publicação" className="post-image" />}

      <div className="post-stats">
        <span>👍 {post.likes}</span>
        <span>{post.comments.length} comentários</span>
      </div>

      <div className="post-actions">
        <button type="button" className={post.liked ? 'active' : ''} onClick={() => onToggleLike(post.id)}>
          Curtir
        </button>
        <button type="button">Comentar</button>
        <button type="button">Compartilhar</button>
      </div>

      <div className="comments-list">
        {post.comments.map((comment, index) => (
          <div className="comment-item" key={`${comment.author}-${index}`}>
            <img src={comment.avatar} alt={comment.author} />
            <div className="comment-bubble">
              <strong>{comment.author}</strong>
              <span>{comment.text}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="comment-box">
        <img src={currentUser.avatar} alt={currentUser.name} />
        <input
          type="text"
          value={draft}
          onChange={(event) => setCommentDrafts((prev) => ({ ...prev, [post.id]: event.target.value }))}
          placeholder="Escreva um comentário..."
        />
        <button type="button" onClick={() => onCommentSubmit(post.id)}>Comentar</button>
      </div>
    </article>
  );
}
