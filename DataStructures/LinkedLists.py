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

    # create a node, add node to beginning
    def prepend(self, value):
        pass

    # create a node, insert node
    def insert(self, index, value):
        pass

    # method to print value of my ll
    def print_list(self):
        temp = self.head
        while temp is not None:
            print(temp.value)
            temp = temp.next


my_ll = LinkedList(4)
my_ll.append(2)
my_ll.append(3)

my_ll.print_list()
