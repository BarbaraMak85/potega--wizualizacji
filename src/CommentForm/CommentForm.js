import { useState } from "react";
import { submitCommentApi } from "../api/commentsApi";
const Commentform = () => {
  const [comment, setComments] = useState({ name: "", comment: "" });
  const handleFormSubmit = (e) => {
    e.preventDefaut();
    submitCommentApi(comment.name, comment.comment);
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
          >
            {comment.comment}
          </textarea>
        </label>
      </div>
      <button>dodaj komentarz</button>
    </form>
  );
};

export default Commentform;
