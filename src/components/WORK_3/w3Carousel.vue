<template>
<div :class="['flex', 'items-center', justify, 'overflow-hidden']">
    <slot></slot>
</div>
<div class="mt-[75px] m-[0_auto] flex items-center justify-center gap-2 h-3.5">
            <div class="w-3.5 h-3.5 bg-indigo-400
            rounded-full"></div>
            <div class="w-2.5 h-2.5 bg-neutral-500
            bg-opacity-30 rounded-full"></div>
            <div class="w-2.5 h-2.5 bg-neutral-500
            bg-opacity-30 rounded-full"></div>
            <div class="w-2.5 h-2.5 bg-neutral-500
            bg-opacity-30 rounded-full"></div>
        </div>
</template>

<script>
export default {
  name: 'w3Carousel',
  props: ['justify'],
};
</script>
