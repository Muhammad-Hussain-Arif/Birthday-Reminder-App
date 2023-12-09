// src/BirthdayList.js
import React from 'react';

const BirthdayList = ({ birthdays, editBirthday, removeBirthday }) => {
  return (
    <div>
      <h2>Upcoming Birthdays</h2>
      <ul>
        {birthdays.map((birthday) => (
          <li key={birthday.id}>
            {birthday.name} - {birthday.date}
            <button onClick={() => editBirthday(birthday.id, { ...birthday, name: prompt('Enter new name:', birthday.name) })}>
              Edit
            </button>
            <button onClick={() => removeBirthday(birthday.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BirthdayList;
