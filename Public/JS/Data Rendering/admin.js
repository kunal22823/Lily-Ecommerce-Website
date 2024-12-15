document.addEventListener("DOMContentLoaded", () => {
    fetch('/users')
        .then(response => response.json())
        .then(data => {
            const users = data.users;
            const userCount = data.userCount;
            const userList = document.getElementById('user-list');
            const template = document.getElementById('user-template');

            userList.innerHTML = '';  // Clear any existing content

            users.forEach(user => {
                const clone = template.content.cloneNode(true);

                clone.querySelector('.user-firstname').textContent = user.firstname;
                clone.querySelector('.user-lastname').textContent = user.lastname;
                clone.querySelector('.user-email').textContent = user.email;
                clone.querySelector('.user-contact').textContent = user.contact;

                userList.appendChild(clone);
            });

            // Display total user count
            const countDisplay = document.getElementById('countUser');
            countDisplay.textContent = `${userCount}`;
            userList.prepend(countDisplay); // Add it at the top
        })
        .catch(error => console.error('Error fetching user data:', error));
});
