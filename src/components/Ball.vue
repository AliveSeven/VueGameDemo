<template>
    <div class="ball" :class="ballSize , { moveC : anime == 'moveC' } , { moveD : anime == 'moveD' } , { moveE : anime == 'moveE' }">
        <div class="ball-1">
            <img :src="`/src/assets/icon/${ballType}`" alt="">
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// content必须放在icon目录下，其他图片也是
const props = defineProps<{
    size? : string
    type? : string
    anime? : string
}>()

// 气泡大小，分为大、中、小
const ballSize = ref()
// 气泡颜色类型，分为红、蓝、黄、白
const ballType = ref()

if(props.size ==='large'){
    ballSize.value = 'largeSize'
}else if(props.size ==='mid'){
    ballSize.value = 'midSize'
}else{
    ballSize.value = 'smallSize'
}

// 气泡颜色类型，不同类型对应不同颜色
if(props.type === 'type1'){
    ballType.value = 'ball1.png'
}else if(props.type === 'type2'){
    ballType.value = 'ball2.png'
}else if(props.type === 'type3'){
    ballType.value = 'ball3.png'
}else{
    ballType.value = 'ball4.png'
}

</script>

<style lang="less">
.largeSize{
    width: 250px;
    height: 250px;

    @media screen and (max-width : 700px){
        width: 230px;
        height: 230px;
    }

    @media screen and (max-width : 650px){
        width: 210px;
        height: 210px;
    }

    @media screen and (max-width : 600px){
        width: 190px;
        height: 190px;
    }

    @media screen and (max-width : 550px){
        width: 170px;
        height: 170px;
    }

    @media screen and (max-width : 500px){
        width: 150px;
        height: 150px;
    }
}

.midSize{
    width: 180px;
    height: 180px;

    @media screen and (max-width : 700px){
        width: 160px;
        height: 160px;
    }

    @media screen and (max-width : 650px){
        width: 140px;
        height: 140px;
    }

    @media screen and (max-width : 600px){
        width: 120px;
        height: 120px;
    }

    @media screen and (max-width : 550px){
        width: 100px;
        height: 100px;
    }

    @media screen and (max-width : 500px){
        width: 80px;
        height: 80px;
    }
}

.ball{
    z-index: 50;
    position: absolute;
    display: flex;
    // animation: move .3s ease-in 0s infinite alternate;
    justify-content: center;
    align-items: center;
}

.moveC{
    animation: moveC .1s ease-in 0s infinite alternate;
}
.moveD{
    animation: moveD .1s ease-in 0s infinite alternate;
}
.moveE{
    animation: moveE .2s ease-in 0s infinite alternate;
}

/* 规定动画move是由上到下 */
@keyframes moveC{
    0% {
        transform: translate(0 , 0);
    }
    100%{
        transform: translate(0 , 20px);
    }
}

@keyframes moveD{
    0% {
        transform: translate(0 , 0);
    }
    100%{
        transform: translate(0 , -20px);
    }
}

@keyframes moveE{
    0% {
        transform: translate(0 , 0);
    }
    100%{
        transform: translate(0 , -40px);
    }
}
</style>
