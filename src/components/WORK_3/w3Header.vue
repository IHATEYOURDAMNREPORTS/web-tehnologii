<template>
    <div class="flex flex-row md:flex-col lg:flex-row justify-between
     items-center"> <!-- TODO: mb-[200px] -->
        <div class="flex flex-col lg:gap-[26px] py-4 lg:py-0 items-start
        md:items-center lg:items-start w-full lg:w-[146px] lg:ml-[60px]
        lg:h-[52px] flex-shrink-0 laptopL:ml-[120px]">
            <img class="flex-shrink-0" alt="logo"
            src="@/assets/WORK_3/logo.svg">
        </div>
        <button href="#" @click="Toggle" class="flex md:hidden flex-col
        justify-between w-10 h-8">
          <span class="sr-only">Menu</span>
          <span class="bg-slate-700 h-1 w-full"></span>
          <span class="bg-slate-700 h-1 w-full"></span>
          <span class="bg-slate-700 h-1 w-full"></span>
        </button>
        <div class="md:flex gap-12 items-center hidden md:justify-evenly">
            <div class="text-neutral-700 text-[17px] font-medium font-['Roboto']
            border-b-4 h-[100%] flex items-center
            [border-image:linear-gradient(to_right,#818cf8_50%,transparent_50%)_100%_1]">Home</div>
            <div class="text-neutral-700 text-[17px] font-medium font-['Roboto']
            h-[100%] flex items-center">About Us</div>
            <div class="text-neutral-700 text-[17px] font-medium font-['Roboto']
            h-[100%] flex items-center">Our Services</div>
            <div class="text-neutral-700 text-[17px] font-medium font-['Roboto']
            h-[100%] flex items-center">Responsibilities</div>
            <div class="text-neutral-700 text-[17px] font-medium font-['Roboto']
            h-[100%] flex items-center">Country</div>
            <button class="md:w-[110px] h-[42px] rounded-[11px] border-2
            border-indigo-400 text-center text-neutral-600 font-medium
            font-['Roboto']">Apply</button>
        </div>
    </div>
    <div class="navbar-links hidden text-white w-full" v-bind:class="{ active:
    isActive}">
          <ul class="bg-indigo-400 w-full">
            <li class="hover:bg-indigo-300"><a href="#">Home</a></li>
            <li class="hover:bg-indigo-300"><a href="#">Our Services</a></li>
            <li class="hover:bg-indigo-300"><a
            href="#">Responsibilities</a></li>
            <li class="hover:bg-indigo-300"><a href="#">Country</a></li>
            <li class="hover:bg-indigo-300"><a href="#">Apply</a></li>
          </ul>
        </div>
</template>

<script>

export default {
  name: 'w3Header',

  data() {
    return {
      isActive: false,
    };
  },

  methods: {
    Toggle() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style>
.navbar-links.active{
    display:flex !important;
}
</style>
