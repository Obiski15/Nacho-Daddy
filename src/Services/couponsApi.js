import { supabase } from "./supabase";

//fetching coupons
export async function fetchCoupons() {
  try {
    let { data, error } = await supabase.from("Coupons").select("*");

    if (error) throw new Error(error.message);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
