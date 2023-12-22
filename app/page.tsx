import Link from 'next/link';
import Feature from './components/Feature/Feature';
import HomeHero from './components/HomeHero/HomeHero';

export default function Page() {
  return (
    <main className="container-fluid container-lg d-flex flex-column">
      <HomeHero />
      <Feature
        title="Track your expenses"
        description="Unleash the power of financial control Cash Track, designed to give you a clear view of your spending habits. With real-time expense tracking, you can say goodbye to end-of-the-month surprises and confidently plan for the future. Harness the ability to categorize, analyze, and manage your expenses, paving the way for smarter financial decisions."
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
        description="Cash Track empowers you to take charge of your savings like never before. Using Cash Track for goal tracking, you can watch your money grow and reach your financial goals faster. Experience the satisfaction of seeing your savings plan in action, paving the way for financial freedom and security."
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
        description="Cash Track is not just another budgeting tool, it’s a personalized financial assistant designed with you in mind. It allows you to create a budget that aligns with your income, expenses, and financial goals. With Cash Track, you’re not just following a budget, you’re crafting a financial strategy tailored to your unique needs, empowering you to take control of your financial future."
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
        description="With Cash Track, we prioritize your privacy. Your financial data is stored locally on your device, ensuring that you have full control over your information. With Cash Track, your data stays with you, providing a secure and private environment for managing your finances. Experience the peace of mind that comes with knowing your financial data is secure and accessible only by you."
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
          <Link
            href="/documentation/getting-started"
            className="btn btn-success btn-lg me-3"
          >
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
