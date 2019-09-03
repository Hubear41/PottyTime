export const fetchBathrooms = filters => {
    const { bounds } = filters;
    
    return $.ajax({
        method: "GET",
        url: "/api/bathrooms",
        data: { bounds }
    });
};
