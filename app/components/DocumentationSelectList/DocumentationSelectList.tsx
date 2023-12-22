import Link from 'next/link';

export default function DocumentationSelectList() {
  return (
    <div className="btn-group">
      <button
        className="btn btn-secondary btn-lg dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Large button
      </button>
      <ul className="dropdown-menu">
        <li>
          <Link href="/budget" className="btn btn-outline-info btn-lg ms-3">
            Here is a link
          </Link>
        </li>
        <li>
          <Link href="/budget" className="btn btn-outline-info btn-lg ms-3">
            Here is another
          </Link>
        </li>
      </ul>
    </div>
  );
}
