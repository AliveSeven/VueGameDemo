<template>
    <div class="main">
        <div class="game">
            <Top></Top>
            <Mid></Mid>
            <Shop></Shop>
        </div>
    </div>
</template>

<script setup lang="ts">
import Top from '@/components/Top.vue'
import Mid from './components/Mid.vue';
import Shop from './components/Shop.vue';


</script>

<style lang="less" scoped>
.main{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    .game{
        width: 750px;
        height: 100vh;
        overflow-y: scroll;

    }
}
</style>
