function sendMail() {
    var params = {
        from_location: document.getElementById("from_location").value,
        to_location: document.getElementById("to_location").value,
        move_date: document.getElementById("move_date").value,
        bedrooms: document.getElementById("bedrooms").value,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
    };

    const serviceID = "service_jqklaad";
    const templateID = "template_2v53kum";

    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                console.log(res);
                alert("Your message was sent successfully");
            })
        .catch((err) => console.log(err));
}





var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});



AOS.init({
    offset: 120,
    delay: 1000,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
});






