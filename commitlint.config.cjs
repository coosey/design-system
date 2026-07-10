module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // New feature
        "fix", // Bug fix
        "docs", // Documentation
        "style", // Formatting, styling
        "refactor", // Code restructuring
        "test", // Testing
        "chore", // Maintenance
        "perf", // Performance
        "ci", // CI/CD
        "build", // Build system
        "revert", // Revert changes
      ],
    ],
    "subject-case": [2, "always", "lower-case"],
    "subject-min-length": [2, "always", 10],
    "subject-max-length": [2, "always", 72],
  },
};
