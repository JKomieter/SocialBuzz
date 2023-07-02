import Image from "next/image";

interface CarouselProps {
    image: string;
    id: string;
    mutateStories: () => void;
    video: string;
}


const Carousel: React.FC<CarouselProps> = ({
    image,
    id,
    mutateStories,
    video
}) => {
    const style = {
        padding: "2px",
        background: 'linear-gradient(to top right, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5, #4f5bd5, #4f5bd5)',
    }

    return (
        <div className="rounded-full w-14 h-14 md:w-16 md:mr-0 mr-2
        md:h-16 overflow-hidden flex justify-center items-center "
        style={style}>
            <Image src={image || "/images/personplaceholder.png"} 
                alt="/images/personplaceholder.png" width={90}
                className="rounded-full object-cover w-full h-full cursor-pointer"
                height={90} style={{objectFit: "cover", borderRadius: "50%"}} />
        </div>
    )
}

export default Carousel;