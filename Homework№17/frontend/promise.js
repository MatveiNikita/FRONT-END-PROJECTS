document.addEventListener("DOMContentLoaded", () => {
  fetch("https://jsonplaceholder.typicode.com/users?id=3")
    .then((element) => {
      console.log(typeof element);
      return element.json();
    })
    .then((user) => {
      console.log(user[0].id);

      fetch(`https://jsonplaceholder.typicode.com/comments?id=${user[0].id}`)
        .then((postElemetn) => postElemetn.json())
        .then((post) => {
          console.log(post[0].body);
          const p = document.getElementById("comment");
          p.textContent = post[0].body;
        });
    });
});
