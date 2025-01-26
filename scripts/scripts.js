const akanNames = {
  Monday: { male: "Kwadwo", female: "Adwoa" },
  Tuesday: { male: "Kwabena", female: "Abena" },
  Wednesday: { male: "Kwaku", female: "Akua" },
  Thursday: { male: "Yaw", female: "Yaw" },
  Friday: { male: "Kofi", female: "Afia" },
  Saturday: { male: "Kwame", female: "Ama" },
  Sunday: { male: "Kwasi", female: "Akosua" },
};

function generateAkanName() {
  const day = document.getElementById("day").value.trim();
  const gender = document.getElementById("gender").value.trim().toLowerCase();

  const capitalizedDay =
    day.charAt(0).toUpperCase() + day.slice(1).toLowerCase();

  if (akanNames[capitalizedDay] && akanNames[capitalizedDay][gender]) {
    const akanName = akanNames[capitalizedDay][gender];
    document.getElementById(
      "result"
    ).innerText = `Your Akan name is: ${akanName}`;
  } else {
    document.getElementById("result").innerText =
      "Invalid input. Please check the day or gender.";
  }
  event.prevent default behaviour
}
