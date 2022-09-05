// const promise = new Promise((resolve) => {
//   console.log("1");
//   setTimeout(() => {
//     console.log("2");
//   }, 0);
//   resolve();
//   console.log("resolve");
//   throw new Error("error");
//   console.log("error");
// });
// promise
//   .then(
//     () => {
//       console.log("3");
//       setTimeout(() => {
//         console.log("4");
//       }, 0);
//     },
//     () => {
//       console.log("reject");
//     }
//   )
//   .catch(() => {
//     console.log("catch");
//   });
// console.log("5");

/**
 * 5
 * 1
 * 3
 * resolve
 * catch
 * error
 * 2
   4
 */
var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13]]], 10];
const set = Array.from(new Set([...arr.flat(4)]));
console.log(set);
