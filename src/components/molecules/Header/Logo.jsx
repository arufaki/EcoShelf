import { Leaf } from "lucide-react";

const Logo = () => {
    return (
        <div className="flex flex-row items-center gap-2">
            <Leaf className="w-8 h-8 text-green-600" />
            <h1 className="font-kaushan font-bold tracking-wide text-2xl text-green-700">EcoShelf</h1>
        </div>
    );
};

export default Logo;
