let student=[
    {name : "Pratik",marks: 85},
    {name : "Ashok",marks: 90},
    {name : "Rahul",marks: 75},
    {name : "Rohan",marks: 81},
    {name : "Rohit",marks: 95}
];

    let max = student[0];

    for(let i=1;i<student.length;i++){
        max = student[i].marks > max.marks ? student[i] : max;
    }
    console.log("The highest Marks are :" + max.name + ":"+ max.marks);
