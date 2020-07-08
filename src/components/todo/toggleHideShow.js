import React from 'react';
import { ToggleContext } from '../../context/show';
import Button from 'react-bootstrap/Button';
class Content extends React.Component {

  static contextType = ToggleContext; 

  render() {
    return (
      <>
       <Button variant="primary" size="lg"  onClick={this.context.toggleStatus} className="hideShow">
       {this.context.status === 'show' ? 'hide' : 'show'} complete items
  </Button>{' '}
      </>
    );
  }
}
export default Content;
