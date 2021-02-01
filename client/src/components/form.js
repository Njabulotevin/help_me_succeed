import React from "react";
import "../app/css/main.css";
import { useState } from "react";
import NavBar from './NavBar/NavBar';

function form() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    idNumber: "",
    schoolName: "",
    grade: "",
  });
 
  // handlle change
  const handleInputChange = (event) => {
    event.persist();
    setForm(form => ({...form, [event.target.name]: event.target.value}));
  }
   // Handle submit
   const handleSubmit = (e)=>{
    e.preventDefault();
    fetch("http://localhost:5000/api/application_form" , {
    method: "POST",
    headers: {
    'Content-type': 'application/json'
  },
    body: JSON.stringify(form)
  }).then((result) => result.json()).then((info) => { console.log(`this is from fecth, ${info}`); })
    console.log(form);
  }
  return (
    <div className="form_wrapper">
      <NavBar sign_in_out="SIGN IN"/>
      <form  method="POST" onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name"  value={form.name} onChange={handleInputChange}/>
        </div>
        <div className="input">
          <label htmlFor="surname">Surname</label>
          <input type="text" id="surname" name="surname"  value={form.surname} onChange={handleInputChange}/>
        </div>
        <div className="input">
          <label htmlFor="surname">Id number</label>
          <input maxLength="13" type="text" id="idNumber" name="idNumber"  value={form.idNumber} onChange={handleInputChange}/>
        </div>
        <div className="input">
          <label htmlFor="school_name">Name of School</label>
          <input type="text" id="schoolName" name="schoolName" value={form.schoolName} onChange={handleInputChange}/>
        </div>
        <div className="input">
          <label htmlFor="grade">Grade</label>
          <select name="grade" id="grade" value={form.grade} onChange={handleInputChange}>
            {/* <!-- <option value="select grade">Select</option> --> */}
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
          {/* <!-- <input type="text" id="grade" name="grade" /> --> */}
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default form;
