const input: string = await Deno.readTextFile('./input/3.txt')
const regex = /mul\(\d+\,\d+\)|do\(\)|don't\(\)/g

const instructions = input.match(regex) as Array<string>

let latestModifier: 'DO'| 'DONT' = 'DO'
const res = instructions?.filter((instruction) => {
    if(instruction === "do()" || instruction === "don't()"){
        latestModifier = instruction === "don't()" ? 'DONT' : 'DO'
        return false
    }

    if(latestModifier === 'DONT'){
        return false
    }
    return true
})

const sum = res.reduce((sum, cv) => {
    const factors = cv.match(/\d+/g) as Array<string>
    const res = parseInt(factors[0], 10) * parseInt(factors[1], 10)
    return sum + res
}, 0)

console.log(sum)