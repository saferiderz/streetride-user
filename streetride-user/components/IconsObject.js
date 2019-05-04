const Icons = {
    CarInBikeLane: {
        name: 'Car In Bike Lane',
        uri: require("../assets/images/traffic.png"),
        description: 'Car parked in bike lane \n\nDelivery truck in bike lane'
    },
    CloseCall: {
        name: 'Close Call',
        uri: require("../assets/images/close.png"),
        description: 'A vehicle passing within 3 feet of a bicycle or scooter on the road \n\nA vehicle nearly hitting a pedestrian in a crosswalk'
    },
    ClosedPath: {
        name: 'Closed Path',
        uri: require("../assets/images/blocked.png"),
        description: 'Construction/bridge out'
    },
    DocklessVehicleBlockingPath: {
        name: 'Dockless Vehicle Blocking Path',
        uri: require("../assets/images/scooter.png"),
        description:'Scooter/rideshare bike in path right of way \n\nScooter/rideshare bike blocking sidewalk'
    },
    Hazard: {
        name: 'Hazard',
        uri: require("../assets/images/caution.png"),
        description: 'Debris in path'
    },
    MalfunctioningSignal: {
        name: 'Malfunctioning Signal',
        uri: require("../assets/images/walk.png"),
        description: 'Crosswalk or traffic signal out \n\nMiscellaneous signal malfunction'
    },
    Pothole: {
        name: 'Pothole',
        uri: require("../assets/images/cone.png"),
        description: 'Missing pavement \n\nLarge cracks in pavement'
    },
    GeneralSafetyConcern: {
        name: 'General Safety Concern',
        uri: require("../assets/images/helmet.png"),
        description: 'Any concern not listed'
    }
}
export { Icons }