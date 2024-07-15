document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector(".dynamic-text-type");
    const cursorElement = document.querySelector(".cursor");
    const textArray = ["Job Consultant", "IT Staffing", "Company Recruitment", "Agency Staffing", "Provider Job"];
    let textIndex = 0;
    let charIndex = 0;
    let currentText = "";
    let isDeleting = false;

    function type() {
        cursorElement.style.display = "inline-block";
        if (isDeleting) {
            if (charIndex > 0) {
                currentText = textArray[textIndex].substring(0, charIndex - 1);
                charIndex--;
                textElement.textContent = currentText;
                setTimeout(type, 100);
            } else {
                isDeleting = false;
                textIndex = (textIndex + 1) % textArray.length;
                setTimeout(type, 100);
            }
        } else {
            if (charIndex < textArray[textIndex].length) {
                currentText = textArray[textIndex].substring(0, charIndex + 1);
                charIndex++;
                textElement.textContent = currentText;
                setTimeout(type, 200);
            } else {
                isDeleting = true;
                setTimeout(type, 2000);
            }
        }
    }

    type();
});
