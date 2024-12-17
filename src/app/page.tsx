import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "./contactForm";

const sections = [
  {
    title: "Perfekcja w\u00A0każdym\u00A0detalu",
    content:
      "Nasze przyczepy są zaprojektowane oraz wykonane z\u00A0najwyższą precyzją i\u00A0dbałością o\u00A0każdy, nawet najdrobniejszy szczegół. Dzięki zastosowaniu nowoczesnych technologii, takich jak inteligentne systemy zabezpieczeń oraz zaawansowane oświetlenie LED, zapewniamy zarówno funkcjonalność, jak i\u00A0bezpieczeństwo.",
    image: "/detail.jpg",
  },
  {
    title: "Projektowanie z myślą o\u00A0użytkowniku",
    content:
      "Nasze przyczepy powstają w\u00A0oparciu o\u00A0dokładną analizę potrzeb użytkowników. Każdy projekt jest tworzony z\u00A0myślą o\u00A0praktyczności i\u00A0ergonomii, zapewniając wygodę użytkowania w\u00A0codziennych zadaniach. Współpracujemy z\u00A0najlepszymi inżynierami, aby dostarczać produkty funkcjonalne, wytrzymałe i\u00A0zgodne z\u00A0najnowszymi\u00A0standardami.",
    image: "/projects.jpg",
  },
  {
    title: "Lider w\u00A0nowoczesnych rozwiązaniach dla\u00A0branży",
    content:
      "W naszych produktach wykorzystujemy zaawansowane technologie, które zwiększają ich wydajność i\u00A0trwałość. Stosujemy innowacyjne materiały i\u00A0nowoczesne procesy produkcyjne, które gwarantują niezawodność w\u00A0każdych warunkach. Dzięki temu możemy zapewnić naszym klientom rozwiązania, które przewyższają\u00A0oczekiwania.",
    image: "/solutions.jpg",
  },
];

const trailerTypes = [
  {
    label: "Towarowe",
    image: "/cargo.svg",
    href: "https://balhanger.com/bh_pl/modele-przyczep/towarowe",
  },
  {
    label: "Podłodziowe",
    image: "/boat.svg",
    href: "https://balhanger.com/bh_pl/modele-przyczep/podlodziowe",
  },
  {
    label: "Budowlane",
    image: "/building.svg",
    href: "https://balhanger.com/bh_pl/modele-przyczep/budowlane",
  },
  {
    label: "Lawety",
    image: "/carTrailers.svg",
    href: "https://balhanger.com/bh_pl/modele-przyczep/lawety",
  },
  {
    label: "Motocyklowe",
    image: "/motorcycle.svg",
    href: "https://balhanger.com/bh_pl/modele-przyczep/motocyklowe",
  },
];

const BecomePartner = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "flex flex-col xs:flex-row bg-gray-100 text-gray-700 p-4 gap-8 items-center justify-between w-[95%] mx-auto text-sm lg:text-base",
      className
    )}
  >
    <p>
      Zostań naszym Partnerem. Wypełnij formularz i&nbsp;poznaj współpracę
      pełną&nbsp;korzyści.
    </p>
    <a
      href="#form"
      className="bg-black text-white px-4 py-2 sm:px-4 text-nowrap"
    >
      Zostań partnerem
    </a>
  </div>
);

const Title = ({ title, id }: { title: string, id?:string }) => {
  return (
    <h2 id={id} className="w-[95%] mx-auto text-2xl lg:text-3xl mt-6 font-semibold">
      {title}
    </h2>
  );
};

