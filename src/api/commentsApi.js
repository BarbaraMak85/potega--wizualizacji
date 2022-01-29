import base from "./base";
export const getCommentsApi = (post_id) => base.get(`comments?post=${post_id}`);

export const submitCommentApi = (name, comment, post_id) => {
  const form = new FormData();
  form.append("author_name", name);
  form.append("author_email", "niepodam@niepodam.pl");
  form.append("content", comment);
  form.append("post", post_id);

  // fetch("http://localhost/potegawizualizacji/wp-json/wp/v2/comments", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type":
  //       "multipart/form-data;charset=utf-8; boundary=" +
  //       Math.random().toString().substr(2),
  //   },
  //   body: form,
  // });
  base.post("comments", form);
};
