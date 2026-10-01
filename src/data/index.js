// All copy, images and mock data taken from the Figma design.
export const img = (hash) => `${import.meta.env.BASE_URL}images/${hash}.webp`;

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Courses', to: '/search' },
  { label: 'Creators', to: '/creator' },
];

export const categoryTabs = [
  'Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation', 'Social Media',
  'UI/UX Design', 'Creative Marketing', 'Digital Illustration', 'Film & Video', 'Crafts',
  'Freelance & Entrepreneurship', 'Graphic Design', 'Photography', 'Productivity',
  'Web Development', 'Data Science', 'Cooking',
];

export const categoryCards = [
  { name: 'Design', icon: 'pen' },
  { name: 'Development', icon: 'code' },
  { name: 'IT & Software', icon: 'monitor' },
  { name: 'Business', icon: 'briefcase' },
  { name: 'Marketing', icon: 'megaphone' },
  { name: 'Photography', icon: 'camera' },
];

// avatars used in the "learners" stacks
export const avatars = ['9ef8cb32', '83fb3e04', 'f3cf29a8', '5824acac', '7fdccc78', '1e078348', 'b44979e1'].map(img);

const baseCourses = [
  { title: 'Learn Figma from Basic', cover: 'c8826419', category: 'UI/UX Design', level: 'Beginner' },
  { title: 'Build Digital Asset', cover: '93ad9f9e', category: 'Graphic Design', level: 'Beginner' },
  { title: 'the Power of Big Data', cover: '4f3bdea5', category: 'Data Science', level: 'Intermediate' },
  { title: 'Balancing Productivity and Self-Care', cover: '72e18d90', category: 'Productivity', level: 'Beginner' },
  { title: 'Mastering Money Management', cover: 'a8978945', category: 'Freelance & Entrepreneurship', level: 'Advanced' },
  { title: 'From Idea to Startup Success', cover: '69362b02', category: 'Freelance & Entrepreneurship', level: 'Intermediate' },
];

const make = (c, i) => ({
  id: i + 1,
  author: 'purepearl studio',
  lessons: '17 Lessons',
  duration: '2 hours 16 mins',
  comments: '59 Comments',
  students: '26+',
  price: 25,
  rating: 4.5,
  ...c,
  cover: img(c.cover),
});

export const featuredCourses = baseCourses.map(make);
// 45 items (5 pages of 9) for the search page, cycling the six base courses
export const catalog = Array.from({ length: 45 }, (_, i) => make(baseCourses[i % 6], i));

export const course = {
  title: 'Build Digital Asset: A Comprehensive Guide',
  tagline: 'Unlock the Power of Digital Creation with Expert Guidance',
  author: 'by purepearl studio',
  level: 'Intermediate',
  rating: '4.8 (172 reviews)',
  students: '199 Students',
  video: img('71d7929e'),
  price: 25,
  totalLessons: '112 Lessons (24 hours)',
  moreVideos: '99 more videos',
  description: [
    'Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.',
    "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
    "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
  ],
  sneakPeek: ['a7c9406f', 'd443b521', '2e1b62a2', '0c176267'].map(img),
  keyPoints: [
    'Foundational Concepts',
    'Design Principles Mastery',
    'Advanced Techniques in Digital Creation',
    'Project Showcase and Critique',
    'Optimizing for Various Platforms',
    'Digital Asset Management Best Practices',
    'Monetization Strategies',
    'Capstone Project: Building Your Portfolio',
  ],
  sidebarLessons: [
    { n: '01', title: 'Introduction to Digital Assets', time: '12 mins' },
    { n: '02', title: 'Design Principles for Impacts', time: '21 mins' },
    { n: '03', title: 'Advanced Techniques in Digital Creation', time: '16 mins' },
  ],
  includes: ['Learning Resources', 'Quality Lesson Videos', 'Certificate of Completion', 'Private Consultation'],
};

export const creator = {
  name: 'PurePearl Studio',
  role: 'Professional Creator',
  avatar: img('bfd09b20'),
};

