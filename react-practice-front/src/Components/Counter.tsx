import React from "react";
import { setCommentRange } from "typescript";
import { Container, Row, Button } from "react-bootstrap";

export default function Counter() {

   const  [ count, setCount ] = React.useState(0);

   const increaseCount = () => {
         setCount(count + 1);
   }

   const decreaseCount = () => {
    setCount(count - 1);
   }

   return (
    <>
    <Container>
        <span>{count}</span>
        <Button
            onClick = {increaseCount}
        >+</Button>
        <Button
            disabled={count === 0}
            onClick = {decreaseCount}
        >-</Button>

    </Container>

    </>
   )
}