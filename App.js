import React from "react"


function Winner(blocks){
    const lines=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for (let i=0;i<lines.length;i++)
    {
        const [a,b,c]=lines[i];
        (blocks[a]&& blocks[a]===blocks[b]&&blocks[b]===blocks[c]?blocks[a]:"null")  
        // if block[a] contains either 'x'or'o' and if block a=b=c then it'll return the winner that is in all three blocks according to array.  
    }
    return null
}

