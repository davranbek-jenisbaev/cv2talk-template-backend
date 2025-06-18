import { Inject, Injectable } from "@nestjs/common";
import { Cacheable } from "cacheable";

@Injectable()
export class CacheService {
  constructor(@Inject("CACHE_INSTANCE") private readonly cache: Cacheable) {}

  async get<T>(key: string): Promise<T | undefined> {
    return await this.cache.get<T>(key);
  }

  async set<T>(key: string, value: T, ttl: string | number): Promise<boolean> {
    return await this.cache.set<T>(key, value, ttl);
  }

  async setMany<T>(data: { key: string; value: T; ttl: string | number }[]): Promise<void> {
    await this.cache.setMany(data);
  }

  async delete(key: string): Promise<boolean> {
    return await this.cache.delete(key);
  }

  async deleteMany(keys: string[]): Promise<boolean> {
    return await this.cache.deleteMany(keys);
  }
}
