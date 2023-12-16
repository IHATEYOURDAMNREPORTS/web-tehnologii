<template>
    <div class="flex lg:h-[700px] md:text-left justify-between">
        <div class="laptopL:pl-[120px] lg:pl-[60px]">
            <div class="md:mb-[40px]">
                <span class="text-zinc-800 text-[36px] md:text-[56px] font-black font-['Roboto']">We
                Help to </span>
                <span class="text-indigo-400 text-[36px] md:text-[56px] font-black
                font-['Roboto']">Build<br/></span>
                <span class="text-zinc-800 text-[36px] md:text-[56px] font-black
                font-['Roboto']">Your Dream</span>
            </div>
            <div class="max-w-[600px] text-zinc-500 text-[18px] md:text-[22px] font-medium
            font-['Roboto'] leading-[38px]">We are  always availed to consult on taking your higher
            education to the next level so you can stay competitive in the global world. We welcome
            the opportunity to work with you "today" for "tomorrow's" better career solutions.</div>
            <button @click="showAlert()"  class=" flex items-center pt-1 justify-center
            md:justify-start">
                <div class="w-[200px] h-16 bg-indigo-400 rounded-[11px] flex items-center
                justify-around">
                    <div class="text-white text-[22px] font-medium font-['Roboto'] leading-10">Apply
                    Online</div>
                    <img alt="ico" class="w-6 h-6" src="@/assets/WORK_3/arrow_forward_24px.svg"/>
                </div>
            </button>
            <div class="flex gap-[24px] pt-6 justify-center md:justify-start">
                <img alt="student" class="" src="@/assets/WORK_3/facebook.svg"/>
                <img alt="twitter" class="" src="@/assets/WORK_3/twitter.svg"/>
                <img alt="instagram" class="" src="@/assets/WORK_3/instagram.svg"/>
            </div>
        </div>
        <div class="justify-between items-end  hidden md:flex">
            <img alt="student" class="relative z-10 -mr-[400px]" src="@/assets/WORK_3/student.svg"/>
            <img alt="oval" class="relative -z-10  -mb-5 overflow-hidden"
            src="@/assets/WORK_3/Oval.svg"/>
        </div>
    </div>
</template>

<script>

export default {
  name: 'w3Face',
  methods: {
    showAlert() {
      this.$swal(
        'Макет был реализован Митиковым В.О. Вариант № 3',
      );
    },
  },
};
</script>
