import { createClient } from '@/lib/supabase/server'
import PropertyTable from '@/components/PropertyTable'

export const revalidate = 0 // Disable caching for admin

export default async function PropertiesDashboard() {
  const supabase = await createClient()

  // Fetch properties
  const { data: properties, error } = await supabase
    .from('properties')
    .select('id, title, slug, location, availability_status, possession_status, created_at')
    .order('created_at', { ascending: false })

  if (error) {
    return <div>Error loading properties: {error.message}</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Properties Management</h2>
          <p className="text-slate-500 mt-1">Manage availability and possession statuses directly.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <PropertyTable initialProperties={properties || []} />
      </div>
    </div>
  )
}
