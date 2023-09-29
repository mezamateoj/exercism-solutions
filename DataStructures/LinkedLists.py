# a node is the value and the pointer
head = {
    'value': 11,
    'next': {
        'value': 12,
        'next': {
            'value': 5,
            'next': None
        }
    }
}

# print(head['next']['next']['value'])


# class to just create the node
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class LinkedList:
    # create a node
    def __init__(self, value):
        new_node = Node(value)
        self.head = new_node
        self.tail = new_node
        self.length = 1

    # create a node, add node to end
    def append(self, value):
        new_node = Node(value)

        # case when there is no nodes in my ll
        if self.head is None:
            self.head = new_node
            self.tail = new_node
        else:
            self.tail.next = new_node
            self.tail = new_node
        self.length += 1
        return True

    # remove node at end
    def pop(self):
        # edge case when there is no nodes in my ll
        if self.head is None:
            return None

        # case when we have two or more items in the ll
        temp = self.head
        pre = self.head
        while (temp.next):
            pre = temp
            temp = temp.next
        self.tail = pre
        self.tail.next = None
        self.length -= 1
        # edge case when there is only one node in my ll
        if self.length == 0:
            self.head = None
            self.tail = None

        return temp

    # remove node at start of ll
    def pop_first(self):
        # edge case when there is no nodes in my ll
        if self.head is None:
            return None

        # case when we have two or more items in the ll
        temp = self.head
        self.head = self.head.next
        temp.next = None
        self.length -= 1

        # edge case when there is only one node in my ll
        if self.length == 0:
            self.head = None
            self.tail = None

        return temp


    # create a node, add node to beginning of ll
    def prepend(self, value):
        new_node = Node(value)

        # is ll is empty
        if self.head is None:
            self.head = new_node
            self.tail = new_node

        new_node.next = self.head
        self.head = new_node
        self.length += 1
        return True


    # create a node, insert node
    def set_value(self, index, value):
        temp = self.get(index)
        if temp:
            temp.value = value
            return True
        return False


    # create a node, insert node
    def insert(self, index, value):
        # case if index is out of range
        if index < 0 or index >= self.length:
            return False
        # case if index 0 = at beginning of node
        if index == 0:
            return self.prepend(value)
        # case if index last element of ll = at end of node
        if index == self.length:
            return self.append(value)

        new_node = Node(value)
        # point to the previous
        temp = self.get(index - 1)
        # set the new node to point to next node
        new_node.next = temp.next
        temp.next = new_node
        self.length += 1
        return True


    # get node at index
    def get(self, index):
        if self.head is None:
            return None

        if index < 0 or index >= self.length:
            return None

        temp = self.head
        # since in not using the variable in for use _
        for _ in range(index):
            temp = temp.next
        return temp
    
    # remove node 
    def remove(self, index):
        # case if index is out of range
        if index < 0 or index >= self.length:
            return None
        if index == 0:
            return self.pop_first()
        if index == self.length:
            return self.pop
        
        prev = self.get(index - 1)
        temp = prev.next
        prev.next = temp.next
        temp.next = None
        self.length -= 1
        return temp

    #! reverse ll very common for interview questions
    def reverse(self):
        # reverse head and tail
        temp = self.head
        self.head = self.tail
        self.tail = temp

        # create variable to iterate node
        after = temp.next
        before = None

        for _ in range(self.length):
            after = temp.next
            temp.next = before
            before = temp
            temp = after


    # method to print value of my ll
    def print_list(self):
        temp = self.head
        while temp is not None:
            print(temp.value)
            temp = temp.next



my_ll = LinkedList(0)
my_ll.append(2)
my_ll.print_list()
my_ll.insert(1, 1)
print('node after insert')
my_ll.print_list()

print('after reverse')
my_ll.reverse()
my_ll.print_list()


