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

        clear: function() {
            this.head = null;
        },

        fromArray: function(arr) {
            this.clear();
            var self = this;
            arr.forEach(function(val){
                self.add(val);
            });
        },

        toArray: function() {
            var result = [];
            var current = this.head;
            while(current !== null){
                result.push(current.data);
                current = current.next;
            }
            return result;
        },

        removeThirdFromLast : function() {
            // return null if there is not third to last
            var current = this.head;
            if (current === null || current.next === null || current.next.next === null){
                return null;
            }

            var threeAhead = current.next.next.next;

            while(threeAhead.next !== null){
                threeAhead = threeAhead.next;
                current = current.next;
            }

            current.next = current.next.next;
        }
    }

    return linkedList;
});

