
function showHome() {
    document.getElementById("homePage").classList.remove("hidden");
    document.getElementById("formPage").classList.add("hidden");
    document.getElementById("confirmationPage").classList.add("hidden");
}

function showForm() {
    document.getElementById("homePage").classList.add("hidden");
    document.getElementById("formPage").classList.remove("hidden");
    document.getElementById("confirmationPage").classList.add("hidden");
}

document.getElementById("registrationForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const department = document.getElementById("department").value.trim();
        const email = document.getElementById("email").value.trim();
        const selectedEvent = document.getElementById("event").value;

        if (!name || !department || !email || !selectedEvent) {
            alert("Please fill in all the details.");
            return;
        }

        document.getElementById("studentName").textContent = name;
        document.getElementById("selectedEvent").textContent = selectedEvent;

        document.getElementById("homePage").classList.add("hidden");
        document.getElementById("formPage").classList.add("hidden");
        document.getElementById("confirmationPage").classList.remove("hidden");

        window.scrollTo(0, 0);

        this.reset();
    });
