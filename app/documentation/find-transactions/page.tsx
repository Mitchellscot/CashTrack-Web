import classNames from 'classnames';
import styles from './find-transactions.module.scss';
import DocumentationSnippet from '../../components/DocumentationSnippet/DocumentationSnippet';
import DocumentationNav from '../../components/DocumentationNav/DocumentationNav';
import { NavigationLinks } from '../../constants/NavigationLinks';
//import DocumentationSelectList from '../components/DocumentationSelectList/DocumentationSelectList';

export default function Page() {
  const container = classNames(styles.container, 'flex-grow-1 container');
  return (
    <div className={container}>
      <div className="row">
        <div className="col col-md-3 col-lg-2">
          <DocumentationNav activeLink={NavigationLinks.FindTransactions} />
        </div>
        <div className="col col-md-9 col-lg-10">
          <DocumentationSnippet
            title={'Finding Transactions'}
            header={1}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            image={undefined}
            lineStyle="default"
          />
        </div>
      </div>
    </div>
  );
}
