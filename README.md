## Obsidian Extension Handler

An Obsidian plugin to allow editing (and creation) of files with custom extensions.

> :warning: **Adding ext/ft pairs**: For setting-changes to take effect you have to restart Obsidian, this will be changed in the future.

### Manual installation

> :information_source: **Note**: Plugin has not yet been added to the Obsidian community plugin list, and will have to be installed manually.

- Copy `main.js` and `manifest.json` from this repo to your vault `<VaultRoot>/.obsidian/plugins/obsidian-extension-handler/`.
- ***or*** clone this repository into the vault *plugins* directory `git clone https://github.com/runarsf/obsidian-extension-handler <VaultRoot>/.obsidian/plugins/obsidian-extension-handler`


### Development

- Clone this repo `git clone git@github.com/runarsf/obsidian-extension-handler <VaultRoot>/.obsidian/plugins/obsidian-extension-handler`.
- `npm i` or `yarn` to install dependencies
- `npm run dev` to start TypeScript compilation in watch mode (don't modify `.js` files).
- Reload Obsidian to load the new version of your plugin.


#### API Documentation

See https://github.com/obsidianmd/obsidian-api


#### Releasing new releases

- Update your `manifest.json` with your new version number, such as `1.0.1`, and the minimum Obsidian version required for your latest release.
- Update your `versions.json` file with `"new-plugin-version": "minimum-obsidian-version"` so older versions of Obsidian can download an older version of your plugin that's compatible.
- Create new GitHub release using your new version number as the "Tag version". Use the exact version number, don't include a prefix `v`. See here for an example: https://github.com/obsidianmd/obsidian-sample-plugin/releases
- Upload the files `manifest.json`, `main.js`, `styles.css` as binary attachments.
- Publish the release.


#### Adding your plugin to the community plugin list

- Publish an initial version.
- Make sure you have a `README.md` file in the root of your repo.
- Make a pull request at https://github.com/obsidianmd/obsidian-releases to add your plugin.
