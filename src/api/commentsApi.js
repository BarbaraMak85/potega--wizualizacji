export const getCommentsApi = () =>
  fetch("http://localhost/potegawizualizacji/wp-json/wp/v2/comments");

export const submitCommentApi = (name, comment) => {
  fetch("http://localhost/potegawizualizacji/wp-json/wp/v2/comments", {
    method: "POST",
    body: {
      author_name: name,
      content: comment,
      author_email: "niepodam@niepodam.pl",
    },
  });
};
