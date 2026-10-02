import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";
import Button from "../../components/common/Button";

const Home = () => {
  return (
    <main className="min-h-screen bg-barstone-ivory py-20">
      <Container>
        <SectionHeading
          eyebrow="Barstone LLP"
          title="Strategic legal counsel for complex business and disputes."
          description="A contemporary legal practice built around clarity, strategy and disciplined execution."
        />

        <div className="mt-10">
          <Button href="/practices">
            Explore Practices
          </Button>
        </div>
      </Container>
    </main>
  );
};

export default Home;