<template>
  <w3Header></w3Header>
  <w3Face></w3Face>
  <w3Uni class="bg-[#FAFAFA] "></w3Uni>
  <div class="laptopL:h-[120px] h-[60px] bg-white"></div>
  <w3Services class=""></w3Services>
  <div class="laptopL:h-[120px] h-[60px] bg-white "></div>
  <w3News class=""></w3News>
  <w3Events class=""></w3Events>
  <div class="laptopL:h-[120px] h-[60px] bg-white"></div>
  <w3Countries class=""></w3Countries>
  <w3Testimonial class=""></w3Testimonial>
  <w3Lead class=""></w3Lead>
  <w3Footer class=""></w3Footer>
</template>

<script>
import w3Header from '@/components/WORK_3/w3Header.vue';
import w3Face from '@/components/WORK_3/w3Face.vue';
import w3Uni from '@/components/WORK_3/w3Uni.vue';
import w3Services from '@/components/WORK_3/w3Services.vue';
import w3News from '@/components/WORK_3/w3News.vue';
import w3Events from '@/components/WORK_3/w3Events.vue';
import w3Countries from '@/components/WORK_3/w3Countries.vue';
import w3Testimonial from '@/components/WORK_3/w3Testimonial.vue';
import w3Lead from '@/components/WORK_3/w3Lead.vue';
import w3Footer from '@/components/WORK_3/w3Footer.vue';

export default {
  name: 'WORK_3',

  components: {
    w3Header,
    w3Face,
    w3Uni,
    w3Services,
    w3News,
    w3Events,
    w3Countries,
    w3Testimonial,
    w3Lead,
    w3Footer,
  },
};
</script>
