$(function(){
  const text = "Talk to me.";
  const $quote = $("#quote");
  const $cursor = $("#cursor");
  let idx = 0;
  let timer;

  function typeQuote(){
    $quote.text("");
    idx = 0;
    $cursor.show();
    clearInterval(timer);
    timer = setInterval(()=>{
      if(idx < text.length){
        $quote.text($quote.text() + text.charAt(idx));
        idx++;
      } else {
        clearInterval(timer);
        $cursor.hide();
      }
    }, 100); // slow typing
  }

  $("#replay").on("click", typeQuote);
  $("#home").on("click", ()=> window.location.href="../");

  typeQuote();
});
