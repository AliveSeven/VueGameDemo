<template>
    <div class="shop">
        <div class="bg">
            <!-- <img src="@/assets/icon/p3.png" alt=""> -->
        </div>
        <div class="i-bg">
            <img src="@/assets/icon/p3.png" alt="">
        </div>
        <div class="items">
            <ShopItem></ShopItem>
            <ShopItem></ShopItem>
            <ShopItem></ShopItem>
            <ShopItem></ShopItem>
            <ShopItem></ShopItem>
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
    padding-bottom: 50px;
    background: rgb(43, 31, 78);

    .bg{
        position: relative;
    }

    .i-bg{
        position: absolute;
        width: 95%;
        transition: .3s;

        @media screen and(max-width: 650px) {
            transform: translate(0,-4%);
        }
        img{
            width: 100%;
        }
    }

    .items{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: .3s;
        
        @media screen and (max-width: 350px){
            transform: translate(0,-10%);
        }
    }

}
</style>
