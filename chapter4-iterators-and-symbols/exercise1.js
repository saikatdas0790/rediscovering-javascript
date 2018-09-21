const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

for (const letterEntry of letters.entries()) {
  if (letterEntry["0" - 1] % 4) console.log(letterEntry);
}
