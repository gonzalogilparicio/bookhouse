import { getDocs, collection, query, where, getDoc, doc } from 'firebase/firestore'
import { createAdaptedProductFromFirestore } from '../../../adapters/productAdapter'
import { db } from '../firebaseConfig'

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')
        getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map(doc => {
                return createAdaptedProductFromFirestore(doc)
            })
            resolve(productsAdapted)
        }).catch(error => {
            reject(error)
        })
    })
}

export const getProductsById = (idProduct) => {
    return new Promise((resolve, reject) => {
        const docRef = doc(db, 'products', idProduct)
        getDoc(docRef).then(doc => {
            if (doc.exists()) {
                const product = createAdaptedProductFromFirestore(doc)
                resolve(product)
            } else {
                resolve(null)
            }
        }).catch(error => {
            reject(error)
        })
    })
}