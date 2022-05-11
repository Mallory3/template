import React from 'react';

class Button extends React.Component {
  render() {
    const ButtonType = this.props.type;
    
    return (
      <button
        className={`button rounded-full py-2 px-4 ${ButtonType}`}
        type="button"
      >
        {this.props.text}
      </button>
    )
  }
};

export default Button;