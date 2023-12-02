import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, query, where, limit } from 'firebase/firestore';

import './RelatedProducts.css'

const RelatedProducts = ({ currentCategoryId, productId }) => {
    const [relatedProducts, setRelatedProducts] = useState([]);
    const dbFirestore = getFirestore();

    useEffect(() => {
        const fetchRelatedProducts = async () => {
            const relatedQuery = query(
                collection(dbFirestore, 'products'),
                where('category', '==', currentCategoryId),
                limit(5)
            );
        
            try {
                const relatedProductsSnapshot = await getDocs(relatedQuery);
                const relatedProductsData = relatedProductsSnapshot.docs
                .map(doc => ({ id: doc.id, ...doc.data() }))
                .filter(product => product.id !== productId); // Filtra el producto actualmente seleccionado
                
                setRelatedProducts(relatedProductsData);
            } catch (err) {
                console.err("Error fetching related products:", err);
            }
        };

        // Llama a la función para obtener los productos relacionados
        fetchRelatedProducts();
    }, [currentCategoryId, productId]);

    return (
        <div className="relatedProductsContainer">
            <h3 className="h3relatedProductsContainer">También podría interesarte...</h3>
            <div className="relatedProductsList">
                {relatedProducts.map(product => (
                <Link key={product.id} to={`/detail/${product.id}`} className="relatedProduct">
                    <img src={product.img} alt={product.name} />
                    <p>{product.name}</p>
                </Link>
                ))}
            </div>
        </div>
    );
};

export default RelatedProducts;
