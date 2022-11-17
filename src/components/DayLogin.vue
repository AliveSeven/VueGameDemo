<template>
    <div class="dayLogin">
        <div class="bg">
            <img src="@/assets/icon/daybg.png" alt="">
        </div>
        <div class="des">
            <div class="des-one">
                每日登录
                <span>+1个</span>
            </div>
            <div class="des-two">
                每日登录可获得 1 个神灯币
                <div>
                    <img src="@/assets/icon/coin.png" alt="">
                </div>
            </div>
        </div>

        <div class="r-btn" @click="getLoginGift()">
            <span>{{rbtn}}</span>
            <img src="@/assets/icon/r-btn.png" alt="">
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useState } from '@/store/state';
const state = useState()
const rbtn = ref('领取')

function getLoginGift(){
    if(rbtn.value === '领取'){
        state.changeShowMask('每日登录，恭喜获得','coin')
        rbtn.value = '已领取'
    }else {
        state.changeShowMask('已经领取过了','coin')
    }
}

</script>

<style lang="less">
.dayLogin{
    height: 150px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .bg{
        position: absolute;
        margin: 0 5px;   
    }

    .des{
        z-index: 500;
        margin: 0 20px;

        .des-one{
            font-size: 1.8rem;
            font-family: Source Han Sans CN;
            font-weight: bold;
            color: #372559;
            display: flex;
            align-items: center;

            span{
                width: 80px;
                text-align: center;
                margin-left: 8px;
                background: #F2933E;
                border-radius: 5px;
                color: #FFFFFF;
                font-size: 1.5rem;

                @media screen and (max-width : 550px){
                    width: 70px;
                }
                @media screen and (max-width : 500px){
                    width: 60px;
                }
                @media screen and (max-width : 450px){
                    width: 50px;
                }
            }
        }

        .des-two{
            font-size: 1.3rem;
            font-family: SourceHanSansCN;
            font-weight: 400;
            color: #6A49A5;
            display: flex;
            justify-content: center;
            align-items: center;
            
            @media screen and(max-width : 450px){
                font-size: 12px;
            }

            img{
                margin-top: 5px;
                width: 31px;
                height: 31px;

                @media screen and (max-width : 500px){
                    width: 25px;
                    height: 25px;
                }
                @media screen and (max-width : 450px){
                    width: 18px;
                    height: 18px;
                }
            }
        }
    }

    .r-btn{
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 250px;
        height: 70px;
        margin-right: 10px;
        z-index: 100;

        @media screen and (max-width : 700px){
            width: 230px;
        }
    
        @media screen and (max-width : 650px){
            width: 210px;
        }
    
        @media screen and (max-width : 600px){
            width: 190px;
            height: 60px;
        }
    
        @media screen and (max-width : 550px){
            width: 170px;
            height: 50px;
        }
    
        @media screen and (max-width : 500px){
            width: 140px;
            height: 40px;
        }

        @media screen and (max-width : 450px){
            width: 120px;
            height: 40px;
        }

        span{
            z-index: 500;
            position: absolute;
            font-size: 2.2rem;
            font-family: Source Han Sans CN;
            font-weight: bold;
            color: #FFFFFF;
            text-align: center;
        }

        img{
            width: 100%;
            height: 100%;
        }
    }

}
</style>
