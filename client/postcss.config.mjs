const config = {
  plugins: ["@tailwindcss/postcss"],
  theme: {
    extend: {
      screens: {    
        sm: "640px", 
        md: "768px",  
        lg: "1024px",     
        xl: "1280px",    
        "2xl": "1536px",  
        "max-sm": { max: "600px" },
        "max-md": { max: "767px" },
        "max-lg": { max: "1023px" },
        "max-xl": { max: "1279px" },
      },
    }
  }
};

export default config;
