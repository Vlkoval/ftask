/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/


// game loop
while (true) {
    let color1 = [];
    let color2 = [];
    let readlineTest = [];
    let row1 = [];
    let row2 = [];
    for (let i = 0; i < 8; i++) {
        var inputs = readline().split(' ');

        readlineTest[i] = inputs;
        // console.error(inputs)

        const colorA = parseInt(inputs[0]); // color of the first block
        const colorB = parseInt(inputs[1]); // color of the attached block
        color1[i] = colorA
        color2[i] = colorB
    }
    const score1 = parseInt(readline());

    for (let i = 0; i < 12; i++) {
        const row = readline(); // One line of the map ('.' = empty, '0' = skull block, '1' to '5' = colored block)
        row1 = row

    }
    
    console.log('0'); // "x": the column in which to drop your blocks
    
    const score2 = parseInt(readline());
    
    for (let i = 0; i < 12; i++) {
        const row = readline();
        row2 = row
    }
    
    
    console.error('readlineTest')
    console.error(readlineTest)
    console.error('color1')
    console.error(color1)
    console.error('color2')
    console.error(color2)
    console.error('score1')
    console.error(score1)
    console.error('score2')
    console.error(score2)
    console.error('row1')
    console.error(row1)
    console.error('row2')
    console.error(row2)
    
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    
    console.log('0'); // "x": the column in which to drop your blocks
    
    // break
}

