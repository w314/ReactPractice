import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

export default function Home() {
  return (
    <>
    <Navbar>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/Counter">Counter</Nav.Link>
    </Navbar>
    </>
  );
}