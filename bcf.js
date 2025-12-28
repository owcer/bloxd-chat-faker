/*
bcf - bloxd chat faker
Objective: to show the triviality and give everyone
the power to easily create fake bloxd chat screenshots.

Educational Literacy. Watermarks never ever.
Licensable under CC0. No credit required.
You can even steal and sell my code with or without modification as your own and I would not care.
Furthermore, I don't care what purposes you use this for.
The test sample basically documents all the features.
1.create a flat test world
2.put the world code shown in bloxd code
3.put the code block shown in a code block for test
4.type /log until all messages have come, and no more are coming
5.edit it to match your needs once you get it working
*/
//=World code:=
bd=[],bcf=e=>{let t=["#dff8ff","#ffff66","#b3ff66","#66ff66","#66ffb3","#66ffff","#66bcff","#cc66ff","#ff80bb","#ff6666","#ffaa66"],f=e.trim().split("\n");for(let e of f)if(e.includes(":")&&!e.startsWith("Tip")){let f=[],s=e.indexOf(":"),r=e.substring(0,s+1),l=e.substring(s+1),o="",i="#dff8ff";if(r.startsWith("[")){let e=r.indexOf("]"),t=r.substring(0,e+1);t.includes("Youtube")||t.includes("Super")||t.includes("Dev")||(o=t,f.push({str:o,style:{color:"#2eeb82"}}),r=r.slice(o.length))}if(r.includes("[Youtube]")){let e=r.indexOf("[Youtube]");e>0&&f.push({str:r.substring(0,e),style:{color:"#dff8ff"}}),f.push({str:"[",style:{color:"#fff"}},{icon:"youtube",style:{color:"#fe0000"}},{str:" You",style:{color:"#fff"}},{str:"Tube",style:{color:"#fe0000"}},{str:"]",style:{color:"#fff"}}),r=r.slice(e+9)}if(r.includes("[Dev]")){let e=r.indexOf("[Dev]");e>0&&f.push({str:r.substring(0,e),style:{color:"#dff8ff"}}),f.push({str:"[",style:{color:"#cef3ff"}},{icon:"wrench",style:{color:"#a4a4a4"}},{str:" Dev]",style:{color:"#cef3ff"}}),r=r.slice(e+5)}let c=r.match(/\[(\d+)\s?Super\]/);if(c){let e=c[0],s=parseInt(c[1]),l=r.indexOf(e);l>0&&f.push({str:r.substring(0,l),style:{color:"#dff8ff"}}),f.push({str:"[",style:{color:"#fc0"}},{icon:"zap",style:{color:"#fc0"}},{str:" Super]",style:{color:"#fc0"}}),i=t[s]||"#dff8ff",r=r.slice(l+e.length)}f.push({str:r,style:{color:i}});let n="[Tribe]"===o?"#2eeb82":"#ffffff";f.push({str:l,style:{color:n}}),bd.push(f)}else{let t="#cef3ff";(e.endsWith(" has joined the tribe")||"The chunk is now yours. Other players cannot build here."===e||"Protectors protect the chunk they are in, with 32 cubes on each side, as well as the chunk above and below."===e)&&(t="#2eeb82"),(e.endsWith(" has left the tribe")||e.endsWith(" has been removed from the tribe")||e.startsWith("Left tribe ")||e.startsWith("Removed ")&&e.endsWith(" from the tribe"))&&(t="#ff9d87"),bd.push([{str:e,style:{color:t}}])}},playerCommand=(e,t)=>{if("log"===t)for(let t=0;bd.length&&t<16;t++)api.sendMessage(e,bd.shift());return!0};
//=end of world code=
//=Code block:=
bcf(`
coolperson joined
someone joined
coolperson: hi
Tribe ppl has been created by someone
[ppl] someone: who are you?
Tip: A "chunk" is a cube with 32 block length sides
coolperson: I am a cat
[ppl] someone: ok...
coolperson has joined the tribe
[ppl] coolperson: wait was that an interview???
[ppl] someone: wait i didnt mean to invite u srry
Left tribe ppl
Tribe ppl has been disbanded by someone
Tribe cat has been created by coolperson
Invited someone to join
someone has joined the tribe
The chunk is now yours. Other players cannot build here.
Protectors protect the chunk they are in, with 32 cubes on each side, as well as the chunk above and below.
someone has left the tribe
someone: oops left accidentaly invite me again
Invited someone to join
someone has joined the tribe
[cat] someone: wait kick me from the tribe for a sec
[cat] coolperson: k
someone has been removed from the tribe
Removed someone from the tribe
Arthur joined
[Dev] [10Super] Arthur: hi bye
Arthur left
[cat] [Youtuber] [0Super] coolperson: yo
[cat] [Youtuber] [0Super] coolperson: yay yt and super
[cat] [Youtuber] [0Super] coolperson: lemme choose color...
[cat] [Youtuber] [1Super] coolperson: test
[cat] [Youtuber] [4Super] coolperson: test
[cat] [Youtuber] [7Super] coolperson: test
[cat] [Youtuber] [9Super] coolperson: test
[cat] [Youtuber] [9Super] coolperson: nice
`)
//=end of code block=
