const testArr = ['aaa', 'bbb', 'ccc', 'ddd', 'eee']

return testArr.reduce((a, c, i)=> {
  a.concat(c)
  return a
},[])

