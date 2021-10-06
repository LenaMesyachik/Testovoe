var derive = function(textInSearch){
  var textInSearch = document.getElementById('search').value;
  if (textInSearch === "google") {
  alert ("Яндекс  круче. Но это не точно.");
  } 
else {
  alert (textInSearch);
  };
};
$("#button1").click(derive);
