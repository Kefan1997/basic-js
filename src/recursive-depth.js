module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let result = 1;
        let count = 0;
        for(let i = 0; i < arr.length; i++){
            if(Array.isArray(arr[i])){
                result = this.calculateDepth(arr[i]);
                if(count < result){
                    count = result;
                  }
            }
    }
    return count + 1;
}
};