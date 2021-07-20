import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import TeamMembers from "./components/teammembers";
import MemberForm from "./components/memberForm";

const placeHolderData = [
  { name: "Derek", email: "derek@derek.com", role: "Senior Full Stack Dev" },
  { name: "Trevor", email: "trevor@trevor.com", role: "Junior Full Stack Dev" },
];

function App() {
  const [team, setTeam] = useState(placeHolderData);
  const addNewMember = (newUser) => {
    setTeam([...team, newUser]);
  };

  return (
    <div className="App">
      {/* <TeamMembers teamMember={placeHolderData[0]} /> */}
      {team.map((member) => {
        return <TeamMembers teamMember={member} />;
      })}
      <MemberForm addNewMember={addNewMember} />
    </div>
  );
}

export default App;
