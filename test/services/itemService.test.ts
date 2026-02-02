
import { ItemService } from '../../src/services/itemService';

describe('ItemService', () => {
  it('creates an item', async () => {
    const service = new ItemService();
    const item = await service.create('test');

    expect(item.id).toBeDefined();
    expect(item.name).toBe('test');
  });

  it('should probably reject empty names (but does not)', async () => {
    const service = new ItemService();
    const item = await service.create('');

    expect(item.name).not.toBe('');
  });
});
