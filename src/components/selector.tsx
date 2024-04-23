import React from "react";
import Monsters from "../monster.json";

type Monster = {
  Id: number;
  First_name: string;
  Last_name: string;
  Gender: string;
  Class: string;
  Grades: {
    [key: string]: string;
  };
};

const Selector = () => {
  return (
    <>
    <div>
    <label htmlFor="filter">Filter: </label>
      <p>Filter students</p>
   
      <select name="filter">
      
     <option value="gender"> gender</option>
      </select>

      </div>
    </>
  );
};

export default Selector;
