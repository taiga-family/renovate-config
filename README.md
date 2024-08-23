# Renovate config

```json5
{
  $schema: "https://docs.renovatebot.com/renovate-schema.json",
  extends: ["github>taiga-family/renovate-config"],
  autodiscoverFilter: ["your-github-organization/*"],
  allowedPostUpgradeCommands: [".*"],
  autodiscover: true,
}
```
