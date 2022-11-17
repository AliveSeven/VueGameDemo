<template>
    <div class="main">
        <div class="game">
            <div class="mask" v-show="showMask"></div>
            <Top></Top>
            <Mid></Mid>
            <Shop></Shop>
            <Bottom></Bottom>
            <Dialog></Dialog>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Top from '@/components/Top.vue'
import Mid from './components/Mid.vue';
import Shop from './components/Shop.vue';
import Bottom from '@/components/Bottom.vue'
import Dialog from './components/Dialog.vue';

const showMask = ref(true)


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
        background-color: rgb(43, 31, 78);

        .mask{
            position: fixed;
            background: rgba(0,0,0,0.8);
            z-index: 800;
            width: 750px;
            height: 100%;

            @media screen and (max-width : 750px){
                width: 100%;
            }
        }
    }
}
</style>
