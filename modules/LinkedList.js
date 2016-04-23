define([], function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }

    var linkedList = {
        head: null,
        length: 0,

        add: function (data) {
            if(this.head === null){
                this.head = new Node(data);
                this.length++; /// TODO: factor out length
            } else {
                var current = this.head;
                while(current.next !== null){
                    current = current.next;
                }
                current.next = new Node(data);
                this.length++
            }
        },

        toArray: function() {
            var result = [];
            var current = this.head;
            while(current !== null){
                result.push(current.data);
                current = current.next;
            }
            return result;
        }
    }

    return linkedList;
});

