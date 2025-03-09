import { Image } from '../common/image';

export interface MenuRepository {
  groups: MenuGroup[];
  items: MenuItem[];
  addons: ContentAddon[];
}

export interface MenuGroup {
  id: string;
  name: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price?: string;
  image?: Image;
  groupId?: string; // Associates this item with a MenuGroup
}

export interface ContentAddon {
  id: string;
  name: string;
  description?: string;
} 