// const example = () => {
//     // var -> restricted by function
//     // let -> restricted by block
//     if (true) {
//         var x = 5;
//     }
    
//     console.log(x);
// }

// example()

var ex = "1,5,6";

var withoutCommas = ex.replaceAll(',', '\n');

console.log(withoutCommas);