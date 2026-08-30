import { createClient } from '@/lib/supabase/server'
import { LeadDetailClient } from '@/components/LeadDetailClient'
import { notFound } from 'next/navigation'

export const revalidate = 0

// This approach handles async params correctly for Next.js 15
export default async function LeadDetailPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params
  const supabase = await createClient()

  const { data: lead, error } = await supabase
    .from('property_leads')
    .select('*')
    .eq('id', params.id)
    .single()

  if (error || !lead) {
    notFound()
  }

  return <LeadDetailClient initialLead={lead} />
}
