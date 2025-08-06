const Skills = () => {
    return <section id="skills" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Technologies and tools I work with
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                <div>
                    <div>
                        <h2 className="text-xl">Frontend</h2>
                    </div>
                    <div>
                        <div className="flex flex-wrap gap-1">
                            <div className="border px-2">React</div>
                            <div className="border px-2">Next.js</div>
                            <div className="border px-2">SASS</div>
                            <div className="border px-2">TypeScript</div>
                            <div className="border px-2">JavaScript</div>
                            <div className="border px-2">HTML5</div>
                            <div className="border px-2">CSS3</div>
                            <div className="border px-2">Tailwind CSS</div>
                            <div className="border px-2">Bootstrap</div>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <h2 className="text-xl">Backend</h2>
                    </div>
                    <div>
                        <div className="flex flex-wrap gap-1">
                            <div className="border px-2">Node.js</div>
                            <div className="border px-2">Python</div>
                            <div className="border px-2">Express</div>
                            <div className="border px-2">Django</div>
                            <div className="border px-2">PostgreSQL</div>
                            <div className="border px-2">MongoDB</div>
                            <div className="border px-2">GraphQL</div>
                            <div className="border px-2">REST APIs</div>
                            <div className="border px-2">PHP</div>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <h2 className="text-xl">Tools & Others</h2>
                    </div>
                    <div>
                        <div className="flex flex-wrap gap-1">
                            <div className="border px-2">Git</div>
                            <div className="border px-2">SEO</div>
                            <div className="border px-2">Performance optimization</div>
                            <div className="border px-2">Vercel</div>
                            <div className="border px-2">Conversion rate optimization</div>
                            <div className="border px-2">Figma</div>
                            <div className="border px-2">Jest</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
export default Skills;