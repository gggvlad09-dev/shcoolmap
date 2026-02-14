function showInfo(title, photo) {
document.getElementById("title").innerText = title;
document.getElementById("photo").src = photo;
document.getElementById("info").style.display = "block";
}

function hideInfo() {
document.getElementById("info").style.display = "none";
}

function openInfo(title, text, img) {

document.getElementById("infoTitle").innerText = title;
document.getElementById("infoText").innerText = text;
document.getElementById("infoImg").src = img;

document.getElementById("infoBox").style.display = "block";
}

function closeInfo() {
document.getElementById("infoBox").style.display = "none";
}