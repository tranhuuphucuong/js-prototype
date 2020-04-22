
const obj = {
  name: 'my object',
  now: new Date(),
  arr: [
    {
      dd: 'dd1'
    },
    {
      dd: 'dd2'
    },
    [1,2,3]
  ],
  set: new Set([1,2,3, {aha: 'whats up'}, ['go', 'to', 'hell']]),
  regex: /.*/,
  fn: function() {
    console.log(this);
  }
}

const objClone = cloneDeep(obj);
