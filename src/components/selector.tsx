import React, { useState } from "react";
import MonstersData from "../monster.json";
import '../styles/studentCard.scss';
import example from '../assets/images/example.jpg';

type Monster = {
  Id: number;
  First_name: string;
  Last_name: string;
  Gender: string;
};

const Selector = () => {
  const [filter, setFilter] = useState<string>(""); 

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  const filteredMonsters = MonstersData.monsters.filter((monster) => {
    if (filter === "female") {
      return monster.Gender === "Female";
    } else if (filter === "male") {
      return monster.Gender === "Male";
    }
    return true;
  });

 
  const isGenderFilterSelected = filter !== "";

  return (
    <>
      <div>
        <label htmlFor="filter">Filter by Gender: </label>
        <select name="filter" value={filter} onChange={handleFilterChange}>
          <option value="">Select gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </div>

      <div>
        <select name="filter" id="">
          <option value=""></option>
          <option value="carnivore">Carnivore</option>
          <option value="herbivore">Herbivore</option>
          <option value="omnivore">Omnivore</option>
        </select>
      </div>

      
      {isGenderFilterSelected && (
        <>
          {filteredMonsters.length > 0 ? (
            filteredMonsters.map((monster) => (
              <div key={monster.Id}>
                <div className="studentSection">
                  <img className="studentPic" src={example} alt="Example" />
                  <p>Student: {monster.First_name} {monster.Last_name}</p>
                  <p>Gender: {monster.Gender}</p>
                  <p>Student ID: {monster.Id}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No students found for the selected filter.</p>
          )}
        </>
      )}
    </>
  );
};

export default Selector;
