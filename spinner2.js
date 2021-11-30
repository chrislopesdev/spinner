const spinners = ['\r|', '\r/', '\r-', '\r\\', '\r|'];
for (let i = 0; i < spinners.length; i++) {
  setTimeout(() => {
    process.stdout.write(`${spinners[i]}   `);
  }, i * 200);
}
setTimeout(() => {
  console.log('');
}, 200 * spinners.length);
      
// const spinners = ['\r|', '\r/', '\r-', '\r\\'];
// const spin = (durationInSeconds) => {
//   let count = 0;
//   for (let i = 0; i < durationInSeconds; i++) {
//     for (const spin of spinners) {
//       count += 100;
//       setTimeout(() => {
//         process.stdout.write(`${spin}   `);
//       }, count);
//     }
//   }
// }
// console.log(spin(10));