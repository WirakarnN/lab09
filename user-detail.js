document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("id");
    const userDetail = document.getElementById("user-detail");
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const user = await response.json();
        userDetail.innerHTML = `
            <h2>${user.name}</h2>
            <p>Username: ${user.username}</p>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            <p>Website: <a href="http://${user.website}" target="_blank">${user.website}</a></p>
            <button id="view-posts" class="view-posts-btn">ดูโพสต์ทั้งหมด</button>
        `;
        document.getElementById("view-posts").addEventListener("click", () => {
            window.location.href = `user-posts.html?id=${userId}`;
        });
    } catch (error) {
        console.error("Error fetching user details:", error);
        userDetail.innerHTML = "<p>ไม่สามารถโหลดข้อมูลผู้ใช้ได้</p>";
    }
});