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
        // 当前拥有的金币
        coin : 1000,
        // 抽奖球显示
        custGift : false,
        // 对话框奖励信息
        rMsg : '获得奖励'
    }
  },
  
  actions:{
    // 改变遮罩层状态
    changeShowMask(msg? : string , gift? : string , reMsg? : string){
        this.showMask = !this.showMask
        if(msg){
            this.changeDialog(msg)
        }
        if(gift){
            this.changeDialogGift(gift)
        }
        if(reMsg){
            this.changeRewardMsg(reMsg)
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
    // 改变奖励信息
    changeRewardMsg(reward : string){
        this.rMsg = reward
    },
    // 改变猫头
    changeMao(){
        this.lotAct = !this.lotAct
    },
    // 改变气泡激活状态
    changePop(){
        this.popAct = !this.popAct
    },
    // 增加抽奖需要的硬币数
    addCustCoin(){
        this.custCoin = this.custCoin + 10
    },
    // 改变抽奖礼物状态
    changeCustGift(){
        this.custGift = !this.custGift
    },
    // 改变当前金币
    changeCoin(cost : number){
        this.coin = this.coin - cost
    }

  }

})

