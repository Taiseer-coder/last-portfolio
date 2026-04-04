const Projects = () => {
  const projects = [
    {
      title: 'Portfolio 1',
      desc: 'موقعي الشخصي الأول لعرض المهارات والتصميم بشكل بسيط ونظيف.',
      link: 'https://taiseer-1-portfolio.netlify.app'
    },
    {
      title: 'Portfolio 2',
      desc: 'نسخة مطورة من البورتفوليو مع تحسين التصميم وتجربة المستخدم.',
      link: 'https://taiseer-2-portfolio.netlify.app'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-12">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          مشاريعي
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group border border-gray-200 rounded-2xl p-6 space-y-4 hover:shadow-xl transition duration-300"
            >
              
              <h3 className="text-xl font-semibold text-gray-900">
                {project.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {project.desc}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-medium text-gray-900 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-900 hover:text-white transition"
              >
                عرض المشروع
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;