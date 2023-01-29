import { Router } from "react-router-dom";
import { useState,variantInfo,commerce } from "react";



const Cart = () => {
    const [cart, setCart] = useState()
    const addToCart = (productname, price) => {

        if(variantInfo) {
            commerce.cart.add(productname, 1, price)
                .then(res => {
                    setCart(res.cart)
                })
        } else {
            window.alert('Please Select a Shirt Size')
        }
    }
    return ( <div>
        {/* <h1>sfj</h1> */}
    </div>
       
            // <div className="App">
            //     <Nav cart={cart} emptyCart={emptyCart}/>
            //     <Grid centered stackable padded relaxed>
            //         <Grid.Column className='left-column' width={5}>
            //             <LeftPanel />
            //         </Grid.Column>
            //         <Grid.Column width={9}>
            //             <ProductContainer 
            //                 addToCart={addToCart} 
            //             />
            //         </Grid.Column>
            //     </Grid>
            //     <Footer />
            
      );
    
}
 
export default Cart;