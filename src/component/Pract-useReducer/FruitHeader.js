import React from "react";

function FruitHeader({fruitTodo}){
    return(
<>
<h1>Total Fruits {fruitTodo?.length}</h1>
</>
    )
}

export default FruitHeader;