import { Button, Container } from 'react-bootstrap'
type Props = {
  buttonName: string
  buttonHandler?: () => void
  buttonVariant?: string
}
const CustomButton: React.FC<Props> = ({
  buttonName,
  buttonHandler,
  buttonVariant,
}) => {
  return (
    <div>
      <Button
        variant={buttonVariant}
        onClick={buttonHandler}
        size='lg'
        style={{ margin: '10px' }}
      >
        {buttonName}
      </Button>
    </div>
  )
}

export default CustomButton
