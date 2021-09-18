function setBindings() {
  $("nav a").click(function (e) {
    let btnID = e.currentTarget.id;
    MODEL.getPage(btnID);
  });
}

$(document).ready(function () {
  console.log("yes");
  setBindings();
});
