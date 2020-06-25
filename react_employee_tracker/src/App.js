import React, { useEffect, useState } from "react";
import "./App.css";
import "./components/HeaderComp.js";
import HeaderComp from "./components/HeaderComp.js";
import SearchComp from "./components/SearchComp.js";
import TitleComp from "./components//TitleComp.js";
import employeeData from "./randomEmployeeGenerator.json"; // need to convert from json to use in javascripts
import CardComp from "./components/CardComp";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    setEmployees(employeeData); // parsing employee
    console.log(employeeData);
  });

  return (
    <div className="App">
      <div>
        <HeaderComp />
      </div>
      <div>
        <SearchComp />
      </div>
      <div>
        <TitleComp />
      </div>
      {employees.map((employee) => {
        return (
          <CardComp
            firstName={employee.first_name}
            lastName={employee.last_name}
          />
        );
      })}
    </div>
  );
}

export default App;
