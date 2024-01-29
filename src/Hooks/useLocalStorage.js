export function useLocalStorage() {
  const methods = {
    load(key) {
      const stored = localStorage.getItem(key);
      return stored == null ? undefined : JSON.parse(stored);
    },
    store(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    },
    modify(key, fn) {
      this.store(key, fn(this.load(key)));
    },
    appendItemToArray: (item, storageID) => {
      this.modify(storageID, (storage = []) => [...storage, item]);
    },
    removeItemFromArray: (itemId, storageID) => {
      this.modify(storageID, (storage = []) =>
        storage.filter((s) => s.id !== itemId),
      );
    },
    saveItemToObject: (item, storageID) => {
      this.modify(storageID, (storage = {}) => ({ ...storage, item }));
    },
  };

  return [methods];
}
