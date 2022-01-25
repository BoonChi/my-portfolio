import CustomButton from 'components/common/CustomButton'
import Description from 'components/common/Description'
import Title from 'components/common/Title'

type Props = {
  handleShowProject: () => void
}

const LandingPage: React.FC<Props> = ({ handleShowProject }) => {
  return (
    <div>
      <Title title={'The Coder Boon Chi'} />
      <br />
      <Description description={'Hi people 👋'} />
      <Description description={'Welcome to my little space 🐛🎨🎉📝'} />
      <br />
      <CustomButton
        buttonVariant='success'
        buttonHandler={() => handleShowProject()}
        buttonName='Click here'
      />
    </div>
  )
}

export default LandingPage
