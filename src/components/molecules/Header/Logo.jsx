import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/">
            <div className="flex flex-row items-center gap-2 cursor-pointer">
                <Leaf className="w-8 h-8 text-green-600" />
                <h1 className="font-kaushan font-bold tracking-wide text-2xl text-green-700">EcoShelf</h1>
            </div>
        </Link>
    );
};

export default Logo;
