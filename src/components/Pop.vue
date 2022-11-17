<template>
    <div class="pop" :class="ImgSize" >
        <img :src="`/src/assets/icon/${ImgType}`" alt="">
        <div class="content">
            <img :src="`/src/assets/icon/${content}`" alt="">
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// content必须放在icon目录下，其他图片也是
const props = defineProps<{
    size? : string
    type? : string
    content? : string
    width? : string
    height? : string
}>()

// 气泡大小，分为大、中、小
const ImgSize = ref()
// 气泡颜色类型，分为红、蓝、黄、白
const ImgType = ref()

if(props.size ==='large'){
    ImgSize.value = 'largeSize'
}else if(props.size ==='mid'){
    ImgSize.value = 'midSize'
}else{
    ImgSize.value = 'smallSize'
}

// 气泡颜色类型，不同类型对应不同颜色
if(props.type === 'type1'){
    ImgType.value = 'pop1.png'
}else if(props.type === 'type2'){
    ImgType.value = 'pop2.png'
}else if(props.type === 'type3'){
    ImgType.value = 'pop3.png'
}else{
    ImgType.value = 'pop4.png'
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
        width: 140px;
        height: 140px;
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

.smallSize { 
    width: 150px;
    height: 150px;

    @media screen and (max-width : 700px){
        width: 120px;
        height: 120px;
    }

    @media screen and (max-width : 650px){
        width: 100px;
        height: 100px;
    }

    @media screen and (max-width : 600px){
        width: 80px;
        height: 80px;
    }

    @media screen and (max-width : 550px){
        width: 60px;
        height: 60px;
    }

    @media screen and (max-width : 500px){
        width: 50px;
        height: 50px;
    }
    
}


.pop{
    // width: 120px;
    // height: 120px;
    z-index: 999;
    position: absolute;
    animation: move 1s ease-in 0s infinite alternate;
    display: flex;
    justify-content: center;
    align-items: center;

    .content{
        position: absolute;
        width: 50%;
        height: 50%;
        bottom: 22%;
        left: 30%;
    }
}

/* 规定动画move是由上到下 */
@keyframes move{
    0% {
        transform: translate(0 , 0);
    }
    100%{
        transform: translate(0 , 20px);
    }
}

</style>