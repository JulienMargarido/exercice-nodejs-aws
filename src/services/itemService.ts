
import { randomUUID } from 'node:crypto';
import { ItemRepository } from '../repositories/itemRepository';
import { Item } from '../models/Item';

export class ItemService {
  constructor(private readonly repo = new ItemRepository()) {}

  async create(name: string): Promise<Item> {
    const item: Item = {
      id: randomUUID(),
      name,
      createdAt: new Date()
    };

    await this.repo.save(item);
    return item;
  }
}
