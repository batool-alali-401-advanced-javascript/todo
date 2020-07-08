import React, {useContext} from 'react';
// import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './style.scss';
import { ToggleContext } from '../../context/show';
import { PaginationContext }  from '../../context/paginition'

function TodoList  (props) {
  const toggleContext = useContext(ToggleContext);
  const pagination = useContext(PaginationContext);
  console.log(pagination.currentItem);
  if (pagination.currentItem){
    return (
      <ul>
        {pagination.currentItem.map(item => (
            <li
            className={`complete-${item.complete.toString()} complete-${item.complete.toString()}-${toggleContext.status} `}
            key={item._id}
            >
             
            
            <span onClick={() => props.handleComplete(item._id)}>
            {/* <button  className='delete' onClick={() => props.handleDelete(item._id)}>X</button> */}
            
            <div>{item.complete.toString()} {item.assignee}</div>
                  {item.text} difficulty: {item.difficulty }
            </span>
            <Button variant="danger" className='delete' onClick={() => props.handleDelete(item._id)}>X</Button>
          </li>
        ))}
      </ul>
    );

  
  }
  else {
    return(
      null
    )
  }
   
}
// class TodoList extends React.Component {

//   render() {
//     return (
//       <ul>
//         {this.props.list.map(item => (
//           <li
//             className={`complete-${item.complete.toString()}`}
//             key={item._id}
//           >
//             <span onClick={() => this.props.handleComplete(item._id)}>
//               {item.text}
//             </span>
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }

export default TodoList;
