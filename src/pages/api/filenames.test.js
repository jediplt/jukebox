import index from './filenames'
test('testit', async () => {
    debugger;
    const result = await new Promise(resolve => index(undefined, { end: resolve }))
    debugger;
})