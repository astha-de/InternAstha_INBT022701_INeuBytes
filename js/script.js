document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("doctorSearch");
    const departmentSelect = document.getElementById("departmentFilter");
    const searchButton = document.getElementById("searchDoctorBtn");
    const doctorCards = document.querySelectorAll(".doctor-card");
    const noDoctorMessage = document.getElementById("noDoctorMessage");


    searchButton.addEventListener("click", function () {

        const searchValue = searchInput.value
            .trim()
            .toLowerCase();

        const departmentValue = departmentSelect.value;

        let found = 0;


        doctorCards.forEach(function (card) {

            const doctorName = card
                .getAttribute("data-name")
                .toLowerCase();

            const doctorDepartment = card
                .getAttribute("data-department");


            const nameMatch =
                searchValue === "" ||
                doctorName.includes(searchValue);

            const departmentMatch =
                departmentValue === "all" ||
                doctorDepartment === departmentValue;


            if (nameMatch && departmentMatch) {

                card.style.display = "block";
                found++;

            } else {

                card.style.display = "none";

            }

        });


        if (found === 0) {

            noDoctorMessage.style.display = "block";

        } else {

            noDoctorMessage.style.display = "none";

        }

    });

});