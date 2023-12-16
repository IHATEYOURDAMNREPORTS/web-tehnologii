<template>
    <div class="w-full overflow-hidden relative">
      <div class="w-full flex eio my-[30px]" ref="inner">
            <slot></slot>
      </div>
    </div>
    <div class="lg:mt-[75px] mt-[20px] m-[0_auto] flex items-center justify-center gap-2
    h-3.5">
     <template v-for="n in totalCards">
      <button ref="navbtn" class="w-2.5 h-2.5 bg-neutral-500 bg-opacity-30
      rounded-full" @click="goToSlide(n)"></button>
    </template>
    </div>
  </template>

<script>
/* v-for IN RANGE doesn't need a key  */
/* eslint vue/require-v-for-key: 0 */

export default {
  data() {
    return {
      step: 0,
      transitioning: false,
      currentIndex: 1,
      numButtons: this.totalCards,
    };
  },
  props: {
    numSlides: Number,
    totalCards: Number,
    eventName: String,
  },
  mounted() {
    this.setStep();
    this.hideNavBtns();
    this.goToSlide(1);
    setInterval(() => {
      this.loopThru();
    }, 3000);
  },
  emits: ['w3U', 'w3NE', 'w3EV', 'w3CO', 'w3TC'],
  methods: {
    loopThru() {
      this.currentIndex += 1;
      if (this.currentIndex > this.totalCards) {
        this.currentIndex = 1;
      }
      const index = (this.numButtons < this.currentIndex) ? 1 : this.currentIndex;
      this.goToSlide(index);
    },

    setStep() {
      const w = Math.round(100 / this.numSlides);
      this.$emit(this.eventName, w);
    },

    hideNavBtns() {
      const nbtns = this.$refs.navbtn;
      let n = (this.totalCards === this.numSlides)
        ? this.totalCards : this.numSlides;
      n = this.totalCards - n + 1;
      n = (n === 1) ? 0 : n;
      for (let i = n; i < this.totalCards; i += 1) {
        nbtns[i].classList.add('hidden');
      }
      this.numButtons = n;
      return 0;
    },

    goToSlide(index) {
      this.currentIndex = index;
      const innerWidth = this.$refs.inner.scrollWidth;
      this.step = innerWidth / this.totalCards;
      // console.log(`${this.totalCards} - ${index} < (${this.numSlides} - 1)`);
      const nbtns = this.$refs.navbtn;
      for (let i = 0; i < this.totalCards; i += 1) {
        nbtns[i].classList.remove('active');
      }
      nbtns[index - 1].classList.add('active');
      const slidePosition = -this.step * (index - 1);
      this.$refs.inner.style.transform = `translateX(${slidePosition}px)`;
    },
  },
};
</script>
  <style>

  .active {
    background-color: rgb(129 140 248) !important;
  }
  </style>
