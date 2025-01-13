const data = [
    {
        id: 1,
        icon: "✈️",
        status: "Events",
        title: "Starting Position",
        content: "The airplane is positioned at the starting point of the runway.",
        flightId: "FL123",
        timestamp: "2024-11-25T08:00:00Z",
        coordinates: {
            latitude: 40.7128,
            longitude: -74.0060
        }
    },
    {
        id: 2,
        icon: "⬆️",
        status: "Events",
        title: "Climb",
        content: "The airplane begins its ascent.",
        flightId: "FL123",
        timestamp: "2024-11-25T08:15:00Z",
        coordinates: {
            latitude: 40.7150,
            longitude: -73.9999
        }
    },
    {
        id: 3,
        icon: "⬇️",
        status: "Events",
        title: "Descent",
        content: "The airplane starts descending towards its destination.",
        flightId: "FL123",
        timestamp: "2024-11-25T10:30:00Z",
        coordinates: {
            latitude: 41.8826,
            longitude: -87.6233
        }
    },
    {
        id: 4,
        icon: "🛬",
        status: "Events",
        title: "Taxiing to Runway",
        content: "The airplane is taxiing to the runway for takeoff.",
        flightId: "FL123",
        timestamp: "2024-11-25T08:05:00Z",
        coordinates: {
            latitude: 40.7130,
            longitude: -74.0050
        }
    },
    {
        id: 5,
        icon: "🚀",
        status: "Events",
        title: "Takeoff",
        content: "The airplane has taken off and is climbing.",
        flightId: "FL123",
        timestamp: "2024-11-25T08:10:00Z",
        coordinates: {
            latitude: 40.7140,
            longitude: -74.0030
        }
    },
    {
        id: 6,
        icon: "🔄",
        status: "Events",
        title: "Course Adjustment",
        content: "The pilot is making a course change as per the flight plan.",
        flightId: "FL123",
        timestamp: "2024-11-25T08:20:00Z",
        coordinates: {
            latitude: 40.8000,
            longitude: -73.9000
        }
    },
    {
        id: 7,
        icon: "⚠️",
        status: "Emergency",
        title: "Engine Failure",
        content: "One of the engines has stopped functioning.",
        flightId: "FL123",
        timestamp: "2024-11-25T09:00:00Z",
        coordinates: {
            latitude: 41.0000,
            longitude: -75.0000
        }
    },
    {
        id: 8,
        icon: "🌪️",
        status: "Emergency",
        title: "Severe Turbulence",
        content: "The airplane encounters an area of severe turbulence.",
        flightId: "FL123",
        timestamp: "2024-11-25T09:30:00Z",
        coordinates: {
            latitude: 41.5000,
            longitude: -76.0000
        }
    },
    {
        id: 9,
        icon: "🚑",
        status: "Emergency",
        title: "Medical Emergency",
        content: "A passenger requires immediate medical assistance.",
        flightId: "FL123",
        timestamp: "2024-11-25T09:45:00Z",
        coordinates: {
            latitude: 41.7000,
            longitude: -76.5000
        }
    },
    {
        id: 10,
        icon: "⏹️",
        status: "Events",
        title: "Cruising Altitude",
        content: "The airplane maintains cruising altitude.",
        flightId: "FL123",
        timestamp: "2024-11-25T09:15:00Z",
        coordinates: {
            latitude: 41.2000,
            longitude: -75.8000
        }
    },
    {
        id: 11,
        icon: "⬇️",
        status: "Events",
        title: "Start Descent",
        content: "The airplane begins descending towards the destination airport.",
        flightId: "FL123",
        timestamp: "2024-11-25T10:25:00Z",
        coordinates: {
            latitude: 41.8700,
            longitude: -87.6200
        }
    },
    {
        id: 12,
        icon: "🛬",
        status: "Events",
        title: "Landing",
        content: "The airplane has safely landed at the destination airport.",
        flightId: "FL123",
        timestamp: "2024-11-25T10:45:00Z",
        coordinates: {
            latitude: 41.8818,
            longitude: -87.6231
        }
    }
];

const statuses = [{
    status: "Events",
    icon: "✈️",
    color: "#EB5A46"
}, {
    status: "Time Line 1",
    icon: "✈️",
    color: "#00C2E0"
}, {
    status: "Time Line 2",
    icon: "✈️",
    color: "#C377E0"
}, {
    status: "Time Line 3",
    icon: "✈️",
    color: "#3981DE"
}];


export { data, statuses };