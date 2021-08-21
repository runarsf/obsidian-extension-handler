## Obsidian Extension as Markdown

An Obsidian plugin to allow editing (and creation) of custom extensions.


### Manual installation

- Copy `main.js`, `styles.css`, and `manifest.json` from this repo to your vault `<VaultRoot>/.obsidian/plugins/obsidian-ext-as-md/`.
- or just clone this repository into the vault plugins directory `git clone https://github.com/runarsf/obsidian-ext-as-md <VaultRoot>/.obsidian/plugins/obsidian-ext-as-md`


### Development

- Clone this repo ([Manual installation](https://github.com/runarsf/obsidian-publ-ish/#manual-installation)).
- `npm i` or `yarn` to install dependencies
- `npm run dev` to start TypeScript compilation in watch mode (don't modify `.js` files).
- Reload Obsidian to load the new version of your plugin.


#### API "Documentation"

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
