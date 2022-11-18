<template>
    <div class="dialog">
        <div class="msg">
            <div class="content">
                {{ msg }}
            </div>
            <div class="gift">
                <img :src="getImageUrl(gift)" alt="">
            </div>
            <div class="gift-des">
                {{ rewardMsg }}
            </div>

            <div class="c-btn">
                <button @click="state.changeShowMask(),state.confirmDialog()">确认</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useState } from '@/store/state';
const state = useState()

const props = defineProps<{
    msg? : string
    gift? : string
    rewardMsg? : string
}>()

function getImageUrl(name : any) {
    return new URL(`../assets/icon/${name}.png`, import.meta.url).href;
}

</script>

<style lang="less">
.dialog{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 400px;
    height: 270px;
    border-radius: 10px 10px 30px 30px;
    background-color: rgb(251, 251, 251);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width : 500px){
        width: 350px;
        height: 220px;
    }

    .msg{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .content {
            text-align: center;
            font-size: 2rem;
            font-weight: bold;
        }

        .gift{
            width: 80px;
            height: 40%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 10px;

            img{
                width: 100%;
                height: 100%;
            }
        }

        .gift-des{
            width: 100%;
            text-align: center;
            font-size: 1rem;
            margin: 5px 0;
            color: gray;
        }

        .c-btn{
            width: 100%;
            display: flex;
            justify-content: center;
            margin-top: 5px;
            
            button{
                width: 100px;
                height: 35px;
                cursor: pointer;
                font-size: 1.2rem;
            }

        }
    }

}
</style>
