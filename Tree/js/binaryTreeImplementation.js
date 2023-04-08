const MAX_NODES = 10;
const MIN_NODES = 7;
const MAX_VALUE = 60;
const MIN_VALUE = 1;
var i = 0;
// Node class
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

//bst
class BinarySearchTree {
  constructor() {
    // root of a binary seach tree
    this.root = null;
  }

  
  insert(data) {

    var newNode = new Node(data);

    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }


  insertNode(node, newNode) {
    var nodeText = "e" + i;
    var HiddenNode = new Node(nodeText);
    if (this.search(this.getRootNode(), newNode.data) == node.data) return;
    if (node === null) {
      node = newNode;
    } else if (newNode.data < node.data) {
      
      if (node.left === null || isNaN(node.left.data)) {
        node.left = newNode;
        if (node.right === null) {
          node.right = HiddenNode;
          i++;
        }
      }
      
      else return this.insertNode(node.left, newNode);
    }


    else {
      
      if (node.right === null || isNaN(node.right.data)) {
        if (node.left === null) {
          node.left = HiddenNode;
          i++;
        }
        node.right = newNode;
      } else {
      
        return this.insertNode(node.right, newNode);
      }
    }
  }
  
  remove(data) {
    
    this.root = this.removeNode(this.root, data);
  }

  
  removeNode(node, key) {

    if (node === null) return null;
   
    else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    }

    
    else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    }


    else {
      
      if (node.left === null && node.right === null) {
        var nodeText = "e" + (Math.floor(Math.random() * 20) + 1); 
        var HiddenNode = new Node(nodeText);
        node = HiddenNode;
        return node;
      }

      
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      
      var aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
      document.write(inorder(node))
    }
  }
  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }

  preorder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  findMinNode(node) {
  
    if (node.left === null || isNaN(node.left.data)) return node;
    else return this.findMinNode(node.left);
  }

  
  getRootNode() {
    return this.root;
  }

  // search for a node with given data
  search(node, data) {
    // if trees is empty return null
    if (node === null) return null;
    // if data is less than node's data
    // move left
    else if (data < node.data) return this.search(node.left, data);
    // if data is less than node's data
    // move left
    else if (data > node.data) return this.search(node.right, data);
    // if data is equal to the node data
    // return node
    else return node.data;
  }

  searchParent(node, dataSearch, nodeParent) {
    if (node === null) return null;

    
    if (node.data == dataSearch) {
      
      return nodeParent;
    } else if (node.data > dataSearch) {
     
      nodeParent = node;
      return this.searchParent(node.left, dataSearch, nodeParent);
    } else {
      nodeParent = node;
      return this.searchParent(node.right, dataSearch, nodeParent);
    }
  }
}


var dataNodes = [];

function createBST(arrayData, BST) {
  arrayData.forEach((n) => {
    BST.insert(n);
  });
}

function randomBST(arrayData) {
  var n_nodos = Math.floor(Math.random() * (MAX_NODES - MIN_NODES)) + MIN_NODES;
  for (var i = 0; i < n_nodos; i++) {
    var randomValue = Math.floor(Math.random() * MAX_VALUE) + 1;
    if (!arrayData.includes(randomValue)) {
      arrayData.push(randomValue);
    }
  }
  return arrayData;
}
var NUMBER_OF_NODES = 0;
function getNumberNodes(node) {
  if (node !== null) {
    getNumberNodes(node.left);
    if (!isNaN(node.data)) {
      NUMBER_OF_NODES += 1;
    }
    getNumberNodes(node.right);
  }
}

function generateRandomBST(BST, divClass) {
  d3.select("svg").remove();
  var random = []; // RANDOM ARRAY
 
  randomBST(random); 

  createBST(random, BST); 

  
  dataNodes = []; 
  var rootNode = BST.getRootNode(); 

  var id = rootNode.data;
  var parentId = null;

  dataNodes.push({ id, parentId }); 
  transformData(rootNode, dataNodes);
  drawBST(divClass);
}

function generateFixedBST(BST, arrayNumbers, divClass) {
  d3.select("svg").remove();
  createBST(arrayNumbers, BST); 

  
  dataNodes = []; 
  var rootNode = BST.getRootNode(); 

  var id = rootNode.data;
  var parentId = null;

  dataNodes.push({ id, parentId }); 
  transformData(rootNode, dataNodes);

  drawBST(divClass);
}

