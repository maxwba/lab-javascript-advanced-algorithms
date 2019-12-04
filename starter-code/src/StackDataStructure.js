class StackDataStructure {
    constructor(MAX_SIZE = 10){
        this.stackControl = [];
        this.MAX_SIZE = MAX_SIZE;
        this.size = 0;
    }   

    isEmpty(){
        return this.size === 0;
    }

    canPush(){
       return this.size < this.MAX_SIZE;
    }
    push(item){
        if (!this.canPush()) { 
            return 'Stack Overflow'
        };
        
        this.stackControl[this.size] = item;
        this.size += 1;

        return this.stackControl;
    }
     
    pop(){
        if (this.size.isEmpty()) {
            return 'Stack Underflow';
        }
        const lastItemIdx = this.size - 1;
        const lastItem = this.stackControl.splice(lastItemIdx,1)[0]
        this.size -= 1;
        return lastItem;
    }
}
