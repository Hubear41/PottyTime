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
}

export const createBathroom = bathroom => {
    return $.ajax({
        method: "POST",
        url: '/api/bathrooms',
        data: { bathroom }

    })
};

export const deleteBathroom = id => {
    return $.ajax({
        method: "DELETE",
        url: `/api/bathrooms/${id}`
    })
}