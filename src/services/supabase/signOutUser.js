import { supabase } from "../../api/supabaseClient";

const signOutUser = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
};

export default signOutUser;
