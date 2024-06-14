let studentsScore = {
  James: 40,
  Ann: 80,
  Joe: 52,
  Ball: 67,
  Mick: 89,
  Ole: 10,
};

// Start coding here
function average(score)
{
   let sum=0;
   let i=0;
   for (let key in score)
    {
     sum=sum+score[key];
     i=i+1;
    }
 return console.log("Average score is "+(sum/i).toFixed(2));
}
function maxScore(score)
{
  let max=0;
  let maxScore="";
  for(let key in score)
    {
      if(score[key]>max){
        max=score[key]; maxScore=key+ " has the highest score, which is "+max+" points"
      }
    }
    console.log(maxScore);
}
function minScore(score)
{
  let min=100;
  let minScore="";
  for(let key in score)
    {
      if(score[key]<min){
        min=score[key]; minScore=key+ " has lowest score, which is "+min+" points"
      }
    }
    console.log(minScore);
}
average(studentsScore);
maxScore(studentsScore);
minScore(studentsScore);