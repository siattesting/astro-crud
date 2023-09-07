import { POCKET } from '../../lib/databases/PocketBase';

export interface Shop {
  active: boolean;
  address_line1: string;
  address_line2: string;
  city: string;
  content: string;
  coordinates: string;
  id: string;
  latitude: number;
  longitude: number;
  title: string;
  username: string;
  what3words: string;
}
export async function getShops() {
  const result = await POCKET.collection('shops').getFullList({
    sort: 'title',
  });
  const shops = result.map((record) => structuredClone(record));
  return shops;
}
