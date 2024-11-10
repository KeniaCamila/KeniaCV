document.addEventListener("DOMContentLoaded", function () {
    const driveLink = "https://drive.google.com/drive/folders/1nDo6F9u6eAwlcqF_mzlTGLVZbQkeI8jU";

    const driveButton = document.createElement("a");
    driveButton.href = driveLink;
    driveButton.target = "_blank"; 
    driveButton.className = "button"; 
    driveButton.textContent = "View Projects on Kenia's Google Drive"; 

    const container = document.getElementById("drive-link");
    if (container) {
        container.appendChild(driveButton);
    } else {
        console.error("El contenedor #drive-link no fue encontrado.");
    }
});
