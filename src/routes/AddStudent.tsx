// AddStudent.jsx
import React,{useReducer} from 'react';

const AddStudent = () => {
  return (
    <div className="formulaSection">
      <h1>Add students</h1>
      <label htmlFor="First Name">First name: </label>
      <input type="text" />
      <label htmlFor="Last Name">Last name: </label>
      <input type="text" />
    </div>
  );
}

export default AddStudent;
