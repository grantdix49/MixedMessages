const getRandomNumber = num => {
    return Math.floor(Math.random() * num)
}

const travelComponents = {
    destination: ['Rome', 'Germany', 'France', 'Japan', 'Australia', 'Boston', 'Chicago', 'Yellowstone', 'Olympic National Park', 'Mars', 'The Future'],
    transport: ['Car', 'Bus', 'Train', 'Plane', 'Space Ship', 'Walking', 'Time Machine', 'Bicycle', 'Scooter', 'Skateboard', 'Kayak', 'Cruise Ship'],
    time: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
}

let travelRecommendation = []

for(let comp in travelComponents) {
    let compIndex = getRandomNumber(travelComponents[comp].length)

    switch(comp) {
        case 'destination':
            travelRecommendation.push(`You will travel to ${travelComponents[comp][compIndex]}`)
            break
        case 'transport':
            travelRecommendation.push(`by ${travelComponents[comp][compIndex]}`)
            break
        case 'time':
            travelRecommendation.push(`in ${travelComponents[comp][compIndex]}.`)
            break
        default:
            travelRecommendation.push(`There is not enough information to make a recommendation.`)
    }
}

const compileTravel = recommendation => {
    const finalTravelPlan = recommendation.join(' ')
    console.log(finalTravelPlan)
}

compileTravel(travelRecommendation)