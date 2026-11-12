const SUPABASE_URL = "https://kfryvmcirmuyayfgxilw.supabase.co";
const SUPABASE_KEY = "sb_publishable_o8OVO82ATh8N2y_veVKqsA_otz_G6hc";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password
    });

    const message = document.getElementById("loginMessage");

    if (error) {
        console.error(error);
        message.textContent = "ورود ناموفق بود!";
        return;
    }

    message.textContent = "ورود موفقیت‌آمیز بود!";
    loginForm.style.display = "none";

document.getElementById("dashboard").style.display = "block";
document.getElementById("loadUsers").addEventListener("click", async function () {

    const { data, error } = await supabaseClient
        .from("users")
        .select("id, name, age, city, created_at");

    if (error) {
        console.error(error);
        alert("خطا در دریافت اطلاعات کاربران!");
        return;
    }
    console.log("DATA:", data);
console.log("DATA TYPE:", typeof data);
console.log("IS ARRAY:", Array.isArray(data));

    document.getElementById("totalUsers").textContent = data.length;
const usersList = document.getElementById("usersList");

usersList.innerHTML = "";

data.forEach(function(user) {

    const userCard = document.createElement("div");

    const name = document.createElement("h3");
    name.textContent = user.name;

    const age = document.createElement("p");
    age.textContent = "سن: " + user.age;

    const city = document.createElement("p");
    city.textContent = "شهر: " + user.city;

    userCard.appendChild(name);
    userCard.appendChild(age);
    userCard.appendChild(city);

    usersList.appendChild(userCard);

});
});


});
