import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <Link href={"/privacy-policy"}>Pivacy Policy</Link>
      <Link href={"/terms-conditions"}>Terms & Conditions</Link>
    </footer>
  );
}
