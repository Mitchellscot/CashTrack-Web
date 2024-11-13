import classNames from 'classnames';
import styles from './set-up-a-user.module.scss';
import DocumentationSnippet from '../../components/DocumentationSnippet/DocumentationSnippet';
import DocumentationNav from '../../components/DocumentationNav/DocumentationNav';
import { NavigationLinks } from '../../constants/NavigationLinks';
//import DocumentationSelectList from '../components/DocumentationSelectList/DocumentationSelectList';

export default function Page() {
  const container = classNames(styles.container, 'flex-grow-1 container');
  return (
    <div className={container}>
      <div className="row">
        <div className="col col-md-3 col-lg-2 d-none d-md-block">
          <DocumentationNav activeLink={NavigationLinks.SetUpUser} />
        </div>
        <div className="col-12 col-md-9 col-lg-10">
          <DocumentationSnippet
            title={'Setting up a user'}
            header={1}
            description="After you have downloaded the software, log in with the default credentials (username: cash, password: track). You will get a few messages to change the default credentials. You can change the default credentials by clicking on the 'Settings' tab."
            image={undefined}
            lineStyle="default"
          />
        </div>
      </div>
    </div>
  );
}
