const scrollProgressElement = document.querySelector("#scroll-progress");
function scrollProgress() {
  const totalheightOfWebPage = document.body.scrollHeight;
  const currentDistanceFromTop = document.documentElement.scrollTop;
  const windowHeight = document.documentElement.clientHeight;
  const scrolledPercentage =
    (currentDistanceFromTop / (totalheightOfWebPage - windowHeight)) * 100;
  scrollProgressElement.style.width = Math.round(scrolledPercentage) + "%";
}

document.addEventListener("scroll", scrollProgress);
