import { createClient } from '@/lib/supabase/server'
import { format } from 'date-fns'

export const revalidate = 0 // Disable caching for admin

export default async function AdminDashboard() {
  const supabase = await createClient()

  const { data: leads, error } = await supabase
    .from('property_leads')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return <div>Error loading dashboard data.</div>
  }

  // Calculate statistics
  const totalLeads = leads.length
  
  const stats = {
    new: leads.filter(l => l.status === 'new').length,
    contacted: leads.filter(l => l.status === 'contacted').length,
    requirement_shared: leads.filter(l => l.status === 'requirement_shared').length,
    visit_scheduled: leads.filter(l => l.status === 'visit_scheduled').length,
    visit_completed: leads.filter(l => l.status === 'visit_completed').length,
    follow_up: leads.filter(l => l.status === 'follow_up').length,
    negotiation: leads.filter(l => l.status === 'negotiation').length,
    closed: leads.filter(l => l.status === 'closed').length,
    not_interested: leads.filter(l => l.status === 'not_interested').length,
  }

  const sources = {
    website: leads.filter(l => l.lead_source === 'website').length,
    whatsapp: leads.filter(l => l.lead_source === 'whatsapp').length,
    phone: leads.filter(l => l.lead_source === 'phone').length,
    walk_in: leads.filter(l => l.lead_source === 'walk_in').length,
    referral: leads.filter(l => l.lead_source === 'referral').length,
  }

  const todayStr = format(new Date(), 'yyyy-MM-dd')
  const upcomingVisits = leads
    .filter(l => l.visit_date && l.visit_date >= todayStr)
    .sort((a, b) => a.visit_date.localeCompare(b.visit_date))
    .slice(0, 5)

  const StatCard = ({ title, value, color }: { title: string, value: number, color: string }) => (
    <div className={`p-6 rounded-2xl border ${color} bg-white shadow-sm`}>
      <h3 className="text-sm font-medium text-slate-500 mb-1">{title}</h3>
      <div className="text-3xl font-bold text-slate-900">{value}</div>
    </div>
  )

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-slate-900">Dashboard</h2>
        <p className="text-slate-500 mt-1">Overview of your real estate leads.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <StatCard title="Total Leads" value={totalLeads} color="border-blue-100" />
        <StatCard title="New Leads" value={stats.new} color="border-green-100" />
        <StatCard title="Visit Scheduled" value={stats.visit_scheduled} color="border-purple-100" />
        <StatCard title="Negotiation" value={stats.negotiation} color="border-orange-100" />
        <StatCard title="Closed" value={stats.closed} color="border-emerald-100" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Leads by Status</h3>
          <div className="space-y-3">
            {Object.entries(stats).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <span className="text-slate-600 capitalize">{key.replace('_', ' ')}</span>
                <span className="font-semibold text-slate-900">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Leads by Source</h3>
          <div className="space-y-3">
            {Object.entries(sources).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <span className="text-slate-600 capitalize">{key.replace('_', ' ')}</span>
                <span className="font-semibold text-slate-900">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Upcoming Visits</h3>
        {upcomingVisits.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 text-sm">
                  <th className="pb-3 font-medium">Customer</th>
                  <th className="pb-3 font-medium">Property</th>
                  <th className="pb-3 font-medium">Date</th>
                  <th className="pb-3 font-medium">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {upcomingVisits.map((visit) => (
                  <tr key={visit.id}>
                    <td className="py-3">
                      <div className="font-medium text-slate-900">{visit.name}</div>
                      <div className="text-sm text-slate-500">{visit.mobile}</div>
                    </td>
                    <td className="py-3 text-slate-700">{visit.property_type}</td>
                    <td className="py-3 text-slate-900 font-medium">
                      {visit.visit_date}
                      {visit.visit_date === todayStr && (
                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                          Today
                        </span>
                      )}
                    </td>
                    <td className="py-3 text-slate-700">{visit.visit_time || 'TBD'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-slate-500">No upcoming visits scheduled.</p>
        )}
      </div>
    </div>
  )
}
