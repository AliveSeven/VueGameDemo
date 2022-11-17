<template>
    <div class="dialog">
        <div class="msg">
            <div class="content">
                {{ msg }}
            </div>
            <div class="gift">
                <img :src="`/src/assets/icon/${gift}.png`" alt="">
            </div>
            <div class="gift-des">
                获得奖励
            </div>

            <div class="c-btn">
                <button @click="state.changeShowMask()">确认</button>
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
}>()
</script>

<style lang="less">
.dialog{

    .msg{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 400px;
        height: 250px;
        border-radius: 10px 10px 50px 50px;
        background-color: rgb(251, 251, 251);
        z-index: 999;

        @media screen and (max-width : 500px){
            width: 350px;
            height: 250px;
        }

        .content {
            margin-top: 10px;
            text-align: center;
            font-size: 2rem;
            font-weight: bold;
        }

        .gift{
            width: 100%;
            height: 40%;
            display: flex;
            justify-content: center;
            padding-top: 10px;

            img{
                width: 30%;
                height: 100%;
            }
        }

        .gift-des{
            width: 100%;
            text-align: center;
            font-size: 1rem;
            margin-top: 5px;
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
