"use client";

import Link from "next/link";
import Script from "next/script";

export default function AboutPage() {
  return (
    <div>
      <h1>À propos</h1>

      <Script
        src="https://platform.linkedin.com/badges/js/profile.js"
        strategy="lazyOnload"
        onLoad={() => console.log("LinkedIn Badge script loaded successfully.")}
      />

      <div
        className="badge-base LI-profile-badge"
        data-locale="fr_FR"
        data-size="large"
        data-theme="dark"
        data-type="HORIZONTAL"
        data-vanity="evancharrier"
        data-version="v1"
      >
        <Link
          className="badge-base__link LI-simple-link"
          href="https://fr.linkedin.com/in/evancharrier?trk=profile-badge"
        >
          Evan Charrier
        </Link>
      </div>
    </div>
  );
}
