import { createClient } from '@/lib/supabase/server'
import { LeadTable } from '@/components/LeadTable'

export const revalidate = 0

export default async function LeadsPage() {
  const supabase = await createClient()
  
  const { data: leads, error } = await supabase
    .from('property_leads')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return <div className="text-red-500">Error loading leads: {error.message}</div>
  }

  return (
    <div className="w-full">
      <LeadTable initialLeads={leads} />
    </div>
  )
}
