import Link from "next/link";
import { LuGithub, LuLinkedin, LuMapPin } from "react-icons/lu";

const About = () => {
    return <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">About Me</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Passionate about creating innovative solutions and beautiful user experiences
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-2xl font-semibold mb-4">My Story</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                        With over 10 years of experience in web development, I specialize in creating modern,
                        responsive applications using cutting-edge technologies. I'm passionate about clean
                        code,
                        user experience, and solving complex problems through innovative solutions.
                    </p>
                    <div className="flex gap-4">
                        <Link href="https://github.com/kuzma02" className="flex-col justify-center items-center gap-1">
                            <LuGithub className="mr-2 h-6 w-6" />
                            GitHub
                        </Link>
                        <Link href="https://www.linkedin.com/in/aleksandar-kuzmanovic-kuzma" className="flex-col justify-center items-center gap-1">
                            <LuLinkedin className="mr-2 h-6 w-6" />
                            LinkedIn
                        </Link>
                    </div>
                </div>
                <div className="space-y-6">
                    <div>
                        <h4 className="font-semibold mb-2">Experience</h4>
                        <p className="text-muted-foreground">10+ years in web development</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Location</h4>
                        <p className="text-muted-foreground flex items-center">
                            <LuMapPin className="mr-2 h-4 w-4" />
                            Belgrade, Serbia
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Availability</h4>
                        <p className="text-muted-foreground">Open to new opportunities</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default About;