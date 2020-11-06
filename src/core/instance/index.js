import {
  initMixin
} from './init'
import {
  stateMixin
} from './state'
import {
  renderMixin
} from './render'
import {
  eventsMixin
} from './events'
import {
  lifecycleMixin
} from './lifecycle'
import {
  warn
} from '../util/index'

/**
 * 利用function实现的类 只能通过new实例化
 */

function Vue(options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}
// 为什么不用class封装？
// 在vue prototype上扩展一些方法，按照功能分散到多个模块实现，而不是直接在模块里实现所有，用class难以实现扩展。
// 好处是方便代码的维护和管理，这种编程技巧值得我们学习

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
