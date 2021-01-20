import { ItemInterface } from 'react-sortablejs';

export interface SortableItem extends ItemInterface {
  id: number;
  name: string;
  props?: FieldProps;
}

export interface FieldProps {
  [propName: string]: any;
}