function insertNodeSVG(data, BST, divClass) {
  var duplicated = BST.search(BST.getRootNode(), data);
  if (duplicated != null && !isNaN(duplicated)) {
    // If the data is duplicated.
    console.log("Duplicated data. " + duplicated);
    return;
  }
  d3.select("svg").remove();
  BST.insert(data);
  dataNodes = [];
  var rootNode = BST.getRootNode();
  var id = rootNode.data;
  var parentId = null;
  var parentData = BST.searchParent(rootNode, data, null); 

  dataNodes.push({ id, parentId });
  transformData(rootNode, dataNodes);

  drawBST(divClass, data); 
  timeInt = 0;
  insertNodeAnimation(rootNode, data, parentData.data);

}

function removeNodeSVG(data, BST, divClass) {
  timeInt = 0;
  removeNodeAnimation(BST.getRootNode(), data, BST);
  setTimeout(function () {
    BST.removeNode(BST.getRootNode(), data);
    dataNodes = [];
    var rootNode = BST.getRootNode(); 
    var id = rootNode.data;
    var parentId = null;

    dataNodes.push({ id, parentId });
    transformData(rootNode, dataNodes);

    d3.select("svg").remove();
    drawBST(divClass);
  }, ANIMATION_TIME * timeInt++);
}

function parsingData(node, dataNodes) {
  var parentId, id;
  if (node == null) return;
  parentId = node.data;
  if (node.left != null) {
    id = node.left.data;
    dataNodes.push({ id, parentId });
  }
  if (node.right != null) {
    id = node.right.data;
    dataNodes.push({ id, parentId });
  }
  parsingData(node.left, dataNodes);
  parsingData(node.right, dataNodes);
}

function transformData(node, dataNodes) {
  parsingData(node, dataNodes);
  console.log(dataNodes);
  const idMapping = dataNodes.reduce((acc, el, i) => {
    acc[el.id] = i;
    return acc;
  }, {});

  dataNodes.forEach((el) => {
    // Handle the root element
    if (el.parentId === null) {
      root = el;
      return;
    }
    // Use our mapping to locate the parent element in our dataNodes array
    const parentEl = dataNodes[idMapping[el.parentId]];
    // Add our current el to its parent's `children` array
    parentEl.children = [...(parentEl.children || []), el];
  });
}

const ANIMATION_TIME = 750;
const COLOR_FILL = "white"; // when algorithms paints
const COLOR_STROKE = "darkorange"; // current position of algorithms
const COLOR_NORMAL = "rgb(55, 109, 179)";
const STROKE_NORMAL = "white";
const STROKE_DELETE = "red";
const COLOR_LINK = "black";
var timeInt = 0;

function inOrderAnimation(node) {
  if (node !== null && !isNaN(node.data)) {
    var circleOrder = "#c" + node.data + "";
    var xOrder = d3.select(circleOrder);

    setTimeout(function () {
      xOrder.transition().duration(300).style("stroke", COLOR_STROKE);
    }, ANIMATION_TIME * timeInt++);
    inOrderAnimation(node.left);
   
    var circleId = "#c" + node.data + "";
    var x = d3.select(circleId);

    setTimeout(function () {
      x.transition().duration(150).style("fill", COLOR_FILL);
      
    }, ANIMATION_TIME * timeInt++);

    inOrderAnimation(node.right);
  }
}


function postOrderAnimation(node) {
  if (node !== null && !isNaN(node.data)) {
    var circleOrder = "#c" + node.data + "";
    var xOrder = d3.select(circleOrder);

    setTimeout(function () {
      xOrder.transition().duration(300).style("stroke", COLOR_STROKE);
    }, ANIMATION_TIME * timeInt++);
    postOrderAnimation(node.left);
    postOrderAnimation(node.right);

    var circleId = "#c" + node.data + "";
    var x = d3.select(circleId);

    setTimeout(function () {
      x.transition().duration(150).style("fill", COLOR_FILL);
    }, ANIMATION_TIME * timeInt++);
  }
}
function preOrderAnimation(node) {
  if (node !== null && !isNaN(node.data)) {
    var circleOrder = "#c" + node.data + "";
    var xOrder = d3.select(circleOrder);

    setTimeout(function () {
      xOrder.transition().duration(300).style("stroke", COLOR_STROKE);
    }, ANIMATION_TIME * timeInt++);
    var circleId = "#c" + node.data + "";
    var x = d3.select(circleId);

    setTimeout(function () {
      x.transition().duration(150).style("fill", COLOR_FILL);
    }, ANIMATION_TIME * timeInt++);

    preOrderAnimation(node.left);
    preOrderAnimation(node.right);
  }
}

