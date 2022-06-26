const addBlogPost = async (event) => {
  event.preventDefault();

  const blogTitle = document.querySelector("#blogpost-title").value;
  const blogBody = document.querySelector("#blogpost-body").value;

  const response = await fetch("/api/blogposts", {
    method: "POST",
    body: JSON.stringify({
      blogTitle,
      blogBody,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Could not add blog post.");
  }
};

document.querySelector(".postBtn").addEventListener("click", addBlogPost);
