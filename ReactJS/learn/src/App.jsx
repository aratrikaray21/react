import React from 'react'
import Card from './components/Card'

const App = () => {
  const jobsData = [
  {
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&auto=format&fit=crop&q=80",
    jobTitle: "Frontend Developer",
    company: "TechCorp Pvt Ltd",
    location: "India",
    type: "full-time",
    pay: 25
  },
  {
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=80",
    jobTitle: "Backend Developer",
    company: "CodeBase Solutions",
    location: "Remote",
    type: "part-time",
    pay: 30
  },
  {
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=80",
    jobTitle: "React Engineer",
    company: "Startup Labs",
    location: "Bangalore",
    type: "full-time",
    pay: 40
  },
  {
  img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop&q=80",
  jobTitle: "UI Engineer",
  company: "DesignHub",
  location: "Remote",
  type: "full-time",
  pay: 35
},
{
  img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=80",
  jobTitle: "JavaScript Developer",
  company: "WebWorks",
  location: "Mumbai",
  type: "part-time",
  pay: 28
},
{
  img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&auto=format&fit=crop&q=80",
  jobTitle: "Software Engineer",
  company: "NextGen Tech",
  location: "Hyderabad",
  type: "full-time",
  pay: 45
},
{
  img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop&q=80",
  jobTitle: "Web Developer",
  company: "PixelSoft",
  location: "Pune",
  type: "full-time",
  pay: 32
},
{
  img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80",
  jobTitle: "Frontend Intern",
  company: "CodeNest",
  location: "Remote",
  type: "part-time",
  pay: 15
},
{
  img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80",
  jobTitle: "React Developer",
  company: "CloudNine Systems",
  location: "Chennai",
  type: "full-time",
  pay: 38
},
{
  img: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=600&auto=format&fit=crop&q=80",
  jobTitle: "Product Engineer",
  company: "InnovateX",
  location: "Bangalore",
  type: "full-time",
  pay: 50
}
];


  return (
    <>
    <div className='cards-row'>
    {jobsData.map((element, idx)=><div key={idx}><Card 
    image={element.img} 
    jobTitle={element.jobTitle} 
    company={element.company} 
    location={element.location} 
    type={element.type} 
    pay={element.pay} 
    /></div>)}
    </div>
    </>
  )
}

export default App