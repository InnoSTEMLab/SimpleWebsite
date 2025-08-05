export interface Course {
  id: string;
  title: string;
  description: string;
  features: string[];
  ageGroups: AgeGroup[];
  image?: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface AgeGroup {
  id: string;
  name: string;
  ageRange: string;
  description: string;
  duration: string;
  classesPerWeek: number;
  price: number;
  color: string;
}

export const courses: Course[] = [
  {
    id: 'line-following-robots',
    title: 'Introduction to Line Following Robots',
    description: 'Our flagship robotics program introduces children to the exciting world of autonomous robots. Students learn to build, program, and test line-following robots while developing critical thinking, problem-solving, and teamwork skills.',
    category: 'Robotics',
    difficulty: 'beginner',
    features: [
      'Robot Assembly & Construction',
      'Programming Fundamentals',
      'Sensor Technology',
      'Problem Solving & Debugging',
      'Team Collaboration'
    ],
    ageGroups: [
      {
        id: 'ages-6-9',
        name: 'Ages 6-9 (Beginner)',
        ageRange: '6-9',
        description: 'Perfect for young learners with no prior robotics experience. Focus on basic concepts, simple programming, and hands-on building activities.',
        duration: '2 hours per class',
        classesPerWeek: 1,
        price: 50,
        color: 'blue'
      },
      {
        id: 'ages-10-13',
        name: 'Ages 10-13 (Intermediate)',
        ageRange: '10-13',
        description: 'For older students ready for more advanced concepts. Includes complex programming, advanced sensor integration, and competitive challenges.',
        duration: '2 hours per class',
        classesPerWeek: 1,
        price: 50,
        color: 'purple'
      }
    ]
  },
  {
    id: 'arduino-programming',
    title: 'Arduino Programming & Electronics',
    description: 'Learn the fundamentals of electronics and programming with Arduino microcontrollers. Students will create interactive projects, understand circuit design, and develop coding skills.',
    category: 'Electronics',
    difficulty: 'intermediate',
    features: [
      'Circuit Design & Electronics',
      'Arduino Programming',
      'Sensor Integration',
      'Project Development',
      'Troubleshooting Skills'
    ],
    ageGroups: [
      {
        id: 'arduino-ages-8-12',
        name: 'Ages 8-12 (Beginner)',
        ageRange: '8-12',
        description: 'Introduction to electronics and basic Arduino programming. Students learn to build simple circuits and program basic functions.',
        duration: '2 hours per class',
        classesPerWeek: 1,
        price: 60,
        color: 'green'
      },
      {
        id: 'arduino-ages-12-16',
        name: 'Ages 12-16 (Advanced)',
        ageRange: '12-16',
        description: 'Advanced Arduino projects with complex sensors, displays, and IoT applications. Students develop sophisticated programming skills.',
        duration: '2.5 hours per class',
        classesPerWeek: 1,
        price: 70,
        color: 'orange'
      }
    ]
  },
  {
    id: '3d-printing-design',
    title: '3D Printing & Design',
    description: 'Explore the world of 3D design and printing. Students learn to create digital models, understand 3D printing technology, and bring their ideas to life.',
    category: 'Design',
    difficulty: 'beginner',
    features: [
      '3D Design Software',
      '3D Printing Technology',
      'Design Thinking',
      'Prototyping Skills',
      'Creative Problem Solving'
    ],
    ageGroups: [
      {
        id: '3d-ages-7-11',
        name: 'Ages 7-11 (Beginner)',
        ageRange: '7-11',
        description: 'Introduction to 3D design using kid-friendly software. Students learn basic modeling and printing concepts.',
        duration: '2 hours per class',
        classesPerWeek: 1,
        price: 55,
        color: 'teal'
      },
      {
        id: '3d-ages-11-15',
        name: 'Ages 11-15 (Intermediate)',
        ageRange: '11-15',
        description: 'Advanced 3D modeling and printing techniques. Students work on complex projects and learn professional design tools.',
        duration: '2.5 hours per class',
        classesPerWeek: 1,
        price: 65,
        color: 'indigo'
      }
    ]
  },
  {
    id: 'coding-games',
    title: 'Game Development & Coding',
    description: 'Learn to create your own games through coding! Students develop programming skills while building fun, interactive games and animations.',
    category: 'Programming',
    difficulty: 'beginner',
    features: [
      'Game Design Principles',
      'Programming Logic',
      'Animation & Graphics',
      'User Interface Design',
      'Creative Storytelling'
    ],
    ageGroups: [
      {
        id: 'coding-ages-6-10',
        name: 'Ages 6-10 (Beginner)',
        ageRange: '6-10',
        description: 'Introduction to coding through block-based programming. Students create simple games and animations.',
        duration: '1.5 hours per class',
        classesPerWeek: 1,
        price: 45,
        color: 'pink'
      },
      {
        id: 'coding-ages-10-14',
        name: 'Ages 10-14 (Intermediate)',
        ageRange: '10-14',
        description: 'Advanced game development with text-based programming. Students build complex games and learn real coding languages.',
        duration: '2 hours per class',
        classesPerWeek: 1,
        price: 55,
        color: 'red'
      }
    ]
  }
];

export const getCourseById = (id: string): Course | undefined => {
  return courses.find(course => course.id === id);
};

export const getCoursesByCategory = (category: string): Course[] => {
  return courses.filter(course => course.category === category);
};

export const getCoursesByDifficulty = (difficulty: Course['difficulty']): Course[] => {
  return courses.filter(course => course.difficulty === difficulty);
}; 