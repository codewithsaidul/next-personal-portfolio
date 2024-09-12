"use client";

const BookCall = () => {
  const handleBookCall = () => {
    window.open("https://calendly.com/codewithsaidul-bhui", '_blank', 'noopener,noreferrer')
  };

  return (
    <div>
      <button
        onClick={handleBookCall}
        className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-primary px-4 py-4 font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          className="h-6 w-6"
        >
          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Zm10 3a2 2 0 0 1 2 2m-2-6a6 6 0 0 1 6 6" />
        </svg>
        <span>Book A Call</span>
      </button>
    </div>
  );
};

export default BookCall;
