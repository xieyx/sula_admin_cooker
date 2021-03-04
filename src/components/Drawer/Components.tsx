import React, { useState } from 'react';
import { Form } from 'sula';
import type { Sortable } from 'react-sortablejs';
import type { FormProps, CustomComponentProps } from './Form.d';
import { dragDefs, CustomComponentsDefault } from './Form.d';

const Components: React.FC<FormProps> = ({ sortableProps }) => {
  const [components, setComponents] = useState<CustomComponentProps[]>(CustomComponentsDefault);

  const setFilterTypes = (newState: CustomComponentProps[], sortable: Sortable | null = null) => {
    setComponents(
      sortable === null
        ? dragDefs(newState).map((field) => ({
            ...field,
            field: typeof field.field === 'string' ? { type: field.field, props: {} } : field.field,
            name: `${field.type}_${field.id}`,
            label: field.name,
          }))
        : newState.map((field) => ({
            ...field,
            name: `${field.type}_${field.id}`,
          })),
    );
  };

  return (
    <>
      <Form
        fields={components?.map(({ chosen, filtered, selected, ...field }) => field) || []}
        container={{
          type: 'ReactSortable',
          props: {
            list: components,
            setList: setFilterTypes,
            onChoose: () => document.body.classList.add('dragging'), // Dragging started
            onStart: () => document.body.classList.add('dragging'), // Dragging started
            onUnchoose: () => document.body.classList.remove('dragging'), // Dragging ended
            onEnd: () => document.body.classList.remove('dragging'), // Dragging ended
            forceFallback: true,
            // fallbackTolerance: 0,
            ...sortableProps,
          },
        }}
        layout="vertical"
        mode="view"
      />
    </>
  );
};

export default Components;
