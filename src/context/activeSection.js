import { useSyncExternalStore } from "react";

let activeSection = "home";
const listeners = new Set();

export const setActiveSection = (section) => {
  if (activeSection === section) return;

  activeSection = section;
  listeners.forEach((listener) => listener());
};

const subscribe = (listener) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

const getSnapshot = () => activeSection;

export const useActiveSection = () => {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
};
