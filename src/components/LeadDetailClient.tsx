'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { format } from 'date-fns'
import { createClient } from '@/lib/supabase/client'
import { Phone, MessageCircle, Calendar, Edit, ArrowLeft, Save } from 'lucide-react'
import Link from 'next/link'

export function LeadDetailClient({ initialLead }: { initialLead: any }) {
  const [lead, setLead] = useState(initialLead)
  const [isEditingNote, setIsEditingNote] = useState(false)
  const [adminNotes, setAdminNotes] = useState(lead.admin_notes || '')
  const [status, setStatus] = useState(lead.status)
  const [visitDate, setVisitDate] = useState(lead.visit_date || '')
  const [visitTime, setVisitTime] = useState(lead.visit_time || '')
  const [isSaving, setIsSaving] = useState(false)
  
  const supabase = createClient()
  const router = useRouter()

  const handleSave = async () => {
    if (status === 'visit_scheduled' && (!visitDate || !visitTime)) {
      alert('Please select a visit date and time before scheduling the visit.')
      return
    }

    setIsSaving(true)
    const oldStatus = lead.status

    const { error } = await supabase.from('property_leads').update({
      status,
      visit_date: visitDate || null,
      visit_time: visitTime || null,
      admin_notes: adminNotes || null
    }).eq('id', lead.id)

    if (!error) {
      if (oldStatus !== status) {
        // Log activity
        await supabase.from('lead_activity').insert({
          lead_id: lead.id,
          action: 'Status Changed',
          old_status: oldStatus,
          new_status: status,
          note: `Status changed from ${oldStatus} to ${status}`
        })
      }
      
      setLead({ ...lead, status, visit_date: visitDate, visit_time: visitTime, admin_notes: adminNotes })
      setIsEditingNote(false)
      alert('Lead updated successfully.')
      router.refresh()
    } else {
      alert('Error updating lead.')
    }
    setIsSaving(false)
  }

  const generateWhatsAppMsg = () => {
    return encodeURIComponent(
      `Hello ${lead.name},\nThis is SHRISTI ESTATE regarding your property requirement.\nProperty Type: ${lead.property_type}\nRequired Space: ${lead.required_space || 'Not specified'}\nPreferred Location: ${lead.preferred_location}\nWe would be happy to assist you.\nThank you.`
    )
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex items-center space-x-4 mb-4">
        <Link href="/admin/leads" className="p-2 bg-white rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">
          <ArrowLeft className="w-5 h-5 text-slate-600" />
        </Link>
        <h2 className="text-2xl font-bold text-slate-900">Lead Details</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
              <h3 className="font-semibold text-slate-800">CONTACT INFORMATION</h3>
            </div>
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-slate-500 mb-1">Full Name</p>
                <p className="font-medium text-slate-900">{lead.name}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Mobile</p>
                <div className="flex items-center space-x-2">
                  <p className="font-medium text-slate-900">{lead.mobile}</p>
                  <a href={`tel:${lead.mobile}`} className="text-blue-600 p-1 hover:bg-blue-50 rounded"><Phone className="w-4 h-4" /></a>
                  <a href={`https://wa.me/91${lead.mobile.replace(/\D/g, '').slice(-10)}?text=${generateWhatsAppMsg()}`} target="_blank" rel="noreferrer" className="text-green-600 p-1 hover:bg-green-50 rounded"><MessageCircle className="w-4 h-4" /></a>
                </div>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Email</p>
                <p className="font-medium text-slate-900">{lead.email || 'N/A'}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Lead Source</p>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium capitalize border border-slate-200">
                  {lead.lead_source.replace('_', '-')}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
              <h3 className="font-semibold text-slate-800">PROPERTY REQUIREMENT</h3>
            </div>
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-slate-500 mb-1">Property Type</p>
                <p className="font-medium text-slate-900">{lead.property_type}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Location</p>
                <p className="font-medium text-slate-900">{lead.preferred_location}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Required Space</p>
                <p className="font-medium text-slate-900">{lead.required_space || 'N/A'}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 mb-1">Budget</p>
                <p className="font-medium text-slate-900">{lead.budget || 'N/A'}</p>
              </div>
              {lead.requirements && (
                <div className="sm:col-span-2">
                  <p className="text-sm text-slate-500 mb-1">Additional Requirements</p>
                  <p className="font-medium text-slate-900 bg-slate-50 p-4 rounded-lg border border-slate-100 whitespace-pre-wrap">{lead.requirements}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
              <h3 className="font-semibold text-slate-800">STATUS & VISIT</h3>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm text-slate-500 mb-2">Current Status</label>
                <select 
                  value={status} 
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                >
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
              </div>

              <div>
                <label className="block text-sm text-slate-500 mb-2">Visit Date</label>
                <input 
                  type="date" 
                  value={visitDate}
                  onChange={(e) => setVisitDate(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
                />
              </div>

              <div>
                <label className="block text-sm text-slate-500 mb-2">Visit Time</label>
                <input 
                  type="text"
                  placeholder="e.g. 10:00 AM" 
                  value={visitTime}
                  onChange={(e) => setVisitTime(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm text-slate-500">Flexible Timing:</span>
                <span className="font-medium text-slate-900">{lead.flexible_timing ? 'Yes' : 'No'}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
              <h3 className="font-semibold text-slate-800">ADMIN NOTES</h3>
              <button onClick={() => setIsEditingNote(!isEditingNote)} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                {isEditingNote ? 'Cancel' : 'Edit'}
              </button>
            </div>
            <div className="p-6">
              {isEditingNote ? (
                <textarea
                  value={adminNotes}
                  onChange={(e) => setAdminNotes(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none min-h-[120px]"
                  placeholder="Add private admin notes here..."
                ></textarea>
              ) : (
                <p className="text-slate-700 whitespace-pre-wrap min-h-[120px]">
                  {adminNotes || <span className="text-slate-400 italic">No admin notes added yet.</span>}
                </p>
              )}
            </div>
          </div>

          <button
            onClick={handleSave}
            disabled={isSaving}
            className="w-full py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center disabled:opacity-70"
          >
            <Save className="w-5 h-5 mr-2" />
            {isSaving ? 'Saving...' : 'Save Changes'}
          </button>
          
          <div className="text-xs text-slate-400 text-center">
            Created: {format(new Date(lead.created_at), 'PPP p')}<br/>
            Updated: {format(new Date(lead.updated_at), 'PPP p')}
          </div>
        </div>
      </div>
    </div>
  )
}
