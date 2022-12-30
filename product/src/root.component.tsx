import 'devextreme/dist/css/dx.material.orange.light.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthGuardedRoute } from './auth-guarded-route/auth-guarded-route';
import { Layout } from './layout/layout';
import { ProductDetails } from './product-details/product-details';
import { ProductList } from './product-list/product-list';

export default function Root(props) {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/product/" element={<Layout />}>
          <Route element={<AuthGuardedRoute />}>
            <Route path="/product/list" element={<ProductList />} />
            <Route path="/product/details/:id" element={<ProductDetails />} />
            <Route index element={<ProductList />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>;
}
