import Image from "next/image";
import {LuArrowRight} from "react-icons/lu";
import Link from "next/link";

const Hero = () => {
    return <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
            <div className="mb-8">
                <Image
                    src="/personal image new.JPG"
                    quality={50}
                    alt="Profile"
                    width={300}
                    height={300}
                    priority={true}
                    className="rounded-full mx-auto mb-6 border-4 border-primary/20"
                />
            </div>
            <h1 className="text-5xl md:text-7xl text-black font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text">
                Aleksandar Kuzmanovic
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Full-Stack Developer + Performance and SEO specialist
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                    href="https://github.com/kuzma02"
                    className="text-xl px-8 bg-black text-white flex gap-1 items-center py-3 rounded-lg cursor-pointer">
                    See Github
                    <LuArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="text-xl cursor-pointer px-8 border border-gray-500 flex gap-1 items-center py-3 rounded-lg ">
                    Download CV
                </button>
            </div>
        </div>
    </section>
}

export default Hero;