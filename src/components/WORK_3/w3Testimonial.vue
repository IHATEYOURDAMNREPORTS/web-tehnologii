<template>
    <div class="h-[700px] bg-white">
      <div class="flex flex-col mb-[40px] gap-[25px] items-center">
        <div class="text-neutral-700 text-[37px] font-bold font-['Roboto']
        leading-[54px]">Testimonial</div>
        <div class="max-w-[950px] h-20 text-zinc-500 text-[22px] font-medium font-['Roboto']
        leading-[38px]">Sunt autem nusquam hoc epicurus in gravissimo bello animadversionis metu
        degendae praesidia firmissima. Torquatos nostros? quos tu paulo ante cum teneam sententiam,
        quid bonum esse vult.</div>
      </div>
  <CaCar @w3TC="handlew3TCCarouselEmit" :num-slides=this.nCards :total-cards=5 event-name="w3TC">
        <div ref="card" class="card mx-auto PC2560:max-w-[1000px]laptopL:max-w-[800px] shrink-0
        p-[31px] h-[308px] bg-white rounded-[15px] shadow" :style ="{width: w + '%'}">
          <div class="flex gap-5 mb-3">
            <img alt="ico" class=" h-[76px] bg-[#ecedff] rounded-[11px] text-red-400
            font-['Roboto']" src="@/assets/WORK_3/t1.png"/>
            <div>
                <div class="text-gray-700 text-[22px] font-semibold font-['Roboto']
                text-left">Harrison Phillips</div>
                <div class="opacity-60 text-gray-700 text-lg font-medium font-['Roboto']
                text-left">Reporter</div>
            </div>
          </div>
          <div class="text-gray-700 text-opacity-70 text-lg font-medium font-['Roboto']
          leading-[31px] text-left lg:max-h-[180px] md:max-h-[140px] max-h-[120px]
          overflow-hidden">Nisi cumque in necessitatibus molestiae eaque excepturi ab. Laboriosam
          ipsam voluptatem voluptatibus labore quam nihil. Quasi occaecati quos ratione quia aut
          molestiae velit et. Voluptatem id ea dicta inventore et quo impedit repudiandae. Qui
          officia aperiam atque qui occaecati est. Magnam voluptatem earum excepturi qui quae ea
          qui.</div>
        </div>
        <div ref="card" class="card mx-auto PC2560:max-w-[1000px]laptopL:max-w-[800px] shrink-0
        p-[31px] h-[308px] bg-white rounded-[15px] shadow" :style ="{width: w + '%'}">
          <div class="flex gap-5 mb-3">
            <img alt="ico" class=" h-[76px] bg-[#ecedff] rounded-[11px] text-red-400
            font-['Roboto']" src="@/assets/WORK_3/t2.png"/>
            <div>
                <div class="text-gray-700 text-[22px] font-semibold font-['Roboto']
                text-left">Ainara Vergara</div>
                <div class="opacity-60 text-gray-700 text-lg font-medium font-['Roboto']
                text-left">Landscape Architect</div>
            </div>
          </div>
          <div class=" text-gray-700 text-opacity-70 text-lg font-medium font-['Roboto']
          leading-[31px] text-left text-left lg:max-h-[180px] md:max-h-[140px] max-h-[120px]
          overflow-hidden">Aut consectetur voluptas. Voluptatem minus quo voluptas in nulla iste.
          Fugiat alias sit sed dolorem quo. Qui praesentium et doloribus minima neque. Facere
          debitis sed est suscipit velit reprehenderit. Dolores aliquid dolore consequuntur
          ex.</div>
        </div>
        <div ref="card" class="card mx-auto PC2560:max-w-[1000px]laptopL:max-w-[800px] shrink-0
        p-[31px] h-[308px] bg-white rounded-[15px] shadow" :style ="{width: w + '%'}">
          <div class="flex gap-5 mb-3">
            <img alt="ico" class=" h-[76px] bg-[#ecedff] rounded-[11px] text-red-400
            font-['Roboto']" src="@/assets/WORK_3/t3.png"/>
            <div>
                <div class="text-gray-700 text-[22px] font-semibold font-['Roboto'] text-left">Niek
                Bove</div>
                <div class="opacity-60 text-gray-700 text-lg font-medium font-['Roboto']
                text-left">Senior Developer</div>
            </div>
          </div>
          <div class=" text-gray-700 text-opacity-70 text-lg font-medium font-['Roboto']
          leading-[31px] text-left lg:max-h-[180px] md:max-h-[140px] max-h-[120px]
          overflow-hidden">Rem quia possimus eum adipisci autem aut sunt laboriosam autem. Qui
          soluta ut aut excepturi dolorem laborum ut. Qui alias aut provident quas illo. Eveniet
          debitis totam quaerat. Enim voluptatem fuga qui. Numquam iusto vero ipsa eveniet
          iusto.</div>
        </div>
        <div ref="card" class="card mx-auto PC2560:max-w-[1000px]laptopL:max-w-[800px] shrink-0
        p-[31px] h-[308px] bg-white rounded-[15px] shadow" :style ="{width: w + '%'}">
          <div class="flex gap-5 mb-3">
            <img alt="ico" class=" h-[76px] bg-[#ecedff] rounded-[11px] text-red-400
            font-['Roboto']" src="@/assets/WORK_3/t3.png"/>
            <div>
                <div class="text-gray-700 text-[22px] font-semibold font-['Roboto'] text-left">Niek
                Bove</div>
                <div class="opacity-60 text-gray-700 text-lg font-medium font-['Roboto']
                text-left">Senior Developer</div>
            </div>
          </div>
          <div class="  text-gray-700 text-opacity-70 text-lg font-medium font-['Roboto']
          leading-[31px] text-left lg:max-h-[180px] md:max-h-[140px] max-h-[120px]
          overflow-hidden">Rem quia possimus eum adipisci autem aut sunt laboriosam autem. Qui
          soluta ut aut excepturi dolorem laborum ut. Qui alias aut provident quas illo. Eveniet
          debitis totam quaerat. Enim voluptatem fuga qui. Numquam iusto vero ipsa eveniet
          iusto.</div>
        </div>
        <div ref="card" class="card mx-auto PC2560:max-w-[1000px]laptopL:max-w-[800px] shrink-0
        p-[31px] h-[308px] bg-white rounded-[15px] shadow" :style ="{width: w + '%'}">
          <div class="flex gap-5 mb-3">
            <img alt="ico" class=" h-[76px] bg-[#ecedff] rounded-[11px] text-red-400
            font-['Roboto']" src="@/assets/WORK_3/t3.png"/>
            <div>
                <div class="text-gray-700 text-[22px] font-semibold font-['Roboto'] text-left">Niek
                Bove</div>
                <div class="opacity-60 text-gray-700 text-lg font-medium font-['Roboto']
                text-left">Senior Developer</div>
            </div>
          </div>
          <div class=" text-gray-700 text-opacity-70 text-lg font-medium font-['Roboto']
          leading-[31px] text-left lg:max-h-[180px] md:max-h-[140px] max-h-[120px]
          overflow-hidden">Rem quia possimus eum adipisci autem aut sunt laboriosam autem. Qui
          soluta ut aut excepturi dolorem laborum ut. Qui alias aut provident quas illo. Eveniet
          debitis totam quaerat. Enim voluptatem fuga qui. Numquam iusto vero ipsa eveniet
          iusto.</div>
        </div>
  </CaCar>
    </div>
</template>

<script>

import CaCar from '@/components/WORK_3/caCar.vue';

export default {
  name: 'w3Testimonial',
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
    handlew3TCCarouselEmit(w) {
      this.w = w;
    },
  },
};
</script>
