import Image from "next/image";
import Link from "next/link";
import {LuExternalLink, LuGithub} from "react-icons/lu";
import {createClient} from "contentful";

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

const Projects = async () => {
    const entries = await client.getEntries({content_type: 'portfolioProjects'})
    return <section id="projects" className="py-20 px-4">
        <div className="container mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    A showcase of my recent work and personal projects
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {entries.items.map((item, index) => {
                    return <div key={index + "item"} className="group hover:shadow-lg transition-shadow">
                        <div className="p-0">
                            <Image
                                src={`https:` + item?.fields?.image?.fields?.file?.url}
                                alt="Project 1"
                                width={400}
                                height={200}
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                        </div>
                        <div className="p-6">
                            <h2 className="mb-2 text-2xl">{item?.fields?.title}</h2>
                            <p className="mb-4">
                                {item?.fields?.shortDescription}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {item?.fields?.tech.map((item, index) => <div
                                    className={"bg-muted border px-3 py-1 rounded-lg text-sm"}
                                    key={index + "tech"}>{item}</div>)}
                            </div>
                            <div className="flex gap-2">
                                <Link href={item?.fields?.liveLink} target={"_blank"}>
                                    <LuExternalLink className="mr-2 h-4 w-4"/>
                                    Live Demo
                                </Link>
                                <Link href={item?.fields?.githubLink} target={"_blank"}>
                                    <LuGithub className="mr-2 h-4 w-4"/>
                                    Code
                                </Link>
                            </div>
                        </div>
                    </div>
                })}


            </div>
        </div>
    </section>
}

export default Projects;