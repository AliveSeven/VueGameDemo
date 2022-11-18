<template>
    <div class="mid">
        <div class="bg">
            <img src="@/assets/icon/part2.png" alt="">
        </div>
        <div class="box">
            <div class="box-one">
                <div class="common-box" v-for="(item, index) in commonBoxMsg" :key="index" @click="getCommonGift(index)"> 
                    <div class="day">第一天</div>
                    <div class="gift">
                        <img src="@/assets/icon/icon-gift.png" alt="">
                    </div>
                    <div class="register">
                        {{ item }}
                    </div>
                </div>  
            </div>

            <div class="box-two">
                <div class="good-box" v-for="(item, index) in boxMsg" :key="index" @click="getBoxGift(index)">
                    <div class="day">第一天</div>
                    <div class="gift">
                        <img src="@/assets/icon/icon-gift.png" alt="">
                    </div>
                    <div class="register">
                        {{ item }}
                    </div>
                </div>  

                <div class="best-box" @click="getBestGift()">
                    <div class="gift">
                        <div class="day">第七天</div>
                        <img src="@/assets/icon/icon-gift.png" alt="" class="best-img">
                    </div>
                    <div class="register">
                        {{ bestBoxMsg }}
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useState } from '@/store/state'; 

const state = useState()

// 普通箱子
const commonBoxMsg : any = ref([])
// 高级箱子
const boxMsg : any = ref([])
// 豪华箱子
const bestBoxMsg : any = ref('签到领取')

// 普通的箱子有四个
for(var i = 0; i < 4 ; ++i){
    const msg = '签到领取'
    commonBoxMsg.value.push(msg)
}
// 高级的箱子有两个
for(var i = 0; i < 2 ; ++i){
    const msg = '签到领取'
    boxMsg.value.push(msg)
}

// 点击普通箱子
function getCommonGift(i : number){
    if(commonBoxMsg.value[i] == '签到领取'){
        state.changeShowMask('登录成功，恭喜获得', 'icon-gift','宝箱×1')
        commonBoxMsg.value[i] = '已领取'
    }else {
        state.changeShowMask('已经领取过了','icon-gift','宝箱×1')
    }
}

// 点击高级箱子
function getBoxGift(i : number){
    if(boxMsg.value[i] == '签到领取'){
        state.changeShowMask('登录成功，恭喜获得', 'icon-gift','高级宝箱×1')
        boxMsg.value[i] = '已领取'
    }else {
        state.changeShowMask('已经领取过了','icon-gift','高级宝箱×1')
    }
}

// 点击豪华箱子
function getBestGift(){
    if(bestBoxMsg.value == '签到领取'){
        state.changeShowMask('登录成功，恭喜获得', 'icon-gift','豪华宝箱×1')
        bestBoxMsg.value = '已领取'
    }else {
        state.changeShowMask('已经领取过了','icon-gift','豪华宝箱×1')
    } 
}

</script>

