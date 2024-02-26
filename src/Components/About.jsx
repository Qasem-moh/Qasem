import { Carousel } from "@material-tailwind/react";

function About() {

    return (
        <>
        <hr className="m-5"/>
            <Carousel loop={true} autoplay={true} className="rounded-xl">
                <img
                    src="https://i.ibb.co/tcqdrNx/1.png"
                    alt="image 1"
                    className="h-full w-full object-cover object-center"
                />
                <img
                    src="https://i.ibb.co/6vn1zhQ/2.png"
                    alt="image 2"
                    className="h-full w-full object-cover object-center"
                />
                <img
                    src="https://i.ibb.co/NW10Vnb/4.png"
                    alt="image 3"
                    className="h-full w-full object-cover object-center"
                />
            </Carousel>
        </>

    );
}

export default About;