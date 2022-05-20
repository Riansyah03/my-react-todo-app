import React from 'react'
import Header from './Header'
import Footer from './Footer'
import PaginateList from './PaginateList'

const ToDoList = (props) => {
  return (
    <div className="todo-list">
        <Header title={props.title.toUpperCase()}  addNewItem={props.addNewItem}/>
        <PaginateList items={props.items} initialPage={1} itemPerPage={2} />
        <Footer count={props.items.length} />
        </div>  
  )
}

export default ToDoList