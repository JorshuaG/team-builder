import React from "react";

function TeamMembers(props) {
  return (
    <div>
      <h1>{props.teamMember.name}</h1>
      <p>{props.teamMember.email}</p>
      <p>{props.teamMember.role}</p>
    </div>
  );
}

export default TeamMembers;
