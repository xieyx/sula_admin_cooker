import React, { useEffect, useState } from 'react';
import { Form } from 'sula';
import type { Sortable } from 'react-sortablejs';
import type { FormProps, CustomComponentProps } from './Form.d';
import { dragDefs, CustomComponentsDefault } from './Form.d';

const Components: React.FC<FormProps> = ({ sortableProps }) => {
  const [conponents, setComponents] = useState<CustomComponentProps[]>([]);

  const setFilterTypes = (newState: CustomComponentProps[], sortable: Sortable | null = null) => {
    setComponents(sortable === null ? dragDefs(newState) : newState);
  };

  useEffect(() => {
    setFilterTypes(CustomComponentsDefault);
  }, []);

  return (
    <>
      <Form
        fields={conponents.map((field) => ({
          field: field.field,
          name: `${field.type}_${field.id}`,
          label: field.name,
          valuePropName: field.valuePropName,
          initialSource: field.initialSource,
        }))}
        container={{
          type: 'ReactSortable',
          props: {
            list: conponents,
            setList: setFilterTypes,
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
