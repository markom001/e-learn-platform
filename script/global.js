function funkcijaPadajuciMeni() {
    var x = document.getElementById("meni");
    if (x.className === "meni-gornji") {
      x.className += "respozivnost";
    } else {
      x.className = "meni-gornji";
    }
  }

  