<style lang="less">
.mid{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(43, 31, 78);
    padding-bottom: 150px;
    transition: .3s;

    @media screen  and (max-width : 500px){
        padding-bottom: 50px;
    }

    .bg{
        position: absolute;
        width: 95%;

        img{
            width: 100%;
            height: 100%;
        }
    }

    .box{
        z-index: 300;
        margin-top: 30px;

        @media screen and(max-width : 500px){
            margin-top: 10px;
        }

        .box-one{
            display: flex;
            justify-content: center;
            align-items: center;

            .common-box{
                cursor: pointer;
                background: url('@/assets/icon/s1.png') no-repeat;
                background-size: cover;
                width: 140px;
                height: 140px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                margin: 20px 10px 10px 10px;

                @media screen and (max-width : 700px){
                    width: 120px;
                    height: 120px;
                    margin-top: 10px;
                }
            
                @media screen and (max-width : 650px){
                    width: 100px;
                    height: 100px;
                }


                @media screen and (max-width : 550px){
                    width: 90px;
                    height: 90px;
                }

                @media screen and (max-width : 500px){
                    width: 80px;
                    height: 80px;
                }
            
                @media screen and (max-width : 450px){
                    width: 70px;
                    height: 70px;
                }

                @media screen and (max-width : 400px){
                    width: 65px;
                    height: 65px;
                }

                .day{
                    font-size: 1.2rem;
                    font-family: SourceHanSansCN;
                    font-weight: 500;
                    color: #FFFFFF;
                }

                .register{
                    width: 100%;
                    background: #5ED2EE;
                    border-radius: 0px 0px 10px 10px;
                    text-align: center;
                    font-size: 1.2rem;
                    font-family: Source Han Sans CN;
                    font-weight: bold;
                    color: #222A5A;
                }
                
                .gift{
                    width: 80px;

                    @media screen and(max-width : 700px) {
                        width: 70px;
                    }
                    
                    @media screen and(max-width : 650px) {
                        width: 55px;
                    }

                    @media screen and(max-width : 600px) {
                        width: 45px;
                    }

                    @media screen and(max-width : 550px) {
                        width: 40px;
                    }

                    @media screen and(max-width : 500px) {
                        width: 30px;
                    }

                    @media screen and (max-width : 450px){
                        width: 20px;
                    }

                    img{
                        width: 100%;
                    }
                }
            }
        }

        .box-two{
            display: flex;
            justify-content: center;
            align-items: center;

            .good-box{
                cursor: pointer;
                background: url('@/assets/icon/s1.png') no-repeat;
                background-size: cover;
                width: 170px;
                height: 140px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                margin: 5px 10px 10px 10px;
                border-radius: 0px 0px 10px 10px;

                @media screen and(max-width : 700px) {
                    width: 150px;
                    height: 100px;
                }
                
                @media screen and(max-width : 650px) {
                    width: 135px;
                    height: 80px;
                }

                @media screen and(max-width : 600px) {
                    width: 125px;
                    height: 70px;
                }

                @media screen and(max-width : 550px) {
                    width: 110px;
                    height: 70px;
                }

                @media screen and(max-width : 500px) {
                    width: 90px;
                    height: 60px;
                }

                @media screen and (max-width : 450px){
                    width: 80px;
                    height: 60px;
                }

                .day{
                    font-size: 1.2rem;
                    font-family: SourceHanSansCN;
                    font-weight: 500;
                    color: #FFFFFF;
                    padding-top: 5px;
                }

                .register{
                    width: 100%;
                    background: #5ED2EE;
                    border-radius: 0px 0px 10px 10px;
                    text-align: center;
                    font-size: 1.2rem;
                    font-family: Source Han Sans CN;
                    font-weight: bold;
                    color: #222A5A;
                }

                .gift {
                    width: 80px;

                    @media screen and(max-width : 700px) {
                        width: 70px;
                    }

                    @media screen and(max-width : 650px) {
                        width: 60px;
                    }

                    @media screen and(max-width : 600px) {
                        width: 50px;
                    }

                    @media screen and(max-width : 550px) {
                        width: 45px;
                    }

                    @media screen and(max-width : 550px) {
                        width: 40px;
                    }

                    @media screen and(max-width : 550px) {
                        width: 30px;
                    }
                    
                    @media screen and (max-width : 450px){
                        width: 20px;
                    }

                    img{
                        width: 100%;
                    }
                }
            }
            
            .best-box{
                cursor: pointer;
                background: url('@/assets/icon/s3.png') no-repeat;
                background-size: cover;
                width: 250px;
                height: 140px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                margin: 5px 10px 10px 10px;
                border-radius: 0px 0px 10px 10px;

                @media screen and (max-width : 700px){
                    width: 220px;
                    height: 120px;
                }
            
                @media screen and (max-width : 650px){
                    width: 200px;
                    height: 85px;
                }
            
                @media screen and (max-width : 550px){
                    width: 175px;
                    height: 75px;
                }
            
                @media screen and (max-width : 500px){
                    width: 130px;
                    height: 60px;
                }

                @media screen and (max-width : 450px){
                    width: 100px;
                    height: 60px;
                }

                .gift{
                    padding-top: 30px;
                    margin-bottom: 5px;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;

                    @media screen and (max-width : 550px){
                        padding-top: 20px;
                    }

                    .best-img{

                        @media screen and (max-width : 700px){
                            width: 60px;
                            height: 60px;
                        }
                    
                        @media screen and (max-width : 650px){
                            width: 50px;
                            height: 50px;
                        }
                    
                        @media screen and (max-width : 550px){
                            width: 40px;
                            height: 40px;
                        }
                    
                        @media screen and (max-width : 500px){
                            width: 30px;
                            height: 30px;
                        }
                    
                    }

                    .day{
                        margin-bottom: 20px;
                        font-size: 1.5rem;
                        font-family: SourceHanSansCN;
                        font-weight: 500;
                        color: #FFFFFF;
                        
                        @media screen and(max-width: 500px){
                            margin-bottom: 0px;
                        }

                    }
                }

                .register{
                    width: 100%;
                    background: linear-gradient(90deg, #FFFFFF 0%, #F2AF59 0%, #F8E2B8 55.00000000000001%, #ECAD4A 100%);
                    border-radius: 0px 0px 10px 10px;
                    text-align: center;
                    font-size: 1.2rem;
                    font-family: Source Han Sans CN;
                    font-weight: bold;
                    color: #222A5A;
                }
            }
        }
    }
}
</style>
