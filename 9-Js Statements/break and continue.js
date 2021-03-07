// break : it used to come out(jump out) of an iteration
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        console.log("Loop breaks here");
        break;
    }
    console.log(i);
}

// continue : it is used to skip(jump over) an iteration
for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        console.log("Loops skips this iteration");
        continue;
    }
    console.log(i);
}