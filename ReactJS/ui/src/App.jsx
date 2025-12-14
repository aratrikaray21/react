import React from 'react'
import Section1 from './component/Section1/Section1'
import Section2 from './component/Section2/Section2'

const App = () => {
const projects = [
  {
    id: 'p1',
    title: 'Project Alpha',
    desc: 'A short, one-line description highlighting the goal.',
    img: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?w=800&q=60&auto=format&fit=crop',
    link: '#',
    status: 'active'
  },
  {
    id: 'p2',
    title: 'Design System',
    desc: 'Reusable components and tokens for product teams.',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=60&auto=format&fit=crop',
    link: '#',
    status: 'maintenance'
  },
  {
    id: 'p3',
    title: 'Analytics Dashboard',
    desc: 'Interactive dashboards with real-time metrics.',
    img: 'https://plus.unsplash.com/premium_photo-1663931932651-ea743c9a0144?q=80&w=1170&auto=format&fit=crop',
    link: '#',
    status: 'planning'
  },
  {
    id: 'p4',
    title: 'Mobile App',
    desc: 'Cross-platform mobile app focused on performance.',
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=60&auto=format&fit=crop',
    link: '#',
    status: 'active'
  },
  {
    id: 'p5',
    title: 'Marketing Site',
    desc: 'Fast, SEO-friendly marketing site with landing pages.',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=60&auto=format&fit=crop',
    link: '#',
    status: 'completed'
  },
  {
    id: 'p6',
    title: 'Accessibility Audit',
    desc: 'Improving a11y across core user flows.',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=60&auto=format&fit=crop',
    link: '#',
    status: 'active'
  }
];
  return (
    <div>
      <Section1 projects={projects}/>
      <Section2/>
    </div>
  )
}

export default App