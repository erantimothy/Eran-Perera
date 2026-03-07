import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        <div className="mx-auto max-w-6xl px-6">
          <div style={{ height: "1px", backgroundColor: "var(--border-subtle)" }} />
        </div>

        <Projects />

        <div className="mx-auto max-w-6xl px-6">
          <div style={{ height: "1px", backgroundColor: "var(--border-subtle)" }} />
        </div>

        <Blog />

        <div className="mx-auto max-w-6xl px-6">
          <div style={{ height: "1px", backgroundColor: "var(--border-subtle)" }} />
        </div>

        <Timeline />

        <div className="mx-auto max-w-6xl px-6">
          <div style={{ height: "1px", backgroundColor: "var(--border-subtle)" }} />
        </div>

        <Skills />

        <div className="mx-auto max-w-6xl px-6">
          <div style={{ height: "1px", backgroundColor: "var(--border-subtle)" }} />
        </div>

        <Awards />

        <div className="mx-auto max-w-6xl px-6">
          <div style={{ height: "1px", backgroundColor: "var(--border-subtle)" }} />
        </div>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
