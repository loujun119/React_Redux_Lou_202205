import { values } from "lodash";
import React from "react";

interface CustomValidators {
  [key: string]: any;
}

export const useCustomValidators = (): CustomValidators => {
  const isMaxLength = React.useCallback((value: any, maxLength: number) => {
    return value !== undefined &&
      value !== null &&
      value.toString().length > maxLength
      ? `${maxLength}文字以内で入力してください。`
      : undefined;
  }, []);

  const trimLeadingZeros = React.useCallback((num: any): string => {
    return num.replace(/^0+/, "");
  }, []);

  const trimTailingZeros = React.useCallback((num: any): string => {
    return num.replace(/(\.[0-9]*[1-9])0+$|\.0*$/, "$1");
  }, []);

  /**
   * ----------------------------------------------------------------------------------------
   */

  const validators = React.useMemo(
    () => ({
      /**
       * 必須項目チェック
       */
      isRequired: (value: any | undefined) => {
        return !value ? "＊必須項目です。" : undefined;
      },

      /**
       * 文字列長チェック
       */
      isMaxLength5: (value?: string) => isMaxLength(value, 5),
      isMaxLength6: (value?: string) => isMaxLength(value, 6),
      isMaxLength8: (value?: string) => isMaxLength(value, 8),
      isMaxLength64: (value?: string) => isMaxLength(value, 64),
      isMaxLength128: (value?: string) => isMaxLength(value, 128),
      isMaxLength1024: (value?: string) => isMaxLength(value, 1024),

      /**
       * 半角整数チェック
       */
      isInteger: (value: any) => {
        if (value === undefined) {
          return undefined;
        }
        const valueStr = trimLeadingZeros(trimTailingZeros(value.toString()));
        const regex = RegExp(`^[0]*[0-9]{0,5}([.][0-9]{1-8}[0]*)?$`, "gm");

        if (!regex.test(valueStr)) {
          return "半角の正数(整数部は最大5桁、小数部は最大8桁)で入力してください。";
        }
        return undefined;
      },

      /**
       * 半角英数チェック
       */
      isAlphanumeric: (value: any) => {
        const regex = RegExp(`^[0-9a-zA-Z]*$`, "gm");
        if (value !== undefined && !regex.test(value.toString())) {
          return "半角英数字で入力してください。";
        }
        return undefined;
      },

      /**
       * 全角、半角英数
       */
      isAlphaNumber: (value: any) => {
        const regex = RegExp(`^[0-9０-９a-zａ-ｚA-ZＡ-Ｚ], 'gm`);
        if (value !== undefined && !regex.test(value.toString(value))) {
          return "全角・半角英数字で入力してください。";
        }
        return undefined;
      },
    }),
    [isMaxLength, trimLeadingZeros, trimTailingZeros]
  );
  return { validators };
};
