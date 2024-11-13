// Example of a simple greeting based on the time of day
const hours = new Date().getHours();
const greeting = hours < 12 ? "Good morning" : hours < 18 ? "Good afternoon" : "Good evening";
alert(`${greeting}, welcome to the Chess Team Website!`);
