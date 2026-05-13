document.getElementById("joinBtn").addEventListener("click", function () {
    window.location.href = "signup.html";
});

const data = ["Ankara Dress", "Casual Wear", "Luxury Gown", "Street Style"];

document.getElementById("searchBtn").addEventListener("click", function () {
    const query = document.getElementById("searchInput").value.toLowerCase();

    const results = data.filter(item =>
        item.toLowerCase().includes(query)
    );

    document.getElementById("results").innerHTML =
        results.length > 0
            ? results.join("<br>")
            : "No styles found";
});

document.getElementById("loginBtn").addEventListener("click", function () {
    alert("Login feature coming soon!");
});

function openDetails(styleName) {
    localStorage.setItem("selectedStyle", styleName);
    window.location.href = "details.html";
}

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (email === "test@gmail.com" && password === "1234") {
        res.json({ message: "Login successful" });
    } else {
        res.json({ message: "Invalid credentials" });
    }
});
