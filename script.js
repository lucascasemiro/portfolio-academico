document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();
  });

  function openPreview(){
    const overlay = document.getElementById("overlay");
    overlay.style.display = "flex";
    document.body.classList.add("noscroll");
  }
  function closePreview(){
    const overlay = document.getElementById("overlay");
    const esc = document.getElementById("iframe-esc");
    overlay.style.display = "none";
    document.body.classList.remove("noscroll");
  }
