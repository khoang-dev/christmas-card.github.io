(function(){"use strict";var t={9697:function(t,e,a){var n=a(9242),i=a(3396),o=a(4870),s=a.p+"img/giphy.0daf0280.gif",r=a.p+"media/music.03920d37.mp3",c=a.p+"img/snowman.c1a2baf6.png";const l=t=>((0,i.dD)("data-v-6603ab86"),t=t(),(0,i.Cn)(),t),u={class:"container-card"},d=l((()=>(0,i._)("audio",{autoplay:"",mute:"",loop:""},[(0,i._)("source",{src:r,type:"audio/mp3"})],-1))),v={class:"christmas-card"},p=(0,i.uE)('<input id="open" type="checkbox" data-v-6603ab86><label class="open" for="open" data-v-6603ab86></label><div class="card-front" data-v-6603ab86><div class="christmas-tree" data-v-6603ab86></div><div class="ribbon" data-v-6603ab86></div><div class="text" data-v-6603ab86>- Click to Open -</div><div class="star" data-v-6603ab86></div><div class="balls" data-v-6603ab86></div></div><div class="card-inside" data-v-6603ab86><div class="title" data-v-6603ab86>Merry<br data-v-6603ab86>Christmas!</div><div class="wishes" data-v-6603ab86> I hope the magic of Christmas fills every corner of your heart and home with joy - now and always. </div><div class="snowman-container" data-v-6603ab86><img class="snowman" src="'+c+'" data-v-6603ab86></div><div style="position:absolute;top:223px;left:157px;font-size:6px;font-family:&#39;Optima&#39;, cursive;z-index:2;" data-v-6603ab86>K<span style="color:red;" data-v-6603ab86>❤</span>Q</div></div>',4),f=l((()=>(0,i._)("div",{class:"bow"},null,-1))),m=[f],b=l((()=>(0,i._)("div",{class:"gift-text"},"- Click gift box to open -",-1)));var h=(0,i.aZ)({__name:"AnimatedChristmasCard",emits:["click-gift"],setup(t,{emit:e}){const a=e;return(t,e)=>((0,i.wg)(),(0,i.iD)("div",u,[d,(0,i._)("div",v,[p,(0,i._)("div",{class:"gift",onClick:e[0]||(e[0]=t=>a("click-gift"))},m),b])]))}}),y=a(89);const w=(0,y.Z)(h,[["__scopeId","data-v-6603ab86"]]);var g=w,k=a(6084),_=(0,i.aZ)({__name:"SnowComponent",setup(t){const e=async t=>{await(0,k.S)(t)};return(t,a)=>{const n=(0,i.up)("vue-particles");return(0,i.wg)(),(0,i.j4)(n,{id:"tsparticles",particlesInit:e,options:{fpsLimit:400,interactivity:{events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!1,mode:"repulse"},resize:!0},modes:{bubble:{distance:400,duration:2,opacity:.8,size:40},push:{quantity:4},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#ffffff"},links:{enable:!1},collisions:{enable:!0},move:{direction:"bottom",enable:!0,random:!1,speed:2,straight:!1,out_mode:"out"},number:{density:{enable:!0,area:800},value:400},opacity:{value:1},shape:{type:"circle",stroke:{width:0,color:"#000000"}},size:{random:!0,value:{min:3,max:7}}},detectRetina:!0}})}}});const x=(0,y.Z)(_,[["__scopeId","data-v-abe1d010"]]);var C=x,O=a(96),j=(0,i.aZ)({__name:"FireworkComponent",setup(t){const e=async t=>{await(0,O.D)(t)};return(t,a)=>{const n=(0,i.up)("vue-particles");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(n,{id:"tsparticles",particlesInit:e,options:{preset:"fireworks"}})])}}});const Z=(0,y.Z)(j,[["__scopeId","data-v-76469666"]]);var D=Z,I=a(3403);const q={class:"container"},z={key:3,class:"protect"},H=(0,i._)("img",{src:s,style:{width:"200px","margin-top":"5vh"}},null,-1),P=(0,i._)("div",{class:"protect-text"},"Please enter your code:",-1),S={key:0,class:"incorrect-text"};var T=(0,i.aZ)({__name:"App",setup(t){const e=(0,o.iH)(!1),a=(0,o.iH)(),n=(0,o.iH)(!0),s=(0,o.iH)(!1);(0,i.YP)(e,(()=>{e.value&&setTimeout((()=>e.value=!1),5e3)}));const r=t=>{n.value="210323"!==t,s.value=n.value,console.log(t)};return(0,i.YP)(s,(()=>{s.value&&setTimeout((()=>s.value=!1),2e3)})),(t,c)=>{const l=(0,i.up)("SnowGlobe");return(0,i.wg)(),(0,i.iD)("div",q,[(0,i.Wm)(l),e.value||n.value?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(g,{key:0,onClickGift:c[0]||(c[0]=t=>e.value=!0)})),e.value?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(C,{key:1})),e.value?((0,i.wg)(),(0,i.j4)(D,{key:2})):(0,i.kq)("",!0),n.value?((0,i.wg)(),(0,i.iD)("div",z,[H,P,(0,i.Wm)((0,o.SU)(I.Z),{ref:"otpInput",value:a.value,"onUpdate:value":c[1]||(c[1]=t=>a.value=t),"input-classes":"otp-input",separator:"-","num-inputs":6,"should-auto-focus":!0,"input-type":"password",conditionalClass:["one","two","three","four"],onOnComplete:r},null,8,["value"]),s.value?((0,i.wg)(),(0,i.iD)("div",S,"Code is incorrect")):(0,i.kq)("",!0)])):(0,i.kq)("",!0)])}}});const W=T;var A=W,E=a(6026);(0,n.ri)(A).use(E.Z).mount("#app")}},e={};function a(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}};return t[n].call(o.exports,o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,n,i,o){if(!n){var s=1/0;for(u=0;u<t.length;u++){n=t[u][0],i=t[u][1],o=t[u][2];for(var r=!0,c=0;c<n.length;c++)(!1&o||s>=o)&&Object.keys(a.O).every((function(t){return a.O[t](n[c])}))?n.splice(c--,1):(r=!1,o<s&&(s=o));if(r){t.splice(u--,1);var l=i();void 0!==l&&(e=l)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[n,i,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.p="/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,o,s=n[0],r=n[1],c=n[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(i in r)a.o(r,i)&&(a.m[i]=r[i]);if(c)var u=c(a)}for(e&&e(n);l<s.length;l++)o=s[l],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(u)},n=self["webpackChunkchristmas_card"]=self["webpackChunkchristmas_card"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(9697)}));n=a.O(n)})();
//# sourceMappingURL=app.9671884b.js.map