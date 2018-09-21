const canVote = age =>
  Number(age) && Number(age) >= 18 ? "Yay, start voting" : "no, can't vote";

console.log(canVote(12));
console.log(canVote("12"));
console.log(canVote(17));
console.log(canVote("@1 8"));
console.log(canVote(18));
console.log(canVote(28));
