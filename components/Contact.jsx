import {LuGithub, LuLinkedin, LuMail, LuMapPin} from "react-icons/lu";
import Link from "next/link";

const Contact = () => {
    return <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Let's discuss your next project or opportunity
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                <div>
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <LuMail className="mr-4 h-5 w-5 text-primary"/>
                            <span>aleksandarkuzmanovic02@gmail.com</span>
                        </div>
                        <div className="flex items-center">
                            <LuMapPin className="mr-4 h-5 w-5 text-primary"/>
                            <span>Belgrade, Serbia</span>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h4 className="font-semibold mb-4">Follow Me</h4>
                        <div className="flex gap-4">
                            <Link href="https://github.com/kuzma02" target={"_blank"}>
                                <LuGithub className="h-6 w-6"/>
                            </Link>
                            <Link href="https://www.linkedin.com/in/aleksandar-kuzmanovic-kuzma/" target={"_blank"}>
                                <LuLinkedin className="h-6 w-6"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Contact;