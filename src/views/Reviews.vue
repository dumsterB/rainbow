<template>
  <div>
    <div class="carousel">
      <div class="carousel__img-container">
        <img src="https://www.darryncodes.co.uk/img/darryncodes-profile.jpg" alt="" class="carousel__image" id="img">
      </div>
      <blockquote class="testimonial">
        <p class="testimonial__text" id="testimonial">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iste, voluptate quam ipsum aliquam, corporis dicta distinctio, ea omnis quo quae non nulla facere rerum aperiam."</p>
        <p class="testimonial__name" id="name">@darryncodes</p>
        <p class="testimonial__job" id="job">Front-end developer</p>
      </blockquote>
      <button class="carousel__btn carousel__btn--left">
        <v-icon>mdi-arrow-left</v-icon>
      </button>
      <button class="carousel__btn carousel__btn--right">
        <v-icon>mdi-arrow-right</v-icon>
      </button>
    </div>
  </div>
</template>
<script lang="js">
// TBC
setTimeout(()=>{
  const reviews = [
    {
      id: 1,
      name: "@darryncodes",
      job: "Front-end developer",
      img: "https://www.darryncodes.co.uk/img/darryncodes-profile.jpg",
      text:
          '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iste, voluptate quam ipsum aliquam, corporis dicta distinctio, ea omnis quo quae non nulla facere rerum aperiam."'
    },
    {
      id: 2,
      name: "@annajohnson",
      job: "UI Designer",
      img: "https://randomuser.me/api/portraits/women/90.jpg",
      text:
          '"Morbi a facilisis quam. In nec lorem sollicitudin, volutpat ex sit amet, sodales augue. Duis pretium sagittis odio, nec porttitor purus vulputate id. Proin urna metus, luctus sit amet."'
    },
    {
      id: 3,
      name: "@peterjones",
      job: "Intern",
      img: "https://randomuser.me/api/portraits/men/1.jpg",
      text:
          '"Donec hendrerit semper eros sed pellentesque. Nunc varius condimentum odio vitae posuere. Nulla sollicitudin sem mauris, eget porttitor justo pulvinar et. Maecenas maximus."'
    },
    {
      id: 4,
      name: "@billanderson",
      job: "UX Designer",
      img: "https://randomuser.me/api/portraits/men/67.jpg",
      text:
          '"Curabitur turpis felis, pellentesque feugiat tristique sit amet, vestibulum eu turpis. Sed commodo nulla quis metus consequat imperdiet. Aenean at elit dui. Donec sagittis ultricies."'
    }
  ];

  const img = document.getElementById("img");
  const testimonial = document.getElementById("testimonial");
  const name = document.getElementById("name");
  const job = document.getElementById("job");

  const leftBtn = document.querySelector(".carousel__btn--left");
  const rightBtn = document.querySelector(".carousel__btn--right");

  let currentItem = 0;

  window.addEventListener("DOMContentLoaded", function () {
    showPerson();
  });

  function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    testimonial.textContent = item.text;
    name.textContent = item.name;
    job.textContent = item.job;
  }

  rightBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson();
  });

  leftBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson();
  });

},1000)

</script>

<style lang="scss">
$primary: #f5f4f6; //background
$secondary: #28262c; //black
$tertiary: #4fc3f7; //light-purple
$accent: #4fc3f7; //purple
$white: #fff;

.carousel {
  width: 40rem;
  margin: 0 auto;
  background-color: $tertiary;
  // padding: 2rem 2rem 5rem 3rem;
  border-radius: 0.8rem;
  color: $white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  @media only screen and (min-width: 37.5em) {
    width: 80rem;
    margin: 10rem auto;
    gap: 8.6rem;

    padding: 3.2rem 4.8rem 3.2rem 8.6rem;

    flex-direction: row;
    align-items: center;
  }

  &__img-container {
    height: 20rem;
  }

  &__image {
    height: 20rem;
    width: 20rem;
    border-radius: 0.8rem;
    transform: scale(1.5);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
  }

  &__btn {
    background-color: $white;
    border: none;
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    cursor: pointer;

    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;

    &--left {
      left: 0;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &--right {
      right: 0;
      top: 50%;
      transform: translate(50%, -50%);
    }
  }
}

ion-icon {
  height: 2.4rem;
  width: 2.4rem;
  color: $tertiary;
}

.testimonial {
  padding: 5rem;
  padding-top: 10rem;

  @media only screen and (min-width: 37.5em) {
    padding: 0;
  }

  &__text {
    font-size: 1.8rem;
    line-height: 1.8rem;
    margin-bottom: 3.2rem;
  }

  &__name {
    font-size: 1.4rem;
    margin-bottom: 0.4rem;
    font-weight: 600;
  }

  &__job {
    font-size: 1.2rem;
    font-weight: 200;
  }
}

</style>
