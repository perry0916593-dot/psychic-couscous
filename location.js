export async function getUserLocation() {
    try {
        let response = await fetch("https://ipapi.co/json/");
        let data = await response.json();

        return {
            ip: data.ip,
            city: data.city,
            region: data.region,
            country: data.country_name,
            latitude: data.latitude,
            longitude: data.longitude
        };

    } catch (error) {
        return {
            city: "Unknown",
            country: "Unknown"
        };
    }
}
