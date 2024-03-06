function linkedList() {
    let head = null;
    let size = 0;
    function prepend(data) {
        head = node(data, head);
        size++;
    }
    function append(data) {
        if (head == null) {
            prepend(data)
        } else {
            const endNode = node(data);
            let loc = head;
            while (loc.nextNode != null) {
                loc = loc.nextNode
            }
            loc.nextNode = endNode;
            size++;
        }

    }
    function toString() {
        let node = head;
        let len = 0;
        let length = [];
        while (node != null) {
            const pair = [node.data.key,node.data.value]
            length.push(pair);
            node = node.nextNode;
            len++;
        }
        return length;
    }

    return {
        prepend, append, toString,
        size() {
            return size;
        },
        head() {
            return head;
        },
        tail() {
            let node = head;
            while (node.nextNode != null) {
                node = node.nextNode;
            }
            return node.data;
        },
        at(index) {
            let node = head;
            for (let i = 0; i < index; i++) {
                node = head.nextNode;
            }
            return node;
        },
        pop() {
            let current = head;
            let future = head.nextNode;
            if (size > 1) {
                do {
                    current = current.nextNode;
                    future = current.nextNode;
                } while (future.nextNode != null);
            }
            else {
                head = null;
            }
            console.log("deleting " + current.nextNode.data);
            current.nextNode = null;
            size--;

        },
        insertAt(value, index) {
            if (index == size) {
                append(value);
            }
            else if (index < size && index > 0) {
                size++;
                let current = head;

                for (let i = 1; i < index; i++) {
                    current = current.nextNode;
                }
                let insert = node(value, current.nextNode);
                console.log(`inserting ${value} before ${current.nextNode.data}`)
                current.nextNode = insert;
            }
            else if (index == 0) {
                size++;
                prepend(value);
            }
            else {
                console.log("Invalid value");
            }

        },
        removeAt(index) {
            if (index == size) {
                pop();
            }
            else if (index < size && index > 0) {
                size--;
                let current = head;

                for (let i = 1; i < index; i++) {
                    current = current.nextNode;
                }
                console.log(`deleting ${current.nextNode.data}`)
                current.nextNode = current.nextNode.nextNode;
            }
            else if (index == 0) {
                head = head.nextNode;
            }
            else {
                console.log("Invalid value");
            }

        },
        contains(key) {
            let node = head;
            while (node != null) {
                if (node.data.key == key) return true;
                node = node.nextNode;
            }
            return false;
        },
        find(key) {
            let node = head;
            let len = 0;
            while (node != null) {
                if (node.data.key == key) return len;
                node = node.nextNode;
                len++;
            }
            return false;
        }

    };
}
function node(data = null, nextNode = null) {
    return {
        data, nextNode
    }
}
export { linkedList };