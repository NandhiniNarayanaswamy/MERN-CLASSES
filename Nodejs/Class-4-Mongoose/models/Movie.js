import mongoose from "mongoose"
const MovieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    genre: { type: Array },
    isActive: { type: Boolean },
    comments: [
        {
            value: { type: String },
            publish: { type: Date, default: Date.now }
        }
    ],
})
const MovieModel = mongoose.model("Nandhu", MovieSchema)
// const createData = async () => {
//     try {
//         const m1 = new MovieModel({
//             name: "RRR",
//             rating: 3,
//             genre: ["action", "comedy"],
//             isActive: true,
//             comments: [{ value: "Hero is superb" }]
//         })
//         const result = m1.save()
//         console.log(result)
//     } catch (error) {
//         console.log(error);

//     }
// }

//INSERT MANY

// const createData = async () => {
//     try {
//         const m1 = new MovieModel({
//             name: "RRR",
//             rating: 3,
//             genre: ["action", "comedy"],
//             isActive: true,
//             comments: [{ value: "Hero is superb" }]
//         })
//         const m2 = new MovieModel({
//             name: "RRR2",
//             rating: 3,
//             genre: ["action", "comedy"],
//             isActive: true,
//             comments: [{ value: "Hero is superb" }]
//         })
//         const m3 = new MovieModel({
//             name: "RRR3",
//             rating: 3,
//             genre: ["action", "comedy"],
//             isActive: true,
//             comments: [{ value: "Hero is superb" }]
//         })
//         const m4 = new MovieModel({
//             name: "RRR4",
//             rating: 3,
//             genre: ["action", "comedy"],
//             isActive: true,
//             comments: [{ value: "Hero is superb" }]
//         })
//         const result = MovieModel.insertMany([m1, m2, m3, m4])
//         console.log(result)
//     } catch (error) {
//         console.log(error);

//     }
// }

// const alldoc = async () => {
//     try {
//         const result = await MovieModel.find()
//         result.forEach((item) => {
//             console.log(item.name)
//             console.log(item.rating)
//         })

//     } catch (error) {
//         console.log(error)
//     }
// }

//find by ID

const alldoc = async () => {
    try {
        // const result = await MovieModel.findById("699c6020cdae41450a1bfda9")
        // const result = await MovieModel.find({ name: "RRR4" })
        // result.forEach((item) => {
        //     console.log(item.name)
        //     console.log(item.rating)
        // })

        // limit the docs
        //const result = await MovieModel.find().limit(3)
        // const result = await MovieModel.find().skip(3)
        //const result = await MovieModel.find().countDocuments()
        //const result = await MovieModel.find().sort({ rating: -1 })

        //AND | OR

        // const result = await MovieModel.find({
        //     $and: [{ isActive: true }, { rating: 3 }]
        // })

        // const result = await MovieModel.find({
        //     $or: [{ isActive: true }, { rating: 2 }]
        // })
        console.log(result);


    } catch (error) {
        console.log(error)
    }
}
export { alldoc }









