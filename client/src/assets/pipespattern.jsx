const PipesPattern = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-0 w-full h-full object-cover z-[-1] mix-blend-screen opacity-50"
      style={{
        maskImage:
          "linear-gradient(to top, transparent 0%, black 10%, transparent 100%)",
      }}
    >
      <defs>
        <pattern id="a" width="25" height="25" patternUnits="userSpaceOnUse">
          <rect width="100%" height="100%" fill="#2b2b31" />
          <path
            fill="none"
            stroke="#ecc94b"
            stroke-linecap="square"
            d="M9.19 0v3.93a9.2 9.2 0 0 0-5.26 5.26H0m0 6.618h3.93a9.2 9.2 0 0 0 5.26 5.26V25m6.619 0v-3.93a9.2 9.2 0 0 0 5.261-5.261H25m0-6.618h-3.93a9.2 9.2 0 0 0-5.26-5.261V0"
          />
        </pattern>
      </defs>
      <rect width="800%" height="800%" fill="url(#a)" />
    </svg>
  );
};

export default PipesPattern;
