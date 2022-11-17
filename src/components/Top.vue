<template>
    <div class="top">
        <div class="star-right">
            <img src="@/assets/icon/star-right.png" alt="">
        </div>
        <div class="star-left">
            <img src="@/assets/icon/star-left.png" alt="">
        </div>

        <div class="top-wrap">
            <div class="title">
                <img src="@/assets/icon/lottery-title01.png" alt="">
            </div>

            <div class="lot">
                <div class="lottery">
                    <img src="@/assets/icon/lottery-normal.png" alt="" v-show="!state.lotAct">
                    <img src="@/assets/icon/lottery-acitive.png" alt="" srcset="" v-show="state.lotAct">
                    <div v-show="showBall">
                        <Ball size="large" anime="moveC" type="type1" style="top: 35%; left: 35%;"></Ball>
                        <Ball size="large" anime="moveD" type="type2" style="top: 40%; left: 20%;"></Ball>
                        <Ball size="large" anime="moveD" type="type3" style="top: 40%; right: 10%;"></Ball>
                        <Ball size="large" anime="moveC" type="type1" style="top: 20%; right: 30%;"></Ball>
                        <Ball size="large" anime="moveE" type="type2" style="top: 50%; right: 20%;"></Ball>
                        <Ball size="large" anime="moveD" type="type4" style="top: 20%; right: 20%;"></Ball>
                        <Ball size="large" anime="moveC" type="type2" style="top: 20%; right: 40%;"></Ball>
                        <Ball size="large" anime="moveC" type="type3" style="top: 50%; left: 30%;"></Ball>
                        <Ball size="large" anime="moveE" type="type2" style="top: 25%; left: 35%;"></Ball>
                        <Ball size="large" anime="moveC" type="type4" style="top: 30%; left: 15%;"></Ball>
                    </div>

                    <Pop size="mid" type="type3" content="bg2-8-1.png" style="top: -10%; left: 30%;"></Pop>
                    <Pop size="mid" type="type4" content="box-chose21.png" style="top: 0; left: 50%;"></Pop>
                    <Pop size="mid" type="type3" content="bg9-5.png" style="top: 0; left: 70%;"></Pop>
                    <Pop size="mid" type="type2" content="icon-gift.png" style="top: 10%; left: 10%;"></Pop>
                    <Pop size="large" type="type1" content="bg2-11-2.png" style="top: 20%; left:31%"></Pop>
                    <Pop size="small" type="type3" content="bg2-9-1.png" style="top: 30%; left: 20%;"></Pop>
                    <Pop size="small" type="type1" content="bg2-9-5.png" style="top: 40%; left: 5%;"></Pop>
                    <Pop size="mid" type="type3" content="bg2-8-3.png" style="top: 50%; left: 25%;"></Pop>
                    <Pop size="mid" type="type2" content="bg10-2.png" style="top: 55%; left: 45%;"></Pop>
                    <Pop size="small" type="type3" content="bg2-11-1.png" style="top: 50%; left: 65%;"></Pop>
                    <Pop size="small" type="type3" content="bg7-3.png" style="top: 40%; left: 75%;"></Pop>
                    <Pop size="mid" type="type4" content="bg12-5.png" style="top: 25%; left: 60%;"></Pop>

                    <div class="btn">
                        <div class="des">
                            <div class="raffle" @click="throttle">开始抽奖</div>
                            <div class="coin">
                                <img src="@/assets/icon/coin.png" alt="">
                                <span>×{{ state.custCoin }}</span>
                            </div>
                        </div>
                        <img src="@/assets/icon/o-btn.png" class="o-btn">
                    </div>

                </div>

                <div class="part1">
                        <img src="@/assets/icon/part1.png" alt="">

                        <div class="btn-left">
                            <img src="@/assets/icon/icon-left.png" alt="">
                        </div>

                        <div class="btn-right">
                            <img src="@/assets/icon/icon-right.png" alt="">
                        </div>

                        <div class="tip">
                            <div class="tip-des">左右按键切换奖池</div>
                            <img src="@/assets/icon/tipbg.png" alt="">
                        </div>

                        <div class="detail">
                            <img src="@/assets/icon/detialbg.png" alt="">
                            <div class="h-btn">
                                <span>累计奖励</span>
                                <img src="@/assets/icon/h-btn.png" alt="">
                            </div>

                            <div class="num">
                                <div class="leave">剩余扭蛋币</div>
                                <div class="coin">{{coin}}</div>
                                <img src="@/assets/icon/numbg.png" alt="" class="numbg">
                            </div>

                            <div class="exit">
                                <img src="@/assets/icon/exit.png" alt="">
                            </div>
                        </div>

                        <div class="daliy">
                            <DayLogin></DayLogin>
                        </div>

                </div>
            </div>
            
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref , onUnmounted } from 'vue'
import { useState } from '@/store/state';
import Pop from '@/components/Pop.vue'
import DayLogin from '@/components/DayLogin.vue'
import Ball from '@/components/Ball.vue';

