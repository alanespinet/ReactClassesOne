import React from 'react';


class StudentComponent extends React.Component {

  render() {
    return (
      <div>
        <p> Name: { this.props.name } </p>
        <p> Age: { this.props.age } </p>
        <p> Sex: {this.props.sex} </p>
      </div>
    );
  }

}


export default StudentComponent;
