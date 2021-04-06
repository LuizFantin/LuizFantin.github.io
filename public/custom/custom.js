document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const languages = {
    english: {
        "about_nav": "About Me",
        "projects_nav": "Projects",
        "contact_nav": "Contact",
        "intro": "Full Stack Web Developer with experience building solutions from start to finish",
        "btn_about": "MORE ABOUT ME",
        "btn_projects": "SEE MY WORK",
        "about_title": "Who am I?",
        "about_text": "Computer engineering student, automation technician and web developer with over three years of experience. Has worked as a team manager and developer in a great variety of projects. A fast learner who mainly works with PHP and the Laravel Framework but always strives to learn new technologies and is told to be very analytical.",
        "skills_title": "Skills",
        "english": "English",
        "portuguese": "Portuguese",
        "project_title": "Projects",
        "visit_site_link": "Visit Website",
        "projects_section": [
            {
                "title": "Instituto Perfil",
                "company": "Adapti Soluções Web",
                "text": "A system designed to simplify the process of electoral research and report generation. Receives hundreds of requests during the day. Developed in record time and using the Scrum methodology."
            },
            {
                "title": "Selective Process São Mateus",
                "company": "Adapti Soluções Web",
                "text": "A system created for simplifying the selective and hiring process of the department of health of the city of São Mateus. It received a few thousand applications of medical professionals. The system dealt with all applications for all different openings, with an intuitive layout and a robust backend. It was developed in a month by a team of three people."
            },
            {
                "title": "Arte da Gente",
                "company": "Adapti Soluções Web",
                "text": "A Project developed in PHP and the Laravel Framework. A dynamic website and management system of an art store."
            }
        ],
        "address": "Address",
    }, 
    portuguese: {
        "about_nav": "Sobre Mim",
        "projects_nav": "Projetos",
        "contact_nav": "Contato",
        "intro": "Desenvolvedor Web Fullstack com experiência em criar soluções do início ao fim",
        "btn_about": "MAIS SOBRE MIM",
        "btn_projects": "VEJA MEU TRABALHO",
        "about_title": "Quem sou eu?",
        "about_text": "Estudante de engenharia da computação, técnico em automação e desenvolvedor web com mais de três anos de experiência. Trabalhou como gerente de equipe e desenvolvedor em uma grande variedade de projetos. Um aprendiz rápido que trabalha principalmente com PHP e Laravel Framework, mas sempre se esforça para aprender novas tecnologias e é muito analítico. \n\nAdora resolver problemas usando tecnologia. \n\nUm entusiasta de comunicação.",
        "skills_title": "Habilidades",
        "english": "Inglês",
        "portuguese": "Português",
        "project_title": "Projetos",
        "visit_site_link": "Ir para o site",
        "projects_section": [
            {
                "title": "Instituto Perfil",
                "company": "Adapti Soluções Web",
                "text": "Um sistema desenhado para simplificar o processo de pesquisa eleitoral e geração de relatórios. Recebe centenas de solicitações durante o dia. Desenvolvido em tempo recorde e utilizando a metodologia Scrum."
            },
            {
                "title": "Processo Seletivo São Mateus",
                "company": "Adapti Soluções Web",
                "text": "Sistema criado para simplificar o processo seletivo e de contratação da secretaria de saúde do município de São Mateus. Recebeu alguns milhares de inscrições de profissionais médicos. O sistema lida com todas as aplicações para todas as diferentes vagas, com um layout intuitivo e um back-end robusto. Foi desenvolvido em um mês por uma equipe de três pessoas."
            },
            {
                "title": "Arte da Gente",
                "company": "Adapti Soluções Web",
                "text": "Projeto desenvolvido em PHP e Framework Laravel. Um site dinâmico e sistema de gestão de uma loja de arte."
            }
        ],
        "address": "Endereço",
    }
}