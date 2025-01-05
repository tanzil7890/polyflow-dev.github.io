
//import Hero from '../components/Hero';
import Features from '../components/Features/index';
import CodeExample from '../components/CodeExample/index';
import Hero1 from '../components/Hero/index';
import { AdvancedExamples } from '../components/Examples/AdvancedExamples';
/* import AdvancedExamples from '../components/Examples/AdvancedExamples'; */
import Performance from '../components/Performance';


export default function HomePage() {
  return (
    <>
      <Hero1 />
      <Features />
      <CodeExample />
      <AdvancedExamples />
      <Performance />
    </>
  );
}