import {ProfileSection} from "./components/home/ProfileSection.tsx";
import BaseView from "./components/base-view/BaseView";
import {ProjectSection} from "./components/home/ProjectSection.tsx";
import {ExperienceSection} from "./components/home/ExperienceSection.tsx";
import {ErrorBoundary} from "react-error-boundary";
import {ThemeProvider} from "./providers/ThemeProvider.tsx";
import {ThemeToggle} from "./components/theme-toggle/ThemeToggle.tsx";
import {motion} from "motion/react";
import {ScrollReveal} from "./components/animated/ScrollReveal.tsx";
import {BackgroundPattern} from "./components/background/BackgroundPattern.tsx";
import {StructuredData} from "./components/seo/StructuredData.tsx";

function ErrorFallback({sectionName}: {sectionName: string}) {
    return (
        <BaseView className="w-full p-8 text-center">
            <p className="text-slate-600 dark:text-slate-400 text-sm">
                Unable to load {sectionName}. Please refresh the page.
            </p>
        </BaseView>
    );
}

function App() {
    return (
        <ThemeProvider>
            <StructuredData />
            <motion.div
                className="min-h-screen w-full bg-white dark:bg-[#0f0f13] transition-colors duration-200 relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{ isolation: 'isolate' }}
            >
                <BackgroundPattern />
                <ThemeToggle />
                {/* Main container with max-width and centered layout */}
                <BaseView className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-28" style={{ zIndex: 10 }}>
                    {/* Profile Section */}
                    <ErrorBoundary fallback={<ErrorFallback sectionName="profile" />}>
                        <ScrollReveal className="mb-12 sm:mb-16 lg:mb-20" delay={0.1}>
                            <ProfileSection/>
                        </ScrollReveal>
                    </ErrorBoundary>

                    {/* Projects Section */}
                    <ErrorBoundary fallback={<ErrorFallback sectionName="projects" />}>
                        <ScrollReveal className="mb-12 sm:mb-16 lg:mb-20" delay={0.2}>
                            <ProjectSection/>
                        </ScrollReveal>
                    </ErrorBoundary>

                    {/* Experience Section */}
                    <ErrorBoundary fallback={<ErrorFallback sectionName="experience" />}>
                        <ScrollReveal className="mb-8" delay={0.3}>
                            <ExperienceSection/>
                        </ScrollReveal>
                    </ErrorBoundary>
                </BaseView>
            </motion.div>
        </ThemeProvider>
    );
}

export default App
