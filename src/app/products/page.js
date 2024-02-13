import ProductCard from '../../components/ProductCard';
import { getProducts } from '../../services/productService';

async function Product() {
    const products = await getProducts();
    return (
        <div className="flex justify-center">
            <div className="my-4 mx-12 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-center">
                {products.data.map((item, index) => (
                    <ProductCard key={item.id} item={item} index={index} />
                ))}
            </div>
        </div>
    );
}

export default Product;
