var employee = {
    name: "Hanuman",
    salary: 100000,
    designation: "React development",
    onsite: true,
    hike: undefined
}


for(key in employee){                        // for in is used in object
    console.log(key , employee[key]);     //Bracket notation is used in array of object, only works in arrays of objects.
                                        
}