function placeOrder(
  id,
  amount,
  shipping = amount < 20 ? 5 : 10,
  date = new Date()
) {
  console.log(
    " shipping charge for id: " +
      id +
      " is $" +
      shipping +
      " Date:" +
      date.getDate()
  );
}

//shipping, if not given, is $5 if amount less than 20 else $10
//date is today's date unless given
placeOrder(1, 12.1, 3, new Date("05/15/2018"));
placeOrder(1, 25.2, 10);
placeOrder(1, 12.05);
placeOrder(1, 25.3);
placeOrder(1, 25.2);

placeOrder(1, 12.1, undefined, new Date("05/15/2018"));
