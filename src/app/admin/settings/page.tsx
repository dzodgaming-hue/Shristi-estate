'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Save } from 'lucide-react'

export default function SettingsPage() {
  const [settings, setSettings] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const supabase = createClient()

  useEffect(() => {
    async function loadSettings() {
      const { data } = await supabase.from('site_settings').select('setting_key, setting_value')
      if (data) {
        const obj: Record<string, string> = {}
        data.forEach(s => {
          obj[s.setting_key] = s.setting_value
        })
        setSettings(obj)
      }
      setLoading(false)
    }
    loadSettings()
  }, [supabase])

  const handleChange = (key: string, value: string) => {
    setSettings(prev => ({ ...prev, [key]: value }))
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    
    // Convert to array of updates
    const updates = Object.entries(settings).map(([key, value]) => ({
      setting_key: key,
      setting_value: value,
      updated_at: new Date().toISOString()
    }))

    const { error } = await supabase.from('site_settings').upsert(updates, { onConflict: 'setting_key' })
    
    if (error) {
      alert('Error saving settings')
    } else {
      alert('Settings saved successfully')
    }
    setSaving(false)
  }

  if (loading) return <div>Loading settings...</div>

  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Site Settings</h2>
        <p className="text-slate-500 mt-1">Manage global configuration for the lead management system.</p>
      </div>

      <form onSubmit={handleSave} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Company Name</label>
            <input
              type="text"
              required
              value={settings.company_name || ''}
              onChange={(e) => handleChange('company_name', e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">WhatsApp Number (with country code)</label>
            <input
              type="text"
              required
              value={settings.whatsapp_number || ''}
              onChange={(e) => handleChange('whatsapp_number', e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="e.g. 918750098666"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Business Phone</label>
            <input
              type="text"
              required
              value={settings.business_phone || ''}
              onChange={(e) => handleChange('business_phone', e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Business Email</label>
            <input
              type="email"
              required
              value={settings.business_email || ''}
              onChange={(e) => handleChange('business_email', e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Default Lead Status</label>
            <select
              value={settings.default_lead_status || 'new'}
              onChange={(e) => handleChange('default_lead_status', e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
            >
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
            </select>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-200">
          <button
            type="submit"
            disabled={saving}
            className="flex items-center justify-center px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 disabled:opacity-70 transition-colors"
          >
            <Save className="w-4 h-4 mr-2" />
            {saving ? 'Saving...' : 'Save Settings'}
          </button>
        </div>
      </form>
    </div>
  )
}
