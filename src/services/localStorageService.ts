export const STORAGE_KEY = {
  ACCESS_TOKEN: 'accessToken',
} as const;

const localStorageAction = (action: 'get' | 'set' | 'remove', key: keyof typeof STORAGE_KEY, value?: string) => {
  switch (action) {
    case 'get':
      return localStorage.getItem(STORAGE_KEY[key]);
    case 'set':
      localStorage.setItem(STORAGE_KEY[key], value!);
      break;
    case 'remove':
      localStorage.removeItem(STORAGE_KEY[key]);
      break;
  }
};

const clearAll = () => localStorage.clear();

export { localStorageAction, clearAll };
