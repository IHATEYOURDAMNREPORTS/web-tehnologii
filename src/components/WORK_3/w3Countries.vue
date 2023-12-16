<template>
    <div class="h-[840px] bg-[#FAFAFA]">
        <div class="flex flex-col mb-[40px] gap-[25px] items-center">
        <div class="text-neutral-700 text-[37px] font-bold font-['Roboto'] leading-[54px]">Countries
        We Covered</div>
        <div class="max-w-[950px] h-20 text-zinc-500 text-[22px] font-medium font-['Roboto']
        leading-[38px] overflow-hidden">Sunt autem nusquam hoc epicurus in gravissimo bello
        animadversionis metu degendae praesidia firmissima. Torquatos nostros? quos tu paulo ante
        cum teneam sententiam, quid bonum esse vult.</div>
      </div>
      <caCar @w3CO="handlew3COCarouselEmit" :num-slides=this.nCards :total-cards=3
      event-name="w3CO">
        <div  ref="card" class="card mx-auto  shrink-0 lg:max-w-[348px] bg-white rounded-[15px]
        shadow text-left" :style ="{width: w + '%'}">
          <img alt="ico" class="w-full h-[210px] rounded-[15px]" src="@/assets/WORK_3/cc1.png"/>
          <div class=" text-gray-700 text-2xl font-bold font-['Roboto'] leading-[37px] pb-[10px]
          pl-[20px] pt-1">Study in Australia</div>
          <div class=" text-gray-700 text-opacity-70 text-base font-medium font-['Roboto'] leading-7
          tracking-wide overflow-hidden pb-[10px] pl-[20px]">Ut aut corporis accusantium illo ullam
          qui laudantium. Maxime rerum sunt et sequi sed qui rerum hic. Voluptatem maiores
          voluptatum voluptate porro harum. Facilis voluptatum eum est.</div>
        </div>
        <div  ref="card" class="card mx-auto  shrink-0 lg:max-w-[348px] bg-white rounded-[15px]
        shadow text-left" :style ="{width: w + '%'}">
          <img alt="ico" class="w-full h-[210px] rounded-[15px]" src="@/assets/WORK_3/cc2.png"/>
          <div class=" text-gray-700 text-2xl font-bold font-['Roboto'] leading-[37px] pb-[10px]
          pl-[20px] pt-1">Study in Canada</div>
          <div class=" text-gray-700 text-opacity-70 text-base font-medium font-['Roboto'] leading-7
          tracking-wide overflow-hidden pb-[10px] pl-[20px]">Ut aut corporis accusantium illo ullam
          qui laudantium. Maxime rerum sunt et sequi sed qui rerum hic. Voluptatem maiores
          voluptatum voluptate porro harum. Facilis voluptatum eum est.</div>
        </div>
        <div  ref="card" class="card mx-auto  shrink-0 lg:max-w-[348px] bg-white rounded-[15px]
        shadow text-left" :style ="{width: w + '%'}">
          <img alt="ico" class="w-full h-[210px] rounded-[15px]" src="@/assets/WORK_3/cc3.png"/>
          <div class=" text-gray-700 text-2xl font-bold font-['Roboto'] leading-[37px] pb-[10px]
          pl-[20px] pt-1">Study in London</div>
          <div class=" text-gray-700 text-opacity-70 text-base font-medium font-['Roboto'] leading-7
          tracking-wide overflow-hidden pb-[10px] pl-[20px]">Ut aut corporis accusantium illo ullam
          qui laudantium. Maxime rerum sunt et sequi sed qui rerum hic. Voluptatem maiores
          voluptatum voluptate porro harum. Facilis voluptatum eum est.</div>
        </div>
      </caCar>
    </div>
</template>

<script>

import caCar from '@/components/WORK_3/caCar.vue';

export default {
  name: 'w3Countries',
  data() {
    return {
      w: null,
      nCards: 3,
    };
  },

  components: {
    caCar,
  },
  created() {
    if (window.matchMedia('(max-width:640px)').matches) {
      this.nCards = 1;
    } else {
      this.nCards = 3;
    }
  },
  methods: {
    handlew3COCarouselEmit(w) {
      this.w = w;
    },
  },
};
</script>
