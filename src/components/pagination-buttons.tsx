import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type PaginationButtonsProps = {
  prevPath: string;
  nextPath: string;
};

const btnStyles =
  "text-white flex items-center gap-x-2 py-3 px-5 bg-white/5 rounded-md opacity-75 hover:opacity-100 transition text-sm";

export default function PaginationButtons({
  prevPath,
  nextPath,
}: PaginationButtonsProps) {
  return (
    <section className="flex justify-between w-full">
      {prevPath ? (
        <Link href={prevPath} className={btnStyles}>
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div />
      )}

      {nextPath && (
        <Link href={nextPath} className={btnStyles}>
          Next
          <ArrowRightIcon />
        </Link>
      )}
    </section>
  );
}
