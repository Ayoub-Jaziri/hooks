import React, { useState } from "react";

import { FaStar } from "react-icons/fa";
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

export default function Navbars({
  setName,
  setHover,
  setRating,
  hover,
  rating,
}) {
  return (
    <div>
      <Navbar
        bg="light"
        expand="lg"
        style={{ height: "70px", marginBottom: "30px" }}
      >
        <Navbar.Brand href="#" style={{ marginLeft: "50px" }}>
          Navbar scroll
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <div style={{ display: "flex" }}>
            {" "}
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;

              return (
                <label>
                  <input
                    style={{ display: "none" }}
                    type="radio"
                    name="rating"
                  />

                  <FaStar
                    size={30}
                    color={
                      ratingValue <= (rating || hover) ? "#ffc107" : "#e4e5e9"
                    }
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setRating(ratingValue)}
                  />
                </label>
              );
            })}
          </div>

          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
              onChange={(e) => setName(e.target.value)}
              style={{ marginLeft: "5em", width: "18em" }}
            />

            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
