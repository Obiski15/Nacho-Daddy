import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import Dashboard from "./Pages/Dashboard";
import PageNotFound from "./Pages/PageNotFound";
import Login from "./Pages/Login";
import AllCategories from "./Features/Categories/AllCategories";
import BabyItems from "./Features/Categories/BabyItems";
import SportsAndGym from "./Features/Categories/SportsAndGym";
import FashionAndClothing from "./Features/Categories/FashionAndClothing";
import HealthAndBeauty from "./Features/Categories/HealthAndBeauty";
import PhonesAndAccessories from "./Features/Categories/PhonesAndAccessories";
import PetsAndAnimals from "./Features/Categories/PetsAndAnimals";
import CarsAndAutomobile from "./Features/Categories/CarsAndAutomobile";
import Groceries from "./Features/Categories/Groceries";
import ToysAndGaming from "./Features/Categories/ToysAndGaming";

import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import MyOrder from "./Pages/MyOrder";
import SignUp from "./Pages/SignUp";
import ProtectedRoute from "./Features/Authentication/ProtectedRoute";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route element={<Dashboard />}>
            <Route index element={<Navigate to="items" replace />} />
            <Route path="items" element={<AllCategories />} />
            <Route path="categories/babyitems" element={<BabyItems />} />
            <Route path="categories/sports" element={<SportsAndGym />} />
            <Route
              path="categories/clothing"
              element={<FashionAndClothing />}
            />
            <Route path="categories/beauty" element={<HealthAndBeauty />} />
            <Route
              path="categories/phones"
              element={<PhonesAndAccessories />}
            />
            <Route path="categories/pets" element={<PetsAndAnimals />} />
            <Route
              path="categories/automobile"
              element={<CarsAndAutomobile />}
            />
            <Route path="categories/groceries" element={<Groceries />} />
            <Route path="categories/toys" element={<ToysAndGaming />} />
          </Route>
          <Route path="cart" element={<Cart />} />
          <Route
            path="checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
          <Route
            path="myorders"
            element={
              <ProtectedRoute>
                <MyOrder />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          containerStyle={{ marginTop: "30px" }}
          toastOptions={{
            duration: 1000,
            style: {
              maxWidth: "400px",
              background: "#78716c",
              color: "#f5f5f4",
            },

            // Default options for specific types
            success: {
              duration: 2000,
            },

            error: {
              duration: 1000,
            },
          }}
        />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
