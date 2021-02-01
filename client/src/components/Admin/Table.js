import React, { Component } from "react";

class Table extends Component {
  constructor() {
    super();
    this.state = {
      Applicants: [
        {
          name: "njabulo",
          surname: "mkhwanazi",
          idNumber: "9606065872082",
          schoolName: "reggie",
          grade: "12",
        },
      ],
      stat : {
        completed: 0,
        incomplete: 0
      }
    };
  }
  componentDidMount() {
    fetch("/api/application_form")
      .then((res) => res.json())
      .then((Applicants) =>{
        this.setState({ Applicants }, () => {
          console.log(this.state.Applicants);
          console.log("Applicants fetched...", Applicants);
        })
      }
      );
  }
  render() {
    console.log(this.state.Applicants);
    return (
      <div className="table_wrapper">
        <div className="top_box">
          <div className="search_box_wrapper">
          <input type="search" id="search_box" placeholder="Search by ID number"/>
          <span></span>
          </div>
          <div className="stat">
            <div className="total_complete totals">
              <span>Total Complete</span>
              <span>{this.state.stat.completed}</span>
            </div>
            <div className="total_incomplete totals">
              <span>Total Incomplete</span>
              <span>{this.state.stat.incomplete}</span>
            </div>
          </div>
        </div>
      
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Id Number</th>
              <th>School Name</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {this.state.Applicants.map((Applicant) => {
              return (
                <tr key={Applicant.id}>
                  <td>{Applicant.name}</td>
                  <td>{Applicant.surname}</td>
                  <td>{Applicant.idNumber}</td>
                  <td>{Applicant.schoolName}</td>
                  <td>{Applicant.grade}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
