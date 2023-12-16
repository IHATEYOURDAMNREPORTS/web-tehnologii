<template>
  <div class="h-[940px] bg-[#F9F9F9]">
    <div class="flex flex-col mb-[40px] gap-[25px] items-center">
      <div class="text-neutral-700 text-[37px] font-bold font-['Roboto']
      leading-[54px]">News</div>
      <div class="max-w-[950px] h-20 text-zinc-500 text-[22px] font-medium
      font-['Roboto'] leading-[38px] overflow-hidden">Sunt autem nusquam hoc
      epicurus in gravissimo bello animadversionis metu degendae praesidia
      firmissima. Torquatos nostros? quos tu paulo ante cum teneam sententiam,
      quid bonum esse vult.</div>
    </div>
    <caCar @w3NE="handlew3NECarouselEmit" :num-slides=this.nCards :total-cards=3
    event-name="w3NE">
      <div ref="card" class="card mx-auto  shrink-0 h-[406px] bg-white rounded-[15px]
      shadow-xl lg:max-w-[344px]" :style ="{width: w + '%'}">
        <img alt="ico" class="pb-[10px] w-full h-[224px]"
        src="@/assets/WORK_3/c1.png"/>
        <img alt="ico" class="inline pl-[20px]"
        src="@/assets/WORK_3/person_outline_24px.svg"/>
        <div class="inline text-neutral-600 text-base font-semibold
        font-['Roboto']">17 Apr 2020</div>
        <div class=" h-14 pt-[10px] text-neutral-800 text-[22px] font-bold
        font-['Roboto'] pl-[20px]">Come On In. The Water’s Fine (Mostly).</div>
      </div>
      <div ref="card" class="card mx-auto  shrink-0 h-[406px] bg-white rounded-[15px]
      shadow-xl lg:max-w-[344px]" :style ="{width: w + '%'}">
        <img alt="ico" class="pb-[10px] w-full h-[224px]"
        src="@/assets/WORK_3/c2.png"/>
        <img alt="ico" class="inline pl-[20px]"
        src="@/assets/WORK_3/person_outline_24px.svg"/>
        <div class="inline text-neutral-600 text-base font-semibold
        font-['Roboto']">17 Apr 2020</div>
        <div class=" h-14 pt-[10px] text-neutral-800 text-[22px] font-bold
        font-['Roboto'] pl-[20px]">Trump Lays Plans to Reverse Obama’s Climate
        Change Legacy</div>
      </div>
      <div ref="card" class="card mx-auto  shrink-0 h-[406px] bg-white rounded-[15px]
      shadow-xl lg:max-w-[344px]" :style ="{width: w + '%'}">
        <img alt="ico" class="pb-[10px] w-full h-[224px]"
        src="@/assets/WORK_3/c3.png"/>
        <img alt="ico" class="inline pl-[20px]"
        src="@/assets/WORK_3/person_outline_24px.svg"/>
        <div class="inline text-neutral-600 text-base font-semibold
        font-['Roboto']">17 Apr 2020</div>
        <div class=" h-14 pt-[10px] text-neutral-800 text-[22px] font-bold
        font-['Roboto'] pl-[20px]">How a Little Bit of Hydra Regrows a Whole
        Animal</div>
      </div>
    </caCar>
    <button @click="showAlert()" class="m-auto flex items-center pt-1 justify-center">
      <div class="w-[200px] h-16 bg-indigo-400 rounded-[11px] flex items-center
      justify-around">
          <div class="text-white text-[22px] font-medium
          font-['Roboto'] leading-10">Join Here</div>
          <img alt="ico" class="w-6 h-6"
          src="@/assets/WORK_3/arrow_forward_24px.svg"/>
      </div>
    </button>
  </div>
</template>

<script>
import CaCar from '@/components/WORK_3/caCar.vue';

export default {
  name: 'w3News',
  data() {
    return {
      w: null,
      nCards: 3,
    };
  },
  components: {
    CaCar,
  },
  created() {
    if (window.matchMedia('(max-width:640px)').matches) {
      this.nCards = 1;
    } else {
      this.nCards = 3;
    }
  },
  methods: {
    handlew3NECarouselEmit(w) {
      this.w = w;
    },
    showAlert() {
      this.$swal(
        'Макет был реализован Митиковым В.О. Вариант № 3',
      );
    },
  },
};
</script>
