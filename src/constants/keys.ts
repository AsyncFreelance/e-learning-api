const dbName = process.env.DATABASE_NAME || "e_learning_db"
// const dbName = "mk"
const deployedDBUri = process.env.DEPLOYED === "false"?
    `mongodb://localhost:27017/society_management_db` :
    `mongodb+srv://yab:Lumberjack_6969@test-y8c98.mongodb.net/${dbName}?authSource=admin&replicaSet=test-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`
export default {
    // deployedDBUri: `mongodb+srv://yab:Lumberjack_6969@test-y8c98.mongodb.net/society_management_db?authSource=admin&replicaSet=test-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`,
    deployedDBUri
}
