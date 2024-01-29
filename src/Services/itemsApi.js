import { supabase } from "./supabase";

//fetching category items
export async function fetchItems(table) {
  try {
    let { data, error } = await supabase.from(table).select("*");

    if (error) throw new Error(error.message);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
