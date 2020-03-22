const chainMaker = {
  
  result: [],

  getLength() {
    return this.result.length;
  },
  addLink(value) {
    this.result.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(position - 1 < 0 || position - 1 >= this.getLength() || position === `${position}`){
      this.result = [];
      throw new Error;
    }
   
      this.result.splice(position - 1, 1);
      return this;
    
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    const chain = this.result.join('~~');
    this.result = [];
    return chain;
  }
};

module.exports = chainMaker;
