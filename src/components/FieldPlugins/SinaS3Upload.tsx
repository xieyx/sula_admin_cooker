import React, { useState, useEffect } from 'react';
import isArray from 'lodash/isArray';
import { Button, Upload } from 'antd';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';

const normalizedFileList = (fileList: any, slice?: number) => {
  if (!fileList) {
    return undefined;
  }

  if (isArray(fileList)) {
    return fileList;
  }

  if (typeof fileList === 'string') {
    return [
      {
        uid: '-2',
        // status: 'done',
        name: 'image',
        url: fileList,
      },
    ];
  }

  return isArray(fileList.fileList)
    ? fileList.fileList.slice(slice).map((row: any) => {
        if (row?.status === 'done') {
          if (row?.response?.errorCode === 0) {
            return {
              ...row,
              url: row?.response?.data?.url,
            };
          }

          return {
            ...row,
            status: 'error',
            thumbUrl: null,
            response: row?.response?.msg ? row.response.msg : '上传错误',
          };
        }

        return row;
      })
    : undefined;
};

const SinaS3Upload: React.FC<Record<string, any>> = ({
  onChange,
  listType,
  fileList,
  slice,
  ...props
}) => {
  const [list, setList] = useState<any[]>();

  useEffect(() => {
    if (list === undefined && fileList) {
      setList(fileList);
    }
  }, [list, fileList]);

  // const transformFile = (file: any) => {
  //   const suffix = file.name.slice(file.name.lastIndexOf('.'));
  //   const filename = Date.now() + suffix;
  //   // eslint-disable-next-line no-param-reassign
  //   file.url = filename;
  //   return file;
  // };

  const handleChange = (info: any) => {
    if (onChange) {
      const normalized = normalizedFileList(info, slice);
      if (isArray(normalized) && normalized.length) {
        const urlArr = normalized.map((row: any) => {
          return row.url || undefined;
        });

        onChange(urlArr.filter((r: any) => r !== undefined).join(','));
      } else {
        onChange(undefined);
      }
      setList(normalized);
    }
  };

  return (
    <Upload
      // transformFile={transformFile}
      onChange={handleChange}
      fileList={normalizedFileList(list, slice)}
      listType={listType}
      {...props}
    >
      {listType === 'picture-card' ? (
        <div>
          <PlusOutlined />
          <div style={{ marginTop: 8 }}>Upload</div>
        </div>
      ) : (
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      )}
    </Upload>
  );
};

export default SinaS3Upload;
