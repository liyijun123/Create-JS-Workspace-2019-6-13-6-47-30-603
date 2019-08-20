const {createMultiplyTable} = require('../main');
const {check} = require('../main');
it ('should show chengfabiao', () => {
    expect(createMultiplyTable(2, 4)).toBe(
        "2*2=4"
        +"\n"+"2*3=6 3*3=9"
        +"\n"+"2*4=8 3*4=12 4*4=16\n"
    );
        // '2*2=4\
        // 2*3=6 3*3=9\
        // 2*4=8 3*4=12 4*4=16');
});
it ('isValid',()=>{
    expect(check(2,4)).toBe(true);
});
