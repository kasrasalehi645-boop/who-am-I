const SUPABASE_URL = "https://kfryvmcirmuyayfgxilw.supabase.co";

const SUPABASE_KEY = "sb_publishable_o8OVO82ATh8N2y_veVKqsA_otz_G6hc";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

const form = document.getElementById("userForm");

form.addEventListener("submit", async function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = Number(document.getElementById("age").value);
    const city = document.getElementById("city").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (!name || !city || !Number.isInteger(age) || age <= 0) {
        alert("لطفاً اطلاعات را درست وارد کنید!");
        return;
    }

    const { data, error } = await supabaseClient
        .from("users")
        .insert([
            {
                name: name,
                age: age,
                city: city,
                phone: phone || null
            }
        ]);

    if (error) {
        console.error(error);
        alert("ثبت اطلاعات انجام نشد!");
        return;
    }

    alert("اطلاعات با موفقیت ثبت شد!");

    form.reset();

});