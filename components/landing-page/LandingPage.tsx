import CustomButton from 'components/common/CustomButton'
import Description from 'components/common/Description'
import Title from 'components/common/Title'
import LandingPageStyle from '@styles/LandingPage.module.scss'

type Props = {
  handleShowProject: () => void
}

const LandingPage: React.FC<Props> = ({ handleShowProject }) => {
  return (
    <div>
      <div className={LandingPageStyle['text-hidden-1']}>The Coder</div>
      <div className={LandingPageStyle['text-hidden-2']}>Boon Chi</div>
      <br />
      <Description description={'Hi people 👋'} />
      <Description description={'Welcome to my little space'} />
      <Description description={'🐛🎨🎉📝'} />
      <br />
      <CustomButton
        buttonVariant='warning'
        buttonHandler={() => handleShowProject()}
        buttonName='Click here'
        buttonAnimation={true}
      >
        <span className={LandingPageStyle['home-button']}></span>
      </CustomButton>
    </div>
  )
}

export default LandingPage
