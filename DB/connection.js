

const { MongoClient } = require('mongodb');
const dbOperations  = require('../api/dbOperations');


async function main(){
    
    const URI = 'mongodb+srv://Adam_Abdellaoui:adam1@inventorycluster.bpfvo.mongodb.net/Inventory?retryWrites=true&w=majority';
    const client = new MongoClient(URI);
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        
        const db = client.db('Inventory');


        await dbOperations.insertItem(db, 'orange', 5, true);
//        await dbOperations.getItem(db, 'banana');
        await dbOperations.getAllItems(db);

        //await  listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
main().catch(console.error);
