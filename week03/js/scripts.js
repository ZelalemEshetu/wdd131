// Footer: current year and last modified
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  const lastModifiedSpan = document.getElementById("lastModified");

  const now = new Date();
  yearSpan.textContent = now.getFullYear();
  lastModifiedSpan.textContent = document.lastModified;

  // Weather values
  const temp = parseFloat(document.getElementById("temp").textContent);
  const wind = parseFloat(document.getElementById("wind").textContent);
  const chillSpan = document.getElementById("chill");

  // Calculate Wind Chill (Celsius formula)
  function calculateWindChill(t, v) {
    return (
      13.12 +
      0.6215 * t -
      11.37 * Math.pow(v, 0.16) +
      0.3965 * t * Math.pow(v, 0.16)
    ).toFixed(1);
  }

  // Conditions for valid wind chill
  if (temp <= 10 && wind > 4.8) {
    chillSpan.textContent = calculateWindChill(temp, wind) + " °C";
  } else {
    chillSpan.textContent = "N/A";
  }
});
