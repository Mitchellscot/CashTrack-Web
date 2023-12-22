import classNames from 'classnames';
import styles from './getting-started.module.scss';
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
          <DocumentationNav activeLink={NavigationLinks.GettingStarted} />
        </div>
        <div className="col col-md-9 col-lg-10">
          <DocumentationSnippet
            title={'Cash Track Documentation'}
            header={1}
            description="Getting started with Cash Track is easy. Before beginning you will need to download and install the software and then go to your bank or credit card company and export your transactions as a CSV File."
            image={undefined}
            lineStyle="default"
          />
          <DocumentationSnippet
            title={'What is Cash Track?'}
            header={2}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            image={undefined}
            lineStyle="alt"
          />
          <DocumentationSnippet
            title={'Why use budgeting software?'}
            header={2}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            image={undefined}
            lineStyle="default"
            showAlert={true}
            alertTitle="Heads Up!"
            alertDescription="Cash Track is a privacy focused application. None of the data you enter into the program is sent anywhere. It stays on your machine! For this reason, it is advisable to back up your data regularly and store it in a safe place."
          />
        </div>
      </div>
    </div>
  );
}
