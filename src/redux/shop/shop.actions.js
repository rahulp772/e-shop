import ShopActionTypes from "./shop.types";
import { getDocs, collection } from "firebase/firestore";
import { db, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

export const fetchCollectionStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTION_START,
});

export const fetchCollectionSuccess = collectionMap => ({
    type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collectionMap
});

export const fetchCollectionFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
    payload: errorMessage
});

export const fetchCollectionStartAsync = () => {
    return async dispatch => {
        try{
            const collectionRef = await getDocs(collection(db, "collections"));
            dispatch(fetchCollectionStart());
            let collectionMap = convertCollectionsSnapshotToMap(collectionRef);
            console.log(collectionMap);
            dispatch(fetchCollectionSuccess(collectionMap));
        } catch(err) {
            fetchCollectionFailure(dispatch(err.message))
        }
    }
}

// Calling dispatch as
// dispatch({
//     type: 'FETCH_COLLECTION_SUCCESS',
//     payload: collectionMap
// })