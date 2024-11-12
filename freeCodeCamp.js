//getAverage

function getAverage(scores) {
  let total = 0;
  let length = scores.length;


  for(let i=0; i<length;i++){
   total += scores[i]
  }
   let average =  total/length;
  return average;


}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

//getGrade
function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}
function getGrade(score) {
  let grade= "";
  if(score >= 100){
    grade= "A++"
  }
  else if(score <= 99 && score >=90){
    grade = "A";

  } else if (score <= 89 && score >=80){
    grade= "B";
  } else if(score <=79 && score >=70){
    grade="C";
  } else if(score <=69 && score >=60){
    grade = "D";
  } else if (score <=59 && score >=0){
    grade = "F";
  } else{
    grade= "invalid"
  }
  return grade;

}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

//passingGrade
function hasPassingGrade(score) {
  let passing = true;
 if(score <=59){
   passing = false;
 }else{
   passing=true;
 }
 return passing;
}


console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));