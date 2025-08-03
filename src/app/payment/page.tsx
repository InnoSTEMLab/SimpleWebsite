'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Navigation from '../components/Navigation';

export default function Payment() {
  const searchParams = useSearchParams();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Get enrollment data from URL params (in a real app, this would come from a database)
  const childName = searchParams.get('childName') || 'Your Child';
  const programCode = searchParams.get('program') || 'ages-6-9';
  const numClasses = searchParams.get('numClasses') || '1';
  const totalAmount = parseInt(numClasses) * 50;

  // Map program codes to display names
  const getProgramDisplayName = (code: string) => {
    switch (code) {
      case 'ages-6-9':
        return 'Introduction to Line Following Robots (Ages 6-9)';
      case 'ages-10-13':
        return 'Introduction to Line Following Robots (Ages 10-13)';
      default:
        return 'Introduction to Line Following Robots';
    }
  };

  const programDisplayName = getProgramDisplayName(programCode);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Save payment to database
      const enrollmentId = searchParams.get('enrollmentId');
      if (enrollmentId) {
        const paymentResponse = await fetch('/api/payment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            studentId: enrollmentId,
            amount: totalAmount,
            paymentMethod: paymentMethod,
            paymentStatus: 'completed',
            transactionId: `txn_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
          }),
        });

        if (!paymentResponse.ok) {
          console.error('Failed to save payment to database');
        }
      }

      // Show success page
      setIsSuccess(true);
    } catch (err: any) {
      console.error('Payment error:', err);
      setIsProcessing(false);
      alert('Payment processing failed. Please try again.');
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Navigation />

        <main className="max-w-2xl mx-auto px-6 py-20 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for enrolling {childName} in our {programDisplayName} program. Your payment of ${totalAmount} has been processed successfully.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">What's Next?</h3>
              <ul className="text-left space-y-2 text-gray-600">
                <li>• You'll receive a confirmation email within 24 hours</li>
                <li>• Our team will contact you to schedule your first class</li>
                <li>• Welcome materials will be sent to your email</li>
                <li>• Class details and location information will be provided</li>
              </ul>
            </div>

            <div className="space-y-4">
              <Link 
                href="/"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Return to Homepage
              </Link>
              <p className="text-sm text-gray-500">
                Need help? Contact us at support@innostemlab.com
              </p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Your Payment
          </h1>
          <p className="text-xl text-gray-600">
            Secure payment for {childName}'s robotics education
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Payment Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Payment Information</h2>
            
            <form onSubmit={handlePayment} className="space-y-6">
              {/* Payment Method Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Payment Method
                </label>
                <div className="space-y-3">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-gray-700">Credit/Debit Card</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={paymentMethod === 'paypal'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-gray-700">PayPal</span>
                  </label>
                </div>
              </div>

              {paymentMethod === 'card' && (
                <>
                  {/* Card Number */}
                  <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors bg-gray-50 text-gray-900"
                      required
                    />
                  </div>

                  {/* Expiry and CVV */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        id="expiry"
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors bg-gray-50 text-gray-900"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        placeholder="123"
                        className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors bg-gray-50 text-gray-900"
                        required
                      />
                    </div>
                  </div>

                  {/* Cardholder Name */}
                  <div>
                    <label htmlFor="cardholderName" className="block text-sm font-medium text-gray-700 mb-2">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      id="cardholderName"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors bg-gray-50 text-gray-900"
                      required
                    />
                  </div>
                </>
              )}

              {paymentMethod === 'paypal' && (
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-gray-600">You'll be redirected to PayPal to complete your payment.</p>
                </div>
              )}

              {/* Security Notice */}
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <p className="text-sm text-blue-800">
                    Your payment information is encrypted and secure. We use industry-standard SSL encryption to protect your data.
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing Payment...
                  </div>
                ) : (
                  `Pay $${totalAmount}`
                )}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <div>
                  <h3 className="font-medium text-gray-900">{programDisplayName}</h3>
                  <p className="text-sm text-gray-600">Student: {childName}</p>
                </div>
                <span className="text-gray-900">${totalAmount}</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600">Number of Classes</span>
                <span className="text-gray-900">{numClasses}</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600">Price per Class</span>
                <span className="text-gray-900">$50</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-gray-900">${totalAmount}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-medium text-green-900 mb-2">What's Included:</h3>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Expert robotics instruction</li>
                  <li>• All necessary materials and equipment</li>
                  <li>• Take-home projects</li>
                  <li>• Progress tracking and feedback</li>
                  <li>• Certificate of completion</li>
                </ul>
              </div>

              <div className="text-sm text-gray-600">
                <p>By completing this payment, you agree to our Terms of Service and Refund Policy.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 