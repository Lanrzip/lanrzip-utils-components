import React from 'react';
import Generator from 'fr-generator';
import Form, { useForm } from 'form-render';
import { Input } from 'antd';

const defaultValue = {
    type: 'object',
    properties: {
      website: {
        title: '网站',
        type: 'website',
        'x-component': 'SiteInput',
        'x-component-props': {
          placeholder: '请输入网站地址',
        },
      },
    },
  };
  
const SiteInput = (props) => {
    return <Input addonBefore="https://" addonAfter=".com" {...props} />;
};


const widgets = {
    SiteInput,
};

const mapping = {
    website: 'SiteInput',
};

const LanrzipXRender = () => {
  return (
    <div style={{ height: '80vh' }}>
      <Generator
        defaultValue={defaultValue}
        widgets={widgets}
        mapping={mapping}
      />
    </div>
  );
};

export default LanrzipXRender;