function insertNodeAnimation(node, data, parent) {
  if (node !== null && !isNaN(node.data)) {
    var circleOrder = "#c" + node.data + "";
    var xOrder = d3.select(circleOrder);

    // PINTAMOS
    if (node.data == data) {
      var linkOrder = "#l" + parent + "-" + node.data;
      var l = d3.select(linkOrder);
      setTimeout(function () {
        l.classed("lhidden", false);
        l.classed("link", true);
        l.transition().duration(150).style("stroke", COLOR_STROKE);
      }, ANIMATION_TIME * timeInt++);
      xOrder.style("fill-opacity", "1");
      xOrder.style("fill", "white");
      setTimeout(function (d) {
        xOrder.transition().duration(300).style("stroke", COLOR_STROKE);
      }, ANIMATION_TIME * timeInt++);

      setTimeout(function (d) {
        xOrder.transition().duration(300).style("fill", COLOR_FILL);
      }, ANIMATION_TIME * timeInt++);

      var textOrder = "#t-" + node.data + "";
      var t = d3.select(textOrder);
      setTimeout(function () {
        t.text(data);
      }, ANIMATION_TIME * timeInt++);
    } else {
      setTimeout(function () {
        xOrder.transition().duration(300).style("stroke", COLOR_STROKE);
      }, ANIMATION_TIME * timeInt++);

      setTimeout(function () {
        xOrder.transition().duration(150).style("fill", COLOR_FILL);
      }, ANIMATION_TIME * timeInt++);
    }

    if (data < node.data) {
      insertNodeAnimation(node.left, data, parent);
    } else if (data > node.data) {
      insertNodeAnimation(node.right, data, parent);
    } else {
      setTimeout(function () {
        var root = BST.getRootNode();
        getBackToNormal(root);
      }, ANIMATION_TIME * timeInt++);
    }
  }
}

