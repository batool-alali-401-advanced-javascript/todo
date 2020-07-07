import React, { useState, useEffect} from 'react';
import useForm from '../../hooks/useForm';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function TodoForm (props) {

  //const [item, setItem]=  useState([]);
 
  const [item, handleInputChange, handleSubmit] = useForm(handleForm);
  function handleForm(item) {
    props.handleSubmit(item)
  }
  // function handleInputChange(e)  {
  //   setItem({ item: {...item.item, [e.target.name]: e.target.value } });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   e.target.reset();
  //   props.handleSubmit(item.item);
  //   const item1 = {};
  //   setItem({item1});
  // };

  
    return (
      <>
        <h3>Add Item</h3>
        <Form onSubmit={handleSubmit}>
        <Form.Group >
          <Form.Label>
            To Do Item
            <Form.Control type="text" name="text" placeholder="Item" onChange={handleInputChange} />
          </Form.Label>
        </Form.Group>
        <Form.Group controlId="formBasicRangeCustom">
          <Form.Control type="range" custom defaultValue="1" min="1" max="5" name="difficulty" onChange={handleInputChange} />
        </Form.Group>
        <Form.Group >
          <Form.Label>
            Assigned to
            <Form.Control type="text" placeholder="Assignee name" name="assignee" onChange={handleInputChange} />
          </Form.Label>
        </Form.Group>
        <Form.Group >
          <Button type="submit">Add Item</Button>
        </Form.Group>
        </Form>
      </>
    );
  
}

export default TodoForm;
