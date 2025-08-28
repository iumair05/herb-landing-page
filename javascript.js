"use strict";

const swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-learn-next",
        prevEl: ".swiper-learn-prev",
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 20
        }
    }
});



const swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-news-next",
        prevEl: ".swiper-news-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 20
        }
    }
});


const swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-culture-next",
        prevEl: ".swiper-culture-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 20
        }
    }

});


const swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-reviews-next",
        prevEl: ".swiper-reviews-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 20
        }
    }

});



// mobile drawer
const menuToggle = document.querySelector(".menu-toggle");
const mobileDrawer = document.querySelector(".mobile-drawer");
const closeDrawer = document.querySelector(".close-drawer");

menuToggle.addEventListener("click", () => {
    mobileDrawer.classList.add("open");
});

closeDrawer.addEventListener("click", () => {
    mobileDrawer.classList.remove("open");
});


// searchQuery input

const searchQuery = document.getElementById('searchQuery');
const searchQueryBtn = document.getElementById('searchQueryBtn')

searchQueryBtn.addEventListener('click', (e) => {
    e.preventDefault()
    alert("Search Query: " + searchQuery.value)
})

// subscribe section
const inputEmail = document.getElementById("inputEmail");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    alert("User email: " + inputEmail.value);
})


// dropdown functionality
const blogsMobileToggle = document.getElementById("blogs-mobile-toggle");
const blogsMobileDropdown = document.getElementById("blogs-mobile-dropdown");

blogsMobileToggle.addEventListener("click", () => {
  blogsMobileDropdown.classList.toggle("open");
  blogsMobileToggle.classList.toggle("open");
});
