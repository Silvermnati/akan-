function generateAkanName(event) {
  event.preventDefault();

  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  const gender = document.querySelector('input[name="gender"]:checked')?.value;

  if (!day || !month || !year || !gender) {
    document.getElementById("result").innerText = "Please fill in all fields.";
    return;
  }

  let adjustedMonth = month;
  let adjustedYear = year;

  if (month <= 2) {
    adjustedMonth += 12;
    adjustedYear -= 1;
  }

  const CC = Math.floor(adjustedYear / 100); 
  const h =
    (day +
      Math.floor((13 * (adjustedMonth + 1)) / 5) +
      YY +
      Math.floor(YY / 4) +
      Math.floor(CC / 4) -
      2 * CC) %
    7;

  const daysOfWeek = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

  const dayOfWeek = daysOfWeek[h];

  const akanNames = {
    Monday: { male: "Kwasi", female: "Akosua" },
    Tuesday: { male: "Kwabena", female: "Abena" },
    Wednesday: { male: "Kwaku", female: "Akua" },
    Thursday: { male: "Yaw", female: "Yaa" },
    Friday: { male: "Kofi", female: "Afia" },
    Saturday: { male: "Kwame", female: "Ama" },
    Sunday: { male: "Kwasi", female: "Akosua" },
  };

  if (akanNames[capitalizedDay] && gender) {
    const akanName = akanNames[capitalizedDay][gender];
    document.getElementById(
      "result"
    ).innerText = `Your Akan name is: ${akanName}`;
  } else {
    document.getElementById("result").innerText =
      "Invalid input. Please check the day or select a gender.";
  }
}

document
  .getElementById("akanForm")
  .addEventListener("submit", generateAkanName);
