import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
// import axios from 'axios';
import useAjax from '../../hooks/useAjax';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './todo.scss';

import Pagination from './pagination.js'
import ToggleHideShow from './toggleHideShow'
import PaginationContext from '../../context/paginition'
import ToggleShowProvider from '../../context/show';
import ChangeNumberOfPages from './itemPpage'



const todoAPI = 'https://todo-app-server-lab32.herokuapp.com/api/v1/todo';


const ToDo = () => {

  
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

        <PaginationContext list={list}>

        <div className="list">
          <ToggleShowProvider list={list}>
          <ToggleHideShow/>
          <ChangeNumberOfPages/>
          
          <TodoList
            handleComplete={_toggleComplete}
            handleDelete={deleteItem}
          />
          </ToggleShowProvider>
          <Pagination
        totalitems={list.length}
      />
        </div>

        </PaginationContext>
      </section>
    </main>
  );
};

export default ToDo;
