console.log("Inside Content.js Script")

 window.onload = () => {
    const recommendation_section = document.getElementById("secondary");
    recommendation_section.parentNode.removeChild(recommendation_section);
 }