module.exports = {
  extends: "airbnb",
  rules: {
    "strict": 0,
    "padded-blocks": [
      "error",
      "always"
    ],
    "no-trailing-spaces": [
      "error",
      {
        "skipBlankLines": true
      }
    ],
    "linebreak-style": "off",
    "curly": [
      "error",
      "multi",
      "consistent"
    ],
    "no-nested-ternary": "off",
    "max-len": "off",
    "import/no-extraneous-dependencies": "off",
    "react/jsx-one-expression-per-line": "off",
    "no-underscore-dangle": 0,
    "jsx-a11y/click-events-have-key-events": "off",
    "no-return-assign": "off",
    "curly": "off"
  }
};
