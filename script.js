const moodyDogPlay = document.querySelector(".moody-dog-btn");
const moodyDogStop = document.querySelector(".moody-dog-btn-hide");
const moodyDogContainer = document.querySelector("#moody-dog");
moodyDogContainer.style.display = "none";
const moodyDogAnimation = bodymovin.loadAnimation({
  wrapper: moodyDogContainer,
  animType: "svg",
  loop: true,
  autoplay: false,
  path: "https://assets3.lottiefiles.com/packages/lf20_lzpnnin5.json",
});
moodyDogPlay.addEventListener("click", () => {
  moodyDogContainer.style.display = "block";
  moodyDogAnimation.goToAndPlay(0, true);
});
moodyDogStop.addEventListener("click", () => {
  moodyDogContainer.style.display = "none";
});

const queenSkaterPlay = document.querySelector(".queen-skater-btn");
const queenSkaterStop = document.querySelector(".queen-skater-btn-hide");
const queenSkaterContainer = document.querySelector("#queen-skater");
queenSkaterContainer.style.display = "none";
const queenSkaterAnimation = bodymovin.loadAnimation({
  wrapper: queenSkaterContainer,
  animType: "svg",
  loop: true,
  autoplay: false,
  path: "https://assets3.lottiefiles.com/packages/lf20_ch1qp0yv.json",
});
queenSkaterPlay.addEventListener("click", () => {
  queenSkaterContainer.style.display = "block";
  queenSkaterAnimation.goToAndPlay(0, true);
});
queenSkaterStop.addEventListener("click", () => {
  queenSkaterContainer.style.display = "none";
});

const celebrationPlay = document.querySelector(".celebration-btn");
const celebrationStop = document.querySelector(".celebration-btn-hide");
const celebrationContainer = document.querySelector("#celebration");
celebrationContainer.style.display = "none";
const celebrationAnimation = bodymovin.loadAnimation({
  wrapper: celebrationContainer,
  animType: "svg",
  loop: true,
  autoplay: false,
  path: "https://assets6.lottiefiles.com/packages/lf20_5ki7ru7q.json",
});
celebrationPlay.addEventListener("click", () => {
  celebrationContainer.style.display = "block";
  celebrationAnimation.goToAndPlay(0, true);
});
celebrationStop.addEventListener("click", () => {
  celebrationContainer.style.display = "none";
});

const happyPlay = document.querySelector(".happy-btn");
const happyStop = document.querySelector(".happy-btn-hide");
const happyContainer = document.querySelector("#happy");
happyContainer.style.display = "none";
const happyAnimation = bodymovin.loadAnimation({
  wrapper: happyContainer,
  animType: "svg",
  loop: true,
  autoplay: false,
  path: "https://assets6.lottiefiles.com/packages/lf20_xv1gn5by.json",
});
happyPlay.addEventListener("click", () => {
  happyContainer.style.display = "block";
  happyAnimation.goToAndPlay(0, true);
});
happyStop.addEventListener("click", () => {
  happyContainer.style.display = "none";
});

const shopperPlay = document.querySelector(".shopper-btn");
const shopperStop = document.querySelector(".shopper-btn-hide");
const shopperContainer = document.querySelector("#shopper");
shopperContainer.style.display = "none";
const shopperAnimation = bodymovin.loadAnimation({
  wrapper: shopperContainer,
  animType: "svg",
  loop: true,
  autoplay: false,
  path: "https://assets6.lottiefiles.com/packages/lf20_axmniekv.json",
});
shopperPlay.addEventListener("click", () => {
  shopperContainer.style.display = "block";
  shopperAnimation.goToAndPlay(0, true);
});
shopperStop.addEventListener("click", () => {
  shopperContainer.style.display = "none";
});
