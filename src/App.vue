<template>
    <div>
        {{ num }}
        <a-button type="primary" @click="num++">Primary</a-button>
        <a-button>Secondary</a-button>
        <a-button type="dashed">Dashed</a-button>
        <a-button type="outline">Outline</a-button>
        <a-button type="text">Text</a-button>
        <icon-ic-baseline-access-time class="" />
        <icon-home-cube class="" />
        <button
            class="bg-blue-400 hover:bg-blue-500 text-sm text-white font-mono font-light py-2 px-4 rounded border-2 border-blue-200 dark:bg-blue-500 dark:hover:bg-blue-600 color-pink-500">
            Button
        </button>
        <button class="btn-style">
            Button
        </button>
    </div>
</template>
<script setup>
const num = ref(0)
</script>

<style scoped >
.btn-style {
    @apply bg-blue-400 text-sm text-white font-mono font-light py-2 px-4 rounded border-2 border-blue-200;
    @apply hover:bg-blue-500;
    @apply dark:bg-blue-500 dark:hover:bg-blue-600;
}
</style>
