import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollStyle from './Scroll.module.scss';
import Link from 'next/link';

const Scroll = () => {
  return (
    <div className={ScrollStyle['main']}>
      <Link href="#personal-projects" passHref aria-label="Arrow">
        <FontAwesomeIcon
          icon={faAngleDoubleDown}
          style={{
            color: 'rgb(255, 165,0)',
            cursor: 'pointer',
          }}
        />
      </Link>
    </div>
  );
};

export default Scroll;
