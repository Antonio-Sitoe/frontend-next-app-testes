import SlideNav from "./slidenav.js";

if (typeof window !== "undefined") {
  console.log("You are on the browser");
  const slide = new SlideNav(".slide", ".slide-wrapper");
  slide.init();
} else {
  console.log("You are on the server");
}

// slide.addArrow('.prev', '.next');
// slide.addControl('.custom-controls');
