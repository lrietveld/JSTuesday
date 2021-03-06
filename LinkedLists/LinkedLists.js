var cat;
var lion;
var tiger;
var bear;
var x = 0;
function preload() {
  cat = loadImage("data/our-cat-shop-image.png");
  lion = loadImage("data/imgres.jpg");
  tiger = loadImage("data/siberian-tiger-profile.jpg");
  bear = loadImage("data/bears1.jpg");
}

function setup() {
createCanvas(800, 800);
var cats = new LList();

cats.insert(cat, "head");
cats.insert(lion, cat);
cats.insert(bear, lion);
cats.insert(tiger, bear);

//cats.removeL(bear);
cats.display();

}

function draw() {
  //image(cat, 0, 0);
}

function Node(element) {
 this.element = element;
 this.next = null;
}

function LList() {
 this.head = new Node("head");
 this.find = find;
 this.insert = insert;
 this.display = display;
 this.findPrevious = findPrevious;
 this.removeL = removeL;
 image(cat);
}

function find(item) {
 var currNode = this.head;
 while (currNode.element != item) {
 currNode = currNode.next;
 }
 return currNode;
}

function insert(newElement, item) {
 var newNode = new Node(newElement);
 var current = this.find(item);
 newNode.next = current.next;
 current.next = newNode;
 
}

function display() {
 var currNode = this.head;
 //while (!(currNode.next === null)) {
 //print(currNode.next.element);
 //currNode = currNode.next;
 //}
 while (!(currNode.next === null)) {
 image(currNode.next.element, x, 0, 200, 200);
 currNode = currNode.next;
 x+=200;
 }
}

function findPrevious(item) {
 var currNode = this.head;
 while (!(currNode.next === null) &&
 (currNode.next.element != item)) {
 currNode = currNode.next;
 }
 return currNode;
}

function removeL(item) {
 var prevNode = this.findPrevious(item);
 if (!(prevNode.next == null)) {
 prevNode.next = prevNode.next.next;
 }
}