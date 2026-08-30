document.addEventListener("DOMContentLoaded", function () {

    const confirmationCard =
        document.getElementById("confirmationCard");


    // Get appointment ID from URL

    const params =
        new URLSearchParams(window.location.search);

    const appointmentId =
        params.get("id");


    // Get saved appointments

    const appointments =
        JSON.parse(
            localStorage.getItem("appointments")
        ) || [];


    // Find appointment

    const appointment =
        appointments.find(function (item) {

            return String(item.id) === String(appointmentId);

        });


    // Show appointment

    if (appointment) {

        confirmationCard.innerHTML = `

            <div class="success-icon">
                ✓
            </div>

            <h1>
                Appointment Confirmed!
            </h1>

            <p class="confirmation-message">
                Your appointment has been successfully booked.
            </p>


            <div class="appointment-details">

                <div class="confirmation-item">

                    <span>Appointment ID</span>

                    <strong>
                        ${appointment.id}
                    </strong>

                </div>


                <div class="confirmation-item">

                    <span>Doctor</span>

                    <strong>
                        ${appointment.doctor}
                    </strong>

                </div>


                <div class="confirmation-item">

                    <span>Patient Name</span>

                    <strong>
                        ${appointment.patientName}
                    </strong>

                </div>


                <div class="confirmation-item">

                    <span>Email</span>

                    <strong>
                        ${appointment.email}
                    </strong>

                </div>


                <div class="confirmation-item">

                    <span>Phone</span>

                    <strong>
                        ${appointment.phone}
                    </strong>

                </div>


                <div class="confirmation-item">

                    <span>Appointment Date</span>

                    <strong>
                        ${appointment.date}
                    </strong>

                </div>


                <div class="confirmation-item">

                    <span>Appointment Time</span>

                    <strong>
                        ${appointment.time}
                    </strong>

                </div>


                <div class="confirmation-item">

                    <span>Reason</span>

                    <strong>
                        ${appointment.reason || "General Consultation"}
                    </strong>

                </div>

            </div>


            <div class="confirmation-actions">

                <a
                    href="doctors.html"
                    class="btn"
                >
                    Find Another Doctor
                </a>

                <a
                    href="history.html"
                    class="btn secondary-btn"
                >
                    View Appointment History
                </a>

            </div>

        `;

    } else {

        confirmationCard.innerHTML = `

            <div class="no-confirmation">

                <h2>
                    Appointment Not Found
                </h2>

                <p>
                    Appointment details could not be found.
                </p>

                <a
                    href="doctors.html"
                    class="btn"
                >
                    Go to Doctors
                </a>

            </div>

        `;

    }

});