import Link from 'next/link';
import CustomFooterStyle from './CustomFooter.module.scss';
import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface ISocialLink {
  icon: IconDefinition;
  link: string;
}

type Props = {
  footerItems: ISocialLink[];
};

const CustomFooter = ({ footerItems }: Props) => {
  return (
    <div className={CustomFooterStyle['custom-footer']}>
      <footer>
        {footerItems.map((item, index) => (
          <Link href={item.link} passHref key={index}>
            <a className="footer-item">
              <FontAwesomeIcon
                icon={item.icon as IconProp}
                style={{ fontSize: '2rem' }}
              ></FontAwesomeIcon>
            </a>
          </Link>
        ))}
      </footer>
    </div>
  );
};

export default CustomFooter;
