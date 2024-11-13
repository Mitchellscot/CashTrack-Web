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
        <div className="col col-md-3 col-lg-2 d-none d-md-block">
          <DocumentationNav activeLink={NavigationLinks.GettingStarted} />
        </div>
        <div className="col-12 col-md-9 col-lg-10">
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
            description="Cash Track is a windows application that allows you to track your expenses, make a plan for your savings, and build a budget specific to your needs. Cash Track is a privacy focused application. None of the data you enter into the program is sent anywhere. It stays on your machine! For this reason, it is advisable to back up your data regularly and store it in a safe place."
            image={undefined}
            lineStyle="alt"
          />
          <DocumentationSnippet
            title={'Why use budgeting software?'}
            header={2}
            description="Budgeting software can help you track your expenses, make a plan for your savings, and build a budget specific to your needs. If you don't make a plan, you may find yourself spending more money than you make. Budgeting software can help you avoid this by giving you a clear picture of your finances."
            image={undefined}
            lineStyle="default"
            showAlert={true}
            alertTitle="Heads Up!"
            alertDescription="Cash Track is a windows application. It will not work on a Mac or Linux machine (Yet!)"
          />
        </div>
      </div>
    </div>
  );
}
