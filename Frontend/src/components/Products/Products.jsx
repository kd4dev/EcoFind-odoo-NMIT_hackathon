import React from "react";

export default function Products() {
  const products = [
    { id: 1, name: "Mobile Phone", price: "15000", img: "https://via.placeholder.com/150" },
    { id: 2, name: "Tablet", price: "25000", img: "https://via.placeholder.com/150" },
    { id: 3, name: "Tv", price: "55000", img: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-4">
      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Search ...."
          className="flex-1 p-2 rounded border border-gray-300 focus:outline-none focus:border-red-500"
        />
        <div className="flex gap-2 mt-2 md:mt-0">
          <button className="px-3 py-2 bg-white border border-gray-300 rounded hover:bg-red-50 transition text-red-600 font-semibold">
            Sort
          </button>
          <button className="px-3 py-2 bg-white border border-gray-300 rounded hover:bg-red-50 transition text-red-600 font-semibold">
            Filter
          </button>
          <button className="px-3 py-2 bg-white border border-gray-300 rounded hover:bg-red-50 transition text-red-600 font-semibold">
            Groupby
          </button>
        </div>
      </div>

      {/* Banner Image */}
      <div className="w-full h-64 bg-red-100 rounded-lg flex items-center justify-center mb-4">
        <span className="text-red-500 text-xl font-semibold">Banner Image</span>
      </div>

      {/* Categories */}
      <div className="w-full mb-4">
        <input
          type="text"
          placeholder="All Categories"
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-red-500"
        />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg hover:scale-105 transform transition duration-200"
          >
            <img src={product.img} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-3">
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="text-red-600 font-semibold">{product.price}</p>
              <button className="mt-2 w-full py-2 bg-red-600 text-white rounded hover:bg-red-500 transition font-semibold">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
