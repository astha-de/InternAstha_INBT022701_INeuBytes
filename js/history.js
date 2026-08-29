// ==========================================
// APPOINTMENT HISTORY
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const appointmentList =
        document.getElementById("appointmentList");


    // Get appointments

    const appointments =
        JSON.parse(
            localStorage.getItem("appointments")
        ) || [];


    // No appointments

    if (appointments.length === 0) {

        appointmentList.innerHTML = `

            <div class="no-appointments">

                <h2>
                    No Appointments Found
                </h2>

                <p>
                    You have not booked any appointment yet.
                </p>

                <a
                    href="doctors.html"
                    class="btn"
                >
                    Find a Doctor
                </a>

            </div>

        `;

        return;
    }


    // Show appointments

    appointments.forEach(function (appointment) {

        const appointmentCard =
            document.createElement("div");

        appointmentCard.className =
            "appointment-card";


        appointmentCard.innerHTML = `

            <div class="appointment-header">

                <h2>
                    ${appointment.doctor}
                </h2>

                <span class="appointment-status">
                    Confirmed
                </span>

            </div>


            <div class="appointment-info">

                <div>

                    <span>
                        Patient Name
                    </span>

                    <strong>
                        ${appointment.patientName}
                    </strong>

                </div>


                <div>

                    <span>
                        Date
                    </span>

                    <strong>
                        ${appointment.date}
                    </strong>

                </div>


                <div>

                    <span>
                        Time
                    </span>

                    <strong>
                        ${appointment.time}
                    </strong>

                </div>


                <div>

                    <span>
                        Phone
                    </span>

                    <strong>
                        ${appointment.phone}
                    </strong>

                </div>


                <div>

                    <span>
                        Email
                    </span>

                    <strong>
                        ${appointment.email}
                    </strong>

                </div>


                <div>

                    <span>
                        Reason
                    </span>

                    <strong>
                        ${appointment.reason || "General Consultation"}
                    </strong>

                </div>

            </div>


            <div class="appointment-id">

                Appointment ID:
                <strong>
                    ${appointment.id}
                </strong>

            </div>

        `;


        appointmentList.appendChild(
            appointmentCard
        );

    });

});