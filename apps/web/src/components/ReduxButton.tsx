import { Button } from '@baseui-portable-repro/ui/Button';
import { connect } from 'react-redux';

interface TrackingButtonProps extends Omit<Button.Props, 'onClick'> {
  product: string;
  onClick: (product: string) => void;
}
const TrackingButtonWithLabel = ({
  onClick,
  product,
  ...props
}: TrackingButtonProps) => {
  const handleOnClick = () => {
    onClick(product);
  };
  return (
    <Button onClick={handleOnClick} {...props}>
      {product}
    </Button>
  );
};

const mapDispatchToProps = {
  onClick: (product: string) => console.log(product),
};

export default connect(null, mapDispatchToProps)(TrackingButtonWithLabel);
