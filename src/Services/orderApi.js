import { supabase } from "./supabase";

//when an order is placed
export async function placeOrder(orderDetails) {
  try {
    const { error } = await supabase
      .from("Orders")
      .insert([orderDetails])
      .select();
    if (error) throw new Error(error.message);
  } catch (error) {
    throw new Error(error.message);
  }
}

//fetches all available orders
export async function fetchOrders() {
  try {
    let { data, error } = await supabase.from("Orders").select("*");

    if (error) throw new Error(error.message);

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

//cancels an order
export async function cancelOrder(id) {
  try {
    const { error, data } = await supabase
      .from("Orders")
      .update({ status: "cancelled" })
      .eq("id", id)
      .select();
    if (error) throw new Error(error.message);

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
