function add(a,b,c){
    return a+b+c;
}
console.log (add(2,4,8))

function curryadd(c){
    return function (d){
        return function (e) {
            return c+d+e;
        };
    };
};
console.log(curryadd(3)(4)(27));