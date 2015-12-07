# ReplaceAnchorHrefs
//Jquery Plugin to search for all anchor tags and replace a part of the href with whatever you want.

//Sample Use
//Replace all anchor tags
$("a").ReplaceAnchorHrefs({
  lookFor: "www.bing.com",
  replaceWith: "www.google.com",
  ignore: ["www.yahoo.com","www.gmail.com","www.whatever.com"]
});

//Does the same thing as above.
//Plugin will search for all anchor tags within whatever element you define in the beginning
$(document).ReplaceAnchorHrefs({
  lookFor: "www.bing.com",
  replaceWith: "www.google.com",
  ignore: ["www.yahoo.com","www.gmail.com","www.whatever.com"]
});

//Specific anchor tags by id
$("#id").ReplaceAnchorHrefs({
  lookFor: "www.bing.com",
  replaceWith: "www.google.com",
  ignore: ["www.yahoo.com","www.gmail.com","www.whatever.com"]
});