export default function Home() {
  return (
    <>
      <div
        className={cn(
          "justify-center w-screen flex fixed items-center z-50 h-[70px] menu:h-[100px] top-0 right-0 left-0 bg-white"
        )}
      >
        <Link className="focus-style" href="https://balhanger.com/bh_pl/">
          <Image
            src="/balhanger-black-logo.svg"
            height={20}
            width={110}
            className="w-28 xs:w-36 menu:w-44 h-auto"
            alt="Logo"
            priority={true}
          />
        </Link>
      </div>
      <main className="flex flex-col gap-8 items-center sm:items-start min-h-screen w-full mx-auto">
        <div className="w-full flex h-auto justify-center relative mt-[70px] mx-auto ">
          <Image
            src="/full.jpg"
            alt=""
            width="1440"
            height="720"
            className="w-full h-auto"
          />
          <div className="absolute w-[95%] menu:w-[98%] max-w-screen-3xl mx-auto top-4 xs:top-10  text-white text-base xs:text-xl sm:text-3xl lg:text-[40px] flex flex-col gap-4 lg:gap-5">
            <a
              href="#form"
              className="mt-2 md:mt-5 self-center xs:self-start p-2 sm:p-3 lg:p-4 bg-white text-black"
            >
              Zostań naszym Dealerem
            </a>
          </div>
        </div>
        <BecomePartner className="my-8" />
        <h1 className="w-[95%] mx-auto text-3xl lg:text-4xl mb-6 font-semibold">
          Poznaj markę Balhanger
        </h1>
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-1/3 h-auto">
            <Image
              src="/building.jpg"
              alt=""
              width="2835"
              height="2268"
              className="w-full h-auto"
            />
          </div>
          <p className="sm:w-2/3 bg-gray-100 p-4 text-gray-700 text-sm lg:text-base">
            <span>
              Jako wiodący producent przyczep do samochodów osobowych oferujemy
              partnerom biznesowym niezawodność, najwyższą jakość
              i&nbsp;innowacyjność. Nasze produkty powstają z&nbsp;myślą
              o&nbsp;różnorodnych zastosowaniach – od&nbsp;przewozu bagażu
              i&nbsp;sprzętu sportowego, przez modele kempingowe, aż po
              rozwiązania dla bardziej wymagających&nbsp;zadań.
            </span>
            <span className="hidden  text-sm lg:text-base min-[877px]:block mt-4">
              Własny dział konstrukcyjny stale rozwija nowe projekty,
              uwzględniając aktualne trendy i&nbsp;potrzeby rynku,
              co&nbsp;pozwala nam oferować nowoczesne i&nbsp;zaawansowane
              rozwiązania. Z&nbsp;kolei wyspecjalizowany zespół
              ds.&nbsp;homologacji dba o&nbsp;zgodność naszych produktów
              z&nbsp;obowiązującymi normami, zapewniając pełne
              wsparcie&nbsp;techniczne.
            </span>
          </p>
        </div>
        <span className="w-[95%] mx-auto min-[877px]:hidden">
          Własny dział konstrukcyjny stale rozwija nowe projekty, uwzględniając
          aktualne trendy i&nbsp;potrzeby rynku, co&nbsp;pozwala nam oferować
          nowoczesne i&nbsp;zaawansowane rozwiązania. Z&nbsp;kolei
          wyspecjalizowany zespół ds.&nbsp;homologacji dba o&nbsp;zgodność
          naszych produktów z&nbsp;obowiązującymi normami, zapewniając pełne
          wsparcie&nbsp;techniczne.
        </span>
        <Title title="Nasza oferta" />

        <p className="w-[95%] mx-auto">
          Nasze serie przyczep oferują modele zróżnicowane pod względem
          wymiarów, liczby osi oraz dopuszczalnej masy całkowitej. Każda
          konstrukcja została starannie przemyślana, aby zapewnić maksymalną
          funkcjonalność i&nbsp;spełnić oczekiwania&nbsp;użytkowników.
        </p>
        <div className="flex gap-12 flex-wrap mx-auto max-w-[800px] justify-center my-12">
          {trailerTypes.map(({ label, image, href }) => (
            <a
              target="_blank"
              rel="noreferrer noopener"
              href={href}
              key={label}
              className="w-full xs:w-2/5 sm:w-1/4 max-w-[200px] md:max-w-none h-auto bg-gray-100 p-4"
            >
              <Image
                src={image}
                alt=""
                width="5712"
                height="3213"
                className="w-auto h-[100px]"
              />
              <p className="font-semibold">{label}</p>
            </a>
          ))}
        </div>

        <p className="w-[95%] mx-auto">
          Współpraca z nami to nie tylko dostęp do wysokiej jakości produktów,
          ale także partnerskie podejście i profesjonalne wsparcie na każdym
          etapie. Nasi specjaliści chętnie podzielą się wiedzą i doświadczeniem,
          pomagając w wyborze najlepszego rozwiązania oraz w skutecznym
          wprowadzeniu produktów na rynek. Zapraszamy do współpracy – razem
          możemy rozwijać rynek przyczep samochodowych, budując trwałe i
          korzystne relacje.
        </p>
        <Title title="Dlaczego Balhanger?" />
        <div className="flex flex-col w-full my-8">
          {sections.map(({ title, content, image }) => (
            <div
              key={title}
              className="w-full flex flex-col min-[877px]:flex-row h-auto bg-gray-100"
            >
              <div className="flex flex-col py-4 mx-[2.5%] min-[877px]:w-1/2 gap-2 my-8 min-[877px]:my-0">
                <p className="font-semibold w-full text-lg">{title}</p>
                <p className="text-sm lg:text-base">{content}</p>
              </div>
              <div className="min-[877px]:w-1/2 h-auto justify-items-end">
                <Image
                  src={image}
                  alt=""
                  width="5712"
                  height="3213"
                  className="w-full h-auto min-[877px]:max-w-[700px]"
                />
              </div>
            </div>
          ))}
        </div>

        <Title id="form" title="Wypełnij formularz" />
        <ContactForm />

        <Title title=" Zapraszamy do współpracy" />

        <div
          className="w-full flex h-auto justify-center relative mx-auto mt-6"
        >
          <Image
            src="/partner.jpg"
            alt=""
            width="1440"
            height="720"
            className="w-full h-auto"
          />
          <div className="absolute w-[95%] menu:w-[98%] max-w-screen-3xl mx-auto bottom-4 xs:bottom-10  text-white  flex flex-col gap-4 lg:gap-5">
            <BecomePartner />
          </div>
        </div>
      </main>
    </>
  );
}
