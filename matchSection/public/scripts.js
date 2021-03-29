$("body").click(function (evt) {
  if (evt.target.id == "menu_content") return;

  //Do processing of click event here for every element except with id menu_content
});
