const userContainer = document.getElementById("user");
const userInfoContainer = document.getElementById("user-info");
const userImg = document.getElementById("user-img");

userContainer.style.display = "none";

fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => {
        const user = data.results[0];
        console.log(user);
        userContainer.style.display = "block";
        userInfoContainer.innerHTML = `<p class="text-xl">
        <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
            </p>
            <p class="text-xl">
                <span class="font-bold">Email: </span> ${user.email}
            </p>
            <p class="text-xl">
                <span class="font-bold">Phone: </span> ${user.phone}
            </p>
            <p class="text-xl">
                <span class="font-bold">Location: </span> ${user.location.city} ${user.location.state}
            </p>
            <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>`;
        userImg.src = user.picture.large;
    })