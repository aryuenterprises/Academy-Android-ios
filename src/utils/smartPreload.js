import { AppRegistry } from "react-native";

let preloadedScreens = new Set();

export const smartPreload = (screenName) => {
  if (preloadedScreens.has(screenName)) return; // Avoid duplicate preloads
  
  preloadedScreens.add(screenName);
  const screen = AppRegistry.getRunnable(screenName)?.component;
  screen?.preload?.();
};