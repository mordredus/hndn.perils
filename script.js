window.onload = function() {
  document.getElementById("loader").style.display = "none";
};

const memberDetails = {
  ezra: "Ezra Milagrosa Diwa — Leader, Producer, Filipino powerhouse. Multi-talented vocalist and dancer.",
  sally: "Sally Armitage — British vocalist and lead dancer. Sharp, graceful stage presence.",
  sariyah: "Sariyah Lie — Indonesian-Chinese sub-vocalist with wide vocal range.",
  slyvan: "Slyvan Montgomery — American rapper and freestyle battle specialist.",
  hyunseok: "Lee Hyun-Seok — Korean-American main dancer, rapper, charismatic performer."
};

document.querySelectorAll(".member-card").forEach(card => {
  card.addEventListener("click", function() {
    const key = this.dataset.member;
    document.getElementById("member-info").innerHTML =
      "<p>" + memberDetails[key] + "</p>";
  });
});