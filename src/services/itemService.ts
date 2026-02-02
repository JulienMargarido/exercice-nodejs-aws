
import { v4 as uuid } from 'uuid';
import { ItemRepository } from '../repositories/itemRepository';
import { Item } from '../models/Item';

export class ItemService {
  constructor(private readonly repo = new ItemRepository()) {}

  async create(name: string): Promise<Item> {
    const item: Item = {
      id: uuid(),
      name,
      createdAt: new Date().toISOString()
    };

    await this.repo.save(item);
    return item;
  }
}
