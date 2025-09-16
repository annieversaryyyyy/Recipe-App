"use client";
import { siteConfig } from "@/config/site.config";
import { usePathname } from "next/navigation";

const PageContent = () => {
  const pathname = usePathname();
  const pageText =
    siteConfig.pagesContent[pathname as keyof typeof siteConfig.pagesContent];

  if (!pageText) {
    return <div>Страница не найдена...</div>;
  }

  return <p className="p-12 text-xl">{pageText.content}</p>
};
export default PageContent;
