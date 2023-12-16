<template>
    <div class="flex flex-col lg:flex-row justify-around items-center content-center my-[60px]">
        <div class="text-neutral-800 text-[37px] font-bold font-['Roboto']">Ready to chase your
        dreams?</div>
        <button @click="showAlert()"  class=" flex items-center pt-1 justify-center
        md:justify-start">
            <div class="w-[200px] h-16 bg-indigo-400 rounded-[11px] flex items-center
            justify-around">
                <div class="text-white text-[22px] font-medium font-['Roboto'] leading-10">Apply
                Online</div>
                <img alt="ico" class="w-6 h-6" src="@/assets/WORK_3/arrow_forward_24px.svg"/>
            </div>
        </button>
    </div>
</template>

<script>

export default {
  name: 'w3Lead',
  methods: {
    showAlert() {
      this.$swal(
        'Макет был реализован Митиковым В.О. Вариант № 3',
      );
    },
  },
};
</script>
