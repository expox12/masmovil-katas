export function kata3 (n, m) {
    var totalArray = new Array();

    for (let index = n; index <= m; index++) {
        var total = [...Array(index+1).keys()].slice(1)
        .reduce((prev, curr)=> {
            return prev + (!(index % curr) && Math.pow(curr, 2))
        }, 0);

        if(Math.sqrt(total) - Math.floor(Math.sqrt(total)) == 0) {
            totalArray.push([index, total]);
        }
        
    }
    return totalArray;

}
