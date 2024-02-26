import Carsoul from "./Carsoul.jsx";
function Home() {

    return (
        <div className="mt-60">
            <Carsoul/>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="md:shrink-0">
                        <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://i.ibb.co/1KtW478/Whats-App-Image-2024-01-11-at-9-31-50-PM-removebg-preview.png" alt="Modern building architecture"/>
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"> Qasem Mohammad</div>
                        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"></a>
                        <p className="mt-2 text-slate-500">👋 I'm a skilled software developer with experience in TypeScript and JavaScript,
                                                    and expertise in frameworks like React, Node.js, and Three.js.
                                                    I'm a quick learner and collaborate closely with clients to create efficient, scalable,
                                                    and user-friendly solutions that solve real-world problems.
                                                  Let's work together to bring your ideas to life! </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;