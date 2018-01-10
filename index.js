function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  let id = "nested";
  let className = "target";
  return getFirstSelector('#nested .target');
}

function increaseRankBy(n) {
  const allRanks = document.querySelectorAll('.ranked-list');

  for (let i = 0, j = allRanks.length; i < j; i++) {
    let allRanksChildren = allRanks[i].children;
      for (let k = 0, l = allRanksChildren.length; k < l; k++) {
        allRanksChildren[k].innerHTML = parseInt(allRanksChildren[k].innerHTML) + n;
      };
  };
}

function deepestChild(){
  let currentNode = document.getElementById('grand-node');
  let div = currentNode.children[0];

  while (div) {
    currentNode = div;
    div = currentNode.children[0];
  }
  debugger;
  return currentNode;
}
