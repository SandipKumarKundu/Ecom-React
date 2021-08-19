import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Switch,useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import {useEffect} from 'react';
import {Products} from "../../Presentation/Products/Products";
import {Navbar} from "../../Presentation/Navbar/Navbar";
import HttpInterceptor from "../../Services/HttpInterceptorService";
import {registerUser} from "../../Actions";
const Home= props =>{
    const [products,setProducts]=useState([{name:"empty"}]);
    console.log(products);
    let history = useHistory();
      if(!props.user?.userName){
const user=JSON.parse(window.localStorage.getItem("User"));
    if(user?.userName){
        props.dispatch(registerUser(user));
          }
      else {
          history.push('/login');
          history.go(0);
      }
}
    const checkOut=async (event,id)=>{
        let productsTemp=[].concat(products);
        let currentProductId=0;
        productsTemp.filter((products,i)=>{
            if(products._id==id){
                currentProductId=i;
                return products;
            }
        });
        switch (event){
            case "-":{
                productsTemp[currentProductId].count--;
                break;
            }
            default:{
                productsTemp[currentProductId].count?productsTemp[currentProductId].count++:(productsTemp[currentProductId].count=1);
                break;
            }
        }
        await setProducts(productsTemp);
    };
    const createOrder=async ()=>{
        const orderArray=[];
        products.map(product=>{
            if(product.count){
                orderArray.push({
                    "userId":props.user.userName,
                    "productId":product.name
                });
            }
        });
      await HttpInterceptor.post("orders/create",orderArray[0])

    }
      useEffect(async()=>{
          const auth=btoa(`${props.user.userName}:${props.user.password}`);
          let {data}=await HttpInterceptor.get("products/get")
      setProducts(data);
      },[])
    return (
        <div>
            <Navbar user={props.user} buttons={[{name:'Cart',className:'addToCartButton'}
            ,{name:'Buy Now',className:'checkoutButton',onClick:createOrder}]} />
            {
               products.map(prods=> {
                   return (
                       <Products key={prods._id} quantity={prods.quantity} productName={prods.name} productDescription={prods.description}
                                 price={prods.price} sellerDetail={prods.sellerDetail} recomentation={prods.recomentation?prods.recomentation:[]} count={prods.count}
                             class="checkoutButton" onClick={(event)=>checkOut(event,prods._id)} name="Add to cart"></Products>);
               })
               }
            </div>
    );
}
const mapStateToProps = state => ({
    user: state.users
})
export default connect(
    mapStateToProps
)(Home);
