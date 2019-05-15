function fishland(input) {
    let skumriaPrice = Number(input.shift())
    let cacaPrice = Number(input.shift())
    let palamudCol = Number(input.shift())
    let safridCol = Number(input.shift())
    let shellCol = Number(input.shift())

    let palamudPrice = skumriaPrice * 1.60
    let palamudSum = palamudCol * palamudPrice

    let safridPrice = cacaPrice * 1.80
    let safridSum = safridCol * safridPrice

    let shellSum = shellCol * 7.50

    let totalSum = palamudSum + safridSum + shellSum

    console.log(totalSum.toFixed(2))
}

fishland([6.90, 4.20, 1.5, 2.5, 1])
fishland([5.55, 3.57, 4.3, 3.6, 7])
fishland([7.79, 5.35, 9.3, 0, 0])