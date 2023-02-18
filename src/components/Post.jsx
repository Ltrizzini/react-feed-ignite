import { Avatar } from "./Avatar";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { useState } from "react";

export function Post({ author, publishedDate, content }) {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const publishedDateFormatted = format(
    publishedDate,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedDate, {
    locale: ptBR,
    addSuffix: true,
  });

  const isNewCommentEmpty = commentText.length === 0;

  function handleCreateNewComment() {
    event.preventDefault();

    const newCommentText = event.target.comment.value;

    setComments([...comments, newCommentText]);
    setCommentText("");
  }

  function handleNewCommentChange(event) {
    setCommentText(event.target.value);
  }

  function handleNewCommentInvalid() {
    return commentText.length === 0;
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeleted = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setComments(commentsWithoutDeleted);
  }

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedDate.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((item) => {
          switch (item.type) {
            case "paragraph":
              return <p key={item.content}>{item.content}</p>;
            case "link":
              return (
                <a key={item.content} href={item.content}>
                  <p>{item.content}</p>
                </a>
              );
          }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe um comentário</strong>
        <textarea
          name="comment"
          value={commentText}
          placeholder="Deixe seu feedback"
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Comentar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
