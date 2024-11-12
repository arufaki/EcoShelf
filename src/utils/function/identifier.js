const formatISBN = (identifier) => {
    if (!identifier) return "ISBN Not Found";

    return `${identifier.substring(0, 3)}-${identifier.substring(3, 4)}-${identifier.substring(4, 6)}-${identifier.substring(6, 12)}-${identifier.substring(12)}`;
};

export default formatISBN;
