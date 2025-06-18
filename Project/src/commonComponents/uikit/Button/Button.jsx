import { Button } from 'antd';

export default function CustomButton({ name, className }) {
  return (
    <Button className={className}>
      {name}
    </Button>
  );
}
