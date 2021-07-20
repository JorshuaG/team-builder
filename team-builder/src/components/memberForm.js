import React, { useState } from "react";

function MemberForm(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });
  const handleNameInput = (evt) => {
    setFormData({ ...formData, name: evt.target.value });
  };
  const handleEmailInput = (evt) => {
    setFormData({ ...formData, email: evt.target.value });
  };
  const handleRoleInput = (evt) => {
    setFormData({ ...formData, role: evt.target.value });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.addNewMember(formData);
    setFormData({
      name: "",
      email: "",
      role: "",
    });

    console.log(formData.name);
    console.log(formData.role);
  };

  return (
    <div>
      <h1>Team Member Form</h1>
      <form onSubmit={(evt) => handleSubmit(evt)}>
        <div>
          <label>
            {" "}
            Name:
            <input
              onChange={(evt) => handleNameInput(evt)}
              type="text"
              value={formData.name}
            ></input>
          </label>
          <label>
            Email:
            <input
              onChange={(evt) => handleEmailInput(evt)}
              type="text"
              value={formData.email}
            ></input>
          </label>
          <label>
            Role:
            <select
              onChange={(evt) => handleRoleInput(evt)}
              type="text"
              value={formData.role}
            >
              <option value="">---Select Role---</option>
              <option value="Senior Full Stack Dev">
                Senior Full Stack Dev
              </option>
              <option value="Junior Full Stack Dev">
                Junior Full Stack Dev
              </option>
              <option value="Data Scientist">Data Scientist</option>
              <option value="Frontend Dev">Frontend Dev</option>
              <option value="Backend Dev">Backend Dev</option>
            </select>
          </label>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default MemberForm;
