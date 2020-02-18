var result = 0
for (var k =2; k <process.argv.length; k++)
result += Number(process.argv[k])

console.log(result);
