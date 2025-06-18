import { Input } from 'antd';

export default function CustomInput({ className, type,placeholder }) {
  return (
    <Input type={type} placeholder={placeholder} className={className}  />
  );
}
