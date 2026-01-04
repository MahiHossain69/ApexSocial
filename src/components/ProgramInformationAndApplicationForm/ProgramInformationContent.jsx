import { ChevronRight, LayoutDashboard } from "lucide-react";
import { Button } from "../ui/button";
import { AiOutlineEdit } from "react-icons/ai";
import { InfoIcon, PdfIcon } from "../shared/svgs";
import { Link } from "react-router-dom";

const ProgramInformationContent = () => {
  const formsDownloadStep = [
    {
      id: "formsDownload-1",
      title: "Dokumenyencheckliste für deine Bewerbung",
    },
    {
      id: "formsDownload-2",
      title: "Auflistung der Kinderbetreuungsstunden / Worksheet",
      description:
        "Erzähl uns von deiner Erfahrung in der Betreuung von Kindern (sowohl beruflich als auch privat). Du musst mindestens 400 Stunden in der Kinderbetreuung nachweisen, um an dem Programm teilnehmen zu können.",
    },
    {
      id: "formsDownload-3",
      title: "Zwei kinderbezogene Referenzen",
      description:
        "Du benötigst zwei Referenzen von Personen, die deine Kinderbetreuungserfahrung bestätigen. Wenn du mit Kindern unter 2 Jahren arbeiten möchtest, musst du dir auf einer Referenz mindestens 200 Stunden in dem Bereich bestätigen lassen. Die Referenzen sollten nicht von Familienmitgliedern oder Verwandten sein.",
    },
    {
      id: "formsDownload-4",
      title: "Persönliche Referenz",
      description:
        "Die Persönliche Referenz sollte von einem guten Freund oder eine guten Freundin ausgefüllt werden (keine Familienmitglieder oder Verwandte).",
    },
    {
      id: "formsDownload-5",
      title: "Lehrerreferenz",
      description:
        "Die Lehrerreferenz sollte von einem Lehrer der Schule ausgefüllt werden, die du besuchst bzw. besucht hast.",
    },
    {
      id: "formsDownload-6",
      title: "Arztbericht",
      description:
        "Der Arztbericht wird von einem Arzt ausgefüllt und muss dessen Unterschrift und Stempel besitzen.",
    },
  ];

  return (
    <div className="w-full flex flex-col">
      <div className="flex  items-center justify-between">
        <p className="w-fit flex items-center gap-4  text-main-900 text-base md:text-lg leading-normal font-semibold">
          Document Forms to Download
        </p>
        <div className="flex gap-3">
          <Button className="bg-BrandPrimary hover:bg-BrandPrimary text-white mr-auto">
            <LayoutDashboard /> Dashboard
          </Button>
          <Button className="bg-BrandPrimary hover:bg-BrandPrimary text-white mr-auto">
            <AiOutlineEdit /> Edit Application
          </Button>
        </div>
      </div>
      <div className="flex w-full cardShadow my-6 border border-soft-200 rounded-[12px] p-4 md:p-6 flex-col gap-4">
        {formsDownloadStep.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-2 pb-2 border-b border-[#eaeeee]"
          >
            <div className="flex items-center gap-2">
              <div className="w-[38px] h-10 rounded-[12px] border border-neutral-700 flex items-center justify-center">
                <PdfIcon className="w-3.5 h-auto" />
              </div>
              <h2 className=" text-base md:text-lg leading-snug font-bold underline text-BrandPrimary underline-offset-4">
                {item.title}
              </h2>
              <ChevronRight className="text-BrandPrimary" />
            </div>
            {item.description && (
              <p className="text-soft-500 text-sm md:text-base leading-normal p-2">
                {item.description}
              </p>
            )}
          </div>
        ))}

        <div className="flex items-center gap-2">
          <InfoIcon className="text-soft-400 w-5 cursor-pointer h-auto" />
          <p className="text-xs text-black">
            Damit die Formulare bei dir korrekt angezeigt werden, installiere
            bitte das Programm &nbsp;
            <Link
              to={"http://www.adobe.de/products/acrobat/readstep2.html"}
              className="text-blue-light hover:text-blue-darker"
            >
              Acrobat Reader®.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgramInformationContent;
