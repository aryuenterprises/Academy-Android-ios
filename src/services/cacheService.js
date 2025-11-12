import { MMKV } from 'react-native-mmkv';

const cacheStorage = new MMKV({ id: 'api-cache' });

export const CacheService = {
  setApiCache: (key, data) => {
    cacheStorage.set(key, JSON.stringify({
      data,
      timestamp: Date.now()
    }));
  },

  getApiCache: (key) => {
    try {
      const cached = cacheStorage.getString(key);
      if (!cached) return null;
      
      const parsed = JSON.parse(cached);
      // Cache valid for 1 hour
      if (Date.now() - parsed.timestamp < 60 * 60 * 1000) {
        return parsed.data;
      }
      // Delete expired cache
      cacheStorage.delete(key);
      return null;
    } catch {
      return null;
    }
  }
};