import { createContext, ReactNode, useContext, useState } from "react"
import Cart from "../components/Cart"

type ShoppingCartProviderProps = {
    children : ReactNode
}

type ShoppingCartContext = {
    openCart:() => void
    closeCart:() => void
    getItemQuantity : (id:number) => number
    increaseCartQuantity : (id:number) => void
    decreaseCartQuantity : (id:number) => void
    removeFromCart:(id:number) => void
    cartQuantity: number
    cartItems: CartItem[]
}

type CartItem = {
    id: number
    quantity:number
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export const useShoppingCart=()=>{
    return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ({children}:ShoppingCartProviderProps)=>{
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);
    
    const cartQuantity = cartItems.reduce((quantity, item)=> item.quantity + quantity,0)
    const getItemQuantity = (id:number) => {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }
    const increaseCartQuantity=(id:number) =>{
        setCartItems(currItems =>{
            if(currItems.find(item => item.id === id) == null){ // if it's not stored in the cart
                return [...currItems, {id, quantity:1}]
            }else{
                return currItems.map(item => {
                    if(item.id === id){
                        return {...item, quantity:item.quantity+1}
                    }else{
                        return item
                    }
                })
            }
        })
    }
    const decreaseCartQuantity=(id:number) =>{
        setCartItems(currItems =>{
            if(currItems.find(item => item.id === id)?.quantity === 1){ // if it's not stored in the cart
                return currItems.filter(item => item.id !== id)
            }else{
                return currItems.map(item => {
                    if(item.id === id){
                        return {...item, quantity:item.quantity - 1 }
                    }else{
                        return item
                    }
                })
            }
        })
    }
    const removeFromCart = (id:number)=>{
        setCartItems(currItems =>{
            return currItems.filter(item => item.id !== id)
        })
    }

    return <ShoppingCartContext.Provider
                value={{
                    getItemQuantity,increaseCartQuantity,decreaseCartQuantity,removeFromCart,
                    cartItems, cartQuantity, openCart, closeCart
                    }}
            >
                {children}
                <Cart isOpen={isOpen}/>
           </ShoppingCartContext.Provider>
}