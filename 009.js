// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.



function well(x) {
    let cnt = 0;
    x.forEach(element => {

    });
 
    if (cnt <=2) {
    
        return 'I smell a series!'
    } elseif (cnt > 2) {
        return 'Publish!'
    } else {
        return 'Fail!'
    }

});


// Test.describe("Example tests",_=>{
// Test.assertEquals(well(['bad', 'bad', 'bad']), 'Fail!');
// Test.assertEquals(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
// Test.assertEquals(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');
// });
