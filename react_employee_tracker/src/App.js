import React, { useEffect, useState } from "react";
import "./App.css";
import "./components/HeaderComp.js";
import HeaderComp from "./components/HeaderComp.js";
import SearchComp from "./components/SearchComp.js";
import TitleComp from "./components//TitleComp.js";
import employeeData from "./randomEmployeeGenerator.json"; // need to convert from json to use in javascripts
import CardComp from "./components/CardComp";

function App() {
  // useState({}) is calling use State functions
  // returns array with two values - first value is the default state (employees) that will be displayed
  //second item is function that will update state (setEmployees)
  const [employees, setEmployees] = useState([]);
  //console.log("useState Employee" + employees)

  const [filter, setFilter] = useState("");

  // use effect needs a function ans an array
  // useEffect function will trigger when array gets updated - no array will trigger with any change
  useEffect(() => {
    console.log(filter)
    if (filter) {

      const filteredData = employeeData.filter((employee) => {
        console.log(employee)
        return employee.last_name.indexOf(filter) !== -1;
      })
      setEmployees(filteredData)
    } else {
      setEmployees(employeeData);
    }
  }, [filter]);

  return (
    <div className="App">
      <div>
        <HeaderComp />
      </div>
      <div>
        <SearchComp setFilter={setFilter} />
      </div>
      <div>
        <TitleComp />
      </div>
      {employees.map((employee) => {
        const image = `${employee.image}`;

        //line 34 {employees} is being supplied by use state
        return (
          <CardComp
            key={employee.id}
            id={employee.id}
            image={image}
            firstName={employee.first_name}
            lastName={employee.last_name}
            phone={employee.phone}
            emailName={employee.email}
            dob={employee.dob}
          />
        );
      })}
    </div>
  );
}

export default App;
