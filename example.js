


// const nonArrowFunc = function(data) {
//     const hbsObject = {
//         cats: data
//       };
//       console.log(hbsObject);
//       res.render("index", hbsObject);
// }

// const arrowFunc = data => {
//       const hbsObject = {
//         cats: data
//       };
//       console.log(hbsObject);
//       res.render("index", hbsObject);
// }


const logArgument = function(arg1) {
    console.log(arg1);
};

logArgument(8);
logArgument(9);


const logArgumentArrow = arg1 => console.log(arg2);


logArgumentArrow(7);
