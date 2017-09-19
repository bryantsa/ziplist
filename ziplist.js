const l = ['a', 'b', 'c'];
const o = [1, 2, 3];


function zipList(list1, list2) {
  const m = [];
  for (let p = 0; p < l.length; p++) {
    m.push(list1[p], list2[p]);
  }
  return m;
}

console.log(zipList(l, o));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(l, o));
