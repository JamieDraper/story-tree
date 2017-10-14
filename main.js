var maxDepth = function(root) {
    var fringe = [{ node: root, depth: 1 }];
    var current = fringe.pop();
    var max = 0;

    while (current && current.node) {
        var node = current.node;
        
        // Find all children of this node.
        if (node.left) {
            fringe.push({ node: node.left, depth: current.depth + 1 });
        }
        if (node.right) {
            fringe.push({ node: node.right, depth: current.depth + 1 });
        }
    
        if (current.depth > max) {
            max = current.depth;
        }
        
        current = fringe.pop();
    }

    return max;
};

// choice list component
var app = new Vue({
  el: '#app',
  data: {
  	// initialize at the root children
    choices: story.root.children,
    openChoice: 'null',
    choiceHistory : [],
    levelCount: 1

  },
  methods: {
    clickChoiceButton: function(choiceButtonIndex) {
      this.openChoice = story.root.children[choiceButtonIndex];
    },
    selectChoice: function(){
      console.log('I picked a choice! Derpp.')
      this.levelCount += 1;
      // add this choice to a storyLine array
      this.choiceHistory.push(this.openChoice);
      console.log(this.openChoice);
      this.choices = this.openChoice.children;
    }
  }
});

