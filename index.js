const ConsistentHashing = require('./consistent_hashing/consistent_hashing');
const loadbalancer  = new ConsistentHashing(["node1", "node2", "node3", "node4", "node5"],4,'md5');

const nodes = {};

//incoming req or data
const chars = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
  'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

chars.forEach((c)=>{
  //get address where need to go/save
  const node = loadbalancer.getNode(c);

  if (nodes[node]) {
    nodes[node].push(c);
  } else {
    nodes[node] = [];
    nodes[node].push(c);
  }
});

console.log(nodes);
