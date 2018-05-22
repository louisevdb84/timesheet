const findById = (obj, id) => {
    return obj.find(o => o.id === id);
}

export default findById;