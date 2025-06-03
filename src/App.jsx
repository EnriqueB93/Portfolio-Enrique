import { AboutMain } from './components/about/AboutMain';
import { ContactMain } from './components/contact/ContactMain';
import { Footer } from './components/footer/Footer';
import { HeroBackground } from './components/hero/HeroBackground';
import { HeroMain } from './components/hero/HeroMain';
import { SubHeroSection } from './components/hero/SubHeroSection';
import { NavbarMain } from './components/navbar/NavbarMain';
import { ProjectMain } from './components/projectSection/ProjectMain';
import { SkillSub } from './components/skillsSection/SkillSub';
import { SkillsMain } from './components/skillsSection/SkillsMain';

export const App = () => {
	return (
		<div className="font-caslon text-white relative overflow-hidden  ">
			<NavbarMain />
			<HeroMain />
			<HeroBackground />
			<SubHeroSection />
			<AboutMain />
			<SkillsMain />
			<SkillSub />
			<ProjectMain />
			<ContactMain />
			<Footer />
		</div>
	);
};
