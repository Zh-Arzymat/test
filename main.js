const baseURL = "https://jsonplaceholder.typicode.com";

const endpoints = {
 posts: "/posts",
 post: (id) => `/posts/${id}`
};

const getAllPosts = async() => {
 const response = await fetch(`${baseURL}${endpoints.posts}`, {
  method: 'GET',
 });
 const data = await response.json();
 console.log(data)
}

getAllPosts();


const post = {
 userId: 10,
 title: "Hello, World!",
 body: "its body"
}

const createPost = (post) => {
 fetch(`${baseURL}${endpoints.posts}`, {
  method: 'POST',
  body: JSON.stringify(post),
  headers: {
   'Content-Type': 'application/json'
  }
 }).then((response) => {
  return response.json();
 }).then(data => {
  console.log(data);
 })
}

createPost(post);


const updatePost = (post_id, post_obj) => {
 fetch(`${baseURL}${endpoints.post(post_id)}`, {
  method: 'PUT',
  body: JSON.stringify(post_obj),
  headers: {
   'Content-Type': 'application/json'
  }
 }).then((response) => {
  return response.json();
 }).then(data => {
  console.log(data)
 })
}

updatePost(1, post);

const deletePost = (post_id) => {
 fetch(`${baseURL}${endpoints.post(post_id)}`, {
  method: 'DELETE'
 }).then((response) => {
  console.log(response)
 })
}

deletePost(2);