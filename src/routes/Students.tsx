import React, { useState } from "react";
import MonstersData from "../monster.json";
import '../styles/studentCard.scss';
import example from '../assets/images/example.jpg';

type Monster = {
  Id: number;
  First_name: string;
  Last_name: string;
  Gender: string;
  Class: string;
  Carnivore: boolean;
  Herbivore: boolean;
  Omnivore: boolean;
  color: string; // Assuming color is directly under the Appearance object
};

const Students = () => {
  const [filter, setFilter] = useState<string>(""); 
  const [filterDiet, setFilterDiet] = useState<string>("");

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  const handleDietFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterDiet(e.target.value);
  };

  const filteredMonsters = MonstersData.monsters.filter((monster) => {
    if (filter !== "" && filterDiet !== "") {
      return (filter === "both" || monster.Gender.toLowerCase() === filter.toLowerCase()) &&
        (filterDiet === "all" ||
          (filterDiet === "carnivore" && monster.Carnivore) ||
          (filterDiet === "herbivore" && monster.Herbivore) ||
          (filterDiet === "omnivore" && monster.Omnivore));
    } else if (filter !== "") {
      return filter === "both" || monster.Gender.toLowerCase() === filter.toLowerCase();
    } else if (filterDiet !== "") {
      return filterDiet === "all" ||
        (filterDiet === "carnivore" && monster.Carnivore) ||
        (filterDiet === "herbivore" && monster.Herbivore) ||
        (filterDiet === "omnivore" && monster.Omnivore);
    }
    return true;
  });
 
  return (
    <>
      <div className="search">
        <input type="" placeholder='search' />
      </div>

      <div className="filter-section">
        <div>
          <label htmlFor="filter">Filter: </label>
          <select name="filter" value={filter} onChange={handleFilterChange}>
            <option value="">Select gender</option>
            <option value="both">Both</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>

        <div>
          <label htmlFor="filterDiet">Diet Filter: </label>
          <select name="filterDiet" value={filterDiet} onChange={handleDietFilterChange}>
            <option value="">Select diet</option>
            <option value="all">All</option>
            <option value="carnivore">Carnivore</option>
            <option value="herbivore">Herbivore</option>
            <option value="omnivore">Omnivore</option>
          </select>
        </div>
      </div>

      {filteredMonsters.length > 0 ? (
        filteredMonsters.map((monster) => (
          <div key={monster.Id}>
            <div className="studentSection">
              <img className="studentPic" src={example} alt="Example" />
              <div>
                <p id="student">{monster.First_name} {monster.Last_name}</p>
                <p>Student ID: {monster.Id}</p>
                <p>Gender: {monster.Gender}</p>
                <p>Color: {monster.Appearance.color}</p> {/* Output color field */}
                <p>Diet: {monster.Carnivore ? "Carnivore" : (monster.Herbivore ? "Herbivore" : "Omnivore")}</p>
                <p id="more-info">More info</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No students found for the selected filter.</p>
      )}
    </>
  );
};

export default Students;
