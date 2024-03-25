import React from "react";

export const List = ({ userList = [] }) => {
  return (
    <div>
      <ul>
        {userList.map((name, i) => {
          return <li key={i}>{name}</li>;
        })}
      </ul>
    </div>
  );
};
