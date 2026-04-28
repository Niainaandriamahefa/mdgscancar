import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import {
  AlertTriangle,
  BatteryCharging,
  Car,
  CheckCircle2,
  ChevronRight,
  CircleGauge,
  ClipboardCheck,
  FileText,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ScanSearch,
  SearchCheck,
  ShieldCheck,
  Stethoscope,
  Wrench,
  X,
} from "lucide-react";

type Page = "accueil" | "prestations" | "methode" | "avis" | "contact";

const whatsappNumber = "261324178655";
const phoneDisplay = "+261 32 41 786 55";
const email = "niainanirainy2@gmail.com";

const navLinks: { label: string; page: Page }[] = [
  { label: "Accueil", page: "accueil" },
  { label: "Prestations", page: "prestations" },
  { label: "Méthode", page: "methode" },
  { label: "Avis", page: "avis" },
  { label: "Contact", page: "contact" },
];

const services = [
  {
    title: "Diagnostic valise OBD II",
    description:
      "Connexion au calculateur du véhicule, scan des systèmes électroniques et lecture des défauts détectés.",
    icon: ScanSearch,
  },
  {
    title: "Lecture des codes d'erreurs du véhicule",
    description:
      "Lecture, traduction et explication des codes défauts DTC pour comprendre l'origine probable du problème.",
    icon: FileText,
  },
  {
    title: "Analyse moteur et performances",
    description:
      "Contrôle injection, combustion, capteurs, sonde lambda, débitmètre, alimentation et comportement moteur.",
    icon: CircleGauge,
  },
  {
    title: "ABS, ESP, airbags et sécurité",
    description:
      "Analyse des calculateurs de freinage et de sécurité selon les équipements disponibles sur le véhicule.",
    icon: ShieldCheck,
  },
  {
    title: "Tests batterie, alternateur et circuits",
    description:
      "Vérification de tension, continuité, connecteurs, câbles visibles et alimentation des systèmes essentiels.",
    icon: BatteryCharging,
  },
  {
    title: "Recherche de panne logique",
    description:
      "Croisement des données électroniques et mécaniques pour distinguer la cause réelle d'une conséquence.",
    icon: SearchCheck,
  },
  {
    title: "Rapport et conseils clairs",
    description:
      "Compte rendu détaillé, gravité de la panne, systèmes concernés et orientation vers la bonne solution.",
    icon: ClipboardCheck,
  },
  {
    title: "Effacement et suivi des défauts",
    description:
      "Effacement des codes si nécessaire, vérification du retour du défaut et conseils de prévention.",
    icon: CheckCircle2,
  },
];

const methodSteps = [
  ["01", "Compréhension du problème", "Recueil des symptômes, voyants, bruits, perte de puissance et contexte d'apparition."],
  ["02", "Inspection visuelle", "Contrôle de l'état général, fuites visibles, câbles, corrosion, batterie, connecteurs et durites."],
  ["03", "Diagnostic électronique", "Connexion OBD II, lecture des codes défauts, données en temps réel et scan des calculateurs."],
  ["04", "Analyse des systèmes", "Moteur, transmission, ABS, ESP, airbags, capteurs et calculateurs selon compatibilité."],
  ["05", "Tests techniques", "Contrôle capteurs, circuits électriques, batterie, alternateur, allumage et injection."],
  ["06", "Recherche de cause", "Analyse logique pour éviter les erreurs et différencier la cause de la conséquence."],
  ["07", "Évaluation de gravité", "Identification de l'urgence, des risques pour le véhicule et des problèmes futurs possibles."],
  ["08", "Rapport de diagnostic", "Explication claire, compte rendu détaillé, pièces ou systèmes concernés."],
  ["09", "Conseil et orientation", "Recommandations, orientation vers garage ou mécanicien et prévention des dépenses inutiles."],
  ["10", "Effacement et suivi", "Effacement des codes si nécessaire et contrôle du retour éventuel de la panne."],
  ["11", "Prévention", "Détection des anomalies avant panne grave et conseils de bonne utilisation du véhicule."],
  ["12", "Accompagnement", "Avis professionnel indépendant pour sécuriser vos décisions et éviter les réparations inutiles."],
];

