
        document.getElementById('ageForm').addEventListener('submit', function(event) {
            event.preventDefault();
            calculateAge();
        });

        function calculateAge() {
            const dob = new Date(document.getElementById('dob').value);
            const today = new Date();
            let age = today.getFullYear() - dob.getFullYear();
            const m = today.getMonth() - dob.getMonth();

            if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
                age--;
            }

            document.getElementById('result').innerText = `Your age is ${age} years.`;
        }
  