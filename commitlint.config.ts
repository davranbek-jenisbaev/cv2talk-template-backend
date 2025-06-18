module.exports = {
  plugins: [
    {
      rules: {
        ticketPattern: ({ header }) => {
          const pattern =
            /^(feat|fix|docs|test|refactor|perf|ci|chore|revert|style|security):\s+.+\s+\((?:CV2-\d+|HOTFIX|DEPS)\)$/;
          const matches = pattern.test(header);
          return [
            matches,
            "Commit message must match format:\n" +
              "  - feat: message (CV2-123)\n" +
              "  - fix: message (CV2-123)\n" +
              "  - docs: message (HOTFIX)\n" +
              "  - chore: message (DEPS)\n" +
              "  Valid types: feat, fix, docs, test, refactor, perf, ci, chore, revert, style, security\n" +
              "  Valid tickets: CV2-123, HOTFIX, DEPS",
          ];
        },
      },
    },
  ],
  rules: {
    ticketPattern: [2, "always"],
  },
};
