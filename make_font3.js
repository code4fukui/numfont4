import { CSV } from "https://js.sabae.cc/CSV.js";

const fix2 = (s) => s.length == 1 ? "0" + s : s;

const data = await CSV.fetchJSON("numfont4.csv");
const list = [];
for (const item of data) {
  const n = item.num;
  const hex = [];
  for (let i = 0; i < 3; i++) {
    let n = 0;
    for (let j = 0; j < 7; j++) {
      const a = ((parseInt(item.hex[j], 16) >> (3 - i)) & 1) << j;
      n += a;
    }
    hex.push(fix2(n.toString(16)));
  }
  list.push({ num: n, hex: hex.join("").toUpperCase() })
}
console.log(list);
await Deno.writeTextFile("numfont3.csv", CSV.stringify(list));
