import Link from 'next/link';
import Feature from './components/Feature/Feature';
import HomeHero from './components/HomeHero/HomeHero';

export default function Page() {
  return (
    <main className="container-fluid container-lg d-flex flex-column">
      <HomeHero />
      <Feature
        title="Track your expenses"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nunc. Sed euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nunc."
        image="/bar-graph.png"
        mobileImage="/bar-graph-mobile.png"
        imageAlt=""
        imageWidth={809}
        imageHeight={405}
        imagePosition="right"
        link=""
        linkText="Learn More"
      />

      <Feature
        title="Make a plan for your savings"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nunc. Sed euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nunc."
        image="/projection.png"
        mobileImage="/projection-mobile.png"
        imageAlt=""
        imageWidth={809}
        imageHeight={405}
        imagePosition="left"
        link=""
        linkText="Learn More"
      />

      <Feature
        title="Build a budget specific to your needs"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nunc. Sed euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nunc."
        image="/budget.png"
        mobileImage="/budget-mobile.png"
        imageAlt=""
        imageWidth={809}
        imageHeight={405}
        imagePosition="right"
        link=""
        linkText="Learn More"
      />

      <Feature
        title="Your data stays with you"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nunc. Sed euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nunc."
        image="/split.png"
        mobileImage="/split-mobile.png"
        imageAlt=""
        imageWidth={809}
        imageHeight={405}
        imagePosition="left"
        link=""
        linkText="Learn More"
      />
      <div className="my-5">
        <h2 className="text-center my-5">
          Download today and get your Cash back on Track
        </h2>
        <div className="d-flex justify-content-center mb-5">
          <Link href="/documentation" className="btn btn-success btn-lg me-3">
            Get Started
          </Link>
          <Link href="/budget" className="btn btn-outline-info btn-lg ms-3">
            Learn How To Budget
          </Link>
        </div>
      </div>
    </main>
  );
}
