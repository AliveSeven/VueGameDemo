import type { App, Directive } from "vue";

// 导出节流函数
export default function setupThrottleDriective(app : App) {
  /** 定时器 */
  let timer : any = null

  // 节流
  function throttleELfun(el : HTMLElement, throttleTime = 5000) {
    // 监听元素，捕获事件
    el.addEventListener('click', (event:Event) => {
      if (!timer) {
        timer = window.setTimeout(() => {
          timer = null
        }, throttleTime)
      } else {
        // 阻止同层级事件的冒泡
        event?.stopImmediatePropagation()
      }
    }, true)
  }

  const throttleDirective : Directive<HTMLElement> = {
    beforeMount(el, bingding) {
      throttleELfun(el, bingding.value)
    },
  }

  app.directive('throttle', throttleDirective)
}

