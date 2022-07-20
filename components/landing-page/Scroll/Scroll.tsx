import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollStyle from './Scroll.module.scss';
import PersonalProjects from 'components/personal-projects/PersonalProjects';
import { useEffect, useState } from 'react';
import { projectsArray } from '../variable';

const Scroll = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {scrollY > 1 ? (
        <PersonalProjects projects={projectsArray} />
      ) : (
        <div className={ScrollStyle['main']}>
          <FontAwesomeIcon icon={faArrowDown} />
        </div>
      )}
    </div>
  );
};

export default Scroll;
