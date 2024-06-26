/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        xs: { min: "360px", max: "640px" },
        xsmm: { min: "0px", max: "350px" },
        mobile: { min: "0px", max: "700px" },
        desktop: "701px",
        xsm: "350px",
        xmd: "430px",
        xxl: "2146px",
        xxxl: "2560px",
      },
    },
    extend: {
      fontSize: {
        "fs-11": "11px",
        "fs-13": "13px",
        "fs-15": "15px",
        "fs-22": "22px",
        "fs-24": "24px",
        "fs-28": "28px",
        "fs-30": "30px",
        "fs-36": "36px",
        "fs-40": "40px",
        "fs-48": "48px",
        "fs-60": "60px",
        "fs-72": "72px",
        "fs-28": "28px",
      },
      fontFamily:{
        Montserrat:['Montserrat','sans-serif'],
        Inter : ['Inter', 'sans-serif'],
        Montaga : ['Montaga', 'serif']
      },
      borderWidth: {
        0.5: "0.5px",
        1: "1px",
        1.5: "1.5px",
        3: "3px",
        5: "5px",
        6:"6px",
        8: "8px",
        15: "14.721px",
      },
      borderRadius: {
        sm: "2px",
        DEFAULT: "4px",
        md: "6px",
        lg: "8px",
        "2xl": "16px",
        iphone: "46.9233px",
        0.75: "3px",
        2.5: "10px",
        2.75: "11px",
        3: "12px",
        3.25: "13px",
      },padding: {
        0.5: "2px",
        0.75: "3px",
        1: "4px",
        1.5: "6px",
        1.75: "7px",
        2: "8px",
        2.125: "9px",
        2.25: "11px",
        2.5: "10px",
        3: "12px",
        3.5: "14px",
        3.625: "14.5px",
        3.75: "15px",
        4: "16px",
        4.25: "17px",
        4.5: "18px",
        4.75: "19px",
        5: "20px",
        5.5: "22px",
        6: "24px",
        6.5: "26px",
        7: "28px",
        7.25: "29px",
        7.5: "30px",
        8: "32px",
        8.23: "35.23px",
        9: "36px",
        10: "40px",
        10.5: "42px",
        11: "44px",
        11.5: "46px",
        12: "48px",
        12.5: "50px",
        14: "56px",
        15: "60px",
        15.5: "62px",
        18.5: "74px",
        16: "64px",
        16.5: "66px",
        17: "68px",
        17.5: "70px",
        20: "80px",
        21: "84px",
        22.5: "90px",
        24: "96px",
        25: "100px",
        26: "104px",
        28: "114px",
        29.5: "118px",
        30: "120px",
        33.5: "134px",
        35: "140px",
        40: "160px",
        45: "180px",
        50: "200px",
        60: "240px",
      },
      margin: {
        0.25: "1px",
        0.5: "2px",
        0.75: "3px",
        0.79: "5px",
        1.125: "4.5px",
        1.5: "6px",
        2.25: "9px",
        2.3: "10px",
        3: "12px",
        3.5: "15px",
        1.7: "7px",
        3: "12px",
        3.5: "15px",
        4: "16px",
        4.5: "18px",
        5: "20px",
        5.5: "22px",
        6: "24px",
        6.5: "25px",
        6.7: "26px",
        7: "28px",
        7.5: "30px",
        7.75: "31px",
        8: "32px",
        8.5: "34px",
        10: "40px",
        11: "44px",
        12: "48px",
        12.5: "50px",
        13: "52px",
        14: "55px",
        15: "60px",
        16: "64px",
        17: "68px",
        19: "76px",
        22: "88px",
        23: "92px",
        24: "96px",
        25: "100px",
        58: "232px",
        79.5: "318px",
        "10vh": "10vh",
        "20vh": "20vh",
      },
      borderRadius: {
        sm: "2px",
        DEFAULT: "4px",
        md: "6px",
        lg: "8px",
        "2xl": "16px",
        iphone: "46.9233px",
        0.75: "3px",
        2.5: "10px",
        2.75: "11px",
        3: "12px",
        3.25: "13px",
      },
      spacing: {
        0.5: "3px",
        1: "4px",
        1.5: "6px",
        2: "8px",
        2.25: "9px",
        3: "12px",
        3.75: "15px",
        4: "16px",
        4.5: "18px",
        5: "20px",
        6: "24px",
        6.5: "26px",
        8: "32px",
        13.5: "53px",
        20.5: "82px",
      },
      gap: {
        1.5: "6px",
        6: "24px",
        6.5: "26px",
        7: "28px",
        7.5: "30px",
        8: "32px",
        18: "76px",
      },
      inset: {
        0.25: "1px",
        0.75: "3px",
        2.5: "10px",
        16: "64px",
        3.5: "14px",
      },
      colors: {
        Black:{
          primaryBlack : "#353535",
          hoverBlack : "#2b2b2b",
          borderBlack : "#4f4f4f",
          black1 : "#434343",
        },
        Gray:{
          darkGray : "#999999",
          "dark-gray": "#1a1a1a",
          "light-gray": "#eee",
          gray: "#aaa",
          gray1 : "#F5F5F5",
          gray2 : "#CCCCCC",
          bgLight : "#E6E6E6",
        },
        White:{

        },
        Red:{

        },
        Green:{

        },
        Yellow:{

        },
        Blue:{
          primaryBlue : "#356AC3",
          hoverPrimaryBlue:"#203F72"
        }
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        "dark-inset":
          "inset 4px 4px 10px 0 rgba(0, 0, 0, 0.7), inset -4px -4px 10px 0 rgba(58, 58, 58, 0.5)",
        "light-inset":
          "inset 7px 7px 10px 0 rgba(0, 0, 0, 0.15), -7px -7px 10px 0 rgba(255, 255, 255, 0.8)",
        "dark-input":
          "4px 4px 10px 0 rgb(0 0 0 / 70%), -4px -4px 10px 0 rgb(58 58 58 / 30%)",
        "light-input":
          "7px 7px 10px 0 rgba(0, 0, 0, 0.15), -7px -7px 10px 0 rgba(255, 255, 255, 0.8)",
        button: "4px 4px 10px 0 rgba(0, 0, 0, 0.7), -4px -4px 10px 0 rgba(58, 58, 58, 0.5), -1px -1px 0 0 rgba(255, 255, 255, 0.05)",
        "dark-box": "0px 0px 10px 0 #000",
        "box": "0px 0px 10px -3px gray",
        "gray-box": "0px 0px 10px 0px gray",
        "light-right-inset":
          "inset -7px 0 9px -7px rgba(255,255,255,0.2)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".head-1": {
          fontFamily: "Inter",
          fontWeight: "400",
          fontSize: "94px",
          letterSpacing: "-1.5px",
          lineHeight: "normal",
          marginBottom: "0",
        },
        ".head-2": {
          fontFamily: "Inter",
          fontWeight: "400",
          fontSize: "59px",
          letterSpacing: "0.5px",
          lineHeight: "normal",
          marginBottom: "0",
        },
        ".head-3": {
          fontFamily: "Inter",
          fontWeight: "normal",
          fontSize: "49px",
          letterSpacing: "0",
          lineHeight: "normal",
          marginBottom: "0",
        },
        ".head-4-bold": {
          fontFamily: "Inter",
          fontWeight: "bold",
          fontSize: "33px",
          letterSpacing: "0.25px",
          lineHeight: "normal",
          marginBottom: "0",
        },
        ".head-4-medium": {
          fontFamily: "Inter",
          fontWeight: "400",
          fontSize: "33px",
          letterSpacing: "0.25px",
          lineHeight: "normal",
          marginBottom: "0",
        },
        ".head-5-bold": {
          fontFamily: "Inter",
          fontWeight: "bold",
          fontSize: "24px",
          letterSpacing: "0.25px",
          lineHeight: "normal",
          marginBottom: "0",
        },
        ".head-5-medium": {
          fontFamily: "Inter",
          fontWeight: "500",
          fontSize: "24px",
          letterSpacing: "0",
          lineHeight: "normal",
          marginBottom: "0",
        },
        ".head-6-semibold": {
          fontFamily: "Inter",
          fontWeight: "600",
          fontSize: "20px",
          letterSpacing: "0.15%",
          lineHeight: "normal",
          marginBottom: "0",
        },
        ".head-6-medium": {
          ffontFamily: "Inter",
          fontWeight: "500",
          fontSize: "20px",
          letterSpacing: "0.15%",
          lineHeight: "normal",
          marginBottom: "0",
        },
        ".subtitle-1": {
          fontFamily: "Inter",
          fontWeight: "500",
          fontSize: "15px",
          letterSpacing: "0.15px",
          lineHeight: "normal",
          marginBottom: "0",
        },
        ".subtitle-2": {
          fontFamily: "Inter",
          fontWeight: "500",
          fontSize: "14px",
          letterSpacing: "0.1px",
          lineHeight: "normal",
          marginBottom: "0",
        },
        ".body-1": {
          fontFamily: "Inter",
          fontWeight: "500",
          fontSize: "16px",
          letterSpacing: "0.5px",
          lineHeight: "normal",
          marginBottom: "0",
        },
        ".body-1-bold": {
          fontFamily: "Inter",
          fontWeight: "700",
          fontSize: "16px",
          letterSpacing: "0.5px",
          lineHeight: "normal",
          marginBottom: "0",
        },
        ".body-2-semibold": {
          fontFamily: "Inter",
          fontWeight: "600",
          fontSize: "14px",
          letterSpacing: "0.25px",
          lineHeight: "140%",
          marginBottom: "0",
        },
        ".body-2-medium": {
          fontFamily: "Inter",
          fontWeight: "500",
          fontSize: "14px",
          letterSpacing: "0.25px",
          lineHeight: "140%",
          marginBottom: "0",
        },
        ".text-fs-10": {
          fontSize: "10px",
          lineHeight: "15px",
        },
        ".text-fs-10-lh-18": {
          fontSize: "10px",
          lineHeight: "18px",
        },
        ".text-fs-12": {
          fontSize: "12px",
          lineHeight: "18px",
        },
        ".text-fs-12-lh-20": {
          fontSize: "12px",
          lineHeight: "20px",
        },
        ".text-fs-14": {
          fontSize: "14px",
          lineHeight: "20px",
        },
        ".text-fs-code-14": {
          fontSize: "14px",
          lineHeight: "24px",
        },
        ".text-fs-16": {
          fontSize: "16px",
          lineHeight: "20px",
        },
        ".text-heading-16": {
          fontSize: "16px",
          lineHeight: "24px",
        },
        ".text-fs-16-lh-28": {
          fontSize: "16px",
          lineHeight: "28px",
        },
        ".text-fs-18": {
          fontSize: "18px",
          lineHeight: "28px",
        },
        ".text-fs-20": {
          fontSize: "20px",
          lineHeight: "30px",
        },
        ".text-fs-20-lh-27": {
          fontSize: "20px",
          lineHeight: "27px",
          letterSpacing: "-0.5px",
        },
        ".text-fs-21": {
          fontSize: "21px",
          lineHeight: "30px",
        },
        ".text-fs-24": {
          fontSize: "24px",
          lineHeight: "32px",
        },
        ".text-otp": {
          fontSize: "28px",
          lineHeight: "24px",
        },
        ".text-fs-30": {
          fontSize: "30px",
          lineHeight: "38px",
        },
        ".text-fs-36": {
          fontSize: "36px",
          lineHeight: "44px",
          letterSpacing: "-2%",
        },
        ".text-fs-40": {
          fontSize: "40px",
          lineHeight: "58.5px",
          letterSpacing: "-2px",
        },
        ".text-fs-48": {
          fontSize: "48px",
          lineHeight: "60px",
          letterSpacing: "-2%",
        },
        ".text-fs-60": {
          fontSize: "60px",
          lineHeight: "72px",
          letterSpacing: "-2%",
        },
        ".text-fs-72": {
          fontSize: "72px",
          lineHeight: "90px",
          letterSpacing: "-2%",
        },
        ".primary-gradient": {
          background:
            "var(--primaryGradient, linear-gradient(177deg, #050D12 0%, #0E3666 107.89%))",
        }
      };
      addUtilities(newUtilities);
    }),
  ],
}