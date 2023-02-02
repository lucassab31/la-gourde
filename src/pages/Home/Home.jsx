import SmoothieCard from "components/SmoothieCard/SmoothieCard";

const Home = () => {
    return (
        <div>
            <h1 className="text-primary">Home</h1>
            <div className="d-flex justify-content-between">
                <SmoothieCard key={1} />
                <SmoothieCard key={2} />
            </div>
        </div>
    );
}

export default Home;