import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollStyle from './Scroll.module.scss';
import Link from 'next/link';

const Scroll = () => {
  return (
    <div className={ScrollStyle['main']}>
      <Link href="#personal-projects" passHref>
        <FontAwesomeIcon icon={faArrowDown} />
      </Link>
    </div>
  );
};

export default Scroll;
