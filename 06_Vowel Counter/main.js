function countVowels(name) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < name.length; i++) {
      if (vowels.includes(name[i].toLowerCase())) {
        count++;
      }
    }
    return count;
  }
  
  console.log(countVowels('Pratik Yadav')); // Output: 4