function largestRectangleArea(heights: number[]): number {
    let maxSoFar = 0;
    let stack = []
    for (let c=0; c< heights.length; c++) {
        if (!stack.length) {
            stack.push({
                index: c,
                value: heights[c]
            })
            maxSoFar = Math.max(maxSoFar, heights[c])
        }else{
            let p = stack.pop()
            if (p.value < heights[c]){
                stack.push(p);
                stack.push({
                    index: c,
                    value: heights[c]
                })
            }else{
                let poppedHeightObject: any
                let flag = true
                let prevIndex;
                stack.push(p);
                while(stack.length && flag) {
                    poppedHeightObject = stack.pop()
                    if (heights[c] > poppedHeightObject.value) {
                        stack.push(poppedHeightObject);
                        flag = false;
                    }else{
                        prevIndex = poppedHeightObject.index;
                        const computedIndex = c - poppedHeightObject.index;
                        maxSoFar = Math.max(maxSoFar, poppedHeightObject.value * computedIndex);
                    }
                }
                stack.push({
                    index: prevIndex,
                    value: heights[c]
                })
            }
        }
    }
    if (stack.length) {
        let poppedHeightObject: any;
        while(stack.length){
            poppedHeightObject = stack.pop();
            const computedIndex = heights.length - poppedHeightObject.index;
            maxSoFar = Math.max(maxSoFar, poppedHeightObject.value * computedIndex);
        }    
    }
    return maxSoFar
};
