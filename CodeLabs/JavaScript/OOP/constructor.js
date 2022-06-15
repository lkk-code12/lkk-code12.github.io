// console.log(`Hello`);

var str = `Hello`;
console.log(typeof(str));

var ob = new String(`Hello`);
console.log(typeof(ob));

//literal constructor
const book = {
    title: `Myanmar`,
    year: `2021`,
    getTitle: function() {
        return `this title is ${this.title}`;
    }
};
console.log(book);
console.log(book.getTitle());
console.log(Object.keys(book));
console.log(Object.values(book));

//constructor

function Magazine(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getTitle = function() {
        return `This title is ${this.title}`;
    }
};

var mgz = new Magazine(`English`, `Aung Aung`, 2022);
console.log(mgz);
console.log(mgz.getTitle());