const axios = require('axios');
const captainModel = require('../models/captain.model');

module.exports.getAddressCoordinate = async (address) => {
    const apiKey = process.env.VITE_MAPBOX_API_KEY;
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${apiKey}`;

    try {
        // console.log(url);
        const response = await axios.get(url);
        // console.log(response.data.features[0].center);
        if (response.data.features && response.data.features.length > 0) {
            const [lng, lat] = response.data.features[0].center;
            return {
                ltd: lat,
                lng: lng
            };
        } else {
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports.getDistanceTime = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error('Origin and destination are required');
    }

    try {
        const og = await this.getAddressCoordinate(origin);
        const dt = await this.getAddressCoordinate(destination);

        // console.log("origin:", og, "destination:", dt);
        const apiKey = process.env.VITE_MAPBOX_API_KEY;
        const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${og.lng},${og.ltd};${dt.lng},${dt.ltd}?access_token=${apiKey}`;

        const response = await axios.get(url);
        if (response.data.routes && response.data.routes.length > 0) {
            const route = response.data.routes[0];
            return {
                distance: {
                    text: `${(route.distance / 1000).toFixed(2)} km`,
                    value: route.distance
                },
                duration: {
                    text: `${Math.round(route.duration / 60)} mins`,
                    value: route.duration
                }
            };
        } else {
            throw new Error('No routes found');
        }
    } catch (err) {
        console.error(err);
        throw err;
    }
}

module.exports.getAutoCompleteSuggestions = async (input) => {
    if (!input) {
        throw new Error('query is required');
    }

    const apiKey = process.env.VITE_MAPBOX_API_KEY;
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(input)}.json?access_token=${apiKey}&types=address`;

    try {
        const response = await axios.get(url);
        if (response.data.features) {
            return response.data.features.map(feature => feature.place_name);
        } else {
            throw new Error('Unable to fetch suggestions');
        }
    } catch (err) {
        console.error(err);
        throw err;
    }
}

module.exports.getCaptainsInTheRadius = async (ltd, lng, radius) => {
    const captains = await captainModel.find({
        location: {
            $geoWithin: {
                $centerSphere: [[ltd, lng], radius / 6371]
            }
        }
    });
    return captains;
}