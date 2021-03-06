let today = new Date();
console.log(today); // output : Sat Mar 06 2021 22:16:53 GMT+0530 (India Standard Time)

console.log(typeof(today)) // output : object

// format should be mm dd yyyy hrs:min:sec
let date1 = new Date('11-27-2002 12:34:56');
console.log(date1) // output : Wed Nov 27 2002 12:34:56 GMT+0530 (India Standard Time)

let date2 = new Date('November 27 2002');
console.log(date2); // output : Wed Nov 27 2002 00:00:00 GMT+0530 (India Standard Time)

/*
getDay returns a number value of day in week
Sun Mon Tue Wed Thurs Fri Sat 
 0   1   2   3    4    5   6  
 
Similarly for month
Jan Feb Mar Apr May Jun Jul Aug Sept Oct Nov Dec
 0   1   2   3   4   5   6   7   8    9  10  11
*/

console.log(date2.getDay()) // output : 3
console.log(date1.getDate()) // output : 27
console.log(date1.getMonth()) // output : 10
console.log(date1.getTime()) // output : 1038380696000
console.log(date1.getHours()) // output : 12
console.log(date1.getMinutes()) // output : 34
console.log(date1.getSeconds()) // output : 56


date2.setDate(19);
date2.setMonth(0);
date2.setFullYear(2000);
date2.setHours(1);
date2.setMinutes(2);
date2.setSeconds(3);
date2.setMilliseconds(4);
console.log(date2); // output : Wed Jan 19 2000 01:02:03 GMT+0530 (India Standard Time)