import { CSV } from "https://js.sabae.cc/CSV.js";

const data = await CSV.fetchJSON("numfont4_dot2bas.csv");
const list = [];
for (const c2 of data) {
  for (let i = 0; i < 2; i++) {
    const c = c2.num[i];
    const hex = [];
    const n = c2.pattern.indexOf("#") + 1;
    for (let j = 0; j < 8; j++) {
      hex.push(c2.pattern[n + i + j * 2]);
    }
    list.push({ num: c, hex: hex.join("").toUpperCase() });
  }
}
console.log(list);
await Deno.writeTextFile("numfont4.csv", CSV.stringify(list));
