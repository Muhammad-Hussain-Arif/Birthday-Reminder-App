//src/App.js
import React, { useState } from 'react';
import BirthdayList from './BirthdayList';
import BirthdayForm from './BirthdayForm';
import './App.css';
import moment from 'moment';

const App = () => {
  const [birthdays, setBirthdays] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const addBirthday = (newBirthday) => {
    const { name, date } = newBirthday;

    // Check if the birthday is upcoming or has passed
    const today = new Date();
    const inputDate = new Date(date);
    const isUpcoming = inputDate >= today;

    // Display a message based on the date comparison
    if (isUpcoming) {
      alert(`Upcoming birthday for ${name} on ${date}!`);
    } else {
      alert(`Oops! ${name}'s birthday on ${date} has already passed.`);
    }

    // Include the new birthday in the list
    setBirthdays([...birthdays, newBirthday]);
  };

  const editBirthday = (id, updatedBirthday) => {
    const updatedBirthdays = birthdays.map((birthday) =>
      birthday.id === id ? updatedBirthday : birthday
    );
    setBirthdays(updatedBirthdays);
  };

  const removeBirthday = (id) => {
    const updatedBirthdays = birthdays.filter((birthday) => birthday.id !== id);
    setBirthdays(updatedBirthdays);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const filterUpcomingBirthdays = () => {
    const today = moment();
    return birthdays.filter((birthday) => {
      const birthdayDate = moment(birthday.date);
      return birthdayDate.isSameOrAfter(today);
    });
  };

  const upcomingBirthdays = filterUpcomingBirthdays();

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <div className="toggle-container">
        <span>Light Mode</span>
        <label className="switch">
          <input type="checkbox" onChange={toggleDarkMode} checked={darkMode} />
          <span className="slider round"></span>
        </label>
        <span>Dark Mode</span>
        </div>
      <h1>Birthday Reminder App</h1>
      <BirthdayForm addBirthday={addBirthday} />
      {/* Display upcoming birthdays within BirthdayList component */}
      <BirthdayList birthdays={upcomingBirthdays} editBirthday={editBirthday} removeBirthday={removeBirthday} />
      <a href="https://github.com/Muhammad-Hussain-Arif" target="_blank" rel="noreferrer">
              Muhammad Hussain Arif
            </a>
    </div>
  );
};

export default App;
