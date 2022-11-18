import type { App, Directive } from "vue";

export default function setupThrottleDriective(app:App) {
  /** 定时器 */
  let timer : any = null

  function throttleELfun(el:HTMLElement, throttleTime = 5000) {
    el.addEventListener('click', (event:Event) => {
      if (!timer) {
        timer = window.setTimeout(() => {
          timer = null
        }, throttleTime)
      } else {
        event?.stopImmediatePropagation()
      }
    }, true)
  }

  const throttleDirective:Directive<HTMLElement> = {
    beforeMount(el, bingding) {
      throttleELfun(el, bingding.value)
    },
  }

  app.directive('throttle', throttleDirective)
}

