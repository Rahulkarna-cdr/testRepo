/**
 * Checkout page — Enhanced with multiple Nepali/international payment methods.
 *
 * Payment options: eSewa, Khalti, PayPal, Cash on Delivery.
 * Each payment method shows its own dynamic form with validation.
 * Prices displayed in Nepali Rupees (NPR).
 *
 * NOTE: InputField is defined OUTSIDE the Checkout component to prevent
 * re-creation on every render (which would cause inputs to lose focus).
 */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { formatPriceNPR } from '../utils/currency';

// ========================================================
// Reusable InputField — defined OUTSIDE Checkout so React
// keeps a stable reference and inputs don't lose focus.
// ========================================================
const InputField = ({ label, name, type = 'text', placeholder, value, onChange, error }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1.5">
      {label}
    </label>
    <input
      id={name}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
        error ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
      }`}
      placeholder={placeholder}
      autoComplete="off"
    />
    {error && (
      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        {error}
      </p>
    )}
  </div>
);

// ========================================================
// eSewa brand logo — green circle with white "e" + dark "Sewa" serif text
// Matches official eSewa branding
// ========================================================
const EsewaLogo = ({ size = 'md' }) => {
  const sizes = { sm: 'h-6', md: 'h-8', lg: 'h-10' };
  return (
    <svg className={`${sizes[size]} w-auto`} viewBox="0 0 180 50" xmlns="http://www.w3.org/2000/svg">
      {/* Green circle with "e" */}
      <circle cx="25" cy="25" r="22" fill="#60BB46" />
      <text
        x="25" y="33"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="bold"
        fontSize="28"
        fill="#FFFFFF"
      >e</text>
      {/* Dark navy "Sewa" in serif font */}
      <text
        x="52" y="36"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="30"
        fill="#1C2E4A"
        letterSpacing="-0.5"
      >Sewa</text>
    </svg>
  );
};

// ========================================================
// Khalti brand logo — white shield with purple "K" + "khalti" text
// Matches official Khalti branding
// ========================================================
const KhaltiLogo = ({ size = 'md' }) => {
  const sizes = { sm: 'h-6', md: 'h-8', lg: 'h-10' };
  return (
    <svg className={`${sizes[size]} w-auto`} viewBox="0 0 180 50" xmlns="http://www.w3.org/2000/svg">
      {/* Purple background */}
      <rect width="180" height="50" rx="6" fill="#5C2D91" />
      {/* White shield shape */}
      <path
        d="M12,8 L36,8 C37,8 38,9 38,10 L38,30 C38,32 37,34 36,35 L24,44 L12,35 C11,34 10,32 10,30 L10,10 C10,9 11,8 12,8 Z"
        fill="#FFFFFF"
      />
      {/* Purple "K" inside shield */}
      <text
        x="24" y="33"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="bold"
        fontSize="24"
        fill="#5C2D91"
      >K</text>
      {/* "khalti" text with border box */}
      <rect x="46" y="14" width="122" height="24" rx="4" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
      <text
        x="107" y="32"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="bold"
        fontSize="18"
        fill="#FFFFFF"
        letterSpacing="1"
      >khalti</text>
    </svg>
  );
};

// ========================================================
// PayPal brand logo — overlapping dual-tone "P" + "PayPal" text
// Matches official PayPal branding
// ========================================================
const PayPalLogo = ({ size = 'md' }) => {
  const sizes = { sm: 'h-6', md: 'h-8', lg: 'h-10' };
  return (
    <svg className={`${sizes[size]} w-auto`} viewBox="0 0 160 50" xmlns="http://www.w3.org/2000/svg">
      {/* Light blue "P" (back) */}
      <text
        x="18" y="34"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="bold"
        fontStyle="italic"
        fontSize="38"
        fill="#009CDE"
      >P</text>
      {/* Dark blue "P" (front, shifted left) */}
      <text
        x="8" y="34"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="bold"
        fontStyle="italic"
        fontSize="38"
        fill="#003087"
      >P</text>
      {/* "Pay" in dark blue */}
      <text
        x="42" y="34"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="bold"
        fontSize="24"
        fill="#003087"
      >Pay</text>
      {/* "Pal" in light blue */}
      <text
        x="94" y="34"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="bold"
        fontSize="24"
        fill="#009CDE"
      >Pal</text>
    </svg>
  );
};

// ---- Payment method configuration ----
const PAYMENT_METHODS = [
  {
    id: 'esewa',
    name: 'eSewa',
    icon: <EsewaLogo />,
    color: 'bg-green-50 border-green-500 text-green-700',
  },
  {
    id: 'khalti',
    name: 'Khalti',
    icon: <KhaltiLogo />,
    color: 'bg-purple-50 border-purple-500 text-purple-700',
  },
  {
    id: 'paypal',
    name: 'PayPal',
    icon: <PayPalLogo />,
    color: 'bg-blue-50 border-blue-500 text-blue-700',
  },
  {
    id: 'cod',
    name: 'Cash on Delivery',
    icon: (
      <svg className="w-8 h-8 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <circle cx="12" cy="12" r="3" />
        <circle cx="5.5" cy="9" r="0.5" fill="currentColor" />
        <circle cx="18.5" cy="15" r="0.5" fill="currentColor" />
      </svg>
    ),
    color: 'bg-amber-50 border-amber-500 text-amber-700',
  },
];

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, getCartTotal, placeOrder } = useCart();
  const { showToast } = useToast();

  // ---- Shipping form state ----
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
  });

  // ---- Payment state ----
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentData, setPaymentData] = useState({
    esewaPhone: '',
    khaltiPhone: '',
    khaltiOtp: '',
    paypalEmail: '',
    paypalPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ---- Empty cart guard ----
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Your cart is empty
          </h2>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  // ---- Handlers ----
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handlePaymentDataChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handlePaymentMethodSelect = (methodId) => {
    setPaymentMethod(methodId);
    // Clear payment-related errors when switching method
    setErrors((prev) => {
      const cleaned = { ...prev };
      delete cleaned.paymentMethod;
      delete cleaned.esewaPhone;
      delete cleaned.khaltiPhone;
      delete cleaned.khaltiOtp;
      delete cleaned.paypalEmail;
      delete cleaned.paypalPassword;
      return cleaned;
    });
    const method = PAYMENT_METHODS.find((m) => m.id === methodId);
    if (method) {
      showToast(`${method.name} selected as payment method`, 'info');
    }
  };

  // ---- Validation ----
  const validateForm = () => {
    const newErrors = {};

    // Shipping validation
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'Zip code is required';

    // Payment method validation
    if (!paymentMethod) {
      newErrors.paymentMethod = 'Please select a payment method';
    } else {
      switch (paymentMethod) {
        case 'esewa':
          if (!paymentData.esewaPhone.trim()) {
            newErrors.esewaPhone = 'eSewa phone/account ID is required';
          }
          break;
        case 'khalti':
          if (!paymentData.khaltiPhone.trim()) {
            newErrors.khaltiPhone = 'Khalti phone number is required';
          }
          if (!paymentData.khaltiOtp.trim()) {
            newErrors.khaltiOtp = 'OTP/verification code is required';
          }
          break;
        case 'paypal':
          if (!paymentData.paypalEmail.trim()) {
            newErrors.paypalEmail = 'PayPal email is required';
          } else if (!/\S+@\S+\.\S+/.test(paymentData.paypalEmail)) {
            newErrors.paypalEmail = 'PayPal email is invalid';
          }
          if (!paymentData.paypalPassword.trim()) {
            newErrors.paypalPassword = 'PayPal password is required';
          }
          break;
        case 'cod':
          break;
        default:
          break;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ---- Submit ----
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        const order = placeOrder({
          ...formData,
          paymentMethod,
          paymentData: paymentMethod !== 'cod' ? paymentData : {},
        });
        setIsSubmitting(false);
        showToast('Order placed successfully!', 'success');
        navigate(`/order-confirmation/${order.id}`);
      }, 1000);
    } else {
      showToast('Please fix the errors before submitting.', 'error');
    }
  };

  // ---- Dynamic payment forms ----
  const renderPaymentForm = () => {
    switch (paymentMethod) {
      case 'esewa':
        return (
          <div key="esewa-form" className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200 space-y-4">
            <h4 className="font-medium text-green-800 flex items-center gap-3">
              <EsewaLogo size="sm" />
              <span>Payment</span>
            </h4>
            <InputField
              label="Phone / Account ID *"
              name="esewaPhone"
              type="tel"
              placeholder="98XXXXXXXX"
              value={paymentData.esewaPhone}
              onChange={handlePaymentDataChange}
              error={errors.esewaPhone}
            />
            <p className="text-xs text-green-600">You will receive a confirmation on your eSewa account.</p>
          </div>
        );

      case 'khalti':
        return (
          <div key="khalti-form" className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-200 space-y-4">
            <h4 className="font-medium text-purple-800 flex items-center gap-3">
              <KhaltiLogo size="sm" />
              <span>Payment</span>
            </h4>
            <InputField
              label="Phone Number *"
              name="khaltiPhone"
              type="tel"
              placeholder="98XXXXXXXX"
              value={paymentData.khaltiPhone}
              onChange={handlePaymentDataChange}
              error={errors.khaltiPhone}
            />
            <InputField
              label="OTP / Verification Code *"
              name="khaltiOtp"
              type="text"
              placeholder="Enter 6-digit OTP"
              value={paymentData.khaltiOtp}
              onChange={handlePaymentDataChange}
              error={errors.khaltiOtp}
            />
            <p className="text-xs text-purple-600">A mock OTP has been sent to your phone (UI only).</p>
          </div>
        );

      case 'paypal':
        return (
          <div key="paypal-form" className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200 space-y-4">
            <h4 className="font-medium text-blue-800 flex items-center gap-3">
              <PayPalLogo size="sm" />
              <span>Login</span>
            </h4>
            <InputField
              label="PayPal Email *"
              name="paypalEmail"
              type="email"
              placeholder="you@example.com"
              value={paymentData.paypalEmail}
              onChange={handlePaymentDataChange}
              error={errors.paypalEmail}
            />
            <InputField
              label="Password *"
              name="paypalPassword"
              type="password"
              placeholder="Enter your PayPal password"
              value={paymentData.paypalPassword}
              onChange={handlePaymentDataChange}
              error={errors.paypalPassword}
            />
            <button
              type="button"
              onClick={() => showToast('PayPal login simulated successfully!', 'success')}
              className="w-full py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
            >
              Log in to PayPal
            </button>
            <p className="text-xs text-blue-600">This is a mock login (UI only — no real credentials are sent).</p>
          </div>
        );

      case 'cod':
        return (
          <div key="cod-form" className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
              </svg>
              <div>
                <p className="font-medium text-amber-800">Cash on Delivery</p>
                <p className="text-sm text-amber-700 mt-1">
                  You will pay when the order is delivered.
                </p>
                <p className="text-xs text-amber-600 mt-2">
                  Please keep the exact amount ready at the time of delivery.
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ---- Left column: Form ---- */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* ---- Shipping Information ---- */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-5 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Shipping Information
              </h2>
              <div className="space-y-4">
                <InputField
                  label="Full Name *"
                  name="name"
                  placeholder="Ram Bahadur"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField
                    label="Email *"
                    name="email"
                    type="email"
                    placeholder="ram@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                  />
                  <InputField
                    label="Phone *"
                    name="phone"
                    type="tel"
                    placeholder="+977 98XXXXXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    error={errors.phone}
                  />
                </div>
                <InputField
                  label="Address *"
                  name="address"
                  placeholder="Thamel, Kathmandu"
                  value={formData.address}
                  onChange={handleChange}
                  error={errors.address}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField
                    label="City *"
                    name="city"
                    placeholder="Kathmandu"
                    value={formData.city}
                    onChange={handleChange}
                    error={errors.city}
                  />
                  <InputField
                    label="Zip Code *"
                    name="zipCode"
                    placeholder="44600"
                    value={formData.zipCode}
                    onChange={handleChange}
                    error={errors.zipCode}
                  />
                </div>
              </div>
            </div>

            {/* ---- Payment Method Selection ---- */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-5 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <path d="M2 10h20" />
                </svg>
                Payment Method
              </h2>

              {errors.paymentMethod && (
                <p className="text-red-500 text-sm mb-3 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.paymentMethod}
                </p>
              )}

              {/* Payment method cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {PAYMENT_METHODS.map((method) => {
                  const isSelected = paymentMethod === method.id;
                  return (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => handlePaymentMethodSelect(method.id)}
                      className={`
                        relative flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200
                        ${
                          isSelected
                            ? `${method.color} border-current shadow-md scale-[1.02]`
                            : 'border-gray-200 hover:border-gray-300 hover:shadow-sm bg-white text-gray-600'
                        }
                      `}
                      aria-pressed={isSelected}
                      aria-label={`Select ${method.name} as payment method`}
                    >
                      {isSelected && (
                        <span className="absolute top-1.5 right-1.5">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                      )}
                      {method.icon}
                      {/* Only show text label for COD — other logos already contain the brand name */}
                      {method.id === 'cod' && (
                        <span className="text-sm font-medium text-center leading-tight">
                          {method.name}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Dynamic payment form — only one visible at a time */}
              {renderPaymentForm()}
            </div>

            {/* ---- Submit ---- */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white px-6 py-3.5 rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Processing...
                </span>
              ) : (
                `Place Order — ${formatPriceNPR(getCartTotal())}`
              )}
            </button>
          </form>
        </div>

        {/* ---- Right column: Order Summary ---- */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Order Summary
            </h2>

            <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between text-sm gap-2">
                  <span className="text-gray-600 truncate flex-1">
                    {item.name} <span className="text-gray-400">x{item.quantity}</span>
                  </span>
                  <span className="text-gray-800 font-medium whitespace-nowrap">
                    {formatPriceNPR(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t pt-3 space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span>{formatPriceNPR(getCartTotal())}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Shipping</span>
                <span className="text-emerald-600 font-medium">Free</span>
              </div>
              <div className="border-t pt-3 mt-2">
                <div className="flex justify-between text-xl font-bold text-gray-800">
                  <span>Total</span>
                  <span>{formatPriceNPR(getCartTotal())}</span>
                </div>
              </div>
            </div>

            {paymentMethod && (
              <div className="mt-4 pt-3 border-t">
                <p className="text-xs text-gray-500">Payment via</p>
                <p className="text-sm font-medium text-gray-800">
                  {PAYMENT_METHODS.find((m) => m.id === paymentMethod)?.name}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
