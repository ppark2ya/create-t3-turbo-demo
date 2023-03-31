import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: [''],
  theme: {
    extend: {
      borderWidth: {
        1: '1px',
        6: '6px',
      },
      spacing: {
        0.5: '0.125rem', // 2px
        0.75: '0.1875rem', // 3px
        1.25: '0.3125rem', // 5px
        1.5: '0.375rem', //6px
        2.5: '0.625rem', // 10px
        3: '0.75rem', //12px
        3.5: '0.875rem', // 14px
        4.5: '1.125rem', // 18px
        5: '1.25rem', //20px
        5.5: '1.375rem', // 22px
        6: '1.5rem', // 24px
        6.25: '1.5625rem', // 25px
        6.5: '1.625rem', // 26px
        7: '1.75rem', //28px
        7.5: '1.875rem', // 30px
        8: '2rem', //32px
        8.5: '2.125rem', //34px,
        8.75: '2.1875rem', // 35px
        9.25: '2.3125rem', // 37px
        10: '2.5rem', //40px
        10.5: '2.625rem', // 42px
        11.5: '2.875rem', // 46px
        12.5: '3.125rem', // 50px
        13: '3.25rem', // 52px
        15: '3.75rem', // 60px
        15.5: '3.875rem', // 62px
        16.25: '4.0625rem', // 65px
        17.5: '4.375rem', // 70px
        18: '4.5rem', // 72px
        18.5: '4.625rem', // 74px
        21: '5.25rem', // 84px
        22: '5.5rem', // 88px
        22.5: '5.625rem', // 90px
        25: '6.25rem', // 100px
        35: '8.75rem', // 140px
        50: '12.5rem', // 200px
        50.5: '12.625rem', // 202px
        '2/5': '40%',
        '4/5': '80%',
        '9/10': '90%',
      },
      fontSize: {
        10: '0.625rem', // 10px
        11: '0.6875rem', // 11px
        xs: ['0.75rem', '1rem'], // 12px
        13: '0.8125rem', // 13px
        sm: ['0.875rem', '1.25rem'], // 14px
        15: '0.9375rem', // 15px
        base: ['1rem', '1.5rem'], // 16px
        17: '1.0625rem', // 17px
        lg: ['1.125rem', '1.75rem'], // 18px
        19: '1.1875rem', // 19px
        xl: ['1.25rem', '1.75rem'], // 20px
        21: '1.3125rem', // 21px
        22: '1.375rem', // 22px
        23: '1.4375rem', // 23px
        '2xl': ['1.5rem', '2rem'], // 24px
        25: '1.5625rem', // 25px
        26: '1.625rem', // 26px
        27: '1.6875rem', // 27px
        28: '1.75rem', // 28px
        29: '1.8125rem', // 29px
        '3xl': ['1.875rem', '2.25rem'], // 30px
        31: '1.9375rem', // 31px
        32: '2rem', // 32px
        33: '2.0625rem', // 33px
        34: '2.125rem', // 34px
        35: '2.1875rem', // 35px
        '4xl': ['2.25rem', '2.5rem'], // 36px
        37: '2.3125rem', // 37px
        38: '2.375rem', // 38px
        39: '2.4375rem', // 39px
        40: '2.5rem', // 40px
        41: '2.5625rem', // 41px
        42: '2.625rem', // 42px
      },
      lineHeight: {
        4.5: '1.125rem', // 18px
      },
      borderRadius: {
        '4xl': '1.875rem',
      },
    },
  },
  plugins: [forms, typography],
} satisfies Config;
