<template>
    <div class="shop">
        <div class="bg">
            <!-- <img src="@/assets/icon/p3.png" alt=""> -->
        </div>
        <!-- <div class="i-bg">
            <img src="@/assets/icon/p3.png" alt="">
        </div> -->
        <div class="items">
            <ShopItem></ShopItem>
            <ShopItem></ShopItem>
            <ShopItem></ShopItem>
            <ShopItem></ShopItem>
            <ShopItem></ShopItem>
        </div>

        <div class="bottom">
            <img src="@/assets/icon/bottombg.png" alt="">
        </div>
    </div>
</template>

<script lang="ts" setup>
import ShopItem from './ShopItem.vue';

</script>

<style lang="less">
.shop{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(43, 31, 78);
    background-image: url('@/assets/icon/p3.png');
    background-size: 95% 100%;
    background-repeat: no-repeat;
    background-position: center;
    // overflow: hidden;

    .bg{
        position: relative;
    }

    // .i-bg{
    //     position: absolute;
    //     width: 95%;
    //     transition: .3s;
    //     top: 0;

    //     @media screen and(max-width: 650px) {
    //         transform: translate(0,-4%);
    //     }
    //     img{
    //         width: 100%;
    //     }
    // }

    .items{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: .3s;
        margin-top: 50px;
        
    }

    .bottom{
        position: absolute;
        background-color: rgb(43, 31, 78);
        bottom: 0;
        width: 100%;
        z-index: -1;

        img{
            width: 100%;
        }
    }

}
</style>
