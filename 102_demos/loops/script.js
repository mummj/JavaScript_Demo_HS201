console.log('hello I am alive');

document.write("<h1>Loops Demo</h1>");

const classroom = ["josiah", "perla", "jarmari", "cameron", "joeden", "lily", "tyis", "nate", "jaidyn"];

let i = 0;
while(classroom[i]){
console.log(classroom[i]);
i++;
}

while(i<=10){
  console.log(i);
  i++;
}

for(i=0; i<=12; i=i+1){
  console.log(i*8);
}

const pets =["dog","cat","bird","fish"];

for(i=0; i<=pets.length; i++){
  console.log(pets[i]);
}