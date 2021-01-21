import type { ItemInterface } from 'react-sortablejs';

export type SortableItem = {
  id: number;
  name: string;
  props?: FieldProps;
} & ItemInterface;

export type FieldProps = Record<string, any>;