const state = useState()
// 硬币
const coin = ref(1000)
// 展示抽奖球球
const showBall = ref(false)
// 函数是否在运行
const timer = ref(false)

// 按钮加入节流
function throttle(){
    if(!timer){
        // 每次触发事件时，如果当前有等待执行的函数，则直接return
        return ;
    }else{
        setTimeout(() => {
            raffle()
            timer.value = false
        }, 5000);
    }
}

function raffle(){
    timer.value = true
    const promise = new Promise((resolve,reject) =>{
        setTimeout(() => {
            state.changeMao()
            state.changePop()
            coin.value = coin.value - state.custCoin
            state.addCustCoin()
            resolve('')
        }, 300);
    })

    promise.then((res) =>{
        setTimeout(() => {
            showBall.value = !showBall.value
        }, 1000);
        setTimeout(() => {
            state.changePop()
            showBall.value = !showBall.value
            state.changeShowMask('恭喜获得','bg2-9-5')
        }, 4000);
    })
    
}

</script>

<style lang="less">
.top{
    background : url('@/assets/icon/topimg.jpg') no-repeat;
    background-size: 100% 100%;
    position: relative;
    float: none;

    .star-right{
        position: absolute;
        right: 0;
    }

    .star-left{
        position: absolute;
        left: 0;
    }

    .top-wrap{
        
        .title{
            display: flex;
            justify-content: center;
            width: 100%;
            transform: translateY(70px);

            img{
                width: 90%;
            }
        }

        .lot{
            display: flex;
            flex-direction: column;

            .lottery{
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
                transform: translate(0, 15%);
                z-index: 100;

                img{
                    width: 80%;
                    z-index: 100;
                }

                .btn{
                        position: absolute;
                        top: 100%;
                        left: 50%;
                        transform: translate(-50%,-50%);
                        z-index: 500;
                        cursor: pointer;

                        .o-btn{
                            width: 300px;

                            @media screen and (max-width : 650px){
                                width: 250px;
                            }
                        
                            @media screen and (max-width : 600px){
                                width: 200px;
                                height: 100px;
                            }
                        
                            @media screen and (max-width : 550px){
                                width: 180px;
                                height: 90px;
                            }
                        
                            @media screen and (max-width : 500px){
                                width: 160px;
                                height: 80px;
                            }
                        }

                        .des{
                            top: 30%;
                            left: 50%;
                            transform: translate(-50%,-50%);
                            position: absolute;

                            .raffle{
                                margin-top: 10px;
                                font-size: 1.5rem;
                                font-family: Source Han Sans CN;
                                font-weight: bold;
                                color: #7F1919;
                                -webkit-text-stroke: 1px #FFE3B9;
                            }

                            .coin{
                                display: flex;
                                align-items: center;
                                font-size: 1.5rem;
                                font-family: SourceHanSansCN;
                                font-weight: 400;
                                color: #FFFB82;
                                margin-left: 10px;

                                img{
                                    width: 31px;
                                    height: 31px;

                                    @media screen and (max-width : 500px){
                                        width: 18px;
                                        height: 18px;
                                    }
                                }
                            }
                        }

                        img{
                            width: 300px;
                            height: 110px;
                        }
                    }

            }

            .part1{
                    position: relative;
                    width: 100%;

                    img{
                        width: 100%;
                    }

                    .btn-left{
                        position: absolute;
                        cursor: pointer;
                        top: 12%;
                        left: 15%;
                        transform: translate(-50%,-50%);
                        z-index: 500;
                        width: 95px;

                        @media screen and (max-width : 650px){
                            width: 75px;
                        }
                    
                        @media screen and (max-width : 600px){
                            width: 65px;
                        }
                    
                        @media screen and (max-width : 550px){
                            width: 55px;
                        }
                    
                        @media screen and (max-width : 500px){
                            width: 45px;
                        }

                        img{
                            width: 100%;
                        }
                    }

                    .btn-right{
                        position: absolute;
                        cursor: pointer;
                        top: 12%;
                        right: 15%;
                        transform: translate(50%,-50%);
                        z-index: 500;
                        width: 95px;

                        
                        @media screen and (max-width : 650px){
                            width: 75px;
                        }
                    
                        @media screen and (max-width : 600px){
                            width: 65px;
                        }
                    
                        @media screen and (max-width : 550px){
                            width: 55px;
                        }
                    
                        @media screen and (max-width : 500px){
                            width: 45px;
                        }

                        img{
                            width: 100%;
                        }
                    }

                    .tip{
                        height: 50px;
                        position: absolute;
                        top: 22%;
                        z-index: 500;
                        margin: 10px 36px;

                        img{
                            width: 100%;
                            height: 100%;
                        }

                        .tip-des{
                            position: absolute;
                            top: 50%;
                            right: 50%;
                            transform: translate(50%,-50%);
                            font-size: 1.3rem;
                            font-family: SourceHanSansCN;
                            font-weight: 400;
                            color: #FFFFFF;
                            line-height: 72px;
                            text-shadow: 0px 2px 0px #7D49DE;
                        }
                    }

                    .detail{
                        margin: 0 24px;
                        position: absolute;
                        top: 38%;
                        z-index: 500;
    
                        @media screen and (max-width : 600px){
                            margin: 10px 24px;
                        }
                        @media screen and (max-width : 550px){
                            margin: 15px 24px;
                        }
                        @media screen and (max-width : 500px){
                            margin: 20px 24px;
                        }

                        .h-btn{
                            position: absolute;
                            bottom: 0;
                            left: 7%;
                            width: 175px;
                            height: 90px;

                            @media screen and (max-width : 650px){
                                width: 160px;
                                height: 80px;
                            }

                            @media screen and (max-width : 600px){
                                width: 150px;
                                height: 80px;
                            }
                            @media screen and (max-width : 550px){
                                width: 130px;
                                height: 70px;
                            }
                            @media screen and (max-width : 500px){
                                width: 110px;
                                height: 60px;
                            }
                            @media screen and (max-width : 450px){
                                height: 50px;
                                width: 100px;
                                
                            }

                            img{
                                width: 100%;
                                height: 100%;
                            }
                            
                            span{
                                position: absolute;
                                float: left;
                                text-align: center;
                                top: 50%;
                                left: 50%;
                                transform: translate(-50%,-50%);
                                width: 100%;
                                font-size: 2rem;
                                font-family: SourceHanSansCN;
                                font-weight: bold;
                                color: rgb(130, 29, 27);

                                @media screen and (max-width : 450px){
                                    font-size: 1.7rem;
                                }

                            }
                        }

                        .num{
                            position: absolute;
                            top: 5%;
                            left: 35%;
                            width: 245px;
                            height: 90px;
                            
                            @media screen and (max-width : 700px){
                                width: 230px;
                                height: 80px;
                            }

                            @media screen and (max-width : 600px){
                                width: 200px;
                                height: 70px;
                            }
                            @media screen and (max-width : 550px){
                                margin-left: 5px;
                                width: 170px;
                                height: 60px;
                            }
                            @media screen and (max-width : 500px){
                                width: 150px;
                                height: 50px;
                                left: 40%;
                                top: 10%;
                            }

                            @media screen and (max-width : 450px){
                                width: 120px;
                                height: 50px;
                                margin-left: 0;
                            }

                            @media screen and (max-width : 430px){
                                top: 5%;
                            }

                            @media screen and (max-width : 400px){
                                width: 110px;
                                height: 45px;
                                top: 5%;
                            }

                            .numbg{
                                width: 100%;
                                height: 100%;
                            }

                            .leave{
                                position: absolute;
                                float: left;
                                text-align: center;
                                width: 100%;
                                margin-top: 5px;
                                text-align: center;
                                font-family: SourceHanSansCN;
                                font-size: 1.4rem;
                                font-weight: 400;
                                color: #C6AAF7;

                                @media screen and (max-width : 450px){
                                    font-size: 1rem;
                                }
                            }

                            .coin{
                                position: absolute;
                                float: left;
                                text-align: center;
                                bottom: 5%;
                                width: 100%;
                                font-size: 1.8rem;
                                font-family: SourceHanSansCN;
                                font-weight: 400;
                                color: #FDB25A;

                                @media screen and (max-width : 450px){
                                    font-size: 1.5rem;
                                }
                            }
                            
                        }

                        .exit{
                            position: absolute;
                            top: -20%;
                            right: 7%;
                            
                            @media screen and (max-width : 600px){
                                width: 100px;
                            }

                            @media screen and (max-width : 550px){
                                width: 80px;
                            }

                            @media screen and (max-width : 500px){
                                top: 0;
                                width: 50px;
                            }

                            @media screen and (max-width : 500px){
                                top: 10%;
                                width: 45px;
                            }

                            img{
                                width: 100%;
                            }
                        }
                    }

                    .daliy{
                        position: absolute;
                        top: 60%;
                        width: 100%;
                    }
                }
        }

    }

}


</style>