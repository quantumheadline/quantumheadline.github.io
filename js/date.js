// Function to format the current date to "Day, Month Day, Year" format
function formatDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Get today's date
const today = new Date();

// Get the formatted date string
const formattedDate = formatDate(today);

// Set the content of the link to the formatted date
const dateLink = document.getElementById('date-link');
dateLink.textContent = formattedDate;

// Update the href of the link to point to Time and Date for today's date
const dateString = today.toISOString().split('T')[0]; // "YYYY-MM-DD" format
dateLink.href = `https://www.timeanddate.com`;

