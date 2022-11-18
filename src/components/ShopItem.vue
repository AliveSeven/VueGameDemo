<template>
    <div class="shopItem">
        <div class="bg">
            <img src="@/assets/icon/item-bg.jpg" alt="">
        </div>
        <div class="item-title">
            礼包名称礼包名称
        </div>
        <div class="limit">
            限购 0 / 81
        </div>

        <div class="shop-item">
            <div class="item">
                <img src="@/assets/icon/coin.png">
                <span>100</span>
            </div>
            <div class="item">
                <img src="@/assets/icon/coin.png">
                <span>100</span>
            </div>
            <div class="item">
                <img src="@/assets/icon/coin.png">
                <span>100</span>
            </div>
        </div>

        <div class="btn">
            <span>¥ 6</span>
            <img src="@/assets/icon/r-btn.png" alt="">
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="less">
.shopItem{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;

    .bg{
        position: absolute;
        width: 92%;
        top: 0;

        img{
            width: 100%;
            height: 100%;
            border-radius: 10px;
        }
    }


    .item-title{
        position: absolute;
        top: 5%;
        left: 10%;
        font-size: 1.2rem;
        font-weight: bold;
        color: #FFFFFF;

        @media screen and (max-width : 400px){
            top: 4%;
            font-size: 11px;
        }
        
    }

    .limit {
        position: absolute;
        top: 7%;
        right: 15%;
        font-size: 1.4rem;
        font-weight: bold;
        color: #FFFFFF;

        @media screen and (max-width : 400px){
            top: 8%;
            font-size: 12px;
        }
    }

    .shop-item{
        position: absolute;
        display: flex;
        align-items: center;
        top: 40%;
        left: 10%;
        z-index: 200;
     
        @media screen and (max-width : 600px){
            top: 30%;
        }
    
        .item{
            background: url('@/assets/icon/i-bg.png') no-repeat;
            background-size: 100%;
            width: 80px;
            height: 80px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 10px;

            @media screen and (max-width : 700px){
                width: 70px;
                height: 70px;
            }

            @media screen and (max-width : 600px){
                width: 60px;
                height: 60px;
            }
            @media screen and (max-width : 550px){
                margin-left: 5px;
                width: 55px;
                height: 55px;
            }
            @media screen and (max-width : 500px){
                width: 50px;
                height: 50px;
            }

            @media screen and (max-width : 450px){
                width: 40px;
                height: 40px;
                margin-left: 0;
            }

            img{
                width: 100%;
            }

            span{
                position: absolute;
                right: 5px;
                bottom: 0;
                color: #FFFFFF;
                font-weight: 500;
                font-size: 1rem;
            }
        }

    }

    .btn{
        cursor: pointer;
        position: absolute;
        top: 45%;
        right: 10%;
        width: 210px;
        
        @media screen and (max-width : 700px){
            width: 190px;
        }

        @media screen and (max-width : 600px){
            top: 35%;
            width: 160px;
        }
        @media screen and (max-width : 550px){
            width: 140px;
        }
        @media screen and (max-width : 500px){
            width: 120px;
        }

        @media screen and (max-width : 450px){
            top: 30%;
        }

        @media screen and (max-width : 400px){
            top: 35%;
        }

        span{
            position: absolute;
            left: 50%;
            top: 45%;
            transform: translate(-50%,-50%);
            color: #FFFFFF;
            font-size: 2rem;
            font-weight: bold;
        }

        img{
            width: 100%;
        }
    }

}
</style>
