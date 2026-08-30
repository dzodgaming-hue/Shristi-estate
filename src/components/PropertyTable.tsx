'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

type Property = {
  id: string
  title: string
  slug: string
  location: string
  availability_status: string | null
  possession_status: string | null
  created_at: string
}

export default function PropertyTable({ initialProperties }: { initialProperties: Property[] }) {
  const supabase = createClient()
  const [properties, setProperties] = useState<Property[]>(initialProperties)
  const [isUpdating, setIsUpdating] = useState<string | null>(null)

  const handleUpdate = async (id: string, field: 'availability_status' | 'possession_status', value: string) => {
    setIsUpdating(id)
    const { error } = await supabase
      .from('properties')
      .update({ [field]: value })
      .eq('id', id)

    if (!error) {
      setProperties(prev => prev.map(p => p.id === id ? { ...p, [field]: value } : p))
    } else {
      alert('Error updating property: ' + error.message)
    }
    setIsUpdating(null)
  }

  const availabilityOptions = [
    { value: 'available', label: 'Available' },
    { value: 'sold', label: 'Sold' },
    { value: 'rented', label: 'Rented' },
    { value: 'leased', label: 'Leased' },
    { value: 'inactive', label: 'Inactive' },
  ]

  const possessionOptions = [
    { value: 'ready_to_move', label: 'Ready to Move' },
    { value: 'under_construction', label: 'Under Construction' },
    { value: 'coming_soon', label: 'Coming Soon' },
    { value: 'pre_leased', label: 'Pre-Leased' },
  ]

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm text-slate-600">
        <thead className="bg-slate-50 text-slate-500 uppercase font-semibold text-xs border-b border-slate-200">
          <tr>
            <th className="px-6 py-4">Property</th>
            <th className="px-6 py-4">Location</th>
            <th className="px-6 py-4">Availability</th>
            <th className="px-6 py-4">Possession</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {properties.map((prop) => (
            <tr key={prop.id} className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4">
                <div className="font-semibold text-slate-900">{prop.title}</div>
                <div className="text-xs text-slate-400">{prop.slug}</div>
              </td>
              <td className="px-6 py-4">{prop.location}</td>
              <td className="px-6 py-4">
                <select
                  value={prop.availability_status || 'available'}
                  onChange={(e) => handleUpdate(prop.id, 'availability_status', e.target.value)}
                  disabled={isUpdating === prop.id}
                  className="bg-white border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 disabled:opacity-50"
                >
                  {availabilityOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </td>
              <td className="px-6 py-4">
                <select
                  value={prop.possession_status || ''}
                  onChange={(e) => handleUpdate(prop.id, 'possession_status', e.target.value)}
                  disabled={isUpdating === prop.id}
                  className="bg-white border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 disabled:opacity-50"
                >
                  <option value="">Select possession...</option>
                  {possessionOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
          {properties.length === 0 && (
            <tr>
              <td colSpan={4} className="px-6 py-8 text-center text-slate-500">
                No properties found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
