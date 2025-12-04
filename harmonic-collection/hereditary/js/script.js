$(function(){

  const lines = [
    "“You tried to kill me.”",
    "“No, I love you!”",
    "“Why did you try to kill me?”",
    "“I didn't — I was trying to save you!”"
  ];

  function playScene(){
    $(".line").css("opacity", 0); 

    setTimeout(()=> $("#quote1").text(lines[0]).css("opacity", 1), 300);
    setTimeout(()=> $("#quote2").text(lines[1]).css("opacity", 1), 1400);
    setTimeout(()=> $("#quote3").text(lines[2]).css("opacity", 1), 2600);
    setTimeout(()=> $("#quote4").text(lines[3]).css("opacity", 1), 4000);
  }

  $("#start").on("click", playScene);

  $("#glow").on("click", function(){
    $(".quote-box").toggleClass("glowing");
  });

  $("#next").on("click", function(){
    window.location.href = "../bringherback/index.html";
  });

});
