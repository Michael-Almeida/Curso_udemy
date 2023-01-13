var x = 1;

while (x <= 10) {
  console.log(x);

  x++;
  if (x === 5) {
    console.log(`${x} (cai no if x=== 5)`);
    continue;
  }
}
