// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "For full publications, please refer to my Google Scholar page.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-graduated-from-usc-️",
          title: 'Graduated from USC ✌️',
          description: "",
          section: "News",},{id: "news-started-my-phd-at-king-s",
          title: 'Started my PhD at King’s 🦁',
          description: "",
          section: "News",},{id: "news-our-paper-was-accepted-by-wikidata-workshop-iswc-2022",
          title: 'Our paper was accepted by Wikidata Workshop @ ISWC 2022.',
          description: "",
          section: "News",},{id: "news-our-working-paper-was-accepted-by-hhai-2023",
          title: 'Our working paper was accepted by HHAI 2023.',
          description: "",
          section: "News",},{id: "news-attended-isws-summer-school",
          title: 'Attended ISWS Summer School.',
          description: "",
          section: "News",},{id: "news-attended-and-presented-our-work-at-hhai-2023",
          title: 'Attended and presented our work at HHAI 2023.',
          description: "",
          section: "News",},{id: "news-help-organized-and-attended-knowledge-prompting-hackathon-2023",
          title: 'Help organized and attended Knowledge Prompting Hackathon 2023.',
          description: "",
          section: "News",},{id: "news-our-team-at-kcl-won-track-2-of-the-lm-kbc-challenge-iswc-2023",
          title: 'Our team at KCL won Track 2 of the LM-KBC Challenge @ ISWC...',
          description: "",
          section: "News",},{id: "news-attended-and-presented-our-work-at-iswc-2023",
          title: 'Attended and presented our work at ISWC 2023.',
          description: "",
          section: "News",},{id: "news-our-paper-ontochat-was-accepted-by-eswc-2024-special-track-on-llms-for-ke",
          title: 'Our paper OntoChat was accepted by ESWC 2024 Special Track on LLMs for...',
          description: "",
          section: "News",},{id: "news-hosted-a-hall-session-at-wiki-workshop-2024-delivering-a-tutorial-for-the-esgen-toolkit",
          title: 'Hosted a Hall session at Wiki Workshop 2024, delivering a tutorial for the...',
          description: "",
          section: "News",},{id: "news-our-elmke-workshop-has-been-accepted-to-ekaw-2024",
          title: 'Our ELMKE workshop has been accepted to EKAW 2024.',
          description: "",
          section: "News",},{id: "news-co-hosted-the-third-lm-kbc-challenge-co-located-with-iswc-2024",
          title: 'Co-hosted the third LM-KBC challenge co-located with ISWC 2024.',
          description: "",
          section: "News",},{id: "news-hosted-the-first-elmke-workshop-co-located-with-ekaw-2024",
          title: 'Hosted the first ELMKE workshop co-located with EKAW 2024.',
          description: "",
          section: "News",},{id: "news-our-elmke-workshop-has-been-accepted-to-eswc-2025",
          title: 'Our ELMKE workshop has been accepted to ESWC 2025.',
          description: "",
          section: "News",},{id: "news-our-lm-kbc-challenge-has-been-accepted-to-iswc-2025",
          title: 'Our LM-KBC challenge has been accepted to ISWC 2025.',
          description: "",
          section: "News",},{id: "news-our-paper-on-explainable-knowledge-engineering-was-accepted-to-semantic-web",
          title: 'Our paper on explainable knowledge engineering was accepted to Semantic Web.',
          description: "",
          section: "News",},{id: "news-hosted-the-second-elmke-workshop-co-located-with-eswc-2025",
          title: 'Hosted the second ELMKE workshop co-located with ESWC 2025.',
          description: "",
          section: "News",},{id: "news-our-paper-on-schema-generation-was-accepted-to-emnlp-2025",
          title: 'Our paper on schema generation was accepted to EMNLP 2025.',
          description: "",
          section: "News",},{id: "news-our-paper-on-knowledge-prompting-was-accepted-to-journal-of-web-semantics",
          title: 'Our paper on knowledge prompting was accepted to Journal of Web Semantics.',
          description: "",
          section: "News",},{id: "news-attended-and-presented-our-work-at-emnlp-2025",
          title: 'Attended and presented our work at EMNLP 2025.',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
