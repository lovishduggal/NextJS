import ProductCard from '../components/ProductCard';
import ShareBtn from '../components/ShareBtn';

function Page() {
    return (
        <div>
            <div className="bg-gray-900 h-72">
                {' '}
                <h1 className="text-white text-center text-5xl font-bold pt-20">
                    Indias most loved{' '}
                    <span className="text-orange-400">fashion</span> platform
                    for <span className="text-rose-500">coders!</span>
                </h1>
            </div>
            <div className="m-4 flex flex-wrap gap-2">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
}

export default Page;
