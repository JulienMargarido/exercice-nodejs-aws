
import { Item } from '../models/Item';

const store: Record<string, Item> = {};

export class ItemRepository {
  async save(item: Item): Promise<void> {
    store[item.id] = item;
  }

  async findAll(): Promise<Item[]> {
    return Object.values(store);
  }
}
