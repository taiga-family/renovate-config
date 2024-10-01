# Renovate config

```json5
{
  $schema: 'https://docs.renovatebot.com/renovate-schema.json',
  extends: ['github>taiga-family/renovate-config'],
  autodiscoverFilter: ['your-github-organization/*'],
  allowedPostUpgradeCommands: ['.*'],
  autodiscover: true,
}
```

### Local debug your repository

```bash
export LOG_LEVEL=debug
export RENOVATE_CONFIG_FILE=default.json
export RENOVATE_TOKEN=ghp_FIVUf.....

npx renovate --autodiscover=true \
             --autodiscover-filter='taiga-family/YOUR_REPOSITORY_NAME'  \
             --allowed-post-upgrade-commands='.*' \
             --repository-cache=reset
```
