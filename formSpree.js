// function sendMail(event){
//     event.preventDefault();
//     const data = new FormData(event.target);

//     fetch("https://formspree.io/f/movqdvwq", {
//         method: "POST",
//         body: data, //new FormData(event.target),
//         headers: {
//             'Accept': 'application/json'
//         }
//     }).then(() => {
//         window.location.href = ".index.html";
//     }).catch((error) => {
//         console.log(error);
//     });
// }
// not used