function removeNodeAnimation(node, data, BST, nodeDelete, nodeMin) {
  nodeDelete = nodeDelete || null;
  nodeMin = nodeMin || null;

  if (node === null) return null;
  
  if (node !== null && !isNaN(node.data)) {
    var nodeText = "#c" + node.data + "";
    var nodeEdit = d3.select(nodeText);

    setTimeout(function () {
      if (node.data == data) {
        nodeEdit.transition().duration(300).style("stroke", STROKE_DELETE);
        nodeEdit
          .transition()
          .duration(300)
          .delay(300)
          .style("fill", COLOR_FILL);
      } else {
        nodeEdit.transition().duration(300).style("stroke", COLOR_STROKE);
      }
    }, ANIMATION_TIME * timeInt++);
  }
  if (data < node.data) {
    node.left = removeNodeAnimation(node.left, data, BST);
    return node;
  }

  
  else if (data > node.data) {
    node.right = removeNodeAnimation(node.right, data, BST);
    return node;
  }

  
  else {
    // deleting node with no children
    if (node.left === null && node.right === null) {
      var parent = BST.searchParent(BST.getRootNode(), data);
      var linkDelete = "#l" + parent.data + "-" + node.data + "";
      var linkEdit = d3.select(linkDelete);
      var textDelete = "#t-" + node.data;
      var textEdit = d3.select(textDelete);
      
      setTimeout(function () {
        nodeEdit.transition().duration(300).style("stroke", STROKE_NORMAL);
        nodeEdit
          .transition()
          .duration(300)
          .delay(300)
          .style("fill", STROKE_NORMAL);
        textEdit.transition().duration(300).text("");
        linkEdit.transition().duration(300).style("stroke", STROKE_NORMAL);
      }, ANIMATION_TIME * timeInt++);
      return node;
    }

    // deleting node with one children
    if (node.left === null || isNaN(node.left.data)) {
      
      var nodeRigthText = "#c" + node.right.data;

      var linkDelete = "#l" + node.data + "-" + node.right.data;
      var textDelete = "#t-" + node.data;
      var textRightDelete = "#t-" + node.right.data;

      var nodeR = d3.select(nodeRigthText);
      var linkEdit = d3.select(linkDelete);
      var textP = d3.select(textDelete);
      var textR = d3.select(textRightDelete);
      var t1, t2;

      setTimeout(function () {
        nodeR.transition().duration(300).style("stroke", STROKE_DELETE);
      }, ANIMATION_TIME * timeInt++);
      setTimeout(function () {
        nodeR.transition().duration(300).style("fill", COLOR_FILL);
      }, ANIMATION_TIME * timeInt++);
      setTimeout(function () {
        t1 = textP.text();
        t2 = textR.text();
        textP.transition().duration(300).text("");
        textR.transition().duration(300).text("");
      }, ANIMATION_TIME * timeInt++);
      setTimeout(function () {
        textP.transition().duration(300).text(t2);
        textR.transition().duration(300).text(t1);
      }, ANIMATION_TIME * timeInt++);

      setTimeout(function () {
        nodeR.transition().duration(300).style("stroke", STROKE_NORMAL);
        nodeR
          .transition()
          .duration(300)
          .delay(350)
          .style("fill", STROKE_NORMAL);
        textR.transition().duration(300).text("");
        linkEdit.transition().duration(300).style("stroke", STROKE_NORMAL);
      }, ANIMATION_TIME * timeInt++);
      return node;
    } else if (node.right === null || isNaN(node.right.data)) {
      //node = node.left;
      var nodeLeftText = "#c" + node.left.data;

      var linkDelete = "#l" + node.data + "-" + node.left.data;
      var textDelete = "#t-" + node.data;
      var textLeftDelete = "#t-" + node.left.data;

      var nodeL = d3.select(nodeLeftText);
      var linkEdit = d3.select(linkDelete);
      var textP = d3.select(textDelete);
      var textL = d3.select(textLeftDelete);
      var t1, t2;
      setTimeout(function () {
        nodeL.transition().duration(300).style("stroke", STROKE_DELETE);
      }, ANIMATION_TIME * timeInt++);
      setTimeout(function () {
        nodeL.transition().duration(300).style("fill", COLOR_FILL);
      }, ANIMATION_TIME * timeInt++);
      setTimeout(function () {
        t1 = textP.text();
        t2 = textL.text();
        textP.transition().duration(300).text("");
        textL.transition().duration(300).text("");
      }, ANIMATION_TIME * timeInt++);
      setTimeout(function () {
        textP.transition().duration(300).text(t2);
        textL.transition().duration(300).text(t1);
      }, ANIMATION_TIME * timeInt++);

      setTimeout(function () {
        nodeL.transition().duration(300).style("stroke", STROKE_NORMAL);
        nodeL
          .transition()
          .duration(300)
          .delay(350)
          .style("fill", STROKE_NORMAL);
        textL.transition().duration(300).text("");
        linkEdit.transition().duration(300).style("stroke", STROKE_NORMAL);
      }, ANIMATION_TIME * timeInt++);
    }

    
    var aux = findMinNodeAnimation(node.right);
    
    var nodeAux = "#c" + aux.data;
    var nodeAuxEdit = d3.select(nodeAux);
    var parent = BST.searchParent(BST.getRootNode(), aux.data);
    var textN = "#t-" + node.data;
    var textAux = "#t-" + aux.data;

    var textNode = d3.select(textN);
    var textNodeAux = d3.select(textAux);

    var linkText = "#l" + parent.data + "-" + aux.data;
    var linkEdit = d3.select(linkText);
    
    setTimeout(function () {
      textNode.transition().duration(300).text("");
      textNodeAux.transition().duration(300).text("");
    }, ANIMATION_TIME * timeInt++);

    setTimeout(function () {
      textNode.transition().duration(300).text(aux.data);
      textNodeAux.transition().duration(300).text(node.data);
    }, ANIMATION_TIME * timeInt++);

    setTimeout(function () {
      nodeAuxEdit.transition().duration(300).style("stroke", STROKE_NORMAL);
      nodeAuxEdit
        .transition()
        .duration(300)
        .delay(300)
        .style("fill", STROKE_NORMAL);
      nodeAuxEdit.transition().duration(300).text("");
      if (aux.right === null || isNaN(aux.right.data)) { // If the node has a child we cannot delete the link
        linkEdit.transition().duration(300).style("stroke", STROKE_NORMAL);
      }
    }, ANIMATION_TIME * timeInt++);
    node.right = removeNodeAnimation(node.right, aux.data, BST);

    return node;
  }
}

function findMinNodeAnimation(node) {
  if (node.left === null || isNaN(node.left.data)) {
    var nodeText = "#c" + node.data;
    var nodeEdit = d3.select(nodeText);

    setTimeout(function () {
      nodeEdit.transition().duration(300).style("stroke", STROKE_DELETE);
      nodeEdit.transition().duration(300).delay(350).style("fill", COLOR_FILL);
    }, ANIMATION_TIME * timeInt++);
    return node;
  } else {
    var nodeText = "#c" + node.data;
    var nodeEdit = d3.select(nodeText);
    setTimeout(function () {
      nodeEdit.transition().duration(300).style("stroke", COLOR_STROKE);
    }, ANIMATION_TIME * timeInt++);
    return findMinNodeAnimation(node.left);
  }
}

function getBackToNormal(node) {
  d3.selectAll("circle")
    .style("fill", function (d) {
      if (!this.id.includes("e")) {
        return COLOR_NORMAL;
      }
    })
    .style("stroke", function (d) {
      if (!this.id.includes("e")) {
        return STROKE_NORMAL;
      }
    });
  d3.selectAll(".link").style("stroke", COLOR_LINK);
}

