'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { format } from 'date-fns'
import { Search, Download, Eye, MessageCircle, Phone, Plus, Filter, X } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

export function LeadTable({ initialLeads }: { initialLeads: any[] }) {
  const [leads, setLeads] = useState(initialLeads)
  const [search, setSearch] = useState('')
  const [sourceFilter, setSourceFilter] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [isDeleting, setIsDeleting] = useState<string | null>(null)

  const supabase = createClient()

  const filteredLeads = useMemo(() => {
    return leads.filter(lead => {
      const matchesSearch = 
        lead.name.toLowerCase().includes(search.toLowerCase()) ||
        lead.mobile.includes(search) ||
        (lead.email && lead.email.toLowerCase().includes(search.toLowerCase())) ||
        lead.property_type.toLowerCase().includes(search.toLowerCase()) ||
        lead.preferred_location.toLowerCase().includes(search.toLowerCase())

      const matchesSource = sourceFilter ? lead.lead_source === sourceFilter : true
      const matchesStatus = statusFilter ? lead.status === statusFilter : true

      return matchesSearch && matchesSource && matchesStatus
    })
  }, [leads, search, sourceFilter, statusFilter])

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this lead?')) return
    
    setIsDeleting(id)
    const { error } = await supabase.from('property_leads').delete().eq('id', id)
    if (!error) {
      setLeads(leads.filter(l => l.id !== id))
    } else {
      alert('Error deleting lead')
    }
    setIsDeleting(null)
  }

  const exportCSV = () => {
    const headers = ['ID', 'Name', 'Mobile', 'Email', 'Property Type', 'Required Space', 'Location', 'Budget', 'Visit Date', 'Visit Time', 'Flexible Timing', 'Lead Source', 'Status', 'Created At']
    const csvContent = [
      headers.join(','),
      ...filteredLeads.map(l => [
        l.id, `"${l.name}"`, l.mobile, l.email || '', `"${l.property_type}"`, `"${l.required_space || ''}"`, `"${l.preferred_location}"`, `"${l.budget || ''}"`,
        l.visit_date || '', l.visit_time || '', l.flexible_timing, l.lead_source, l.status, l.created_at
      ].join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', `leads_export_${format(new Date(), 'yyyyMMdd_HHmm')}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'new': return 'bg-blue-100 text-blue-800'
      case 'contacted': return 'bg-yellow-100 text-yellow-800'
      case 'visit_scheduled': return 'bg-purple-100 text-purple-800'
      case 'visit_completed': return 'bg-indigo-100 text-indigo-800'
      case 'closed': return 'bg-green-100 text-green-800'
      case 'not_interested': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-slate-900">Lead Management</h2>
        <div className="flex items-center space-x-3">
          <button onClick={exportCSV} className="flex items-center px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
            <Download className="w-4 h-4 mr-2" /> Export CSV
          </button>
          <Link href="/admin/leads/new" className="flex items-center px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
            <Plus className="w-4 h-4 mr-2" /> Add Lead
          </Link>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search by name, mobile, property type..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>
        
        <div className="flex gap-4 w-full md:w-auto">
          <select 
            value={sourceFilter} 
            onChange={(e) => setSourceFilter(e.target.value)}
            className="border border-slate-300 rounded-lg px-4 py-2 bg-white outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Sources</option>
            <option value="website">Website</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="phone">Phone</option>
            <option value="walk_in">Walk-in</option>
            <option value="referral">Referral</option>
          </select>

          <select 
            value={statusFilter} 
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-slate-300 rounded-lg px-4 py-2 bg-white outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Statuses</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="requirement_shared">Requirement Shared</option>
            <option value="visit_scheduled">Visit Scheduled</option>
            <option value="visit_completed">Visit Completed</option>
            <option value="follow_up">Follow Up</option>
            <option value="negotiation">Negotiation</option>
            <option value="closed">Closed</option>
            <option value="not_interested">Not Interested</option>
          </select>
          
          {(search || sourceFilter || statusFilter) && (
            <button 
              onClick={() => { setSearch(''); setSourceFilter(''); setStatusFilter(''); }}
              className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg"
              title="Clear Filters"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-700">Name & Contact</th>
                <th className="px-6 py-4 font-semibold text-slate-700">Property</th>
                <th className="px-6 py-4 font-semibold text-slate-700">Source</th>
                <th className="px-6 py-4 font-semibold text-slate-700">Status</th>
                <th className="px-6 py-4 font-semibold text-slate-700">Date</th>
                <th className="px-6 py-4 font-semibold text-slate-700 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredLeads.map(lead => (
                <tr key={lead.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-slate-900">{lead.name}</div>
                    <div className="text-slate-500">{lead.mobile}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-slate-900">{lead.property_type}</div>
                    <div className="text-slate-500 text-xs">{lead.preferred_location}</div>
                  </td>
                  <td className="px-6 py-4 capitalize text-slate-600">
                    {lead.lead_source.replace('_', '-')}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(lead.status)}`}>
                      {lead.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-600">
                    {format(new Date(lead.created_at), 'MMM d, yyyy')}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end space-x-2">
                      <a href={`tel:${lead.mobile}`} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Call">
                        <Phone className="w-4 h-4" />
                      </a>
                      <a href={`https://wa.me/91${lead.mobile.replace(/\D/g, '').slice(-10)}`} target="_blank" rel="noreferrer" className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="WhatsApp">
                        <MessageCircle className="w-4 h-4" />
                      </a>
                      <Link href={`/admin/leads/${lead.id}`} className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors" title="View Details">
                        <Eye className="w-4 h-4" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredLeads.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-slate-500">
                    No leads found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden divide-y divide-slate-200">
          {filteredLeads.map(lead => (
            <div key={lead.id} className="p-4 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold text-slate-900 text-lg">{lead.name}</div>
                  <div className="text-slate-500">{lead.mobile}</div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(lead.status)}`}>
                  {lead.status.replace('_', ' ')}
                </span>
              </div>
              <div className="text-sm text-slate-700">
                <span className="font-medium">Property:</span> {lead.property_type} in {lead.preferred_location}
              </div>
              <div className="text-sm text-slate-700">
                <span className="font-medium">Source:</span> <span className="capitalize">{lead.lead_source}</span>
              </div>
              <div className="flex space-x-2 pt-2 border-t border-slate-100">
                <a href={`tel:${lead.mobile}`} className="flex-1 flex justify-center items-center py-2 bg-slate-50 text-slate-700 rounded-lg border border-slate-200">
                  <Phone className="w-4 h-4 mr-2" /> Call
                </a>
                <a href={`https://wa.me/91${lead.mobile.replace(/\D/g, '').slice(-10)}`} target="_blank" rel="noreferrer" className="flex-1 flex justify-center items-center py-2 bg-green-50 text-green-700 rounded-lg border border-green-200">
                  <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                </a>
                <Link href={`/admin/leads/${lead.id}`} className="flex-1 flex justify-center items-center py-2 bg-slate-900 text-white rounded-lg">
                  <Eye className="w-4 h-4 mr-2" /> View
                </Link>
              </div>
            </div>
          ))}
          {filteredLeads.length === 0 && (
            <div className="p-8 text-center text-slate-500">
              No leads found.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
