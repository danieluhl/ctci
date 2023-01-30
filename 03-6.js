// manage dogs and cats in a queue with option to take oldest of type or oldest overall
class Queue {
    _queue = [];
    push(item) {
        this._queue.push(item);
    }
    pop() {
        return this._queue.shift();
    }
    isEmpty() {
        return this._queue.length === 0;
    }
    peek() {
        return this._queue.at(0);
    }
}
const ANIMAL_TYPES = {
    DOG: "DOG",
    CAT: "CAT",
};
class Animals {
    dogs = new Queue();
    cats = new Queue();
    id = 0;
    enqueueDog(dog) {
        this.id++;
        this.dogs.push({
            id: this.id,
            type: ANIMAL_TYPES.DOG,
            animal: dog,
        });
    }
    dequeueDog() {
        return this.dogs.pop();
    }
    enqueuCat(cat) {
        this.id++;
        this.cats.push({
            id: this.id,
            type: ANIMAL_TYPES.CAT,
            animal: cat,
        });
    }
    dequeueCat() {
        return this.cats.pop();
    }
    dequeueOldest() {
        if (this.cats.isEmpty()) {
            return this.dequeueDog();
        }
        else if (this.dogs.isEmpty()) {
            return this.dequeueCat();
        }
        else if (this.cats.peek().id < this.dogs.peek().id) {
            return this.dequeueCat();
        }
        else {
            return this.dequeueDog();
        }
    }
}
const animals = new Animals();
animals.enqueueDog("ruff");
animals.enqueuCat("sprinkles");
animals.enqueueDog("sparky");
animals.enqueuCat("purrrdy");
console.log(animals.dequeueOldest());
console.log(animals.dequeueOldest());
console.log(animals.dequeueOldest());
console.log(animals.dequeueOldest());
