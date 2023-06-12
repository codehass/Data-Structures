// arrays are in contiguous places in memory, but linked lists are not

//linkedin list has head and tail
//head is the first node in the linked list
//tail is the last node in the linked list
// linked list are not contiguous in memory

//Big O of Linked Lists
//Add element to the end of the linked list is O(1)
//Remove element from the end of the linked list is O(n)

//Add element to the beginning of the linked list is O(1)
//Remove element from the beginning of the linked list is O(1) 

//Insert element in the middle of the linked list is O(n)
//Remove element from the middle of the linked list is O(n)

//Find element in the linked list by value or by index it is O(n)

//A node is and object with two properties: value and next (data and pointer)
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class  LinkedList {
    constructor(value) {
        //create new Node }
        const newNode = new Node(value);
        this.head = newNode
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        //Create new node
        //add Node to the end
        const newNode = new Node(value);
            if(!this.head){
                this.head = newNode;
                this.tail = newNode;
            }else{
                this.tail.next = newNode;
                this.tail = newNode;      
            }
            this.length++;  
            return this;
    }

    pop(){
       if(!this.head) return undefined
       let temp = this.head;
       let pre = this.head;
       while(temp.next){
           pre = temp;
            temp = temp.next;
       }
       this.tail = pre;
       this.tail.next = null;
       this.length--;
       if(this.length === 0){
           this.head = null;
           this.tail = null;
       }
       return temp;   
    }

    unshift(value) {
        //Create new node
        //add Node to the beginning
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {
        //Remove Node from the beginning
        if(!this.head) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return temp;
    }

    get(index){
        if(index < 0 || index >= this.length ) return undefined;
        let temp = this.head;
        for(let i=0 ; i< index ; i++){
            temp = temp.next
        }
        return temp
    }

    set(index,value) {
        let temp = this.get(index);
        if(temp){
            temp.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        //Create new node
        //insert Node
        const newNode = new Node(value);
        if(index === 0) {
            this.unshift(value);
            this.length++;
            return true;
        }elseif();
        if(index === this.length)  {
            this.push(value)
            this.length++;
            return true;
        };
    
        let prev = this.get(index-1);
        prev.next = newNode;
        newNode.next = prev.next;

    }

    remove(index) {
        //Remove Node
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        if(index < 0 || index >= this.length ) return undefined;

        const before = this.get(index-1);
        const temp = before.next;
        
        before.next = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }

}

let myLinkedList = new LinkedList(4);