import React from 'react';
import { Route } from 'react-router-dom';
import ProductHome from './products/product_home';
import ProductByDepartment from './products/products_by_dept';
import LoginForm from './session/login_form';
import OrderPage from './order/order_show_page';

const App = () => (
   
   <div className="app-wrapper">
      <Route exact path="/" component={ProductHome}/>
      {/* <Route exact path="/fruits" component={Fruits}/> */}
      <Route exact path="/departments" component={ProductByDepartment}/> 
      <Route exact path="/departments/:department" component={ProductByDepartment}/>
      <Route exact path="/login" component={LoginForm}/>  
      <Route exact path="/ordercheckout" component={OrderPage}/>  

   </div>
)

export default App;


