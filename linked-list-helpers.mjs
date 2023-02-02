const printLinkedLists = (lists) => {
  lists.forEach((linkedList) => {
    const result = [];
    while (linkedList != null) {
      result.push(linkedList.value);
      linkedList = linkedList.next;
    }
    console.log(result.join("->"));
  });
};
export { printLinkedLists };
