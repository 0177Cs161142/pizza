import React from "react";
const pizza=(pizza1)=>{
    return(
        <>
        <h1>{pizza1.name}</h1>
        <img src={pizza1.image} className="img-fluid"/>
        </>
    )
}
export default pizza;