import { CSV } from "https://js.sabae.cc/CSV.js";

const data = await CSV.fetchJSON("numfont3.csv");
console.log(`10 F="${data.map(i => i.hex).join("")}"
15 C=224:?CHR$(C)
20 N=0
30 GSB@N3:N=N+1:CONT
100 @N3 
105 FORI=0TO7:POKEC*8+I,0:NEXT
110 FORI=0TO1:IFIM=N%10ELSEM=N/10%10
120 FORJ=0TO5
130  P=PEEK(F+M*6+J)-48:IFP>16P=P-7
140  FORK=0TO3:IFP&(1<<K)POKEC*8+K+(4-J&1*4),PEEK(C*8+K+(4-J&1*4))|(1<<((1-I)*4+3-J/2))
145  NEXT
150 NEXT:NEXT
160 RTN
`);
