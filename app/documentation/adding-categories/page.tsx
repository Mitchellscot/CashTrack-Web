import classNames from 'classnames';
import styles from './adding-categories.module.scss';
import DocumentationSnippet from '../../components/DocumentationSnippet/DocumentationSnippet';
import DocumentationNav from '../../components/DocumentationNav/DocumentationNav';
import { NavigationLinks } from '../../constants/NavigationLinks';

export default function Page() {
  const container = classNames(styles.container, 'flex-grow-1 container');
  return (
    <div className={container}>
      <div className="row">
        <div className="col col-md-3 col-lg-2 d-none d-md-block">
          <DocumentationNav activeLink={NavigationLinks.AddingCategories} />
        </div>
        <div className="col-12 col-md-9 col-lg-10">
          <DocumentationSnippet
            title={'Adding Categories'}
            header={1}
            description="Instructions coming soon!"
            image={undefined}
            lineStyle="default"
          />
        </div>
      </div>
    </div>
  );
}
