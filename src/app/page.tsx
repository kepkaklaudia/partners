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
      "flex flex-col xs:flex-row bg-gray-100 text-gray-500 p-4 gap-8 items-center justify-between w-[95%] mx-auto text-sm lg:text-base font-light",
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

const Title = ({ title, id }: { title: string; id?: string }) => {
  return (
    <h2
      id={id}
      className="w-[95%] mx-auto text-2xl lg:text-3xl mt-6 font-medium"
    >
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
      <main className="flex flex-col gap-4 items-center sm:items-start min-h-screen w-full mx-auto">
        <div className="w-[95%] flex h-auto justify-center relative mt-[70px] mx-auto ">
          <Image
            src="/full2.jpg"
            alt=""
            width="1440"
            height="720"
            className="w-full h-auto"
          />
          <div className="absolute w-fit max-w-screen-3xl mx-auto inset-0 text-white text-sm text-center flex flex-col items-center justify-center">
            <a href="#form" className="text-white flex flex-col gap-2">
              <span className="text-2xl font-medium">
                Zostań naszym partnerem
              </span>

              <span className="text-gray-300">Zacznij współpracę</span>
            </a>
          </div>
        </div>
        <BecomePartner className="mb-4" />
        <div className="flex flex-col w-[95%] mx-auto mb-4">
          <h1 className="text-3xl lg:text-4xl font-medium">
            Poznaj markę Balhanger
          </h1>
          <p className="text-gray-500">
            Zobacz nasze osiągnięcia i park maszynowy
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 w-[95%] mx-auto">
          <div className="sm:w-1/3 h-auto self-center">
            <Image
              src="/building1.jpg"
              alt=""
              width="2835"
              height="2268"
              className="w-full h-auto"
            />
          </div>
          <p className="sm:w-2/3 bg-gray-100 p-4 text-gray-500 font-light text-sm lg:text-base leading-loose">
            <span>
              Jako wiodący producent przyczep do samochodów osobowych oferujemy
              partnerom biznesowym niezawodność, najwyższą jakość
              i&nbsp;innowacyjność. Nasze produkty powstają z&nbsp;myślą
              o&nbsp;różnorodnych zastosowaniach – od&nbsp;przewozu bagażu
              i&nbsp;sprzętu sportowego, przez modele kempingowe, aż po
              rozwiązania dla bardziej wymagających&nbsp;zadań.
            </span>
            <span className="hidden text-sm lg:text-base leading-loose lg:block mt-4">
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
        <span className="w-[95%] mx-auto lg:hidden text-sm text-gray-500 font-light lg:text-base leading-loose">
          Własny dział konstrukcyjny stale rozwija nowe projekty, uwzględniając
          aktualne trendy i&nbsp;potrzeby rynku, co&nbsp;pozwala nam oferować
          nowoczesne i&nbsp;zaawansowane rozwiązania. Z&nbsp;kolei
          wyspecjalizowany zespół ds.&nbsp;homologacji dba o&nbsp;zgodność
          naszych produktów z&nbsp;obowiązującymi normami, zapewniając pełne
          wsparcie&nbsp;techniczne.
        </span>
        <Title title="Nasza oferta" />

        <p className="w-[95%] mx-auto text-sm text-gray-500 font-light lg:text-base leading-loose">
          Nasze serie przyczep oferują modele zróżnicowane pod względem
          wymiarów, liczby osi oraz dopuszczalnej masy całkowitej. Każda
          konstrukcja została starannie przemyślana, aby zapewnić maksymalną
          funkcjonalność i&nbsp;spełnić oczekiwania&nbsp;użytkowników.
        </p>
        <div className="flex gap-6 flex-wrap w-[95%] max-w-[600px] lg:max-w-[1200px] mx-auto justify-center my-12">
          {trailerTypes.map(({ label, image, href }) => (
            <a
              target="_blank"
              rel="noreferrer noopener"
              href={href}
              key={label}
              className="w-full xs:w-1/3 lg:w-[18%] max-w-[150px] h-auto bg-gray-100 p-4"
            >
              <Image
                src={image}
                alt=""
                width="5712"
                height="3213"
                className="w-auto h-[100px]"
              />
              <p className="font-light">{label}</p>
            </a>
          ))}
        </div>

        <p className="w-[95%] mx-auto text-gray-500 font-light leading-loose -mb-4">
          Współpraca z nami to nie tylko dostęp do wysokiej jakości produktów,
          ale także partnerskie podejście i profesjonalne wsparcie na każdym
          etapie. Nasi specjaliści chętnie podzielą się wiedzą i doświadczeniem,
          pomagając w wyborze najlepszego rozwiązania oraz w skutecznym
          wprowadzeniu produktów na rynek. Zapraszamy do współpracy – razem
          możemy rozwijać rynek przyczep samochodowych, budując trwałe i
          korzystne relacje.
        </p>
        <Title title="Dlaczego Balhanger?" />
        <div className="flex flex-col w-[95%] mx-auto gap-6 mt-4">
          {sections.map(({ title, content, image }) => (
            <div
              key={title}
              className="w-full flex flex-col min-[877px]:flex-row h-auto  gap-4"
            >
              <div className="flex flex-col p-4 min-[877px]:w-1/2 gap-2  bg-gray-100">
                <p className="w-full text-lg">{title}</p>
                <p className="text-sm lg:text-base font-light text-gray-500  leading-loose lg:leading-loose">
                  {content}
                </p>
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
      </main>
    </>
  );
}
