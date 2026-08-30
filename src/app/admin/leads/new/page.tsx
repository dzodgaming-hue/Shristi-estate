'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { ArrowLeft, Save } from 'lucide-react'
import Link from 'next/link'

export default function NewLeadPage() {
  const router = useRouter()
  const supabase = createClient()
  const [isSaving, setIsSaving] = useState(false)
  
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    property_type: 'Office Space',
    required_space: '',
    preferred_location: '',
    budget: '',
    visit_date: '',
    visit_time: '',
    flexible_timing: false,
    requirements: '',
    lead_source: 'phone',
    status: 'new',
    admin_notes: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    setFormData(prev => ({ ...prev, [name]: val }))
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    const { error } = await supabase.from('property_leads').insert({
      name: formData.name,
      mobile: formData.mobile,
      email: formData.email || null,
      property_type: formData.property_type,
      required_space: formData.required_space || null,
      preferred_location: formData.preferred_location,
      budget: formData.budget || null,
      visit_date: formData.visit_date || null,
      visit_time: formData.visit_time || null,
      flexible_timing: formData.flexible_timing,
      requirements: formData.requirements || null,
      lead_source: formData.lead_source,
      status: formData.status,
      admin_notes: formData.admin_notes || null
    })

    if (!error) {
      alert('Lead created successfully')
      router.push('/admin/leads')
      router.refresh()
    } else {
      alert('Error creating lead: ' + error.message)
    }
    setIsSaving(false)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center space-x-4 mb-4">
        <Link href="/admin/leads" className="p-2 bg-white rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">
          <ArrowLeft className="w-5 h-5 text-slate-600" />
        </Link>
        <h2 className="text-2xl font-bold text-slate-900">Add New Lead</h2>
      </div>

      <form onSubmit={handleSave} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">Full Name *</label>
            <input required name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">Mobile *</label>
            <input required name="mobile" value={formData.mobile} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">Lead Source *</label>
            <select required name="lead_source" value={formData.lead_source} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 bg-white">
              <option value="website">Website</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="phone">Phone</option>
              <option value="walk_in">Walk-in</option>
              <option value="referral">Referral</option>
            </select>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">Property Type *</label>
            <select required name="property_type" value={formData.property_type} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 bg-white">
              <option value="Office Space">Office Space</option>
              <option value="IT / Business Park">IT / Business Park</option>
              <option value="Commercial Space">Commercial Space</option>
              <option value="Warehouse">Warehouse</option>
              <option value="Industrial Property">Industrial Property</option>
              <option value="Factory Space">Factory Space</option>
              <option value="Shop / Retail Space">Shop / Retail Space</option>
              <option value="Land / Plot">Land / Plot</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">Preferred Location *</label>
            <input required name="preferred_location" value={formData.preferred_location} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">Required Space</label>
            <input name="required_space" value={formData.required_space} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">Budget</label>
            <input name="budget" value={formData.budget} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">Visit Date</label>
            <input type="date" name="visit_date" value={formData.visit_date} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">Visit Time</label>
            <input type="text" name="visit_time" placeholder="e.g. 2:00 PM" value={formData.visit_time} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="flex items-center space-x-3">
            <input type="checkbox" name="flexible_timing" id="flexible_timing" checked={formData.flexible_timing} onChange={handleChange} className="w-5 h-5" />
            <label htmlFor="flexible_timing" className="text-sm font-semibold text-slate-700 cursor-pointer">Flexible Timing</label>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">Status</label>
            <select name="status" value={formData.status} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 bg-white">
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
        </div>

        <div className="pt-6 border-t border-slate-100 space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">Additional Requirements</label>
            <textarea name="requirements" rows={3} value={formData.requirements} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">Admin Notes (Private)</label>
            <textarea name="admin_notes" rows={3} value={formData.admin_notes} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex justify-end">
          <button
            type="submit"
            disabled={isSaving}
            className="flex items-center px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 disabled:opacity-70 transition-colors"
          >
            <Save className="w-5 h-5 mr-2" />
            {isSaving ? 'Creating...' : 'Create Lead'}
          </button>
        </div>
      </form>
    </div>
  )
}
