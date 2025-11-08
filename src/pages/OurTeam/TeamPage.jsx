import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendIcon from "@mui/icons-material/Send";
import farnaz from "../../assets/img/OurTeam img/farnaz.png";
import mohammadhosein from "../../assets/img/OurTeam img/mohammadhosein.jpg"

export default function TeamPage() {
    return (
        <div className="min-h-screen bg-black text-white px-6 md:px-16 py-20 flex flex-col gap-20 items-center">
            <h1 className="text-5xl font-extrabold">Our Team</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 w-full max-w-[1300px]">

                <div className="relative flex flex-col sm:flex-row-reverse items-center gap-8 bg-[#100013] p-10 rounded-3xl shadow-xl group">

                    <div className="relative flex-shrink-0">
                        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gray-600 shadow-xl overflow-hidden border-2 border-purple-400 group-hover:scale-105 transition"><img src={farnaz}></img></div>
                        <span className="absolute top-1 right-1 w-3 h-3 bg-purple-400 rounded-full" />
                        <span className="absolute bottom-1 left-1 w-2.5 h-2.5 bg-purple-300 rounded-full opacity-90" />
                    </div>

                    <div className="text-left max-w-lg space-y-5">
                        <div className="space-y-1">
                            <span className="px-3 py-1 text-sm bg-purple-500/20 rounded-xl text-purple-300 font-semibold">
                                Front-end Developer
                            </span>

                            <h2 className="text-4xl font-extrabold tracking-tight leading-tight">
                                Farnaz Seyedi
                            </h2>
                        </div>

                        <p className="text-gray-300 text-[1.05rem] leading-relaxed">
                            Hi! I'm a Front-end Developer passionate about creating modern, user-friendly websites using HTML, CSS, JavaScript, React, and Tailwind CSS. I enjoy learning new technologies and delivering clean, efficient code with great user experiences. Outside of coding, I love music, gaming, and exploring creative digital experiences.
                        </p>

                        <div className="flex flex-wrap gap-6 text-purple-400 text-base pt-2">
                            <a href="#" className="flex items-center gap-2 hover:text-purple-200 transition"><EmailIcon fontSize="small" />farnazseyedi912@gmail.com</a>
                            <a href="#" className="flex items-center gap-2 hover:text-purple-200 transition"><GitHubIcon fontSize="small" />farnazseyedi</a>
                            <a href="#" className="flex items-center gap-2 hover:text-purple-200 transition"><SendIcon fontSize="small" />@Reverie_Fs</a>
                        </div>
                    </div>
                </div>

                <div className="relative flex flex-col sm:flex-row-reverse items-center gap-8 bg-[#100013] p-10 rounded-3xl shadow-xl group">

                    <div className="relative flex-shrink-0">
                        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gray-600 shadow-xl overflow-hidden border-2 border-purple-400 group-hover:scale-105 transition"><img src={mohammadhosein} ></img></div>
                        <span className="absolute top-1 right-1 w-3 h-3 bg-purple-400 rounded-full" />
                        <span className="absolute bottom-1 left-1 w-2.5 h-2.5 bg-purple-300 rounded-full opacity-90" />
                    </div>

                    <div className="text-left max-w-lg space-y-5">
                        <div className="space-y-1">
                            <span className="px-3 py-1 text-sm bg-purple-500/20 rounded-xl text-purple-300 font-semibold">
                                Front-end Developer
                            </span>

                            <h2 className="text-4xl font-extrabold tracking-tight leading-tight">
                                M.H.Ebrahimi
                            </h2>

                        </div>

                        <p className="text-gray-300 text-[1.05rem] leading-relaxed">
                            Hi! my name is Mohammad Hossein. I am a frontend developer passionate about building responsive, user-friendly web applications with React. I enjoy turning design concepts into seamless experiences and continuously learning new technologies. I focus on writing clean, maintainable code and collaborating effectively to deliver high-quality projects.
                        </p>

                        <div className="flex flex-wrap gap-6 text-purple-400 text-base pt-2">
                            <a href="#" className="flex items-center gap-2 hover:text-purple-200 transition"><EmailIcon fontSize="small" />Mhebrahimi.dev@gmail.com</a>
                            <a href="#" className="flex items-center gap-2 hover:text-purple-200 transition"><GitHubIcon fontSize="small" />MHEbrahimiii</a>
                            <a href="#" className="flex items-center gap-2 hover:text-purple-200 transition"><SendIcon fontSize="small" />@Mhebrahimiiii</a>
                        </div>
                    </div>
                </div>

            </div>

            <p className="text-sm text-gray-500 opacity-80 tracking-wide">💟Thanks for watching</p>
        </div>
    );
}
