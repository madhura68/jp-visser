import type { Metadata } from "next";

export async function generateStaticParams() {
  return [{ lang: "nl" }, { lang: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === "en";
  return {
    title: "Janpeter Visser — Software Engineer",
    description: isEn
      ? "Personal website of Janpeter Visser. Allround software engineer with 30 years of experience in full-stack development, from C++ to Angular and .NET."
      : "Persoonlijke website van Janpeter Visser. Allround software engineer met 30 jaar ervaring in full-stack development, van C++ tot Angular en .NET.",
    metadataBase: new URL("https://jp-visser.nl"),
    openGraph: {
      title: "Janpeter Visser — Software Engineer",
      description: isEn
        ? "Allround software engineer with 30 years of experience in full-stack development."
        : "Allround software engineer met 30 jaar ervaring in full-stack development.",
      url: `https://jp-visser.nl/${lang}`,
      siteName: "Janpeter Visser",
      locale: isEn ? "en_GB" : "nl_NL",
      type: "website",
    },
  };
}

export default function LangLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
