import React from 'react';

export const ToggleContext = React.createContext();

class ToggleStatusHideShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        status: 'show',
      toggleStatus: this.changeStatus,
    };
  }
  changeStatus = () => {
  
    this.setState({ status: this.state.status === 'show' ? 'hide' : 'show' });
  };
  render() {
    return (
      <ToggleContext.Provider value={this.state}>
        {this.props.children}
      </ToggleContext.Provider>
    );
  }
}

export default ToggleStatusHideShow;
