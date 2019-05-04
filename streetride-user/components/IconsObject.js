const Icons = {
    close: {
        name: 'Close Call',
        uri: require("../assets/images/close.png"),
        description:
        `A vehicle passing within 3 feet of a bicycle or scooter on the road
        A vehicle nearly hitting a pedestrian in a crosswalk
        `
    },
    hazard: {
        name: 'Hazard',
        uri: require("../assets/images/caution.png")
    },
    pothole: {
        name: 'Pothole',
        uri: require("../assets/images/cone.png")
    },
    current: {
        name: 'current',
        uri: require("../assets/images/current.png")
    },
    debris: {
        name: 'Debris',
        uri: require("../assets/images/debris.png"),
        description: 
        'Things in the road \nRoad Kill \nWhatever'
    },
    pin: {
        name: 'pin',
        uri: require("../assets/images/pin.png")
    },
    traffic: {
        name: 'Traffic',
        uri: require("../assets/images/traffic.png")
    },
    closed: {
        name: 'Path Closed',
        uri: require("../assets/images/blocked.png")
    }
}
export { Icons }