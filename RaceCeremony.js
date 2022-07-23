function racePodium(b){
    if (b === 7) return [2,4, 1]
    const s = Math.ceil(b/3)
    const f = s + 1
    const t = b - f - s
    return [s,f,t]
}
console.log(racePodium(12))
