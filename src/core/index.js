import Vue from './instance/index'
import {
  initGlobalAPI
} from './global-api/index'
import {
  isServerRendering
} from 'core/util/env'
import {
  FunctionalRenderContext
} from 'core/vdom/create-functional-component'

// vue对象本身扩展全局静态方法
initGlobalAPI(Vue)

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
})

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get() {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
})

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
})

Vue.version = '__VERSION__'

// vue本质上是用function实现的class，原型以及本身扩展了一系列的方法和属性
export default Vue
