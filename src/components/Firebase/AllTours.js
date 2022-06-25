import {firestore} from './firebase';


export const GetAllTours = async () => {

const ref = await firestore.collection('tour').get();
    let tours = [];

    ref.docs.forEach(doc => {
        tours.push(doc.data());
    
        
    })

    return tours;

}
