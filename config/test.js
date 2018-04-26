console.log(2222)
async function testAsync() {
    return "hello async";
}

// const result = testAsync();
// console.log(result)
testAsync().then(v => {
    console.log(v);
})