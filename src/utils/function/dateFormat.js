const dateFormatting = (dateData) => {
    const date = new Date(dateData);

    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};

export default dateFormatting;
