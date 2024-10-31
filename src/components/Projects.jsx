import { PROJCTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">Projects</motion.h1>
            <div>
                {PROJCTS.map((project, index) => (
                    <div key={index} className="mb-8 flex items-center flex-wrap lg:justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4">
                            <a href="https://fooddeliveryap.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <img src={project.image}
                                    width={150}
                                    height={150}
                                    alt={project.title}
                                    className="mb-3 rounded"
                                />
                            </a>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <a href="https://fooddeliveryap.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <h6 className="underline underline-offset-8 mb-2 font-semibold">{project.title}</h6>
                            </a>
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            {project.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700"
                                >{tech}</span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects