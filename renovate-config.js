module.exports = {
  $schema: "https://docs.renovatebot.com/renovate-schema.json",
  extends: ["github>taiga-family/renovate-config"],
  repositories: ["taiga-family/tui-editor"],
  skipInstalls: false,
  onboarding: false,
  allowCustomCrateRegistries: true,
  logFileLevel: "debug",
  logFile: "./renovate.log",
  trustLevel: "high",
  commitMessageSuffix: "[renovate self hosted]",
};
