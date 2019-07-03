let array = [{char:'a', index:12},{char:'w', index:8},{char:'Y', index:10},
    {char:'p', index:3},{char:'p', index:2},{char:'N', index:6},{char:' ', index:5},
    {char:'y', index:4},{char:'r', index:13},{char:'H', index:0},{char:'e', index:11},
    {char:'a', index:1},{char:' ', index:9},{char:'!', index:14},{char:'e', index:7}];
array.sort(function (prev, next) {
    return prev.index - next.index;
});
let newArray = array.reduce((total, current) => {
    return  total + current.char
}, '');
console.log(newArray);