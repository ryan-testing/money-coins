const { test } = require("tape");
const moneyCoins = require("./money-coins");

test("pecahan 543 menghasilkan [500, 20, 20, 1, 1, 1]", t => {
  const money = moneyCoins(543)
  t.equal(money.length, 6);
  t.equal(money[0], 500);
  t.equal(money[money.length - 1], 1);
  t.end();
});

test("pecahan 7752 menghasilkan [5000, 2000, 500, 200, 50, 1, 1]", t => {
  const money = moneyCoins(7752)
  t.equal(money.length, 7);
  t.equal(money[0], 5000);
  t.equal(money[1], 2000);
  t.equal(money[3], 200);
  t.equal(money[5], 1);
  t.end();
});

test("pecahan 37454 menghasilkan [10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1]", t => {
  const money = moneyCoins(37454)
  t.equal(money.length, 12);
  t.equal(money[1], 10000);
  t.equal(money[3], 5000);
  t.equal(money[money.length-1], 1)
  t.end();
});