export const modules = [
  { title: 'Module 1: Introduction to Digital Assets', body: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation." },
  { title: 'Module 2: Design Principles for Impact', body: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills." },
  // Module 3 is not shown in the design file – wording below is a placeholder based on the key points list.
  { title: 'Module 3: Advanced Techniques in Digital Creation', body: 'Go beyond the basics with advanced workflows for building polished, production-ready digital assets.' },
  { title: 'Module 4: User-Centric Design Strategies', body: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design." },
  { title: 'Module 5: Interactive Media and Engagement', body: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences." },
  { title: 'Module 6: Project Showcase and Critique', body: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence." },
  { title: 'Module 7: Optimizing Digital Assets for Various Platforms', body: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes." },
];

export const ratingBreakdown = { average: '4.7', counts: [720, 120, 21, 12, 16] }; // 5★ → 1★

export const reviews = [
  { name: 'PurePearl Studio', role: 'UI/UX Designer', when: 'a year ago', avatar: img('bfd09b20'), stars: 5,
    text: '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"' },
  { name: 'Albert Flores', role: 'UI/UX Designer', when: 'a year ago', avatar: img('efb6f620'), stars: 5,
    text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!" },
  { name: 'Cody Fisher', role: 'UI/UX Designer', when: 'a year ago', avatar: img('13d1f8e8'), stars: 4,
    text: 'The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.' },
  { name: 'Brooklyn Simmons', role: 'UI/UX Designer', when: 'a year ago', avatar: img('63c4be83'), stars: 5,
    text: 'The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.' },
];

export const testimonials = [
  { name: 'Sarah M.', role: 'Enthusiastic Learner', avatar: img('0577f0e9'),
    text: '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."' },
  { name: 'James L.', role: 'Lifelong Learner', avatar: img('63c4be83'),
    text: '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."' },
  { name: 'Alex B.', role: 'Inspired Creator', avatar: img('728c3b1d'),
    text: '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."' },
];

export const creatorBenefits = ['Share Your Expertise', 'Monetize Your Passion', 'Flexibility and Autonomy', 'Build a Community'];

export const footerColumns = [
  { title: 'Browse', links: ['Featured Courses', 'Featured Categories'] },
  { title: 'Featured Categories', links: ['Business', 'IT', 'Design', 'Development', 'Marketing', 'Photography', 'Finance', 'Sport'] },
  { title: 'Platform', links: ['Become a Creator', 'Affiliate Program', 'Contact', 'Help', 'About'] },
];

// 3D ornaments (positions relative to the 1440px hero / CTA canvas)
export const heroShapes = [
  { src: 'e3b55902', size: 385, x: -118, y: 221, color: '#d4fb20' },
  { src: 'cda676fe', size: 330, x: 1127, y: 672, color: '#d4fb20' },
  { src: 'f9c0e0fd', size: 175, x: 358, y: 477, color: '#f5f5f6' },
  { src: '8670b841', size: 342, x: 18, y: 682, color: '#d4fb20' },
  { src: '92fc70a3', size: 370, x: 1231, y: 221, color: '#f5f5f6' },
  { src: '5b3686bc', size: 188, x: 1106, y: 464, color: '#d4fb20' },
];
export const ctaShapes = [
  { src: '5b3686bc', size: 188, x: 1080, y: 0, color: '#fc73ff' },
  { src: 'cda676fe', size: 330, x: 1110, y: 289, color: '#d4fb20' },
  { src: 'e3b55902', size: 385, x: -118, y: -162, color: '#d4fb20' },
  { src: 'f9c0e0fd', size: 150, x: 175, y: 40, color: '#d4fb20' },
  { src: '5b3686bc', size: 188, x: -48, y: 225, color: '#f1a128' },
  { src: '8670b841', size: 342, x: 20, y: 299, color: '#ff6644' },
  { src: '92fc70a3', size: 370, x: 1226, y: 6, color: '#5d45ed' },
];

// 404 layout keeps the shapes clear of the header (first 120px)
export const notFoundShapes = [
  { src: 'e3b55902', size: 300, x: -60, y: 480, color: '#d4fb20' },
  { src: '8670b841', size: 260, x: 120, y: 160, color: '#ff6644' },
  { src: '5b3686bc', size: 170, x: 1080, y: 150, color: '#fc73ff' },
  { src: '92fc70a3', size: 300, x: 1180, y: 460, color: '#5d45ed' },
  { src: 'f9c0e0fd', size: 150, x: 330, y: 700, color: '#f1a128' },
  { src: 'cda676fe', size: 220, x: 1000, y: 720, color: '#d4fb20' },
];