const COLOR_MOUSE_OVER = "#000058";
const COLOR_MOUSE_OUT = "rgb(55, 109, 179)";
const FONT_SIZE_MOUSE_OVER = "20px";
const FONT_SIZE_MOUSE_OUT = "14px";

function handleMouseOver(d, i) {
  var idCircle = "#c" + d.id + "";
  if (this.id.includes("e")) {
    return;
  }
  d3.select(idCircle)
    .attr({
      r: 20 * 1.5,
    })
    .style("fill", COLOR_MOUSE_OVER);
  var idText = "#t-" + d.id + "";

  d3.select(idText).style("font-size", FONT_SIZE_MOUSE_OVER);
}
function handleMouseOut(d, i) {
  var idCircle = "#c" + d.id + "";
  if (this.id.includes("e")) {
    return;
  }
  d3.select(idCircle)
    .attr({
      r: 20,
    })
    .style("fill", COLOR_MOUSE_OUT);
  var idText = "#t-" + d.id + "";

  d3.select(idText).style("font-size", FONT_SIZE_MOUSE_OUT);
}

// draw bst
const MARGIN_TOP = 40;
const MARGIN_RIGHT = 0;
const MARGIN_BOTTOM = 20;
const MARGIN_LEFT = 0;
const WIDTH_VALUE = 700;
const HEIGTH_VALUE = 600;
const DEPTH_VALUE = 55;
var tree;
var diagonal;
var svg;
function drawBST(div_class, newNode) {
  newNode = newNode || 0; 
  var margin = {
      top: MARGIN_TOP,
      right: MARGIN_RIGHT,
      bottom: MARGIN_BOTTOM,
      left: MARGIN_LEFT,
    },
    width = WIDTH_VALUE - margin.right - margin.left,
    height = HEIGTH_VALUE - margin.top - margin.bottom;

  var i = 0;

  tree = d3.layout.tree().size([height, width]);

  diagonal = d3.svg.diagonal().projection(function (d) {
    return [d.x, d.y];
  });

  svg = d3
    .select(div_class)
    .append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  update(root, newNode);
}
function update(source, newNode) {
  newNode = newNode || 0;
  
  var nodes = tree.nodes(root).reverse(),
    links = tree.links(nodes);
 
  nodes.forEach(function (d) {
    d.y = d.depth * DEPTH_VALUE;
  });

  nodes.forEach(function separation(a, b) {
    return a.parent == b.parent ? 1 : 3;
  });

  var dNode = svg.selectAll("g.node").data(nodes, function (d) {
    return d.id;
  });

  
  var nodeEnter = dNode
    .enter()
    .append("g")
    .attr("class", function (d) {
      if (isNaN(d.id)) {
        return "nhidden";
      }
      return "node";
    })
    .attr("id", function (d) {
      return "n-" + d.id;
    })
    .attr("transform", function (d) {
      return "translate(" + d.x + "," + d.y + ")";
    })
    .on("mouseover", handleMouseOver)
    .on("mouseout", handleMouseOut);

  nodeEnter
    .append("circle")
    .attr("r", 20)
    .attr("id", function (d) {
      return "c" + d.id;
    })
    .style("fill", function (d) {
      if (isNaN(d.id)) {
        return "#f3e9dc";
      }
      return "rgb(55, 109, 179)";
    })
    .style("fill-opacity", function (d) {
      if (isNaN(d.id) || d.id == newNode) {
        return 0;
      }
      return 1;
    });

  nodeEnter
    .append("text")
    .attr("y", function (d) {
      return d.children || d._children ? 0 : 0;
    })
    .attr("dy", ".35em")
    .attr("id", function (d) {
      return "t-" + d.id;
    })
    .attr("class", "textId")
    .attr("text-anchor", "middle")
    .text(function (d) {
      if (!isNaN(d.id) && d.id != newNode) return d.id;
    })
    .style("fill-opacity", 1)
    .style("fill", "orange")
    .style("font-size", "14px");

  dNode.exit().remove();
  
  var link = svg.selectAll("path.link").data(links, function (d) {
    return d.target.id;
  });


  var linkEnter = link
    .enter()
    .insert("path", "g")
    .attr("class", function (d) {
      if (isNaN(d.target.id) || d.target.id == newNode) {
        return "lhidden"; 
      }
      return "link";
    })
    .attr("d", diagonal)
    .attr("id", function (d) {
      return "l" + d.source.id + "-" + d.target.id;
    });
  link.exit().remove();
}


