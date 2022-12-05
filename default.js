import data from './data.js'
import Movies from  '../server/model/allmovies_schema.js'

const defaultData = async () => {
    try {
        await Movies.insertMany(data);
        console.log("Inserted successfully");
    } catch (error) {
        console.log("Error while inserting default data", error);
    }
}

export default defaultData;