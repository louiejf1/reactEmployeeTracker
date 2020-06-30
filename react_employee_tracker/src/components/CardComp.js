import React from "react";

const CardComp = (props) => {
  return (
      <table className="table table-striped">
        <tbody>
          <tr>
            <td>{props.id}</td>
            <td><img src={props.image} /></td>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.phone}</td>
            <td>{props.emailName}</td>
            <td>{props.dob}</td>
          </tr>
        </tbody>
      </table>
  );
};

export default CardComp;
