// let post;
// let comments;
// let id = 2;

// ajax.send({
//     method: 'GET',
//     url: `https://jsonplaceholder.typicode.com/posts/${id}`,
//     success: function (res) {
//         //console.log(res);
//         post = JSON.parse(res);
//
//         ajax.send({
//             method: 'GET',
//             url: `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
//             success: function (res) {
//                 //console.log(res);
//                 comments = JSON.parse(res);
//                 // вовыодим комменты на страницу
//             }
//         })
//     },
//     error: function (err) {
//         console.log(err);
//     }
// });

// let post;
// let comments;
//
// function getPostByID(id) {
//     return new Promise(function (resolve, reject) {
//         ajax.send({
//             method: 'GET',
//             url: `https://jsonplaceholder.typicode.com/posts/${id}`,
//             success: resolve,
//             // or
//             // success: function (res) {
//             //     resolve(res);
//             // },
//             error: reject
//         })
//     })
// }
//
// function getCommentsByID(id) {
//     return new Promise(function (resolve, reject) {
//         ajax.send({
//             method: 'GET',
//             url: `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
//             success: resolve,
//             error: reject
//         })
//     })
// }
//
// function generateTemplate(comments) {
//     comments.forEach(comment => {
//
//     })
// }
//
// getPostByID(1)
//     .then(res => {
//         post = JSON.parse(res);
//         return post.id
//     })
//     .then(getCommentsByID)
//     .then(res => {
//         comments = JSON.parse(res);
//         return comments;
//     })
//     .then(generateTemplate)
//     .catch(err => {
//         console.log(err)
//     });
//
//
// //Fetch
// fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`, { method: 'GET' })
//     .then(res => {
//         console.log(res.status);
//         console.log(res.headers.get('Content-type'));
//         return res.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });



const server = new JsonPlaceholder();

server.getPosts(1)
    .then(data => data.id)
    .then(server.getCommentsById)
    .then(comments => console.log(comments));

















