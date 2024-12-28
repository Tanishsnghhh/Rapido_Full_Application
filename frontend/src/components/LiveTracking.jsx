import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './LiveTracking.css';

const containerStyle = {
    width: '100%',
    height: '70vh',
    transition: 'all 0.3s ease'
};

const LiveTracking = ({ pickup, destination }) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const marker = useRef(null);
    const [isMaximized, setIsMaximized] = useState(false);

    // Initialize map
    useEffect(() => {
        mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_KEY;

        if (!map.current) {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [73.0297, 19.0330], // Default to Kharghar region
                zoom: 12
            });
        }

        // Add maximize/minimize control
        const nav = new mapboxgl.NavigationControl();
        map.current.addControl(nav, 'top-right');

        return () => map.current?.remove();
    }, []);

    // Update route when pickup or destination changes
    useEffect(() => {
        const drawRoute = async () => {
            if (!pickup || !destination || !map.current) return;

            try {
                // Get coordinates for pickup and destination
                const pickupResponse = await fetch(
                    `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(pickup)}.json?access_token=${mapboxgl.accessToken}&bbox=72.8,18.9,73.2,19.2`
                );
                const pickupData = await pickupResponse.json();
                const pickupCoords = pickupData.features[0].center;

                const destResponse = await fetch(
                    `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(destination)}.json?access_token=${mapboxgl.accessToken}&bbox=72.8,18.9,73.2,19.2`
                );
                const destData = await destResponse.json();
                const destCoords = destData.features[0].center;

                // Get route
                const routeResponse = await fetch(
                    `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoords[0]},${pickupCoords[1]};${destCoords[0]},${destCoords[1]}?geometries=geojson&access_token=${mapboxgl.accessToken}`
                );
                const routeData = await routeResponse.json();

                // Remove existing route and markers
                if (map.current.getSource('route')) {
                    map.current.removeLayer('route');
                    map.current.removeSource('route');
                }

                // Add new route
                map.current.addSource('route', {
                    type: 'geojson',
                    data: {
                        type: 'Feature',
                        properties: {},
                        geometry: routeData.routes[0].geometry
                    }
                });

                map.current.addLayer({
                    id: 'route',
                    type: 'line',
                    source: 'route',
                    layout: {
                        'line-join': 'round',
                        'line-cap': 'round'
                    },
                    paint: {
                        'line-color': '#3887be',
                        'line-width': 5,
                        'line-opacity': 0.75
                    }
                });

                // Remove existing markers
                if (marker.current) {
                    marker.current.remove();
                }

                // Add markers
                new mapboxgl.Marker({ color: '#3887be' })
                    .setLngLat(pickupCoords)
                    .addTo(map.current);

                new mapboxgl.Marker({ color: '#f30' })
                    .setLngLat(destCoords)
                    .addTo(map.current);

                // Fit map to show entire route with padding
                const coordinates = routeData.routes[0].geometry.coordinates;
                const bounds = coordinates.reduce((bounds, coord) => {
                    return bounds.extend(coord);
                }, new mapboxgl.LngLatBounds(coordinates[0], coordinates[0]));

                map.current.fitBounds(bounds, {
                    padding: { top: 50, bottom: 50, left: 50, right: 50 }
                });

            } catch (error) {
                console.error('Error drawing route:', error);
            }
        };

        drawRoute();
    }, [pickup, destination]);

    const toggleMaximize = () => {
        setIsMaximized(!isMaximized);
        setTimeout(() => {
            map.current.resize();
        }, 0);
    };

    return (
        <div style={{ position: 'relative', height: '70vh' }}>
            <div 
                ref={mapContainer} 
                style={{
                    ...containerStyle,
                    height: isMaximized ? '100vh' : '70vh',
                }}
            />
            <button
                onClick={toggleMaximize}
                style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    zIndex: 1,
                    padding: '8px',
                    backgroundColor: 'white',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}
            >
                <i className={`ri-${isMaximized ? 'minimize-line' : 'maximize-line'}`}></i>
            </button>
        </div>
    );
};

export default LiveTracking;