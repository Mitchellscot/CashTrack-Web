import Feature from './components/Feature/Feature';
import HomeHero from './components/HomeHero/HomeHero';

export default function Page() {
  return (
    <main className="container-fluid container-lg">
      <HomeHero />
      <Feature
        title="Track your expenses"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nunc. Sed euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nunc."
        image="/bar-graph.png"
        imageAlt=""
        imageWidth={809}
        imageHeight={405}
        imagePosition="right"
        link=""
        linkText="Learn More"
      />

      <Feature
        title="Track your expenses"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nunc. Sed euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nunc."
        image="/bar-graph.png"
        imageAlt=""
        imageWidth={809}
        imageHeight={405}
        imagePosition="left"
        link=""
        linkText="Learn More"
      />

      <Feature
        title="Track your expenses"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nunc. Sed euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nunc."
        image="/bar-graph.png"
        imageAlt=""
        imageWidth={809}
        imageHeight={405}
        imagePosition="right"
        link=""
        linkText="Learn More"
      />

      <Feature
        title="Track your expenses"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nunc. Sed euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc eu nunc."
        image="/bar-graph.png"
        imageAlt=""
        imageWidth={809}
        imageHeight={405}
        imagePosition="left"
        link=""
        linkText="Learn More"
      />
    </main>
  );
}
