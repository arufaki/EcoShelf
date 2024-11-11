import user from "../../../utils/data/user";

const UserProfile = () => {
    return (
        <section className="flex items-center space-x-3 border-b py-10 px-5">
            <div className="bg-gray-200 rounded-full h-16 w-16 flex items-center justify-center font-bold text-2xl font-poppins">{user.name.charAt(0)}</div>
            <div>
                <h3 className="font-semibold text-base text-green-800 font-poppins">{user.name}</h3>
                <p className="font-poppins text-sm">{user.email}</p>
            </div>
        </section>
    );
};

export default UserProfile;
