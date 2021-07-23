// var save = $("#save");
// var inputText = $("textArea");

// var planned = localStorage.getItem("planner");

// inputText.text(planned);
// save.on("click", function () {
//   localStorage.setItem("planner", inputText.val());
//   //   console.log(inputText.val());
// });

for (let i = 9; i <= 17; i++) {
  var mainContainer = $(".container");
  var newDiv = $("<div>");
  var newP = $("<p>");
  var newTextArea = $("<textarea>");
  var newBtn = $("<button>");
  var newI = $("<i>");

  //   div holder
  mainContainer.append(newDiv);
  newDiv.addClass("time-block row");

  // p holder
  newDiv.append(newP);
  newP.addClass("hour col-2 col-md-1 pt-3 pl-1 text-uppercase");
  newP.text(i + "00");

  // textArea
  newDiv.append(newTextArea);
  newTextArea.addClass("description col-8 col-md-10 p-2");
  newTextArea.attr("id", `textArea${i}`);

  //   Button
  newDiv.append(newBtn);
  newBtn.addClass("saveBtn col-2 col-md-1");
  newBtn.attr("id", `save${i}`);

  //   i tag
  newBtn.append(newI);
  newI.addClass("fas fa-save");

  // var save = $("#save");
  // var inputText = $("textArea");

  // var planned = localStorage.getItem("planner");

  // inputText.text(planned);
  // save.on("click", function () {
  //   localStorage.setItem("planner", inputText.val());
  //   //   console.log(inputText.val());
  // });

  //   900
  var saveID9 = $(`#save9`);
  var textArea9 = $(`#textArea9`);

  var time900 = localStorage.getItem("time900");
  textArea9.text(time900);
  saveID9.on("click", function () {
    localStorage.setItem("time900", textArea9.val());
  });

  //   1000
  var saveID10 = $(`#save10`);
  var textArea10 = $(`#textArea10`);

  var time1000 = localStorage.getItem("time1000");
  textArea10.text(time1000);
  saveID10.on("click", function () {
    localStorage.setItem("time1000", textArea10.val());
  });

  //   1100
  var saveID11 = $(`#save11`);
  var textArea11 = $(`#textArea11`);

  var time1100 = localStorage.getItem("time1100");
  textArea11.text(time1100);
  saveID11.on("click", function () {
    localStorage.setItem("time1100", textArea11.val());
  });

  //   1200
  var saveID12 = $(`#save12`);
  var textArea12 = $(`#textArea12`);

  var time1200 = localStorage.getItem("time1200");
  textArea12.text(time1200);
  saveID12.on("click", function () {
    localStorage.setItem("time1200", textArea12.val());
  });

  //   1300
  var saveID13 = $(`#save13`);
  var textArea13 = $(`#textArea13`);

  var time1300 = localStorage.getItem("time1300");
  textArea13.text(time1300);
  saveID13.on("click", function () {
    localStorage.setItem("time1300", textArea13.val());
  });

  //   1400
  var saveID14 = $(`#save14`);
  var textArea14 = $(`#textArea14`);

  var time1400 = localStorage.getItem("time1400");
  textArea14.text(time1400);
  saveID14.on("click", function () {
    localStorage.setItem("time1400", textArea14.val());
  });

  //   1500
  var saveID15 = $(`#save15`);
  var textArea15 = $(`#textArea15`);

  var time1500 = localStorage.getItem("time1500");
  textArea15.text(time1500);
  saveID15.on("click", function () {
    localStorage.setItem("time1500", textArea15.val());
  });

  // 1600
  var saveID16 = $(`#save16`);
  var textArea16 = $(`#textArea16`);

  var time1600 = localStorage.getItem("time1600");
  textArea16.text(time1600);
  saveID16.on("click", function () {
    localStorage.setItem("time1600", textArea16.val());
  });

  // 1700
  var saveID17 = $(`#save17`);
  var textArea17 = $(`#textArea17`);

  var time1700 = localStorage.getItem("time1700");
  textArea17.text(time1700);
  saveID17.on("click", function () {
    localStorage.setItem("time1700", textArea17.val());
  });
}

// 900-1700
// need to save each
