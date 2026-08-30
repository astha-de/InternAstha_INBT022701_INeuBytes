// ==========================================
// APPOINTMENT BOOKING
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const bookingForm =
        document.getElementById("bookingForm");

    const doctorSelect =
        document.getElementById("doctor");

    const dateInput =
        document.getElementById("appointmentDate");


    // ==========================================
    // GET DOCTOR FROM URL
    // ==========================================

    const params =
        new URLSearchParams(window.location.search);

    const doctorId =
        params.get("doctor");


    const doctorNames = {

        rahul: "Dr. Rahul Sharma",

        priya: "Dr. Priya Verma",

        amit: "Dr. Amit Singh",

        neha: "Dr. Neha Gupta",

        arjun: "Dr. Arjun Mehta",

        sneha: "Dr. Sneha Kapoor"

    };


    // Automatically select doctor

    if (doctorId && doctorNames[doctorId]) {

        doctorSelect.value =
            doctorNames[doctorId];

    }


    // ==========================================
    // SET MINIMUM DATE
    // ==========================================

    const today =
        new Date().toISOString().split("T")[0];

    dateInput.min = today;


    // ==========================================
    // FORM SUBMIT
    // ==========================================

    bookingForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            // Get form values

            const doctor =
                doctorSelect.value;

            const patientName =
                document
                    .getElementById("patientName")
                    .value
                    .trim();

            const email =
                document
                    .getElementById("email")
                    .value
                    .trim();

            const phone =
                document
                    .getElementById("phone")
                    .value
                    .trim();

            const appointmentDate =
                document
                    .getElementById("appointmentDate")
                    .value;

            const appointmentTime =
                document
                    .getElementById("appointmentTime")
                    .value;

            const reason =
                document
                    .getElementById("reason")
                    .value
                    .trim();


            // ==========================================
            // VALIDATION
            // ==========================================

            if (
                !doctor ||
                !patientName ||
                !email ||
                !phone ||
                !appointmentDate ||
                !appointmentTime
            ) {

                alert(
                    "Please fill all required fields."
                );

                return;

            }


            // Phone validation

            const phonePattern =
                /^[0-9]{10}$/;

            if (!phonePattern.test(phone)) {

                alert(
                    "Please enter a valid 10-digit phone number."
                );

                return;

            }


            // ==========================================
            // SAVE APPOINTMENT
            // ==========================================

            const appointment = {

                id: Date.now(),

                doctor: doctor,

                patientName: patientName,

                email: email,

                phone: phone,

                date: appointmentDate,

                time: appointmentTime,

                reason: reason

            };


            // Get previous appointments

            let appointments =
                JSON.parse(
                    localStorage.getItem(
                        "appointments"
                    )
                ) || [];


            // Add new appointment

            appointments.push(appointment);


            // Save

            localStorage.setItem(
                "appointments",
                JSON.stringify(appointments)
            );


            // ==========================================
            // GO TO CONFIRMATION
            // ==========================================

            window.location.href =
                "confirmation.html?id=" +
                appointment.id;

        }
    );

});