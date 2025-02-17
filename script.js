document.addEventListener("DOMContentLoaded", async () => {
    const userList = document.getElementById("user-list");
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        userList.innerHTML = users.map(user => `
            <div class="user" data-id="${user.id}">
                <h3>${user.name}</h3>
                <p>${user.email}</p>
            </div>
        `).join("");
        document.querySelectorAll(".user").forEach(user => {
            user.addEventListener("click", () => {
                window.location.href = `user-detail.html?id=${user.dataset.id}`;
            });
        });
    } catch (error) {
        console.error("Error fetching users:", error);
        userList.innerHTML = "<p>ไม่สามารถโหลดข้อมูลได้</p>";
    }
});