import TokenResults from "../components/tokens/TokenResults";
import TokenSearch from "../components/tokens/TokenSearch";
function Home() {
  return (
    <div className="mb-auto ">
      <TokenSearch />
      <TokenResults />
    </div>
  );
}

export default Home;
