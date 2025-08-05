'use client';

import { useCart } from '../contexts/CartContext';
import { useUser } from '../contexts/UserContext';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function TestCartPage() {
  const { user } = useUser();
  const { items, addToCart, getTotalItems, getTotalCost } = useCart();

  const testAddToCart = () => {
    addToCart({
      id: 'test-item',
      name: 'Test Course',
      price: 50
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-6 py-12 pt-24">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Cart Test Page</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Cart Status</h2>
          <p><strong>User logged in:</strong> {user ? 'Yes' : 'No'}</p>
          <p><strong>Total items:</strong> {getTotalItems()}</p>
          <p><strong>Total cost:</strong> ${getTotalCost().toFixed(2)}</p>
          <p><strong>Items in cart:</strong> {items.length}</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Cart Items</h2>
          {items.length === 0 ? (
            <p className="text-gray-600">No items in cart</p>
          ) : (
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.id} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span>{item.name} (x{item.quantity})</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Test Actions</h2>
          <button
            onClick={testAddToCart}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Test Item to Cart
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
} 