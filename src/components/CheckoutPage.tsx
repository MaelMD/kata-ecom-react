const CheckoutPage: React.FC = () => {

  return (
    
  <section className="py-7 relative">
  <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto flex items-center justify-center">

    <div className="bg-gray-50 rounded-xl p-6 w-1/2 mb-8 max-lg:max-w-xl max-lg:mx-auto">
      <form>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Full Name:</label>
          <input type="text" id="fullName" className="form-input rounded-lg w-full bg-gray-200 text-gray-700 p-3" placeholder="John Doe" required />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Credit Card Number:</label>
          <input type="text" id="creditCardNumber" className="form-input rounded-lg w-full bg-gray-200 text-gray-700 p-3" placeholder="1234 5678 9012 3456" required />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Address:</label>
          <input type="text" id="address" className="form-input rounded-lg w-full bg-gray-200 text-gray-700 p-3" placeholder="1234 Main St" required />
        </div>
          <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">City:</label>
          <input type="text" id="city" className="form-input rounded-lg w-full bg-gray-200 text-gray-700 p-3" placeholder="Anytown" required />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">ZIP/Postal Code:</label>
          <input type="text" id="zip" className="form-input rounded-lg w-full bg-gray-200 text-gray-700 p-3" placeholder="12345" required />
        </div>

        <button type="submit" className="rounded-full w-full py-4 text-center bg-indigo-600 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700">
          Complete Purchase
        </button>
      </form>
    </div>
  </div>
</section>

  );
};

export default CheckoutPage;
