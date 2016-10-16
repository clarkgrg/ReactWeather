var names = ['Andrew','Julie','Jen'];

names.forEach(function(name) {
  console.log('forEach', name);
});

names.forEach((name) => {
  console.log('arrowfunc', name);
} );

names.forEach((name)=> console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('Greg'));

var person = {
  name: 'Greg',
  greet: function() {
    names.forEach((name) => {
      console.log(this.name + ' says hi to' + name);
    });
  }
};

person.greet();

function add(a, b) {
  return a + b;
}

console.log(add(1,3));
console.log(add(9,0));

var addStatement = (a,b) => {
  return a+b;
}
console.log(addStatement(1,5));

var addExpression =(a,b) => a + b;
console.log(addExpression(3,4));
