function addSkill() {
    var newSkill = prompt("Masukkan keahlian baru:");
    if (newSkill) {
        var skillList = document.getElementById("skill-list");
        var li = document.createElement("li");
        li.textContent = newSkill;
        skillList.appendChild(li);
    }
}
