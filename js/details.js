// ==========================================
// DOCTOR DETAILS
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const doctorDetails =
        document.getElementById("doctorDetails");


    // Doctor details page check

    if (!doctorDetails) {
        return;
    }


    // Get doctor ID from URL

    const params =
        new URLSearchParams(window.location.search);

    const doctorId =
        params.get("id");


    // ==========================================
    // DOCTORS DATA
    // ==========================================

    const doctors = {

        rahul: {
            name: "Dr. Rahul Sharma",
            department: "Cardiology",
            experience: "12 Years",
            fee: "₹800",
            education: "MBBS, MD - Cardiology",
            hospital: "MedCare Heart & Cardiac Center",
            timing: "Monday - Friday, 10:00 AM - 2:00 PM",
            image: "assets/rahul.jpg",
            about: "Dr. Rahul Sharma is an experienced cardiologist specializing in heart health, preventive cardiology and cardiac care."
        },


        priya: {
            name: "Dr. Priya Verma",
            department: "Dermatology",
            experience: "9 Years",
            fee: "₹600",
            education: "MBBS, MD - Dermatology",
            hospital: "MedCare Skin & Wellness Center",
            timing: "Monday - Saturday, 11:00 AM - 3:00 PM",
            image: "assets/priya.jpg",
            about: "Dr. Priya Verma specializes in skin, hair and cosmetic dermatology with a patient-focused approach."
        },


        amit: {
            name: "Dr. Amit Singh",
            department: "Neurology",
            experience: "15 Years",
            fee: "₹1000",
            education: "MBBS, MD - Neurology",
            hospital: "MedCare Neuro Care Center",
            timing: "Monday - Friday, 9:00 AM - 1:00 PM",
            image: "assets/amit.jpg",
            about: "Dr. Amit Singh is a senior neurologist specializing in neurological disorders, headaches and nerve-related conditions."
        },


        neha: {
            name: "Dr. Neha Gupta",
            department: "Pediatrics",
            experience: "8 Years",
            fee: "₹500",
            education: "MBBS, MD - Pediatrics",
            hospital: "MedCare Children's Hospital",
            timing: "Monday - Saturday, 10:00 AM - 2:00 PM",
            image: "assets/neha.jpg",
            about: "Dr. Neha Gupta provides comprehensive healthcare services for infants, children and teenagers."
        },


        arjun: {
            name: "Dr. Arjun Mehta",
            department: "Orthopedics",
            experience: "11 Years",
            fee: "₹700",
            education: "MBBS, MS - Orthopedics",
            hospital: "MedCare Orthopedic Center",
            timing: "Monday - Friday, 2:00 PM - 6:00 PM",
            image: "assets/arjun.jpg",
            about: "Dr. Arjun Mehta specializes in bone, joint and muscle care, including orthopedic consultation and rehabilitation."
        },


        sneha: {
            name: "Dr. Sneha Kapoor",
            department: "Gynecology",
            experience: "10 Years",
            fee: "₹750",
            education: "MBBS, MD - Gynecology",
            hospital: "MedCare Women's Health Center",
            timing: "Monday - Saturday, 9:00 AM - 1:00 PM",
            image: "assets/sneha.jpg",
            about: "Dr. Sneha Kapoor specializes in women's health, reproductive care and routine gynecological consultations."
        }

    };


    // ==========================================
    // SHOW DOCTOR DETAILS
    // ==========================================

    if (doctorId && doctors[doctorId]) {

        const doctor =
            doctors[doctorId];


        doctorDetails.innerHTML = `

            <div class="doctor-detail-top">

                <div class="doctor-detail-image">

                    <img
                        src="${doctor.image}"
                        alt="${doctor.name}"
                    >

                </div>


                <div class="doctor-detail-main">

                    <h1>
                        ${doctor.name}
                    </h1>

                    <p class="detail-department">
                        ${doctor.department}
                    </p>

                    <p>
                        <strong>
                            Experience:
                        </strong>

                        ${doctor.experience}
                    </p>

                    <p>
                        <strong>
                            Consultation Fee:
                        </strong>

                        ${doctor.fee}
                    </p>

                </div>

            </div>


            <div class="doctor-detail-content">


                <div class="detail-item">

                    <h3>
                        About Doctor
                    </h3>

                    <p>
                        ${doctor.about}
                    </p>

                </div>


                <div class="detail-item">

                    <h3>
                        Education
                    </h3>

                    <p>
                        ${doctor.education}
                    </p>

                </div>


                <div class="detail-item">

                    <h3>
                        Hospital / Clinic
                    </h3>

                    <p>
                        ${doctor.hospital}
                    </p>

                </div>


                <div class="detail-item">

                    <h3>
                        Available Timing
                    </h3>

                    <p>
                        ${doctor.timing}
                    </p>

                </div>


            </div>


            <div class="detail-booking">

                <a
                    href="booking.html?doctor=${doctorId}"
                    class="btn"
                >
                    Book Appointment
                </a>

            </div>

        `;

    } else {

        doctorDetails.innerHTML = `

            <div class="no-doctor-details">

                <h2>
                    Doctor Not Found
                </h2>

                <p>
                    Please select a doctor from
                    the doctors page.
                </p>

                <a
                    href="doctors.html"
                    class="btn"
                >
                    View Doctors
                </a>

            </div>

        `;

    }

});