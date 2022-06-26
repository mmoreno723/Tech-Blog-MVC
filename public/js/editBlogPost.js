const editBlogPost = async (event) => {
  event.preventDefault();
  console.log("please work");
  const title = document.querySelector("#blogpost-title").value;
  const body = document.querySelector("#blogpost-body").value;
  const id = document.querySelector("#blogpost-id").value;

  const response = await fetch(`/api/blogposts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      id,
      title,
      body,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to update blog post.");
  }
};

document.querySelector(".updateBtn").addEventListener("click", editBlogPost);
