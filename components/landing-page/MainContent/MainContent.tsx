import MainContentStyle from './MainContent.module.scss';
const MainContent = () => {
  return (
    <div className={MainContentStyle['main']}>
      <p>
        {"Hi, I'm "}
        <span className={MainContentStyle['lightBg']}>{'Chi'}</span>
      </p>
      <p className={MainContentStyle['greyFont']}>I like to</p>
      <div className={MainContentStyle['blackStrokeFont']}>
        <span>CODE</span>,<span>WRITE</span>,<span>FILM</span>
      </div>
    </div>
  );
};

export default MainContent;
