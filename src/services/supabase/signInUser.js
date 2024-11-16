import { supabase } from "../../api/supabaseClient";
import { Toast } from "../../utils/function/toast";

const signInUser = async (email, password, setError, setIsLoading) => {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        return data.user;
    } catch (error) {
        setError(error.message);
        Toast.fire({
            icon: "error",
            title: `${error.message}`,
        });
    } finally {
        setIsLoading(false);
    }
};

export default signInUser;
