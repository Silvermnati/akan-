document
  .getElementById("akanForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the form from submitting and reloading the page

    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const gender = document.querySelector('input[name="gender"]:checked').value;

    const calculateDayOfWeek = (day, month, year) => {
      // Correct the Date constructor (months are 0-indexed in JavaScript)
      const date = new Date(year, month - 1, day);
      return date.getDay();
    };

    const akanNames = {
      male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Kofi", "Kwame", "Kwesi"],
      female: ["Akosua", "Adwoa", "Abena", "Akua", "Afia", "Ama", "Akosua"],
    };

    const dayOfWeek = calculateDayOfWeek(day, month, year);

    // Ensure that the gender is properly selected
    const name =
      gender === "male"
        ? akanNames.male[dayOfWeek]
        : akanNames.female[dayOfWeek];

    document.getElementById("result").innerHTML = `Your Akan Name is: ${name}`;
  });
