import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts"],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "quotes": ["error", "double"],
      "semi": ["error", "always"],
      "@typescript-eslint/no-explicit-any": ["error", { "fixToUnknown": true }],
      "curly": "error",
      "no-empty": "error",
      "no-alert": "error",
      "@typescript-eslint/no-non-null-assertion": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          "varsIgnorePattern": "^_",
          "argsIgnorePattern": "^_"
        }
      ],
      "no-fallthrough": "off",
      "arrow-parens": ["error", "as-needed"]
    }
  },
  {
    ignores: [
      "node_modules/",
      "build/",
      "coverage/",
      "scripts/",
      "jest.config.ts",
      "jest.setup.js",
      "**/generated/"
    ]
  }
);

// Made with Bob
