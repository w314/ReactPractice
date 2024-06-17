import React from "react";
import { setCommentRange } from "typescript";
import './Counter.css'
// import { Container, Row, Button } from "react-bootstrap";

export default function Counter() {

   const  [ count, setCount ] = React.useState(0);

   const title = "Counter";

   const increaseCount = () => {
         setCount(count + 1);
   }

   const decreaseCount = () => {
    setCount(count - 1);
   }

   return (
    <>
    <div>
        <h2 className="section-title">{title}</h2>
        <div className="counter">
            <button className="button counter-button"
                disabled={count === 0}
                onClick = {decreaseCount}
            >-</button>
            <span className="center">{count}</span>
            <button className="button counter-button"
                onClick = {increaseCount}
            >+</button>
        </div>


    </div>

    </>
   )
}