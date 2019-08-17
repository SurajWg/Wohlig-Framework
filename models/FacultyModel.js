export default {
    /**
     * This function adds one to its input.
     * @param {number} input any number
     * @returns {number} that number, plus one.
     */
    search: async function(_query, callback) {
        const faculties = await Faculty.find()
            .populate("student")
            .exec()
        callback(null, faculties)
    },
    getOne(data, callback) {
        Faculty.findOne({
            _id: data.id
        }).exec(callback)
    },
    saveData: (data, callback) => {
        const faculty = new Faculty(data)
        faculty.save(callback)
    }
}
