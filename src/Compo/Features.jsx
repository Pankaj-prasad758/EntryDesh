import React from "react";

function Features() {
  return (
    <>
<section className="py-12 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
    <p className="text-gray-600 mb-10">Here’s what makes our platform stand out.</p>

    <div className="grid gap-8 md:grid-cols-3">
      {/* <!-- Feature Card --> */}
      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all">
        <div className="mb-4 flex justify-center">
          <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2l2 5h5l-4 4 1 5-4-3-4 3 1-5-4-4h5l2-5z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
        <p className="text-gray-500">Experience lightning-fast load times and smooth interactions.</p>
      </div>

      {/* <!-- Feature Card --> */}
      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all">
        <div className="mb-4 flex justify-center">
          <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M11 1L3 9h5v6l8-8h-5l5-6h-5z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Instant Deployment</h3>
        <p className="text-gray-500">Deploy your app instantly with zero config and global CDN.</p>
      </div>

      {/* <!-- Feature Card --> */}
      <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all">
        <div className="mb-4 flex justify-center">
          <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a8 8 0 00-8 8c0 3.866 2.94 7.064 6.71 7.93L10 18l1.29-.07C15.06 17.064 18 13.866 18 10a8 8 0 00-8-8z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Secure by Default</h3>
        <p className="text-gray-500">Built-in security features to keep your app safe and sound.</p>
      </div>
    </div>
  </div>
</section>

    </>
  );
}

export default Features;
