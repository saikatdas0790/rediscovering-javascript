const greet = (message, ...names) =>
  console.log(message + " " + names.join(", "));

const helloJackJill = greet("hello", "Jack", "Jill");
helloJackJill(); //hello Jack, Jill
