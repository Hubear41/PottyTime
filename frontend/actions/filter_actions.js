export const UPDATE_BOUNDS = "UPDATE_BOUNDS";

export const updateBounds = bounds => ({
    type: UPDATE_BOUNDS,
    field: "bounds",
    value: bounds,
});