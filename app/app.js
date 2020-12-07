function initListeners() {
  $("#nav nav a").click(function(e) {
    var btnID = this.id;
    MODEL.getView(btnID);
  });
}

function initSite() {
  $.get("view/nav.html", function(nav) {
    console.log("nav", nav);
    $("#nav").html(nav);
    initListeners();
  });

  $.get("view/home.html", function(data) {
    $("#cont").html(data);
  });

  $.get("view/footer.html", function(data) {
    $("#footer").html(data);
  });
}

$(document).ready(function() {
  initSite();
});
