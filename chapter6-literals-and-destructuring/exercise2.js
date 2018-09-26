const stripMargin = function(texts, ...expressions) {};

const name = "Jane";

const processed = stripMargin`This is for
  ${name} and it needs to be
	delivered by December 24th.`;

console.log(processed);
//This is for JANE and it needs to be delivered by December 24th.
