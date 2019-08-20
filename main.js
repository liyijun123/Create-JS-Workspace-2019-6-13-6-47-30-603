function createMultiplyTable (left, right) {
    var str="";
    str=concat(left,right);
    return str;
}
function check(left,right) {
    if(left<right){
        return true;
    }
}
function concat(left,right){
    let str="";
    for(let i=0;i<right-left+1;i++){
        for(let j=0;j<=i;j++){
            if(j!==0){
                str+=" ";
            }
            str+=getDiviStr(left,i,j);
            
        }
        
        str+="\n";
    }
    return str;
}
function getDiviStr(left,i,j){
    let diviStr="";
    diviStr+=((left+j)+"*"+(left+i)+"="+((left+j)*(left+i)));
    return diviStr;
}

module.exports ={ 
    createMultiplyTable,
    check
};
