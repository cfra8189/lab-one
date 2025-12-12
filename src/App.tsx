import { useState } from 'react';
import './App.css';
import { AlertBox } from './components/AlertBox/AlertBox';
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard';
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay';
import type { User, Product } from './types';

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([]);

 
  const user: User = {
    id: '1',
    name: 'Sean Carter',
    email: 'jay@darock.io',
    role: 'Billionaire | Entrepreneur | Musician',
    avatarUrl: './jayz.png'
  };


  const product: Product = {
    id: '1',
    name: 'She Been Drankin\', She Been Drankin\'',
    price: 199.99,
    description: 'Beyonce Starbucks Billion Dollar Frappuccino',   
    imageUrl: './beyonce-starbucks.png', 
    inStock: true
  };

  const product2: Product = {
    id: '2',
    name: 'Ex Sinner, Grammy Award Winner',
    price: 75000,
    description: 'Price of a Met Gala Ticket. I got a bunch of em. Serious inquiries only.',   
    imageUrl: './grammy.png', 
    inStock: true
  };

  const handleAddToCart = (productId: string) => {
    setCartItems([...cartItems, productId]);
    setShowAlert(true);
  };

  return (
    <div className="p-4 min-h-screen bg-black relative">
      <div 
        className="absolute inset-0 opacity-30" 
        style={{ 
          backgroundImage: 'url(./mood.gif)', 
          backgroundSize: 'repeat', 
          backgroundPosition: 'center', 
          backgroundAttachment: 'fixed',
          zIndex: 0
        }}
      />
      <div className="relative z-10">
      
      {showAlert && (
        <div className="mb-6">
          <AlertBox
            type="success"
            message="Product added to cart!"
            onClose={() => setShowAlert(false)}
          >
            <p className="text-sm">You can now continue shopping or proceed to checkout.</p>
          </AlertBox>
        </div>
      )}

      <div className="md:col-span-2 mb-6 max-w-3xl mx-auto">
        <UserProfileCard
          user={user}
          showEmail={true}
          showRole={true}
          onEdit={(userId: string) => alert(`Editing user ${userId}`)}
        >
          <div className="text-sm text-gray-500">
            Last login: 2 hours ago
          </div>
        </UserProfileCard>
      </div>
      
      <h1 className="text-4xl font-bold text-white mb-6 text-center">
        #MOOD4EVA
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProductDisplay
          product={product}
          showDescription={true}
          showStockStatus={true}
          onAddToCart={handleAddToCart}
        >
          <div className="text-sm text-gray-500">
            Free shipping available
          </div>
        </ProductDisplay>
        <ProductDisplay
          product={product2}
          showDescription={true}
          showStockStatus={true}
          onAddToCart={handleAddToCart}
        >
          <div className="text-sm text-gray-500">
            Free shipping available
          </div>
        </ProductDisplay>
      </div>

      {cartItems.length > 0 && (
        <div className="mt-6 p-4 bg-white bg-opacity-70 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Cart Items</h2>
          <p className="text-gray-600">
            You have {cartItems.length} item{cartItems.length > 1 ? 's' : ''} in your cart
          </p>
        </div>
      )}
      </div>
    </div>
  );
}

export default App;
