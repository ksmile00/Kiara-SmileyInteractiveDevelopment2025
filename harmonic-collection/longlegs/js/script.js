$(function(){
  const text = "Are you still saying your prayers? Our prayers protect us from the devil.";
  const $q = $("#quote");
  const $c = $("#cursor");
  let idx = 0;
  let timer;

  function typeQuote(){
    $q.text("");
    idx = 0;
    $c.show();
    clearInterval(timer);
    timer = setInterval(()=>{
      if(idx < text.length){
        $q.text($q.text() + text.charAt(idx));
        idx++;
      } else {
        clearInterval(timer);
        $c.hide();
      }
    }, 100); // slow typing
  }

  $("#replay").on("click", typeQuote);
  $("#home").on("click", ()=> window.location.href="../");

  typeQuote();
});
