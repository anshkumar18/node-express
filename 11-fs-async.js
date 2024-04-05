const{readFileSync, writeFieSync, readFile} = require('fs')

readFile('./content/first.txt','utf8',(err,second) =>{
    if(err){
        console.log(err);
        return
    }
    console.log(second);
}

)