function LogoMark({ className = "" }: { className?: string }) {
  return <img src="/images/Logo.jpg" alt="Logo MDG Scan Car" className={className} />;
}

function Header({ activePage, onNavigate }: { activePage: Page; onNavigate: (page: Page) => void }) {
  const [open, setOpen] = useState(false);

  const goTo = (page: Page) => {
    onNavigate(page);
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 text-white backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Navigation principale">
        <button type="button" className="flex items-center gap-3 text-left" onClick={() => goTo("accueil")}>
          <LogoMark className="h-12 w-14 invert" />
          <span className="text-sm font-black uppercase tracking-[0.2em]">MDG Scan Car</span>
        </button>

        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.page}
              type="button"
              onClick={() => goTo(link.page)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activePage === link.page ? "bg-white text-black" : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="ml-3 rounded-full border border-white px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white hover:text-black"
          >
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-full border border-white/15 p-2 text-white md:hidden"
          aria-label="Ouvrir le menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-black px-4 py-5 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.page}
                type="button"
                onClick={() => goTo(link.page)}
                className={`rounded-2xl px-4 py-3 text-left text-sm font-medium ${
                  activePage === link.page ? "bg-white text-black" : "text-white/75"
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-full bg-white px-5 py-3 text-center text-sm font-bold text-black"
            >
              Contacter sur WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function PageShell({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <section className={`min-h-screen px-4 pb-20 pt-28 sm:px-6 lg:px-8 ${dark ? "bg-zinc-950 text-white" : "bg-white text-zinc-950"}`}>
      <div className="mx-auto max-w-7xl page-enter">{children}</div>
    </section>
  );
}

function SectionIntro({ eyebrow, title, children, dark = false }: { eyebrow: string; title: string; children?: ReactNode; dark?: boolean }) {
  return (
    <div className="max-w-3xl">
      <p className={`text-xs font-black uppercase tracking-[0.35em] ${dark ? "text-white/45" : "text-zinc-500"}`}>{eyebrow}</p>
      <h1 className={`mt-4 text-4xl font-black tracking-tight sm:text-6xl ${dark ? "text-white" : "text-zinc-950"}`}>{title}</h1>
      {children && <p className={`mt-5 text-base leading-8 ${dark ? "text-white/65" : "text-zinc-600"}`}>{children}</p>}
    </div>
  );
}

function HomePage({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-black text-white">
      <div
        className="absolute inset-0 -z-20 animate-hero-pan bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/78 to-black/35" aria-hidden="true" />

      <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <LogoMark className="reveal-up mb-8 h-28 w-36 invert sm:h-36 sm:w-48" />
          <p className="reveal-up text-sm font-bold uppercase tracking-[0.45em] text-white/70 [animation-delay:120ms]">
            MDG Scan Car
          </p>
          <h1 className="reveal-up mt-4 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white [animation-delay:220ms] sm:text-7xl lg:text-8xl">
            La précision qui protège votre route
          </h1>
          <p className="reveal-up mt-7 max-w-2xl text-base leading-8 text-white/78 [animation-delay:340ms] sm:text-lg">
            Diagnostic automobile à Antananarivo pour véhicules équipés d'un port OBD II : lecture codes défauts, analyse valise, rapport clair et conseils indépendants.
          </p>
          <div className="reveal-up mt-10 flex flex-col gap-3 [animation-delay:460ms] sm:flex-row">
            <button
              type="button"
              onClick={() => onNavigate("contact")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-black text-black transition hover:bg-zinc-200"
            >
              Demander un diagnostic <MessageCircle className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate("prestations")}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              Voir les prestations <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesPage() {
  return (
    <PageShell>
      <SectionIntro eyebrow="Prestations" title="Diagnostic uniquement, avec explications claires.">
        MDG Scan Car analyse, détecte, explique, oriente et sécurise. Les réparations mécaniques complexes ne sont pas proposées : l'objectif est de vous aider à prendre la bonne décision avant d'engager des frais.
      </SectionIntro>

      <div className="mt-16 divide-y divide-zinc-200 border-y border-zinc-200">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={service.title} className="grid-fade grid gap-5 py-7 md:grid-cols-[80px_1fr_1.4fr] md:items-center" style={{ animationDelay: `${index * 70}ms` }}>
              <div className="text-sm font-black text-zinc-400">{String(index + 1).padStart(2, "0")}</div>
              <div className="flex items-center gap-4">
                <Icon className="h-7 w-7 text-zinc-950" />
                <h2 className="text-xl font-black tracking-tight text-zinc-950">{service.title}</h2>
              </div>
              <p className="text-sm leading-7 text-zinc-600 md:text-base">{service.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-14 grid gap-8 border-t border-zinc-950 pt-8 md:grid-cols-3">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-zinc-500">Tarif diagnostic</p>
          <p className="mt-3 text-4xl font-black text-zinc-950">À partir de 35.000 Ar</p>
        </div>
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-zinc-500">Déplacement</p>
          <p className="mt-3 text-4xl font-black text-zinc-950">À partir de 10.000 Ar</p>
        </div>
        <div className="text-sm leading-7 text-zinc-600">
          <p className="font-bold text-zinc-950">Précisions importantes</p>
          <p className="mt-2">Service disponible à Antananarivo. Intervention réservée aux véhicules dotés d'un port OBD II. Tarif final confirmé selon la zone, le véhicule et la demande.</p>
        </div>
      </div>
    </PageShell>
  );
}

function MethodPage() {
  return (
    <PageShell dark>
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionIntro eyebrow="Méthode" title="Une analyse structurée avant toute décision." dark>
            Chaque diagnostic suit une logique simple : écouter le client, contrôler le véhicule, lire les données, interpréter correctement, puis vous orienter sans pousser à la réparation inutile.
          </SectionIntro>
          <div className="mt-10 border-l border-white/20 pl-6 text-xl font-black leading-9 text-white">
            Analyse. Détecte. Explique. Oriente. Sécurise.
          </div>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {methodSteps.map(([number, title, text]) => (
            <div key={number} className="group grid gap-4 py-5 sm:grid-cols-[72px_1fr]">
              <span className="font-mono text-sm text-white/35 transition group-hover:text-white">{number}</span>
              <div>
                <h2 className="font-black text-white">{title}</h2>
                <p className="mt-2 text-sm leading-7 text-white/60">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

function AvisPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs font-black uppercase tracking-[0.35em] text-zinc-500">Avis client</p>
        <blockquote className="mt-8 text-3xl font-black leading-tight tracking-tight sm:text-6xl">
          "Diagnostic rapide et explication très claire. J'ai compris le voyant moteur sans payer une réparation inutile."
        </blockquote>
        <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">Client à Antananarivo</p>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl gap-10 border-y border-zinc-200 py-12 lg:grid-cols-3">
        <div className="flex items-start gap-4">
          <AlertTriangle className="mt-1 h-6 w-6 shrink-0" />
          <div>
            <h2 className="text-xl font-black">Périmètre clair</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600">MDG Scan Car ne réalise pas les réparations mécaniques complexes. Vous recevez un diagnostic et une orientation professionnelle.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Car className="mt-1 h-6 w-6 shrink-0" />
          <div>
            <h2 className="text-xl font-black">Compatibilité</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600">Le service concerne les véhicules équipés d'un port OBD II. Certains calculateurs peuvent varier selon la marque et l'année.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Wrench className="mt-1 h-6 w-6 shrink-0" />
          <div>
            <h2 className="text-xl font-black">Conseil indépendant</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600">L'objectif est d'éviter les diagnostics erronés, les remplacements inutiles et les dépenses non justifiées.</p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

function ContactPage() {
  const [name, setName] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = [
      "Bonjour MDG Scan Car, je souhaite un diagnostic automobile.",
      name ? `Nom : ${name}` : "",
      vehicle ? `Véhicule : ${vehicle}` : "",
      message ? `Problème : ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <PageShell>
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionIntro eyebrow="Contact" title="Un voyant, un doute, une perte de puissance ?">
            Contactez MDG Scan Car par téléphone ou WhatsApp pour planifier un diagnostic à Antananarivo.
          </SectionIntro>

          <div className="mt-10 space-y-5 text-base">
            <a href={`tel:${phoneDisplay.replace(/\s/g, "")}`} className="flex items-center gap-4 font-bold text-zinc-950 transition hover:text-zinc-600">
              <Phone className="h-5 w-5" /> {phoneDisplay}
            </a>
            <a href={`mailto:${email}`} className="flex items-center gap-4 font-bold text-zinc-950 transition hover:text-zinc-600">
              <Mail className="h-5 w-5" /> {email}
            </a>
            <p className="flex items-center gap-4 font-bold text-zinc-950">
              <MapPin className="h-5 w-5" /> Antananarivo
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="https://www.facebook.com/people/MDG-Scan-Car/61563094856348/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-3 text-sm font-bold transition hover:border-zinc-950"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/mdgscan_car/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-3 text-sm font-bold transition hover:border-zinc-950"
            >
              Instagram
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[2rem] bg-zinc-950 p-6 text-white shadow-2xl shadow-zinc-950/20 sm:p-8">
          <div className="flex items-center gap-3 border-b border-white/10 pb-5">
            <Stethoscope className="h-6 w-6" />
            <p className="font-black">Message rapide WhatsApp</p>
          </div>

          <div className="mt-7 grid gap-5">
            <label className="grid gap-2 text-sm font-bold">
              Nom
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-white/40"
                placeholder="Votre nom"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold">
              Véhicule
              <input
                value={vehicle}
                onChange={(event) => setVehicle(event.target.value)}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-white/40"
                placeholder="Ex : Toyota, Peugeot, BMW..."
              />
            </label>
            <label className="grid gap-2 text-sm font-bold">
              Symptômes constatés
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                rows={5}
                className="resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-white/40"
                placeholder="Voyant moteur, bruit, perte de puissance, démarrage difficile..."
              />
            </label>
          </div>

          <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-black text-black transition hover:bg-zinc-200">
            Envoyer sur WhatsApp <MessageCircle className="h-4 w-4" />
          </button>

          <p className="mt-5 text-xs leading-6 text-white/50">
            En envoyant ce message, vous serez redirigé vers WhatsApp avec un texte prérempli. Aucun paiement n'est demandé sur le site.
          </p>
        </form>
      </div>
    </PageShell>
  );
}

function Footer({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <footer className="bg-black px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
        <button type="button" onClick={() => onNavigate("accueil")} className="flex items-center gap-3 text-left">
          <LogoMark className="h-12 w-14 invert" />
          <div>
            <p className="font-black uppercase tracking-[0.2em]">MDG Scan Car</p>
            <p className="text-xs text-white/45">Diagnostic automobile OBD II à Antananarivo</p>
          </div>
        </button>
        <p className="max-w-xl text-xs leading-6 text-white/45 md:text-right">
          La précision qui protège votre route. Diagnostic, lecture codes défauts, rapport et orientation. Réparations mécaniques complexes non proposées.
        </p>
      </div>
    </footer>
  );
}

function getInitialPage(): Page {
  const hash = window.location.hash.replace("#", "") as Page;
  return navLinks.some((link) => link.page === hash) ? hash : "accueil";
}

export default function App() {
  const [activePage, setActivePage] = useState<Page>(getInitialPage);

  const navigate = (page: Page) => {
    setActivePage(page);
    window.history.pushState(null, "", `#${page}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const onHashChange = () => setActivePage(getInitialPage());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Header activePage={activePage} onNavigate={navigate} />
      <main>
        {activePage === "accueil" && <HomePage onNavigate={navigate} />}
        {activePage === "prestations" && <ServicesPage />}
        {activePage === "methode" && <MethodPage />}
        {activePage === "avis" && <AvisPage />}
        {activePage === "contact" && <ContactPage />}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}