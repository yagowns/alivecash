var btcusd = 0;
var btcsatoshi = 0;
var totalsumusd = 0;
var totalsumbtc = 0;
var pixel;

var cemmil = false;
var milhao = false;
var dezmilhoes = false;
var cemmilhoes = false;
var umbilhao = false;
var umtrilhao = false;

var milbtc = false;
var dezmilbtc = false;
var cemmilbtc = false;
var ummilhaobtc = false;
var dezmilhoesbtc = false;
var cemmilhoesbtc = false;

var doismiler = false;
var cincomiler = false;
var dezmiler = false;

//everything has to be in the same code, or else, you cant cross reference the
//vars and functions
var btcs = new WebSocket('wss://ws.blockchain.info/inv');
btcs.onopen = function(){
  btcs.send(JSON.stringify({"op":"unconfirmed_sub"}));
};
btcs.onmessage = function(onmsg){
//everything has to be in the same code, or else, you cant cross reference the
//vars and functions

// code to get the bitcoin price
var xbtc = new XMLHttpRequest();
    xbtc.open('GET', 'https://blockchain.info/pt/ticker?cors=true', true);
    xbtc.onreadystatechange = function(){
  if(xbtc.readyState == 4){
var ticker = JSON.parse(xbtc.responseText);
var price = ticker.USD.last;
btcusd = price;
totalsumbtc = +totalsumbtc + +btcsatoshi;
totalsumusd = +totalsumusd + +pixel;
$("#upbtc").html(totalsumbtc.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " BTC");
$("#exchange").html(btcusd.toFixed(2) + " USD");
$("#upusd").html( "&asymp;" + " " + (totalsumusd.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + " USD");

    }
    };
    xbtc.send();

// Calculation for the bitcoin normalized value for calculation. satoshi
var response = JSON.parse(onmsg.data);
var amount = response.x.out[0].value;
var calAmount = amount / 100000000;
btcsatoshi = calAmount;

var rangeNum1 = Math.floor(Math.random()*1000) + 1; // this will get a number between 1 and 1000;
rangeNum1 *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases

var rangeNum2 = Math.floor(Math.random()*1000) + 1; // this will get a number between 1 and 1000;
rangeNum2 *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases

var rangeNum3 = Math.floor(Math.random()*70) + 11; // this will get a number between 1 and 1000;

var rangeNum4 = Math.floor(Math.random()*70) + 11; // this will get a number between 1 and 1000;



var volumevalue = $("#range").val();
$("#volumedisplay").html("VOLUME " + volumevalue * 100 + "%");




//Audio vars
function playaa(url) {
    var aa = new Audio("sounds/01.mp3");
    aa.volume = volumevalue;
    aa.play();
}

function playab(url) {
    var ab = new Audio("sounds/02.mp3");
    ab.volume = volumevalue;
    ab.play();
}

function playac(url) {
    var ac = new Audio("sounds/03.mp3");
    ac.volume = volumevalue;
    ac.play();
}

function playad(url) {
    var ad = new Audio("sounds/04.mp3");
    ad.volume = volumevalue;
    ad.play();
}

function playae(url) {
    var ae = new Audio("sounds/05.mp3");
    ae.volume = volumevalue;
    ae.play();
}

function playaf(url) {
    var af = new Audio("sounds/06.mp3");
    af.volume = volumevalue;
    af.play();
}

function playag(url) {
    var ag = new Audio("sounds/07.mp3");
    ag.volume = volumevalue;
    ag.play();
}

function playah(url) {
    var ah = new Audio("sounds/08.mp3");
    ah.volume = volumevalue;
    ah.play();
}

function playai(url) {
    var ai = new Audio("sounds/09.mp3");
    ai.volume = volumevalue;
    ai.play();
}

function playaj(url) {
    var aj = new Audio("sounds/10.mp3");
    aj.volume = volumevalue;
    aj.play();
}

function playak(url) {
    var ak = new Audio("sounds/11.mp3");
    ak.volume = volumevalue;
    ak.play();
}

function playal(url) {
    var al = new Audio("sounds/12.mp3");
    al.volume = volumevalue;
    al.play();
}

function playam(url) {
    var am = new Audio("sounds/13.mp3");
    am.volume = volumevalue;
    am.play();
}

function playan(url) {
    var an = new Audio("sounds/14.mp3");
    an.volume = volumevalue;
    an.play();
}

function playao(url) {
    var ao = new Audio("sounds/15.mp3");
    ao.volume = volumevalue;
    ao.play();
}

function playap(url) {
    var ap = new Audio("sounds/16.mp3");
    ap.volume = volumevalue;
    ap.play();
}

function playaq(url) {
    var aq = new Audio("sounds/17.mp3");
    aq.volume = volumevalue;
    aq.play();
}

function playar(url) {
    var ar = new Audio("sounds/18.mp3");
    ar.volume = volumevalue;
    ar.play();
}

function playas(url) {
    var as = new Audio("sounds/19.mp3");
    as.volume = volumevalue;
    as.play();
}

function playat(url) {
    var at = new Audio("sounds/20.mp3");
    at.volume = volumevalue;
    at.play();
}

function playau(url) {
    var au = new Audio("sounds/21.mp3");
    au.volume = volumevalue;
    au.play();
}

function playav(url) {
    var av = new Audio("sounds/22.mp3");
    av.volume = volumevalue;
    av.play();
}

function playaw(url) {
    var aw = new Audio("sounds/23.mp3");
    aw.volume = volumevalue;
    aw.play();
}

function playax(url) {
    var ax = new Audio("sounds/24.mp3");
    ax.volume = volumevalue;
    ax.play();
}

function playay(url) {
    var ay = new Audio("sounds/25.mp3");
    ay.volume = volumevalue;
    ay.play();
}

function playaz(url) {
    var az = new Audio("sounds/26.mp3");
    az.volume = volumevalue;
    az.play();
}

function playba(url) {
    var ba = new Audio("sounds/27.mp3");
    ba.volume = volumevalue;
    ba.play();
}

function playbb(url) {
    var bb = new Audio("sounds/28.mp3");
    bb.volume = volumevalue;
    bb.play();
}

function playbc(url) {
    var bc = new Audio("sounds/29.mp3");
    bc.volume = volumevalue;
    bc.play();
}

function playbd(url) {
    var bd = new Audio("sounds/30.mp3");
    bd.volume = volumevalue;
    bd.play();
}

function playbe(url) {
    var be = new Audio("sounds/31.mp3");
    be.volume = volumevalue;
    be.play();
}

function playbf(url) {
    var bf = new Audio("sounds/32.mp3");
    bf.volume = volumevalue;
    bf.play();
}

function playbg(url) {
    var bg = new Audio("sounds/31.mp3");
    bg.volume = volumevalue;
    bg.play();
}

function playbh(url) {
    var bh = new Audio("sounds/32.mp3");
    bh.volume = volumevalue;
    bh.play();
}

function makeid() {
    var keyframePlus = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";
    for( var i=0; i < 10; i++ )
        keyframePlus += possible.charAt(Math.floor(Math.random() * possible.length));
    return keyframePlus;
}

function showHide01() {
  var makeid2 = makeid();
  $("#circle01").append(
  "<div id='" +  makeid2 + "'><style>#" +  makeid2 + " { position: fixed; top: " +  rangeNum3 + "%; left: " +  rangeNum4 + "%; transform: translate(-50%, -50%); height: " + pixel * 10 + "px; width: " + pixel * 10 + "px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background-color: #6ed1b1; display: flex; animation: " + makeid2 + " 40s; animation-direction: alternate; opacity: 0; } @keyframes " + makeid2 + " { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 1; } 100% { transform: translate(" + rangeNum1 + "px, " + rangeNum2 + "px); opacity: 0; } }" + "</style></div>");
  setTimeout(function(){
    $('#'+makeid2).html("");
    $('#'+makeid2).remove();
}, 30000);
  playaa();
}

function showHide02() {
  var makeid2 = makeid();
  $("#circle02").append(
  "<div id='" +  makeid2 + "'><style>#" +  makeid2 + " { position: fixed; top: " +  rangeNum3 + "%; left: " +  rangeNum4 + "%; transform: translate(-50%, -50%); height: " + pixel * 10 + "px; width: " + pixel * 10 + "px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background-color: #6ed1b1; display: flex; animation: " + makeid2 + " 40s; animation-direction: alternate; opacity: 0; } @keyframes " + makeid2 + " { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 1; } 100% { transform: translate(" + rangeNum1 + "px, " + rangeNum2 + "px); opacity: 0; } }" + "</style></div>");
  setTimeout(function(){
    $('#'+makeid2).html("");
    $('#'+makeid2).remove();
}, 30000);
  playab();
}

function showHide03() {
  var makeid2 = makeid();
  $("#circle03").append(
  "<div id='" +  makeid2 + "'><style>#" +  makeid2 + " { position: fixed; top: " +  rangeNum3 + "%; left: " +  rangeNum4 + "%; transform: translate(-50%, -50%); height: " + pixel * 7 + "px; width: " + pixel * 7 + "px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background-color: #6ed1b1; display: flex; animation: " + makeid2 + " 40s; animation-direction: alternate; opacity: 0; } @keyframes " + makeid2 + " { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 1; } 100% { transform: translate(" + rangeNum1 + "px, " + rangeNum2 + "px); opacity: 0; } }" + "</style></div>");
  setTimeout(function(){
    $('#'+makeid2).html("");
    $('#'+makeid2).remove();
}, 30000);
  playac();
}

function showHide04() {
  var makeid2 = makeid();
  $("#circle04").append(
  "<div id='" +  makeid2 + "'><style>#" +  makeid2 + " { position: fixed; top: " +  rangeNum3 + "%; left: " +  rangeNum4 + "%; transform: translate(-50%, -50%); height: " + pixel * 5 + "px; width: " + pixel * 5 + "px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background-color: #6ed1b1; display: flex; animation: " + makeid2 + " 40s; animation-direction: alternate; opacity: 0; } @keyframes " + makeid2 + " { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 1; } 100% { transform: translate(" + rangeNum1 + "px, " + rangeNum2 + "px); opacity: 0; } }" + "</style></div>");
  setTimeout(function(){
    $('#'+makeid2).html("");
    $('#'+makeid2).remove();
}, 30000);
  playad();
}

function showHide05() {
  var makeid2 = makeid();
  $("#circle05").append(
  "<div id='" +  makeid2 + "'><style>#" +  makeid2 + " { position: fixed; top: " +  rangeNum3 + "%; left: " +  rangeNum4 + "%; transform: translate(-50%, -50%); height: " + pixel * 4 + "px; width: " + pixel * 4 + "px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background-color: #6ed1b1; display: flex; animation: " + makeid2 + " 40s; animation-direction: alternate; opacity: 0; } @keyframes " + makeid2 + " { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 1; } 100% { transform: translate(" + rangeNum1 + "px, " + rangeNum2 + "px); opacity: 0; } }" + "</style></div>");
  setTimeout(function(){
    $('#'+makeid2).html("");
    $('#'+makeid2).remove();
}, 30000);
  playae();
}

function showHide06() {
  var makeid2 = makeid();
  $("#circle06").append(
  "<div id='" +  makeid2 + "'><style>#" +  makeid2 + " { position: fixed; top: " +  rangeNum3 + "%; left: " +  rangeNum4 + "%; transform: translate(-50%, -50%); height: " + pixel * 3 + "px; width: " + pixel * 3 + "px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background-color: #6ed1b1; display: flex; animation: " + makeid2 + " 40s; animation-direction: alternate; opacity: 0; } @keyframes " + makeid2 + " { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 1; } 100% { transform: translate(" + rangeNum1 + "px, " + rangeNum2 + "px); opacity: 0; } }" + "</style></div>");
  setTimeout(function(){
    $('#'+makeid2).html("");
    $('#'+makeid2).remove();
}, 30000);
  playaf();
}

function showHide07() {
  var makeid2 = makeid();
  $("#circle07").append(
  "<div id='" +  makeid2 + "'><style>#" +  makeid2 + " { position: fixed; top: " +  rangeNum3 + "%; left: " +  rangeNum4 + "%; transform: translate(-50%, -50%); height: " + pixel * 2 + "px; width: " + pixel * 2 + "px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background-color: #6ed1b1; display: flex; animation: " + makeid2 + " 40s; animation-direction: alternate; opacity: 0; } @keyframes " + makeid2 + " { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 1; } 100% { transform: translate(" + rangeNum1 + "px, " + rangeNum2 + "px); opacity: 0; } }" + "</style></div>");
  setTimeout(function(){
    $('#'+makeid2).html("");
    $('#'+makeid2).remove();
}, 30000);
  playag();
}

function showHide08() {
  var makeid2 = makeid();
  $("#circle08").append(
  "<div id='" +  makeid2 + "'><style>#" +  makeid2 + " { position: fixed; top: " +  rangeNum3 + "%; left: " +  rangeNum4 + "%; transform: translate(-50%, -50%); height: " + pixel * 1.8 + "px; width: " + pixel * 1.8 + "px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background-color: #6ed1b1; display: flex; animation: " + makeid2 + " 40s; animation-direction: alternate; opacity: 0; } @keyframes " + makeid2 + " { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 1; } 100% { transform: translate(" + rangeNum1 + "px, " + rangeNum2 + "px); opacity: 0; } }" + "</style></div>");
  setTimeout(function(){
    $('#'+makeid2).html("");
    $('#'+makeid2).remove();
}, 30000);
  playah();
}

function showHide09() {
  var makeid2 = makeid();
  $("#circle09").append(
  "<div id='" +  makeid2 + "'><style>#" +  makeid2 + " { position: fixed; top: " +  rangeNum3 + "%; left: " +  rangeNum4 + "%; transform: translate(-50%, -50%); height: " + pixel * 1.5 + "px; width: " + pixel * 1.5 + "px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background-color: #6ed1b1; display: flex; animation: " + makeid2 + " 40s; animation-direction: alternate; opacity: 0; } @keyframes " + makeid2 + " { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 1; } 100% { transform: translate(" + rangeNum1 + "px, " + rangeNum2 + "px); opacity: 0; } }" + "</style></div>");
  setTimeout(function(){
    $('#'+makeid2).html("");
    $('#'+makeid2).remove();
}, 30000);
  playai();
}

function showHide10() {
  var makeid2 = makeid();
  $("#circle10").append(
  "<div id='" +  makeid2 + "'><style>#" +  makeid2 + " { position: fixed; top: " +  rangeNum3 + "%; left: " +  rangeNum4 + "%; transform: translate(-50%, -50%); height: " + pixel * 1.3 + "px; width: " + pixel * 1.3 + "px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background-color: #6ed1b1; display: flex; animation: " + makeid2 + " 40s; animation-direction: alternate; opacity: 0; } @keyframes " + makeid2 + " { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 1; } 100% { transform: translate(" + rangeNum1 + "px, " + rangeNum2 + "px); opacity: 0; } }" + "</style></div>");
  setTimeout(function(){
    $('#'+makeid2).html("");
    $('#'+makeid2).remove();
}, 30000);
  playaj();
}

function showHide11() {
  var makeid2 = makeid();
  $("#circle11").append(
  "<div id='" +  makeid2 + "'></div><style>#" +  makeid2 + " { position: fixed; top: " +  rangeNum3 + "%; left: " +  rangeNum4 + "%; transform: translate(-50%, -50%); height: " + pixel * 1 + "px; width: " + pixel * 1 + "px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background-color: #6ed1b1; display: flex; animation: " + makeid2 + " 40s; animation-direction: alternate; opacity: 0; } @keyframes " + makeid2 + " { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 1; } 100% { transform: translate(" + rangeNum1 + "px, " + rangeNum2 + "px); opacity: 0; } }" + "</style></div>");
  setTimeout(function(){
    $('#'+makeid2).html("");
    $('#'+makeid2).remove();
}, 30000);
  playak();
}

function showHide12() {
  var makeid2 = makeid();
  $("#circle12").append(
  "<div id='" +  makeid2 + "'><style>#" +  makeid2 + " { position: fixed; top: " +  rangeNum3 + "%; left: " +  rangeNum4 + "%; transform: translate(-50%, -50%); height: " + pixel * 0.9 + "px; width: " + pixel * 0.9 + "px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background-color: #6ed1b1; display: flex; animation: " + makeid2 + " 40s; animation-direction: alternate; opacity: 0; } @keyframes " + makeid2 + " { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 1; } 100% { transform: translate(" + rangeNum1 + "px, " + rangeNum2 + "px); opacity: 0; } }" + "</style></div>");
  setTimeout(function(){
    $('#'+makeid2).html("");
    $('#'+makeid2).remove();
}, 30000);
  playal();
}

function showHide13() {
  var makeid2 = makeid();
  $("#circle13").append(
  "<div id='" +  makeid2 + "'><style>#" +  makeid2 + " { position: fixed; top: " +  rangeNum3 + "%; left: " +  rangeNum4 + "%; transform: translate(-50%, -50%); height: " + pixel * 0.8 + "px; width: " + pixel * 0.8 + "px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background-color: #6ed1b1; display: flex; animation: " + makeid2 + " 40s; animation-direction: alternate; opacity: 0; } @keyframes " + makeid2 + " { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 1; } 100% { transform: translate(" + rangeNum1 + "px, " + rangeNum2 + "px); opacity: 0; } }" + "</style></div>");
  setTimeout(function(){
    $('#'+makeid2).html("");
    $('#'+makeid2).remove();
}, 30000);
  playam();
}

function showHide14() {
  var makeid2 = makeid();
  $("#circle14").append(
  "<div id='" +  makeid2 + "'><style>#" +  makeid2 + " { position: fixed; top: " +  rangeNum3 + "%; left: " +  rangeNum4 + "%; transform: translate(-50%, -50%); height: " + pixel * 0.5 + "px; width: " + pixel * 0.5 + "px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background-color: #6ed1b1; display: flex; animation: " + makeid2 + " 40s; animation-direction: alternate; opacity: 0; } @keyframes " + makeid2 + " { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 1; } 100% { transform: translate(" + rangeNum1 + "px, " + rangeNum2 + "px); opacity: 0; } }" + "</style></div>");
  setTimeout(function(){
    $('#'+makeid2).html("");
    $('#'+makeid2).remove();
}, 30000);
  playan();
}

function showHide15() {
  var makeid2 = makeid();
  $("#circle15").append(
  "<div id='" +  makeid2 + "'><style>#" +  makeid2 + " { position: fixed; top: " +  rangeNum3 + "%; left: " +  rangeNum4 + "%; transform: translate(-50%, -50%); height: " + pixel * 0.3 + "px; width: " + pixel * 0.3 + "px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background-color: #6ed1b1; display: flex; animation: " + makeid2 + " 40s; animation-direction: alternate; opacity: 0; } @keyframes " + makeid2 + " { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 1; } 100% { transform: translate(" + rangeNum1 + "px, " + rangeNum2 + "px); opacity: 0; } }" + "</style></div>");
  setTimeout(function(){
    $('#'+makeid2).html("");
    $('#'+makeid2).remove();
}, 30000);
  playao();
}

function showHide16() {
  var makeid2 = makeid();
  $("#circle16").append(
  "<div id='" +  makeid2 + "'></div><style>#" +  makeid2 + " { position: fixed; top: " +  rangeNum3 + "%; left: " +  rangeNum4 + "%; transform: translate(-50%, -50%); height: " + pixel * 0.3 + "px; width: " + pixel * 0.3 + "px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background-color: #6ed1b1; display: flex; animation: " + makeid2 + " 40s; animation-direction: alternate; opacity: 0; } @keyframes " + makeid2 + " { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 1; } 100% { transform: translate(" + rangeNum1 + "px, " + rangeNum2 + "px); opacity: 0; } }" + "</style></div>");
  setTimeout(function(){
    $('#'+makeid2).html("");
    $('#'+makeid2).remove();
}, 30000);
  playap();
}

function showHide17() {
  var makeid2 = makeid();
  $("#circle17").append(
  "<div id='" +  makeid2 + "'><style>#" +  makeid2 + " { position: fixed; top: " +  rangeNum3 + "%; left: " +  rangeNum4 + "%; transform: translate(-50%, -50%); height: " + pixel * 0.3 + "px; width: " + pixel * 0.3 + "px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background-color: #6ed1b1; display: flex; animation: " + makeid2 + " 40s; animation-direction: alternate; opacity: 0; } @keyframes " + makeid2 + " { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 1; } 100% { transform: translate(" + rangeNum1 + "px, " + rangeNum2 + "px); opacity: 0; } }" + "</style></div>");
  setTimeout(function(){
    $('#'+makeid2).html("");
    $('#'+makeid2).remove();
}, 30000);
  playaq();
}

function showHide18() {
  var makeid2 = makeid();
  $("#circle18").append(
  "<div id='" +  makeid2 + "'></div><style>#" +  makeid2 + " { position: fixed; top: " +  rangeNum3 + "%; left: " +  rangeNum4 + "%; transform: translate(-50%, -50%); height: " + pixel * 0.3 + "px; width: " + pixel * 0.3 + "px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background-color: #6ed1b1; display: flex; animation: " + makeid2 + " 40s; animation-direction: alternate; opacity: 0; } @keyframes " + makeid2 + " { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 1; } 100% { transform: translate(" + rangeNum1 + "px, " + rangeNum2 + "px); opacity: 0; } }" + "</style></div>");
  setTimeout(function(){
    $('#'+makeid2).html("");
    $('#'+makeid2).remove();
}, 30000);
  playar();
}

function showHide19() {
  var makeid2 = makeid();
  $("#circle19").append(
  "<div id='" +  makeid2 + "'><style>#" +  makeid2 + " { position: fixed; top: " +  rangeNum3 + "%; left: " +  rangeNum4 + "%; transform: translate(-50%, -50%); height: " + pixel * 0.2 + "px; width: " + pixel * 0.2 + "px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background-color: #6ed1b1; display: flex; animation: " + makeid2 + " 40s; animation-direction: alternate; opacity: 0; } @keyframes " + makeid2 + " { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 1; } 100% { transform: translate(" + rangeNum1 + "px, " + rangeNum2 + "px); opacity: 0; } }" + "</style></div>");
  setTimeout(function(){
    $('#'+makeid2).html("");
    $('#'+makeid2).remove();
}, 30000);
  playas();
}

function showHide20() {
  var makeid2 = makeid();
  $("#circle20").append(
  "<div id='" +  makeid2 + "'><style>#" +  makeid2 + " { position: fixed; top: " +  rangeNum3 + "%; left: " +  rangeNum4 + "%; transform: translate(-50%, -50%); height: " + pixel * 0.2 + "px; width: " + pixel * 0.2 + "px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background-color: #6ed1b1; display: flex; animation: " + makeid2 + " 40s; animation-direction: alternate; opacity: 0; } @keyframes " + makeid2 + " { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 1; } 100% { transform: translate(" + rangeNum1 + "px, " + rangeNum2 + "px); opacity: 0; } }" + "</style></div>");
  setTimeout(function(){
    $('#'+makeid2).html("");
    $('#'+makeid2).remove();
}, 30000);
  playat();
}

function showHide21() {
  var makeid2 = makeid();
  $("#circle21").append(
  "<div id='" +  makeid2 + "'><style>#" +  makeid2 + " { position: fixed; top: " +  rangeNum3 + "%; left: " +  rangeNum4 + "%; transform: translate(-50%, -50%); height: " + pixel * 0.2 + "px; width: " + pixel * 0.2 + "px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background-color: #6ed1b1; display: flex; animation: " + makeid2 + " 40s; animation-direction: alternate; opacity: 0; } @keyframes " + makeid2 + " { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 1; } 100% { transform: translate(" + rangeNum1 + "px, " + rangeNum2 + "px); opacity: 0; } }" + "</style></div>");
  setTimeout(function(){
    $('#'+makeid2).html("");
    $('#'+makeid2).remove();
}, 30000);
  playau();
}

function showHide22() {
  var makeid2 = makeid();
  $("#circle22").append(
  "<div id='" +  makeid2 + "'><style>#" +  makeid2 + " { position: fixed; top: " +  rangeNum3 + "%; left: " +  rangeNum4 + "%; transform: translate(-50%, -50%); height: " + pixel * 0.1 + "px; width: " + pixel * 0.1 + "px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background-color: #6ed1b1; display: flex; animation: " + makeid2 + " 40s; animation-direction: alternate; opacity: 0; } @keyframes " + makeid2 + " { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 1; } 100% { transform: translate(" + rangeNum1 + "px, " + rangeNum2 + "px); opacity: 0; } }" + "</style></div>");
  setTimeout(function(){
    $('#'+makeid2).html("");
    $('#'+makeid2).remove();
}, 30000);
  playav();
}

function showHide23() {
  var makeid2 = makeid();
  $("#circle23").append(
  "<div id='" +  makeid2 + "'><style>#" +  makeid2 + " { position: fixed; top: " +  rangeNum3 + "%; left: " +  rangeNum4 + "%; transform: translate(-50%, -50%); height: " + pixel * 0.09 + "px; width: " + pixel * 0.09 + "px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background-color: #6ed1b1; display: flex; animation: " + makeid2 + " 40s; animation-direction: alternate; opacity: 0; } @keyframes " + makeid2 + " { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 1; } 100% { transform: translate(" + rangeNum1 + "px, " + rangeNum2 + "px); opacity: 0; } }" + "</style></div>");
  setTimeout(function(){
    $('#'+makeid2).html("");
    $('#'+makeid2).remove();
}, 30000);
  playaw();
}

function showHide24() {
  var makeid2 = makeid();
  $("#circle24").append(
  "<div id='" +  makeid2 + "'><style>#" +  makeid2 + " { position: fixed; top: " +  rangeNum3 + "%; left: " +  rangeNum4 + "%; transform: translate(-50%, -50%); height: " + pixel * 0.08 + "px; width: " + pixel * 0.08 + "px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background-color: #6ed1b1; display: flex; animation: " + makeid2 + " 40s; animation-direction: alternate; opacity: 0; } @keyframes " + makeid2 + " { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 1; } 100% { transform: translate(" + rangeNum1 + "px, " + rangeNum2 + "px); opacity: 0; } }" + "</style></div>");
  setTimeout(function(){
    $('#'+makeid2).html("");
    $('#'+makeid2).remove();
}, 30000);
  playax();
}

function showHide25() {
  var makeid2 = makeid();
  $("#circle25").append(
  "<div id='" +  makeid2 + "'><style>#" +  makeid2 + " { position: fixed; top: " +  rangeNum3 + "%; left: " +  rangeNum4 + "%; transform: translate(-50%, -50%); height: " + pixel * 0.07 + "px; width: " + pixel * 0.07 + "px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background-color: #6ed1b1; display: flex; animation: " + makeid2 + " 40s; animation-direction: alternate; opacity: 0; } @keyframes " + makeid2 + " { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 1; } 100% { transform: translate(" + rangeNum1 + "px, " + rangeNum2 + "px); opacity: 0; } }" + "</style></div>");
  setTimeout(function(){
    $('#'+makeid2).html("");
    $('#'+makeid2).remove();
}, 30000);
  playay();
}

function showHide26() {
  var makeid2 = makeid();
  $("#circle26").append(
  "<div id='" +  makeid2 + "'><style>#" +  makeid2 + " { position: fixed; top: " +  rangeNum3 + "%; left: " +  rangeNum4 + "%; transform: translate(-50%, -50%); height: " + pixel * 0.06 + "px; width: " + pixel * 0.06 + "px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background-color: #6ed1b1; display: flex; animation: " + makeid2 + " 40s; animation-direction: alternate; opacity: 0; } @keyframes " + makeid2 + " { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 1; } 100% { transform: translate(" + rangeNum1 + "px, " + rangeNum2 + "px); opacity: 0; } }" + "</style></div>");
  setTimeout(function(){
    $('#'+makeid2).html("");
    $('#'+makeid2).remove();
}, 30000);
  playaz();
}


function showHide27() {
  var makeid2 = makeid();
  $("#circle27").append(
  "<div id='" +  makeid2 + "'><style>#" +  makeid2 + " { position: fixed; top: " +  rangeNum3 + "%; left: " +  rangeNum4 + "%; transform: translate(-50%, -50%); height: " + pixel * 0.05 + "px; width: " + pixel * 0.05 + "px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background-color: #6ed1b1; display: flex; animation: " + makeid2 + " 40s; animation-direction: alternate; opacity: 0; } @keyframes " + makeid2 + " { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 1; } 100% { transform: translate(" + rangeNum1 + "px, " + rangeNum2 + "px); opacity: 0; } }" + "</style></div>");
  setTimeout(function(){
    $('#'+makeid2).html("");
    $('#'+makeid2).remove();
}, 30000);
  playba();
}

function showHide28() {
  var makeid2 = makeid();
  $("#circle28").append(
  "<div id='" +  makeid2 + "'><style>#" +  makeid2 + " { position: fixed; top: " +  rangeNum3 + "%; left: " +  rangeNum4 + "%; transform: translate(-50%, -50%); height: " + pixel * 0.04 + "px; width: " + pixel * 0.04 + "px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background-color: #6ed1b1; display: flex; animation: " + makeid2 + " 40s; animation-direction: alternate; opacity: 0; } @keyframes " + makeid2 + " { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 1; } 100% { transform: translate(" + rangeNum1 + "px, " + rangeNum2 + "px); opacity: 0; } }" + "</style></div>");
  setTimeout(function(){
    $('#'+makeid2).html("");
    $('#'+makeid2).remove();
}, 30000);
  playbb();
}

function showHide29() {
  var makeid2 = makeid();
  $("#circle29").append(
  "<div id='" +  makeid2 + "'><style>#" +  makeid2 + " { position: fixed; top: " +  rangeNum3 + "%; left: " +  rangeNum4 + "%; transform: translate(-50%, -50%); height: " + pixel * 0.03 + "px; width: " + pixel * 0.03 + "px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background-color: #6ed1b1; display: flex; animation: " + makeid2 + " 40s; animation-direction: alternate; opacity: 0; } @keyframes " + makeid2 + " { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 1; } 100% { transform: translate(" + rangeNum1 + "px, " + rangeNum2 + "px); opacity: 0; } }" + "</style></div>");
  setTimeout(function(){
    $('#'+makeid2).html("");
    $('#'+makeid2).remove();
}, 30000);
  playbc();
}

function showHide30() {
  var makeid2 = makeid();
  $("#circle30").append(
  "<div id='" +  makeid2 + "'><style>#" +  makeid2 + " { position: fixed; top: " +  rangeNum3 + "%; left: " +  rangeNum4 + "%; transform: translate(-50%, -50%); height: " + pixel * 0.02 + "px; width: " + pixel * 0.02 + "px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background-color: #6ed1b1; display: flex; animation: " + makeid2 + " 40s; animation-direction: alternate; opacity: 0; } @keyframes " + makeid2 + " { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 1; } 100% { transform: translate(" + rangeNum1 + "px, " + rangeNum2 + "px); opacity: 0; } }" + "</style></div>");
  setTimeout(function(){
    $('#'+makeid2).html("");
    $('#'+makeid2).remove();
}, 30000);
  playbd();
}

function showHide31() {
  var makeid2 = makeid();
  $("#circle31").append(
  "<div id='" +  makeid2 + "'><style>#" +  makeid2 + " { position: fixed; top: " +  rangeNum3 + "%; left: " +  rangeNum4 + "%; transform: translate(-50%, -50%); height: " + pixel * 0.01 + "px; width: " + pixel * 0.01 + "px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background-color: #6ed1b1; display: flex; animation: " + makeid2 + " 40s; animation-direction: alternate; opacity: 0; } @keyframes " + makeid2 + " { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 1; } 100% { transform: translate(" + rangeNum1 + "px, " + rangeNum2 + "px); opacity: 0; } }" + "</style></div>");
  setTimeout(function(){
    $('#'+makeid2).html("");
    $('#'+makeid2).remove();
}, 30000);
  playbe();
}

function showHide32() {
  var makeid2 = makeid();
  $("#circle32").append(
  "<div id='" +  makeid2 + "'><style>#" +  makeid2 + " { position: fixed; top: " +  rangeNum3 + "%; left: " +  rangeNum4 + "%; transform: translate(-50%, -50%); height: " + pixel * 0.0095 + "px; width: " + pixel * 0.0095 + "px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background-color: #6ed1b1; display: flex; animation: " + makeid2 + " 40s; animation-direction: alternate; opacity: 0; } @keyframes " + makeid2 + " { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 1; } 100% { transform: translate(" + rangeNum1 + "px, " + rangeNum2 + "px); opacity: 0; } }" + "</style></div>");
  setTimeout(function(){
    $('#'+makeid2).html("");
    $('#'+makeid2).remove();
}, 30000);
  playbf();
}

function showHide33() {
  var makeid2 = makeid();
  $("#circle33").append(
  "<div id='" +  makeid2 + "'><style>#" +  makeid2 + " { position: fixed; top: " +  rangeNum3 + "%; left: " +  rangeNum4 + "%; transform: translate(-50%, -50%); height: " + pixel * 0.009 + "px; width: " + pixel * 0.009 + "px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background-color: #6ed1b1; display: flex; animation: " + makeid2 + " 40s; animation-direction: alternate; opacity: 0; } @keyframes " + makeid2 + " { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 1; } 100% { transform: translate(" + rangeNum1 + "px, " + rangeNum2 + "px); opacity: 0; } }" + "</style></div>");
  setTimeout(function(){
    $('#'+makeid2).html("");
    $('#'+makeid2).remove();
}, 30000);
  playbg();
}

function showHide34() {
  var makeid2 = makeid();
  $("#circle34").append(
  "<div id='" +  makeid2 + "'><style>#" +  makeid2 + " { position: fixed; top: " +  rangeNum3 + "%; left: " +  rangeNum4 + "%; transform: translate(-50%, -50%); height: " + pixel * 0.0075 + "px; width: " + pixel * 0.0075 + "px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background-color: #6ed1b1; display: flex; animation: " + makeid2 + " 40s; animation-direction: alternate; opacity: 0; } @keyframes " + makeid2 + " { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 1; } 100% { transform: translate(" + rangeNum1 + "px, " + rangeNum2 + "px); opacity: 0; } }" + "</style></div>");
  setTimeout(function(){
    $('#'+makeid2).html("");
    $('#'+makeid2).remove();
}, 30000);
  playbh();
}

// Price Range atribute
pixel = (btcusd * btcsatoshi).toFixed(2);
    if (pixel >= 0.01 && pixel <= 0.25) {
      showHide01();
      var makeid3 = makeid();
      $("#log").append("<div id='" + makeid3 + "' class='log2'>+ " + pixel + " USD = " + btcsatoshi + " BTC</div>");
            setTimeout(function(){
    $('#'+makeid3).html("");
    $('#'+makeid3).remove();
}, 6000);
    } else if (pixel > 0.25 && pixel <= 0.5) {
      showHide02();
      var makeid3 = makeid();
      $("#log").append("<div id='" + makeid3 + "' class='log2'>+ " + pixel + " USD = " + btcsatoshi + " BTC</div>");
            setTimeout(function(){
    $('#'+makeid3).html("");
    $('#'+makeid3).remove();
}, 6000);
    } else if (pixel > 0.5 && pixel <= 1) {
      showHide03();
      var makeid3 = makeid();
      $("#log").append("<div id='" + makeid3 + "' class='log2'>+ " + pixel + " USD = " + btcsatoshi + " BTC</div>");
            setTimeout(function(){
    $('#'+makeid3).html("");
    $('#'+makeid3).remove();
}, 6000);
    } else if (pixel > 1 && pixel <= 2) {
      showHide04();
      var makeid3 = makeid();
      $("#log").append("<div id='" + makeid3 + "' class='log2'>+ " + pixel + " USD = " + btcsatoshi + " BTC</div>");
            setTimeout(function(){
    $('#'+makeid3).html("");
    $('#'+makeid3).remove();
}, 6000);
    } else if (pixel > 2 && pixel <= 4) {
      showHide05();
      var makeid3 = makeid();
      $("#log").append("<div id='" + makeid3 + "' class='log2'>+ " + pixel + " USD = " + btcsatoshi + " BTC</div>");
            setTimeout(function(){
    $('#'+makeid3).html("");
    $('#'+makeid3).remove();
}, 6000);
    } else if (pixel > 4 && pixel <= 6) {
      showHide06();
      var makeid3 = makeid();
      $("#log").append("<div id='" + makeid3 + "' class='log2'>+ " + pixel + " USD = " + btcsatoshi + " BTC</div>");
            setTimeout(function(){
    $('#'+makeid3).html("");
    $('#'+makeid3).remove();
}, 6000);
    } else if (pixel > 6 && pixel <= 8) {
      showHide07();
      var makeid3 = makeid();
      $("#log").append("<div id='" + makeid3 + "' class='log2'>+ " + pixel + " USD = " + btcsatoshi + " BTC</div>");
            setTimeout(function(){
    $('#'+makeid3).html("");
    $('#'+makeid3).remove();
}, 6000);
    } else if (pixel > 8 && pixel <= 10) {
      showHide08();
      var makeid3 = makeid();
      $("#log").append("<div id='" + makeid3 + "' class='log2'>+ " + pixel + " USD = " + btcsatoshi + " BTC</div>");
            setTimeout(function(){
    $('#'+makeid3).html("");
    $('#'+makeid3).remove();
}, 6000);
    } else if (pixel > 10 && pixel <= 15) {
      showHide09();
      var makeid3 = makeid();
      $("#log").append("<div id='" + makeid3 + "' class='log2'>+ " + pixel + " USD = " + btcsatoshi + " BTC</div>");
            setTimeout(function(){
    $('#'+makeid3).html("");
    $('#'+makeid3).remove();
}, 6000);
    } else if (pixel > 15 && pixel <= 20) {
      showHide10();
      var makeid3 = makeid();
      $("#log").append("<div id='" + makeid3 + "' class='log2'>+ " + pixel + " USD = " + btcsatoshi + " BTC</div>");
            setTimeout(function(){
    $('#'+makeid3).html("");
    $('#'+makeid3).remove();
}, 6000);
    } else if (pixel > 20 && pixel <= 25) {
      showHide11();
      var makeid3 = makeid();
      $("#log").append("<div id='" + makeid3 + "' class='log2'>+ " + pixel + " USD = " + btcsatoshi + " BTC</div>");
            setTimeout(function(){
    $('#'+makeid3).html("");
    $('#'+makeid3).remove();
}, 6000);
    } else if (pixel > 25 && pixel <= 50) {
      showHide12();
      var makeid3 = makeid();
      $("#log").append("<div id='" + makeid3 + "' class='log2'>+ " + pixel + " USD = " + btcsatoshi + " BTC</div>");
            setTimeout(function(){
    $('#'+makeid3).html("");
    $('#'+makeid3).remove();
}, 6000);
    } else if (pixel > 50 && pixel <= 75) {
      showHide13();
      var makeid3 = makeid();
      $("#log").append("<div id='" + makeid3 + "' class='log2'>+ " + pixel + " USD = " + btcsatoshi + " BTC</div>");
            setTimeout(function(){
    $('#'+makeid3).html("");
    $('#'+makeid3).remove();
}, 6000);
    } else if (pixel > 75 && pixel <= 100) {
      showHide14();
      var makeid3 = makeid();
      $("#log").append("<div id='" + makeid3 + "' class='log2'>+ " + pixel + " USD = " + btcsatoshi + " BTC</div>");
            setTimeout(function(){
    $('#'+makeid3).html("");
    $('#'+makeid3).remove();
}, 6000);
    } else if (pixel > 100 && pixel <= 125) {
      showHide15();
      var makeid3 = makeid();
      $("#log").append("<div id='" + makeid3 + "' class='log2'>+ " + pixel + " USD = " + btcsatoshi + " BTC</div>");
            setTimeout(function(){
    $('#'+makeid3).html("");
    $('#'+makeid3).remove();
}, 6000);
    } else if (pixel > 125 && pixel <= 150) {
      showHide16();
      var makeid3 = makeid();
      $("#log").append("<div id='" + makeid3 + "' class='log2'>+ " + pixel + " USD = " + btcsatoshi + " BTC</div>");
            setTimeout(function(){
    $('#'+makeid3).html("");
    $('#'+makeid3).remove();
}, 6000);
    } else if (pixel > 150 && pixel <= 200) {
      showHide17();
      var makeid3 = makeid();
      $("#log").append("<div id='" + makeid3 + "' class='log2'>+ " + pixel + " USD = " + btcsatoshi + " BTC</div>");
            setTimeout(function(){
    $('#'+makeid3).html("");
    $('#'+makeid3).remove();
}, 6000);
    } else if (pixel > 200 && pixel <= 250) {
      showHide18();
      var makeid3 = makeid();
      $("#log").append("<div id='" + makeid3 + "' class='log2'>+ " + pixel + " USD = " + btcsatoshi + " BTC</div>");
            setTimeout(function(){
    $('#'+makeid3).html("");
    $('#'+makeid3).remove();
}, 6000);
    } else if (pixel > 250 && pixel <= 500) {
      showHide19();
      var makeid3 = makeid();
      $("#log").append("<div id='" + makeid3 + "' class='log2'>+ " + pixel + " USD = " + btcsatoshi + " BTC</div>");
            setTimeout(function(){
    $('#'+makeid3).html("");
    $('#'+makeid3).remove();
}, 6000);
    } else if (pixel > 500 && pixel <= 750) {
      showHide20();
      var makeid3 = makeid();
      $("#log").append("<div id='" + makeid3 + "' class='log2'>+ " + pixel + " USD = " + btcsatoshi + " BTC</div>");
            setTimeout(function(){
    $('#'+makeid3).html("");
    $('#'+makeid3).remove();
}, 6000);
    } else if (pixel > 750 && pixel <= 1000) {
      showHide21();
      var makeid3 = makeid();
      $("#log").append("<div id='" + makeid3 + "' class='log2'>+ " + pixel + " USD = " + btcsatoshi + " BTC</div>");
            setTimeout(function(){
    $('#'+makeid3).html("");
    $('#'+makeid3).remove();
}, 6000);
    } else if (pixel > 1000 && pixel <= 1250) {
      showHide22();
      var makeid3 = makeid();
      $("#log").append("<div id='" + makeid3 + "' class='log2'>+ " + pixel + " USD = " + btcsatoshi + " BTC</div>");
            setTimeout(function(){
    $('#'+makeid3).html("");
    $('#'+makeid3).remove();
}, 6000);
    } else if (pixel > 1250 && pixel <= 1500) {
      showHide23();
      var makeid3 = makeid();
      $("#log").append("<div id='" + makeid3 + "' class='log2'>+ " + pixel + " USD = " + btcsatoshi + " BTC</div>");
            setTimeout(function(){
    $('#'+makeid3).html("");
    $('#'+makeid3).remove();
}, 6000);
    } else if (pixel > 1500 && pixel <= 2000) {
      showHide24();
      var makeid3 = makeid();
      $("#log").append("<div id='" + makeid3 + "' class='log2'>+ " + pixel + " USD = " + btcsatoshi + " BTC</div>");
            setTimeout(function(){
    $('#'+makeid3).html("");
    $('#'+makeid3).remove();
}, 6000);
    } else if (pixel > 2000 && pixel <= 2500) {
      showHide25();
      var makeid3 = makeid();
      $("#log").append("<div id='" + makeid3 + "' class='log2'>+ " + pixel + " USD = " + btcsatoshi + " BTC</div>");
            setTimeout(function(){
    $('#'+makeid3).html("");
    $('#'+makeid3).remove();
}, 6000);
    } else if (pixel > 2500 && pixel <= 5000) {
      showHide26();
      var makeid3 = makeid();
      $("#log").append("<div id='" + makeid3 + "' class='log2'>+ " + pixel + " USD = " + btcsatoshi + " BTC</div>");
            setTimeout(function(){
    $('#'+makeid3).html("");
    $('#'+makeid3).remove();
}, 6000);
    } else if (pixel > 5000 && pixel <= 10000) {
      showHide27();
      var makeid3 = makeid();
      $("#log").append("<div id='" + makeid3 + "' class='log2'>+ " + pixel + " USD = " + btcsatoshi + " BTC</div>");
            setTimeout(function(){
    $('#'+makeid3).html("");
    $('#'+makeid3).remove();
}, 6000);
    } else if (pixel > 10000 && pixel <= 15000) {
      showHide28();
      var makeid3 = makeid();
      $("#log").append("<div id='" + makeid3 + "' class='log2'>+ " + pixel + " USD = " + btcsatoshi + " BTC</div>");
            setTimeout(function(){
    $('#'+makeid3).html("");
    $('#'+makeid3).remove();
}, 6000);
    } else if (pixel > 15000 && pixel <= 25000) {
      showHide29();
      var makeid3 = makeid();
      $("#log").append("<div id='" + makeid3 + "' class='log2'>+ " + pixel + " USD = " + btcsatoshi + " BTC</div>");
            setTimeout(function(){
    $('#'+makeid3).html("");
    $('#'+makeid3).remove();
}, 6000);
    } else if (pixel > 25000 && pixel <= 50000) {
      showHide30();
      var makeid3 = makeid();
      $("#log").append("<div id='" + makeid3 + "' class='log2'>+ " + pixel + " USD = " + btcsatoshi + " BTC</div>");
            setTimeout(function(){
    $('#'+makeid3).html("");
    $('#'+makeid3).remove();
}, 6000);
    } else if (pixel > 50000 && pixel <= 100000) {
      showHide31();
      var makeid3 = makeid();
      $("#log").append("<div id='" + makeid3 + "' class='log2'>+ " + pixel + " USD = " + btcsatoshi + " BTC</div>");
            setTimeout(function(){
    $('#'+makeid3).html("");
    $('#'+makeid3).remove();
}, 6000);
    } else if (pixel > 100000 && pixel <= 150000) {
      showHide32();
      var makeid3 = makeid();
      $("#log").append("<div id='" + makeid3 + "' class='log2'>+ " + pixel + " USD = " + btcsatoshi + " BTC</div>");
            setTimeout(function(){
    $('#'+makeid3).html("");
    $('#'+makeid3).remove();
}, 6000);
    } else if (pixel > 150000 && pixel <= 250000) {
      showHide33();
      var makeid3 = makeid();
      $("#log").append("<div id='" + makeid3 + "' class='log2'>+ " + pixel + " USD = " + btcsatoshi + " BTC</div>");
            setTimeout(function(){
    $('#'+makeid3).html("");
    $('#'+makeid3).remove();
}, 6000);
    } else if (pixel > 250000) {
      showHide34();
      var makeid3 = makeid();
      $("#log").append("<div id='" + makeid3 + "' class='log2'>+ " + pixel + " USD = " + btcsatoshi + " BTC</div>");
            setTimeout(function(){
    $('#'+makeid3).html("");
    $('#'+makeid3).remove();
}, 6000);
    }
}