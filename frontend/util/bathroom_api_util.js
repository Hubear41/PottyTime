export const fetchBathrooms = filters => {
    const { bounds, categoryIds } = filters;

    return $.ajax({
        method: "GET",
        url: "/api/bathrooms",
        data: {
            bounds,
            category_ids: categoryIds,
        }
    });
};

export const fetchBathroom = id => {
    return $.ajax({
        method: "GET",
        url: `/api/bathrooms/${id}`
    });
};