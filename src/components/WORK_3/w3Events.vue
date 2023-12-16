<template>
    <div class="h-[700px] bg-white">
      <div class="flex flex-col mb-[40px] gap-[25px] items-center">
        <div class="text-neutral-700 text-[37px] font-bold font-['Roboto'] leading-[54px]">Upcoming
        University Events</div>
        <div class="max-w-[950px] h-20 text-zinc-500 text-[22px] font-medium font-['Roboto']
        leading-[38px] overflow-hidden">Sunt autem nusquam hoc epicurus in gravissimo bello
        animadversionis metu degendae praesidia firmissima. Torquatos nostros? quos tu paulo ante
        cum teneam sententiam, quid bonum esse vult.</div>
      </div>
      <caCar @w3EV="handlew3EVCarouselEmit" :num-slides=this.nCards :total-cards=2
      event-name="w3EV">
        <div ref="card" class="card mx-auto  lg:max-w-[540px] shrink-0 p-[31px] lg:h-[308px] bg-[#FAFAFA]
        rounded-[15px] shadow h-[400px]" :style ="{width: w + '%'}">
          <div class="flex gap-5 mb-3">
            <div class="w-[76px] shrink-0 h-[76px] bg-[#ecedff] rounded-[11px] text-center
            text-red-400 font-['Roboto']">
              <div class="text-center text-indigo-400 text-[27px] font-bold
              font-['Roboto']">23</div>
              <div class="text-center text-indigo-400 text-lg font-semibold
              font-['Roboto']">Dec</div>
            </div>
            <div class="text-gray-700 text-2xl font-bold font-['Roboto'] leading-[37px] pb-[10px]
            text-left">Macquarie University, Sydney, Australia</div>
          </div>
          <div class="overflow-hidden h-[110px] text-gray-700 text-opacity-70 text-base font-medium
          font-['Roboto'] leading-7 tracking-wide text-left">Maiores voluptas laboriosam non dolorum
          perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas
          voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat.</div>
          <div class="md:flex block justify-between">
            <div class="flex gap-[20px] justify-center md:justify-normal">
              <div class="text-indigo-400 text-base font-bold font-['Roboto'] text-[17px] leading-7
              tracking-wide text-left">Learn More</div>
              <img alt="ico" class="w-6 h-6 relative md:block hidden"
              src="@/assets/WORK_3/arrow_forward_24px.svg"/>
            </div>
            <div class="flex justify-center md:justify-normal">
              <img alt="ico" class="" src="@/assets/WORK_3/time.svg"/>
              <div class="text-neutral-700 text-base font-semibold font-['Roboto'] leading-7
              tracking-wide">10:00 AM - 2:00 PM</div>
            </div>
          </div>
        </div>
        <div ref="card" class="card mx-auto  lg:max-w-[540px] shrink-0 p-[31px]  lg:h-[308px] bg-[#FAFAFA]
        rounded-[15px] shadow" :style ="{width: w + '%'}">
          <div class="flex gap-5 mb-3">
            <div class="w-[76px] shrink-0 h-[76px] bg-[#ecedff] rounded-[11px] text-center
            text-red-400 font-['Roboto']">
              <div class="text-center text-indigo-400 text-[27px] font-bold
              font-['Roboto']">17</div>
              <div class="text-center text-indigo-400 text-lg font-semibold
              font-['Roboto']">Oct</div>
            </div>
            <div class="text-gray-700 text-2xl font-bold font-['Roboto'] leading-[37px] pb-[10px]
            text-left">Federation University, Australia</div>
          </div>
          <div class="overflow-hidden h-[110px] text-gray-700 text-opacity-70 text-base font-medium
          font-['Roboto'] leading-7 tracking-wide text-left">Maiores voluptas laboriosam non dolorum
          perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas
          voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat.</div>
          <div class="md:flex block justify-between">
            <div class="flex gap-[20px] justify-center md:justify-normal">
              <div class="text-indigo-400 text-base font-bold font-['Roboto'] text-[17px] leading-7
              tracking-wide text-left">Learn More</div>
              <img alt="ico" class="w-6 h-6 relative md:block hidden"
              src="@/assets/WORK_3/arrow_forward_24px.svg"/>
            </div>
            <div class="flex justify-center md:justify-normal">
              <img alt="ico" class="" src="@/assets/WORK_3/time.svg"/>
              <div class="text-neutral-700 text-base font-semibold font-['Roboto'] leading-7
              tracking-wide">10:00 AM - 2:00 PM</div>
            </div>
          </div>
        </div>
      </caCar>
    </div>
</template>

<script>

import caCar from '@/components/WORK_3/caCar.vue';

export default {
  name: 'w3Events',
  data() {
    return {
      w: null,
      nCards: 2,
    };
  },
  components: {
    caCar,
  },
  created() {
        if (window.matchMedia('(max-width:640px)').matches) {
      this.nCards = 1;
    } else {
      this.nCards = 2;
    }
  },
  methods: {
    handlew3EVCarouselEmit(w) {
      this.w = w;
    },
  },
};
</script>
