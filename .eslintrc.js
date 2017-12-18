module.exports = {
    extends: ["standard", "prettier", "prettier/standard", "prettier/react"],
    plugins: ["prettier","standard","react"],
    parserOptions: {
        sourceType: "module"
    },
    env: {
        es6: true,
        node: true
    },
    rules: {
        "no-tabs": 0,
        semi: [2, "always"]
    }
};