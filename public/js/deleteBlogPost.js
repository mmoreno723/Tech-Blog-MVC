const deleteBlogPost = async (event) => {
  event.preventDefault();

  const id = document.querySelector("#blogpost-id").value;

  const response = await fetch(`/api/blogposts/${id}`, {
    method: "DELETE",
    body: JSON.stringify({
      id,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to delete blog post.");
  }
};

document.querySelector(".delBtn").addEventListener("click", deleteBlogPost);
