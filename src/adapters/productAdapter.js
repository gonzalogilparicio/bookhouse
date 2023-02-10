export const createAdaptedProductFromFirestore = (doc) => {
    const data = doc.data()

    const productAdapted = {
        id: doc.id,
        title: data.title,
        author: data.author,
        img: data.img,
        pages: data.pages,
        ISBN: data.ISBN,
        review: data.review,
        publishinghouse: data.publishinghouse,
        price: data.price,
        stock: data.stock
    }

    return productAdapted
}


