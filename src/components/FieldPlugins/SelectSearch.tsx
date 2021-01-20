import React, { useEffect } from 'react';
import { Select, Spin } from 'antd';
import { request } from 'umi';
import get from 'lodash/get';
import find from 'lodash/find';

const SelectSearch: React.FC<{
  [propName: string]: any;
}> = ({ onChange, remoteSource, value, ctx, source, ...props }) => {
  const handleSearch = (e: string) => {
    ctx?.form?.setFieldSource(props.id, { reload: false, options: undefined });
    const { url, paramName, convertParams, converter, ...otherSource } = remoteSource;
    const otherParams: any[] = [];
    Object.keys(convertParams).map((param: string) => {
      otherParams[param] = convertParams[param].replace(/#text#/, e);
      return param;
    });
    request(url, {
      ...otherSource,
      params: {
        ...otherSource?.params,
        ...otherParams,
      },
    }).then((res: any) => {
      const options = [];
      let i = 0;
      do {
        const v = get(res?.data, converter.value.replace(/#i#/, i));
        if (v === undefined) {
          break;
        }
        options.push({
          label: get(res?.data, converter.label.replace(/#i#/, i), v),
          value: v,
        });
        // eslint-disable-next-line no-plusplus
      } while (++i);
      ctx?.form?.setFieldSource(props.id, { reload: false, options });
    });
  };

  useEffect(() => {
    if (remoteSource === undefined || source?.reload === false) {
      return;
    }
    handleSearch('');
  }, [source]);

  const handleChange = (e: any) => {
    if (onChange) {
      onChange(props.labelInValue ? e.value : e);
    }
  };

  return (
    <Select
      value={
        props.labelInValue && typeof value === 'string'
          ? { value, ...find(source?.options, { value }) }
          : value
      }
      onSearch={handleSearch}
      onChange={handleChange}
      onDropdownVisibleChange={(open: boolean) =>
        open && ctx?.form?.setFieldSource(props.id, { reload: true })
      }
      options={source?.options}
      notFoundContent={source?.options === undefined ? <Spin size="small" /> : null}
      {...props}
    />
  );
};

export default SelectSearch;
