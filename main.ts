import {
  App,
  Modal,
  addIcon,
  Notice,
  Plugin,
  PluginSettingTab,
  Setting,
  ButtonComponent,
  FuzzySuggestModal,
  FileSystemAdapter,
} from "obsidian";

interface HandlerSettings {
  extension_pairs: Array<[string, string]>;
}

const DEFAULT_SETTINGS: HandlerSettings = {
  extension_pairs: [["txt", "markdown"], ["mdx", "markdown"], ["csv", "markdown"]],
}

export default class Handler extends Plugin {
  settings: HandlerSettings;

  async onload() {
    await this.loadSettings();
    this.addSettingTab(new HandlerSettingTab(this.app, this));

   // super.onload();
  
    // register the view and extensions
    // TODO Turn into custom function so can be done on setting update
    this.settings.extension_pairs.forEach((extension_pair) => {
      this.registerExtensions([extension_pair[0]], extension_pair[1]);
    });
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}

class HandlerSettingTab extends PluginSettingTab {
  plugin: Handler;

  constructor(app: App, plugin: Handler) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    let { containerEl } = this;
    let desc: DocumentFragment;
    containerEl.empty();

    this.plugin.settings.extension_pairs.forEach((extension_pair) => {
      const div = containerEl.createEl('div');

      // const title = containerEl.createEl('h4', {
      //   text: 'Extension pair',
      // });

      const setting = new Setting(containerEl)
        .addExtraButton(extra => {
          extra.setIcon("cross")
            .setTooltip("Delete")
            .onClick(() => {
              const index = this.plugin.settings.extension_pairs.indexOf(extension_pair);
              if (index > -1) {
                this.plugin.settings.extension_pairs.splice(index, 1);
                // Force refresh
                this.plugin.saveSettings();
                this.display();
              }
            })
        })
        .addText(text => {
          const txt = text.setPlaceholder('Extension')
          .setValue(extension_pair[0])
          .onChange((new_value) => {
            const index = this.plugin.settings.extension_pairs.indexOf(extension_pair);
            if (index > -1) {
              this.plugin.settings.extension_pairs[index][0] = new_value;
              this.plugin.saveSettings();
            }
          });
          return txt;
        })
        .addTextArea(text => {
          const txt = text.setPlaceholder('Filetype')
          .setValue(extension_pair[1])
          .onChange((new_filetype) => {
            const index = this.plugin.settings.extension_pairs.indexOf(extension_pair);
            if (index > -1) {
              this.plugin.settings.extension_pairs[index][1] = new_filetype;
              this.plugin.saveSettings();
            }
          });

          txt.inputEl.setAttr("rows", 1);

          return txt;
        });

        setting.infoEl.remove();

        // div.appendChild(title);
        div.appendChild(containerEl.lastChild);
    });

    const div = containerEl.createEl('div');

    const setting = new Setting(containerEl)
        .addButton(button => {
          const btn = button.setButtonText("Add Extension Pair").onClick(() => {
            this.plugin.settings.extension_pairs.push(["", ""]);
            // Force refresh
            this.display();
          });

          return btn;
        });

    div.appendChild(containerEl.lastChild);
  }
}

