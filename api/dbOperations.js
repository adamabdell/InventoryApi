module.exports = {
    getItem: getItem,
    insertItem: insertItem,
    getAllItems: getAllItems
};


//retrieve one item that was selected
async function getItem(db, itemName){

    const query = {foodName: itemName};

   try{ 
        const result = await db.collection('items').find(query).toArray();
        console.log(result);
   } catch(err) {
       throw err;
   }
}

//retireve all items from DB
async function getAllItems(db){

    const alphabetical = { foodName: 1 };

    try{
        const result = await db.collection('items').find({}).sort(alphabetical).toArray();
        console.log(result);
   } catch(err) {
       throw err;
   }
}


async function insertItem(db, itemName, itemCount, out){

    const item = {
        foodName: itemName,
        quantity: itemCount
    };

    try{
        await db.collection('items').count({foodName: itemName})
            .then((count) => {
                if(count>0) {
                    if(!out){
                        console.log('EXISTS');
                        db.collection('items').update({foodName: itemName}, { $inc: { quantity: itemCount}});
                    }else{
                        db.collection('items').update({foodName: itemName}, { $inc: { quantity: (itemCount*-1)}});
                    }   
                }else{
                    console.log("ENTER");
                    db.collection('items').insertOne(item);
                }

            });            
//        console.log(itemCount + ' '+itemName+ ' inserted into DB');
    }catch(err){
        throw err;
    }
}
