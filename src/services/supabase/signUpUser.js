import { supabase } from "../../api/supabaseClient";

const signUpUser = async (email, password, displayName, navigate) => {
    try {
        const { error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    display_name: displayName,
                },
            },
        });
        if (error) throw error;
        navigate("/login");
    } catch (error) {
        console.error(error.message);
    }
};

export default signUpUser;
