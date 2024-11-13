import classNames from 'classnames';
import styles from './download.module.scss';
import DocumentationSnippet from '../../components/DocumentationSnippet/DocumentationSnippet';
import DocumentationNav from '../../components/DocumentationNav/DocumentationNav';
import { NavigationLinks } from '../../constants/NavigationLinks';
import Link from 'next/link';

export default function Page() {
  const container = classNames(styles.container, 'flex-grow-1 container');
  return (
    <div className={container}>
      <div className="row">
        <div className="col col-md-3 col-lg-2 d-none d-md-block">
          <DocumentationNav activeLink={NavigationLinks.Download} />
        </div>
        <div className="col-12 col-md-9 col-lg-10">
          <DocumentationSnippet
            title={'Downloading Cash Track'}
            header={1}
            description="Click the button below to download the Cash Track installer. Once the installer is downloaded, run it to install Cash Track on your computer. As of right now, Cash Track is only available for Windows."
            image={undefined}
            lineStyle="default"
          />
          <div className="d-flex justify-content-center">
            <Link
              href="https://github.com/Mitchellscot/CashTrack/releases/download/prerelease/CashTrack-0.9.0.exe"
              download
              className="btn btn-lg btn-success"
            >
              Download Cash Track
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
