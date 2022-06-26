const postComment = async (event) => {
  event.preventDefault();

  const blogPostId = document.querySelector('input[name="blogpost-id"]').value;
  const comment = document.querySelector('textarea[name="comment-add"]').value;

  console.log(blogPostId);
  console.log(comment);

  if (comment) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        comment,
        blogPostId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert(`Failed to post comment.`);
    }
  }
};

document.querySelector(".commentBtn").addEventListener("click", postComment);
