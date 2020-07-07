import React from 'react';
// import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function TodoList  (props) {
  
  console.log(props.list);
  if (props.list){
    // let arr =props.list;
    // arr.forEach(element => {
    //   if (element.complete)
    //   element.complete='complete';
    //   else element.complete='pending';
    // });
    return (
      <ul>
        {props.list.map(item => (
            <li
            className={`complete-${item.complete.toString()}`}
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
