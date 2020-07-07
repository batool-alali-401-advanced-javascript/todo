import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
// import axios from 'axios';
import useAjax from '../../hooks/useAjax';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './todo.scss';



const todoAPI = 'https://todo-app-server-lab32.herokuapp.com/api/v1/todo';


const ToDo = () => {

  // const [list, setList] = useState([]);

  // const _addItem = (item) => {
  //   item.due = new Date();
  //   // item.complete=false;
  //   console.log(item);
  //   axios({
  //     url:todoAPI,
  //     method: 'post',
  //     mode: 'cors',
  //     cache: 'no-cache',
  //     headers: { 'Content-Type': 'application/json' },
  //     data: JSON.stringify(item)
  //   })
  //     .then(response => response.data)
  //     .then(savedItem => {
  //       setList([...list, savedItem])
  //     })
  //     .catch(console.error);
  // };

  // const _toggleComplete = id => {

  //   let item = list.filter(i => i._id === id)[0] || {};

  //   if (item._id) {

  //     item.complete = !item.complete;

  //     let url = `${todoAPI}/${id}`;

  //     axios( {
  //       url:url,
  //       method: 'put',
  //       mode: 'cors',
  //       cache: 'no-cache',
  //       headers: { 'Content-Type': 'application/json' },
  //       data: JSON.stringify(item)
  //     })
  //       .then(response => response.data)
  //       .then(savedItem => {
  //         setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
  //       })
  //       .catch(console.error);
  //   }
  // };

  // const _getTodoItems = () => {
  //   axios( {
  //     url:todoAPI,
  //     method: 'get',
  //     mode: 'cors',
  //   })
  //     .then(data => data.data)
  //     .then(data => setList(data))
  //     .catch(console.error);
  // };
  const [list , _addItem , _toggleComplete , _getTodoItems , deleteItem] = useAjax();
  // useEffect(_getTodoItems, []);

  return (
    <main>
      <header>
      <Navbar bg="primary" variant="dark">
      <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
    </Navbar>
    <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#home"> There are {list.filter(item => !item.complete).length} Items To Complete</Navbar.Brand>
              </Navbar>
      </header>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={_addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={_toggleComplete}
            handleDelete={deleteItem}
          />
        </div>
      </section>
    </main>
  );
};

export default ToDo;
