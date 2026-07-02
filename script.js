function verifyStudent() {

    const idInput = document.getElementById("identifier");

    const id = idInput.value.trim();

    const resultBox = document.getElementById("result");

    if (!id) {

        alert("Please enter Email or Student ID");

        return;

    }

    showSpinner(true);

    setTimeout(() => {

        const student = {

            name: "John Doe",

            email: "john@example.com",

            mobile: "9876543210",

            domain: "Web Development",

            college: "Dummy University",

            start: "01 June 2024",

            duration: "2 Months",

            photo: "https://via.placeholder.com/180",

            assignments: [true,false,true,true],

            certificate:"#"

        };

        resultBox.innerHTML = `

<div class="dashboard">

<div class="profile-section">

<img src="${student.photo}" alt="Student">

<h2>${student.name}</h2>

<span class="verified">

<i class="fas fa-circle-check"></i>

Verified Student

</span>

</div>

<div class="details-grid">

<div class="detail-card">

<i class="fas fa-envelope"></i>

<h4>Email</h4>

<p>${student.email}</p>

</div>

<div class="detail-card">

<i class="fas fa-phone"></i>

<h4>Mobile</h4>

<p>${student.mobile}</p>

</div>

<div class="detail-card">

<i class="fas fa-code"></i>

<h4>Domain</h4>

<p>${student.domain}</p>

</div>

<div class="detail-card">

<i class="fas fa-building-columns"></i>

<h4>College</h4>

<p>${student.college}</p>

</div>

<div class="detail-card">

<i class="fas fa-calendar"></i>

<h4>Start Date</h4>

<p>${student.start}</p>

</div>

<div class="detail-card">

<i class="fas fa-clock"></i>

<h4>Duration</h4>

<p>${student.duration}</p>

</div>

</div>

<h3 class="status-title">

Assignment Progress

</h3>

<div class="assignment-grid">

${student.assignments.map((done,i)=>`

<div class="${done ? 'success' : 'pending'}">

Assignment ${i+1}

${done ? '✅ Completed' : '❌ Pending'}

</div>

`).join("")}

</div>

<a href="${student.certificate}" class="certificate-btn">

<i class="fas fa-download"></i>

Download Certificate

</a>

</div>

`;

        showSpinner(false);

        showToast("Student Record Verified Successfully");

    },1200);

}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.innerText = msg;
  toast.className = 'toast show';
  setTimeout(() => toast.className = 'toast', 3000);
}

function showSpinner(show) {
  document.querySelector('.spinner').style.display = show ? 'block' : 'none';
}
