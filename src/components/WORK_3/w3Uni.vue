<template>
    <div class="h-[340px]">
        <div class="pt-[50px] opacity-75 text-center text-neutral-700
        text-[22px] font-medium font-['Roboto'] uppercase tracking-widest
        pb-[75px]">Featured Universities</div>
        <caCar @w3U="handlew3UCarouselEmit" :num-slides=this.nCards
        :total-cards=4 event-name="w3U" >
            <img ref="card" alt="uni" class="card mx-auto  shrink-0 lg:max-w-[225px]"
            src="@/assets/WORK_3/macquarie.png"
            :style ="{width: w + '%'}"/>
            <img ref="card" alt="uni" class="card mx-auto  shrink-0 lg:max-w-[225px]"
            src="@/assets/WORK_3/charles.png"
            :style ="{width: w + '%'}"/>
            <img ref="card" alt="uni" class="card mx-auto  shrink-0 lg:max-w-[225px]"
            src="@/assets/WORK_3/newcastle.png"
            :style ="{width: w + '%'}"/>
            <img ref="card" alt="uni" class="card mx-auto  shrink-0 lg:max-w-[225px]"
            src="@/assets/WORK_3/trobe.png"
            :style ="{width: w + '%'}"/>
        </caCar>
    </div>
</template>

<script>

import caCar from '@/components/WORK_3/caCar.vue';

export default {
  name: 'w3Uni',
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
      this.nCards = 2;
    } else {
      this.nCards = 4;
    }
  },
  methods: {
    handlew3UCarouselEmit(w) {
      this.w = w;
    },
  },
};
</script>
