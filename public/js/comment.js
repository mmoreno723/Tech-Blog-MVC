const postComment = async (event) => {
  event.preventDefault();

  const blogPostId = document.querySelector("#id").textContent;
  const comment = document.querySelector("#comment").value.trim();

  if (comment && blogPostId) {
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
      document.location.replace(`/blog/${blogPostId}`);
    } else {
      alert(`Failed to post comment.`);
    }
  }
};

document
  .querySelector("#add-content-form")
  .addEventListener("submit", postComment);
