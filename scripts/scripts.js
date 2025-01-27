document
  .getElementById("akanForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const gender = document.querySelector('input[name="gender"]:checked').value;

    const calculateDayOfWeek = (day, month, year) => {
   const date = new Date(year, month - 1, day);
      return date.getDay();
    };

    const akanNames = {
      male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Kofi", "Kwame", "Kwesi"],
      female: ["Akosua", "Adwoa", "Abena", "Akua", "Afia", "Ama", "Akosua"],
    };

    const dayOfWeek = calculateDayOfWeek(day, month, year);

    const name =
      gender === "male"
        ? akanNames.male[dayOfWeek]
        : akanNames.female[dayOfWeek];

    document.getElementById("result").innerHTML = `Your Akan Name is: ${name}`;
  });
