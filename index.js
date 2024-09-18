// function sum(a) {
//   a();
// }

// sum(function () {
//   alert("abc");
// });

// ---> call api --> data

let a = new Promise(function (resolve, reject) {
  // callapi
  reject("err");
});

a.then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});

async function abc() {}
