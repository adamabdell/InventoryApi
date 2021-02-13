module.exports = {
    getItem: getItem,
    insertItem: insertItem
};


async function getItem(db, itemName){

    const query = {name: itemName};

   try{ 
        const result = await db.collection('items').find(query).toArray();
        console.log(result);
   } catch(err) {
       throw err;
   }
}

async function insertItem(db, itemName, itemCount){

    const item = {
        name: itemName,
        count: itemCount
    };

    try{
        await db.collection('items').insertOne(item);
        console.log(itemCount + ' '+itemName+ ' inserted into DB');
    }catch(err){
        throw err;
    }
}
