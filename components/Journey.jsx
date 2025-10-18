
const journey = [
    {
        years: "October 2025 - Present",
        role: "Product Designer (Part time)",
        institution: "Fleek Bangladesh",
    },
    {
        years: "Aug 2025 - Present",
        role: "Software Engineer | UIUX",
        institution: "Easy Software Solutions",
    },
    {
        years: "Aug 2024 - April 2025",
        role: "HR Manager | Admin",
        institution: "CEEC-TEPC",
    },
    {
        years: "September 2019 - July 2023",
        role: "BSc. in Computer Science & Engineering",
        institution: "Congqing University of Science & Technology",
    }
]

const Journey = () => {
  return (
    <div className="flex flex-col">
        <h2 className="h2 mb-8">
            Education & <span className="text-accent">Experience</span>
        </h2>
        {
            journey.map((item, index) => {
                const {institution, role, years} = item;
                return (
                <div key={index} className="flex items-center gap-12 w-full">
                    {/* bullet */}
                    <div className="flex flex-col w-max justify-center items-center">
                        <div className="w-3 h-3 bg-accent rounded-full"></div>
                        <div className="w-[1px] h-[180px] bg-white/10"></div>
                    </div>
                    {/* text */}
                    <div className="max-w-[500px]">
                        <p className="mb-6 text-lg text-white/50">{years}</p>
                        <h4 className="h4 mb-2">{role}</h4>
                        <p className="text-white/50 text-lg">{institution}</p>
                    </div>
                </div>
                );
        })
    }
    </div>
  )
}

export default Journey