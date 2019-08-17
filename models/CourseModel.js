export default {
    /**
     * This function adds one to its input.
     * @param {number} input any number
     * @returns {number} that number, plus one.
     */
    search: async function(_query, callback) {
        const courses = await Course.find()
            .populate("student")
            .exec()
        callback(null, courses)
    },
    getOne(data, callback) {
        Course.findOne({
            _id: data.id
        }).exec(callback)
    },
    saveData: (data, callback) => {
        const course = new Course(data)
        course.save(callback)
    }
}
