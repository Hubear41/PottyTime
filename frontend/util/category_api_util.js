export const requestCategories = () => {
    return $.ajax({
        method: "GET",
        url: "/api/categories"
    });
};