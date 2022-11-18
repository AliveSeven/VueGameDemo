// 想要使用必须先引入 defineStore
import { defineStore } from 'pinia'

export const useState = defineStore('main',{   
  state(){
    return {
        // 遮罩层
        showMask : false ,
        // 弹出框信息
        dialogMsg : '',
        // 礼物信息
        giftMsg : 'coin',
        // 猫头激活
        lotAct : false,
        // 改变气泡激活状态
        popAct : false,
        // 抽奖金币
        custCoin : 10,
        // 抽奖球显示
        custGift : false
    }
  },
  
  actions:{
    // 改变遮罩层状态
    changeShowMask(msg? : string , gift? : string){
        this.showMask = !this.showMask
        if(msg){
            this.changeDialog(msg)
        }
        if(gift){
            this.changeDialogGift(gift)
        }
    },
    // 改变弹出框信息
    changeDialog(msg : string){
        this.dialogMsg = msg
    },
    // 弹出框确认
    confirmDialog(){
        this.custGift = false
    },
    // 改变礼物
    changeDialogGift(gift : string){
        this.giftMsg = gift
    },
    // 改变猫头
    changeMao(){
        this.lotAct = !this.lotAct
    },
    // 改变猫头
    changePop(){
        this.popAct = !this.popAct
    },
    addCustCoin(){
        this.custCoin = this.custCoin + 10
    },
    // 改变抽奖礼物状态
    changeCustGift(){
        this.custGift = !this.custGift
    }
  }

})

