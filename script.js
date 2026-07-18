// Explore Button
const exploreBtn = document.querySelector(".hero button");

exploreBtn.addEventListener("click", function () {
    alert("Start exploring amazing destinations!");
});

// All Buttons
const buttons = document.querySelectorAll("button");

buttons.forEach(function(button){
    button.addEventListener("click", function(){
        console.log(button.innerText + " clicked");
    });
});
function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name == "") {
        alert("❌ Please enter your name.");
        return false;
    }

    if (email == "") {
        alert("❌ Please enter your email.");
        return false;
    }

    if (!email.includes("@")) {
        alert("❌ Please enter a valid email address.");
        return false;
    }

    if (message == "") {
        alert("❌ Please enter your message.");
        return false;
    }

    alert("✅ Thank you! Your message has been sent successfully.");
    return true;
}

function searchDestination() {

    let input = document.getElementById("searchInput").value.toLowerCase();

    let cards = document.querySelectorAll("#destinations .card");

    cards.forEach(function(card) {

        let title = card.querySelector("h2").textContent.toLowerCase();

        if (title.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

}
function bookTrip() {

    let name = document.getElementById("bookName").value;
    let email = document.getElementById("bookEmail").value;
    let phone = document.getElementById("bookPhone").value;
    let destination = document.getElementById("destination").value;
    let date = document.getElementById("travelDate").value;
    let people = document.getElementById("people").value;

    if (name == "") {
        alert("❌ Please enter your name.");
        return false;
    }

    if (email == "") {
        alert("❌ Please enter your email.");
        return false;
    }

    if (phone == "") {
        alert("❌ Please enter your phone number.");
        return false;
    }

    if (destination == "") {
        alert("❌ Please select a destination.");
        return false;
    }

    if (date == "") {
        alert("❌ Please select a travel date.");
        return false;
    }

    if (people == "" || people <= 0) {
        alert("❌ Please enter the number of travelers.");
        return false;
    }

    // Random Booking ID
    let id = "BW" + Math.floor(Math.random() * 100000);

    // Show Receipt
    document.getElementById("bookingId").innerHTML = id;
    document.getElementById("receiptName").innerHTML = name;
    document.getElementById("receiptDestination").innerHTML = destination;
    document.getElementById("receiptDate").innerHTML = date;
    document.getElementById("receiptPersons").innerHTML = people;

    let today = new Date();
    document.getElementById("receiptTime").innerHTML = today.toLocaleString();

    document.getElementById("receipt").style.display = "block";
    document.getElementById("receipt").scrollIntoView({
        behavior: "smooth"
    });

    // Save booking details for payment page
    localStorage.setItem("bookingId", id);
    localStorage.setItem("bookingName", name);
    localStorage.setItem("bookingDestination", destination);
    localStorage.setItem("bookingDate", date);
    localStorage.setItem("bookingPeople", people);

    // Clear the form
    document.getElementById("bookName").value = "";
    document.getElementById("bookEmail").value = "";
    document.getElementById("bookPhone").value = "";
    document.getElementById("destination").selectedIndex = 0;
    document.getElementById("travelDate").value = "";
    document.getElementById("people").value = "";

    // Go to Payment Page
    window.location.href = "payment.html";

    return false;
}

// Loading Screen

window.onload = function () {

    if(sessionStorage.getItem("loaded")){

        document.getElementById("loader").style.display = "none";
        document.getElementById("content").style.display = "block";

    }else{

        sessionStorage.setItem("loaded","true");

        setTimeout(function(){

            document.getElementById("loader").style.display = "none";
            document.getElementById("content").style.display = "block";

        },3000);

    }

};
   
// FAQ Toggle

function toggleFAQ(question){

    let answer = question.nextElementSibling;

    if(answer.style.display === "block"){

        answer.style.display = "none";

    }else{

        answer.style.display = "block";

    }

}

// Dark Mode

function toggleDarkMode(){

    document.body.classList.toggle("dark-mode");

}

// Back to Top Button

let topButton = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){

        topButton.style.display = "block";

    }else{

        topButton.style.display = "none";

    }

};

function topFunction(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}

// Customer Reviews

function addReview(){

    let name = document.getElementById("reviewName").value;
    let rating = document.getElementById("reviewRating").value;
    let review = document.getElementById("reviewText").value;

    let reviewList = document.getElementById("reviewList");

    reviewList.innerHTML =
    `
    <div class="review-card">
        <h3>${name}</h3>
        <p>${rating}</p>
        <p>${review}</p>
    </div>
    ` + reviewList.innerHTML;

    document.getElementById("reviewForm").reset();

    return false;
}

// Automatic Image Slider

let slideIndex = 0;
showSlides();

function showSlides(){

    let slides = document.getElementsByClassName("slide");

    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slideIndex++;

    if(slideIndex > slides.length){
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000);

}

// Budget Calculator

function calculateBudget() {

    let people = document.getElementById("budgetPeople").value;
    let days = document.getElementById("days").value;
    let price = document.getElementById("package").value;

    if (people == "" || days == "" || price == "") {
        alert("Please fill all details.");
        return;
    }

    let total = people * days * price;

    document.getElementById("totalCost").innerHTML =
        "💰 Estimated Budget: ₹" + total;

    // Clear the form automatically
    document.getElementById("budgetPeople").value = "";
    document.getElementById("days").value = "";
    document.getElementById("package").value = "";
}

function viewDetails(place) {

    let title = "";
    let image = "";
    let description = "";

    switch(place){

        case "Goa":
            title="🏖 Goa";
            image="images/goa.jpg";
            description="⭐ Rating: 4.8/5\n\n📍 Goa, India\n🌤 Best Time: Nov - Feb\n💰 ₹15,999";
            break;

        case "Manali":
            title="🏔 Manali";
            image="images/manali.jpg";
            description="⭐ Rating: 4.9/5\n\n📍 Himachal Pradesh\n🌤 Best Time: Oct - Feb\n💰 ₹18,999";
            break;

        case "Kerala":
            title="🌴 Kerala";
            image="images/kerala.jpg";
            description="⭐ Rating: 4.8/5\n\n📍 Kerala\n🌤 Best Time: Sep - Mar\n💰 ₹17,999";
            break;

        case "Ooty":
            title="🌄 Ooty";
            image="images/ooty.jpg";
            description="⭐ Rating: 4.7/5\n\n📍 Tamil Nadu\n🌤 Best Time: Oct - Jun\n💰 ₹12,999";
            break;

        case "Kashmir":
            title="🏞 Kashmir";
            image="images/kashmir.jpg";
            description="⭐ Rating: 4.9/5\n\n📍 Jammu & Kashmir\n🌤 Best Time: Mar - Oct\n💰 ₹22,999";
            break;

        case "Mysore":
            title="🏰 Mysore";
            image="images/mysore.jpg";
            description="⭐ Rating: 4.7/5\n\n📍 Karnataka\n🌤 Best Time: Oct - Feb\n💰 ₹10,999";
            break;

        case "Jaipur":
            title="🕌 Jaipur";
            image="images/jaipur.jpg";
            description="⭐ Rating: 4.8/5\n\n📍 Rajasthan\n🌤 Best Time: Oct - Mar\n💰 ₹14,999";
            break;

        case "Andaman":
            title="🏝 Andaman";
            image="images/andaman.jpg";
            description="⭐ Rating: 4.9/5\n\n📍 Andaman & Nicobar\n🌤 Best Time: Oct - May\n💰 ₹24,999";
            break;

        case "Ladakh":
            title="🏔 Ladakh";
            image="images/ladakh.jpg";
            description="⭐ Rating: 4.9/5\n\n📍 Ladakh\n🌤 Best Time: Jun - Sep\n💰 ₹28,999";
            break;

        case "Coorg":
            title="☕ Coorg";
            image="images/coorg.jpg";
            description="⭐ Rating: 4.8/5\n\n📍 Karnataka\n🌤 Best Time: Oct - Mar\n💰 ₹13,999";
            break;

        case "Munnar":
            title="🌿 Munnar";
            image="images/munnar.jpg";
            description="⭐ Rating: 4.9/5\n\n📍 Kerala\n🌤 Best Time: Sep - Mar\n💰 ₹16,999";
            break;

        case "Udaipur":
            title="🏰 Udaipur";
            image="images/udaipur.jpg";
            description="⭐ Rating: 4.8/5\n\n📍 Rajasthan\n🌤 Best Time: Oct - Mar\n💰 ₹18,999";
            break;

        case "Shimla":
            title="❄ Shimla";
            image="images/shimla.jpg";
            description="⭐ Rating: 4.8/5\n\n📍 Himachal Pradesh\n🌤 Best Time: Mar - Jun\n💰 ₹17,499";
            break;

        case "Darjeeling":
            title="🚂 Darjeeling";
            image="images/darjeeling.jpg";
            description="⭐ Rating: 4.8/5\n\n📍 West Bengal\n🌤 Best Time: Mar - May\n💰 ₹16,499";
            break;

        case "Manipur":
            title="🌿 Manipur";
            image="images/manipur.jpg";
            description="⭐ Rating: 4.6/5\n\n📍 Manipur\n🌤 Best Time: Oct - Apr\n💰 ₹19,999";
            break;

        case "Karnataka":
            title="🌳 Karnataka";
            image="images/karnataka.jpg";
            description="⭐ Rating: 4.8/5\n\n📍 Karnataka\n🌤 Best Time: Oct - Mar\n💰 ₹16,999";
            break;

        case "Tamil Nadu":
            title="🛕 Tamil Nadu";
            image="images/tamilnadu.jpg";
            description="⭐ Rating: 4.8/5\n\n📍 Tamil Nadu\n🌤 Best Time: Nov - Mar\n💰 ₹16,499";
            break;

        case "Andhra Pradesh":
            title="🏞 Andhra Pradesh";
            image="images/andhra.jpg";
            description="⭐ Rating: 4.7/5\n\n📍 Andhra Pradesh\n🌤 Best Time: Oct - Feb\n💰 ₹15,499";
            break;

        case "Delhi":
            title="🏛 Delhi";
            image="images/delhi.jpg";
            description="⭐ Rating: 4.7/5\n\n📍 Delhi\n🌤 Best Time: Oct - Mar\n💰 ₹13,999";
            break;

        case "USA":
            title="🗽 USA";
            image="images/usa.jpg";
            description="⭐ Rating: 5.0/5\n\n📍 United States\n🌤 Best Time: Apr - Jun\n💰 ₹1,25,000";
            break;

        default:
            title = place;
            image = "";
            description = "Details not available.";
    }

    document.getElementById("modalTitle").innerHTML = title;
    document.getElementById("modalImage").src = image;
    document.getElementById("modalDescription").innerText = description;

    document.getElementById("destinationModal").style.display = "block";
}

function closeModal(){
    document.getElementById("destinationModal").style.display = "none";
}