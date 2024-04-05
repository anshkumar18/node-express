

const _ = require('lodash')

const items = [2,[3,[4, [6]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)