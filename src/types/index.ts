import { App } from 'vue'

export type Menu = {
  items: MenuItem[];
};

export declare interface HelloPlugin {
  sayHello(text: string): string;
  install(app: App): void;
}

export type MenuItem = {
  /**
   * display name of the Menu item
   *
   * @type {string}
   */
  name?: string;
  /**
   * data for the sub menu
   *
   * @type {Menu}
   */
  subMenu?: Menu;
  /**
   * unique id (this is auto generated)
   *
   * @type {string}
   */
  id?: string;
  /**
   * flag to show the sub menu
   *
   * @type {boolean}
   */
  showSubMenu?: boolean;
  /**
   * used to highlight the selection. used for styling purpose.
   *
   * @type {boolean}
   */
  selected?: boolean;
  /**
   * disables the menu item. all interactions are disabled
   *
   * @type {boolean}
   */
  disabled?: boolean;

  divider?: boolean;

  iconSlot?: string;
};

