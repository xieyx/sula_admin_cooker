export type ResponseProps = {
  errorCode?: number;
  errorMessage?: string;
  data?: any;
};

export const getForm = async (id: string) => {
  return new Promise((resolve: (value: ResponseProps) => void) => {
    resolve({
      errorCode: 0,
      errorMessage: 'success',
      data: { fields: localStorage.getItem(`form_${id}`) },
    });
  });
};

export const saveForm = async ({ id, fields }: { id: string; fields: string }) => {
  return new Promise((resolve: (value: ResponseProps) => void) => {
    const list = JSON.parse(localStorage.getItem('form_list') || '[]');
    list.push(id);
    localStorage.setItem(`form_list`, JSON.stringify([...new Set([...list])]));
    localStorage.setItem(`form_${id}`, fields);
    resolve({ errorCode: 0, errorMessage: 'success', data: null });
  });
};

export const getAllForm = async () => {
  return new Promise((resolve: (value: ResponseProps) => void) => {
    const list = JSON.parse(localStorage.getItem('form_list') || '[]');
    setTimeout(() => {
      resolve({
        errorCode: 0,
        errorMessage: 'success',
        data: list.map((row: string) => ({
          id: row,
        })),
      });
    }, 100);
  });
};

export const removeForm = async (id: string) => {
  return new Promise((resolve: (value: ResponseProps) => void) => {
    const list = JSON.parse(localStorage.getItem('form_list') || '[]');
    localStorage.setItem(`form_list`, JSON.stringify(list.filter((row: string) => row !== id)));
    localStorage.removeItem(`form_${id}`);
    resolve({ errorCode: 0, errorMessage: 'success', data: null });
  });
};
