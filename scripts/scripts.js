document
  .getElementById("akanForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const gender = document.querySelector('input[name="gender"]:checked').value;

    const calculateDayOfWeek = (day, month, year) => {
   const date = new Date(year, month, day);
      return date.getDay();
    };

    const akanNames = {
      male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
      female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"],
    };

    const dayOfWeek = calculateDayOfWeek(day, month, year);

    const name =
      gender === "male"
        ? akanNames.male[dayOfWeek]
        : akanNames.female[dayOfWeek];

    document.getElementById("result").innerHTML = `Your Akan Name is: ${name}`;
  });
