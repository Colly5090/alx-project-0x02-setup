import Header from "@/components/layout/Header";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <h1 className="font-extrabold border-2">Welcome to the ALX Project 0x02</h1>
      <p>This is the first home of the project.</p>
    </div>
  );
}

export default Home;