import 'src/style/light';
import 'src/style/dark';

const lastSheetId = document.styleSheets.length - 1;
const lightSheet = document.styleSheets[lastSheetId - 1];
const darkSheet = document.styleSheets[lastSheetId];

export const THEMES = {
  light: 'light',
  dark: 'dark',
};

export const styleManager = {
  defaultSheet: THEMES.dark,
  sheets: {
    light: lightSheet,
    dark: darkSheet,
  },
  init () {
    styleManager.switch(styleManager.defaultSheet);
  },
  switch (name) {
    const sheets = styleManager.sheets;
    const sheetsKeys = Object.keys(sheets);
    if (sheetsKeys.includes(name)) {
      sheetsKeys.forEach(sheetName => {
        sheets[sheetName].disabled = name !== sheetName;
      });
    } else {
      throw new Error('This styleSheet does not exist');
    }
  },
  switchTo: {
    dark () {
      styleManager.switch(THEMES.dark);
    },
    light () {
      styleManager.switch(THEMES.light);
    },
  },
};
