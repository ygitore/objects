//getting multiple value out of function
let lwh = (length, width, height)=>{
    var area = length*width;
    var volume = area*height;
    var v = [area,volume];
    return v;
}
console.log(lwh(2,3,4)[0]);

//Anonymous functions
//1. function declaration
function area(l,w){
    return l*w;
}
console.log(area(2,3));
//2. function expression
var area = function(l,w){
    return l*w;
}
console.log(area(3,3));

//immidiately invoked functions expressions
var ar = (function()
{
    var l = 2;
    var p = 5;
    return l*p;
}());
console.log(ar);

//objects
var hotel = {
    name:'Marriot',
    roomType: 'Queen',
    availblity:true,
    unbooked:23,
    booked:20,
    roomsLeft:function(){
        return this.unbooked-this.booked;
    }
};
