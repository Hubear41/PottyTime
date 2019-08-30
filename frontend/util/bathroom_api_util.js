export const fetchBathrooms = () => {
    return $.ajax({
        method: "GET",
        url: "/api/bathrooms"
    });
};