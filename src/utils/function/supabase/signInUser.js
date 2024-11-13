import { supabase } from "../../../api/supabaseClient";

const signInUser = async (email, password, setError, setIsLoading) => {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        return data.user;
    } catch (error) {
        setError(error.message);
        console.error(error.message);
    } finally {
        setIsLoading(false);
    }
};

export default signInUser;
