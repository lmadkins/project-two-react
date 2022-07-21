import React from 'react';
import { useContext, useState } from "react";
import {  useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FilterContext } from './FilterContext';


const SearchForm = ({setSearchParams}) => {

  const { onlyADA, setOnlyADA } = useContext(FilterContext)
  const { onlyUnisex, setOnlyUnisex } = useContext(FilterContext)

  let navigate = useNavigate()

  const [searchString, setSearchString] = useState('')

  const handleChange = (event) => {
    setSearchString(event.target.value)
    // sets SearchString (state) to what is typed into the input form
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate(`/results?query=${searchString}`)
  }

  const handleADAFilter = (event) => {
    if (event.target.checked) {
      setOnlyADA(true)
    } 
  }

  const handleUnisexFilter = (event) => {
    if (event.target.checked) {
      setOnlyUnisex(true)
    } 
  }

  return (
    <div className='searchForm'>

      <Form onSubmit={handleSubmit}>
        {/* Add tooltip or examples? */}
        {/* <Form.Group 
          as={Row} 
          className="mb-3" controlId="formHorizontalAddress"> */}
          <Form.Label column sm={10}>
              Enter your location
          </Form.Label>
        {/* </Form.Group> */}
          <br />
        <Form.Group as={Row} className="mb-3" 
        // controlId="formHorizontalAddress"
        >
        <Col sm={10}>
            <Form.Control 
              type="address" 
              autoComplete='street-address'
              placeholder="Location"
              name='searchString'
              id='searchStringInput'
              onChange={handleChange}
              required
              aria-required="true"  
              />
          </Col>
        </Form.Group>
      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={10}>
          (Optional) Show only results that are:
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              label="Gender Neutral"
              name="formHorizontalCheckboxes"
              id="unisexFormFilter"
              className='checkbox'
              onChange={handleUnisexFilter}
            />
            <Form.Check
              label=" ADA Accessible"
              name="formHorizontalCheckboxes"
              id="adaFormFilter"
              className='checkbox'
              onChange={handleADAFilter}
            />
          </Col>
        </Form.Group>
      </fieldset>
      <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default SearchForm