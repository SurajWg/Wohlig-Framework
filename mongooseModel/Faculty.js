var schema = new Schema({
    facultyname: String,
    facultyemail: String,
    facultydepartment: String,
    facultyphoneno: Number,
    facultycourse: String,
    student: {
        type: Schema.Types.ObjectId,
        ref: "Student"
    }
})
export default mongoose.model("Faculty", schema)
