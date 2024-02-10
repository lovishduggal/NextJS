import { CheckIcon } from '@heroicons/react/24/solid';
import ShareBtn from '../../../components/ShareBtn';
import AddToCart from '../../../components/AddToCart';
import { getProducts, getProductById } from '../../../services/productService';
import Image from 'next/image';

export async function generateStaticParams() {
    const products = await getProducts(10);
    return products.data.map((item) => ({
        slug: item.id,
    }));
}

export async function generateMetadata({ params: { slug } }) {
    const product = await getProductById(slug);
    return {
        title: `Dev Product | ${product.name}`,
    };
}
const Product1 = async ({ params: { slug } }) => {
    const product = await getProductById(slug);
    return (
        <div className="m-2 px-20">
            <div className="flex justify-around items-center flex-wrap gap-5">
                <div className="w-80 h-80">
                    <Image
                        priority
                        width={160}
                        height={160}
                        src={product.images[0]}
                        className="w-full h-auto"
                    />
                </div>
                <div className="flex-1 max-w-md border rounded-md shadow-lg p-6 bg-white">
                    <h2 className="text-3xl font-semibold">{product.name}</h2>
                    <div className="flex pt-2 gap-2">
                        <CheckIcon className="text-lime-500 w-5 h-5" />
                        <span className="font-semibold">In stock</span> |
                        <ShareBtn />
                    </div>
                    <div className="mt-4 border-t pt-4">
                        <p className="text-gray-500">Price:</p>
                        <p className="text-xl font-semibold">
                            {' '}
                            ₹{product.default_price.unit_amount / 100}
                        </p>
                    </div>
                    <AddToCart />
                </div>
            </div>
            <p className="mt-8 text-2xl">{product.description}</p>
            
        </div>
    );
};

export default Product1;
