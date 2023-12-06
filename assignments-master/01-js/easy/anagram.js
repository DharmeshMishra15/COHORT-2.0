/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
   let c1=str1.toLowerCase();
   let c2=str2.toLowerCase();

   arr1=c1.split("");
   arr2=c2.split("");
   


   if(arr1.length !== arr2.length)
   {
    return false;
   }


   let Map1=new Map();
   let Map2=new Map();
  
   for(let i=0;i<arr1.length;i++)
   {
       if(Map1.has(arr1[i])){
          Map1.set(arr1[i],Map1.get(arr1[i])+1);
       }
       else if(!Map1.has(arr1[i]))
       {
           Map1.set(arr1[i],1);
       }
       
        if(Map2.has(arr2[i])){
          Map2.set(arr2[i],Map2.get(arr2[i])+1);
       }
       else if(!Map2.has(arr2[i]))
       {
           Map2.set(arr2[i],1);
       }
    }   

    console.log(Map1);
    console.log(Map2);

    if(Map1.size!=Map2.size)
    {
      return false;
    }

       Map1.forEach((key,value)=>{
            let val1=value;
            let val2=Map2.get(key);

            if(!(Map2.has(key)))
            {
              return false;
            }
            
            if(val1 !== val2)
            {
              return false;
            }
       })

       return true;

   } 



   
    
isAnagram('hello','world');



module.exports = isAnagram;
