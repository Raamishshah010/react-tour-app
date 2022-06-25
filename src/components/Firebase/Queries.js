import {firestore} from './firebase';

export const getTourPlaces = async () => {
    const ref = await firestore.collection('tour').get();
    let tours = [];

    ref.docs.forEach(doc => {
        tours.push(doc.data());
        
    })
    return tours;
}


