import { redirect } from "next/navigation"
import { ecosystemCompanies, ecosystemDirections } from "@/lib/ecosystem-data"

const slugs = [...ecosystemDirections, ...ecosystemCompanies].map((item) => item.slug)

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }))
}

type PageProps = {
  params: Promise<{ slug: string }>
}

export default async function EcosystemSlugPage({ params }: PageProps) {
  const { slug } = await params

  if (!slugs.includes(slug)) {
    redirect("/catalog")
  }

  redirect(`/ecosystem/${slug}/index.html`)
}
