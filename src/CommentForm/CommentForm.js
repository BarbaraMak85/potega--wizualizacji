import { useState } from "react";
import { submitCommentApi } from "../api/commentsApi";
const Commentform = ({ post_id }) => {
  const [comment, setComments] = useState({ name: "", comment: "" });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    submitCommentApi(comment.name, comment.comment, post_id);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label>
          <input
            type="text"
            name="name"
            value={comment.name}
            onChange={(e) =>
              setComments((currentState) => ({
                ...currentState,
                name: e.target.value,
              }))
            }
          />
        </label>
      </div>
      <div>
        <label>
          <textarea
            onChange={(e) =>
              setComments((currentState) => ({
                ...currentState,
                comment: e.target.value,
              }))
            }
            name="comment"
            value={comment.comment}
          ></textarea>
        </label>
      </div>
      <button>dodaj komentarz</button>
    </form>
  );
};

export default Commentform;
