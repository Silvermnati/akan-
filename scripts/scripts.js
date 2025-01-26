function generateAkanName(event) {



  const capitalizedDay =
    day.charAt(0).toUpperCase() + day.slice(1).toLowerCase();

  console.log("Capitalized Day: ", capitalizedDay);

  if (akanNames[capitalizedDay] && gender) {
    const akanName = akanNames[capitalizedDay][gender];

    document.getElementById(
      "result"
    ).innerText = `Your Akan name is: ${akanName}`;
  } else {
    console.log("Invalid input.");
    document.getElementById("result").innerText =
      "Invalid input. Please check the day or select a gender.";
  }
}



document
  .getElementById("akanForm")
  .addEventListener("submit", generateAkanName);