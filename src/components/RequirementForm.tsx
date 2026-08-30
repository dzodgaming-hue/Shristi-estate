'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { requirementSchema, type RequirementFormData } from '@/lib/validation'
import { createClient } from '@/lib/supabase/client'
import { format } from 'date-fns'
import { MessageCircle } from 'lucide-react'

export function RequirementForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submittedData, setSubmittedData] = useState<RequirementFormData | null>(null)
  
  const { register, handleSubmit, formState: { errors } } = useForm<RequirementFormData>({
    resolver: zodResolver(requirementSchema),
    defaultValues: { flexible_timing: false }
  })

  const supabase = createClient()

  const onSubmit = async (data: RequirementFormData) => {
    setIsSubmitting(true)
    try {
      const { error } = await supabase.from('property_leads').insert({
        name: data.name,
        mobile: data.mobile,
        email: data.email || null,
        property_type: data.property_type,
        required_space: data.required_space || null,
        preferred_location: data.preferred_location,
        budget: data.budget || null,
        visit_date: data.visit_date || null,
        visit_time: data.visit_time || null,
        flexible_timing: data.flexible_timing || false,
        requirements: data.requirements || null,
        lead_source: 'website',
        status: 'new'
      })

      if (error) throw error

      setSubmittedData(data)
      setIsSuccess(true)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your requirement. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const openWhatsApp = () => {
    if (!submittedData) return
    
    const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '918750098666'
    const text = `Hello SHRISTI ESTATE,\nI would like assistance with a property requirement.\n\nName: ${submittedData.name}\nMobile: ${submittedData.mobile}\nEmail: ${submittedData.email || 'N/A'}\nProperty Type: ${submittedData.property_type}\nRequired Space: ${submittedData.required_space || 'N/A'}\nPreferred Location: ${submittedData.preferred_location}\nBudget: ${submittedData.budget || 'N/A'}\nPreferred Visit Date: ${submittedData.visit_date || 'N/A'}\nPreferred Visit Time: ${submittedData.visit_time || 'N/A'}\nFlexible Timing: ${submittedData.flexible_timing ? 'Yes' : 'No'}\nAdditional Requirements:\n${submittedData.requirements || 'None'}\n\nPlease share suitable properties.\nThank you.`
    
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`, '_blank')
  }

  if (isSuccess) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl mx-auto text-center border border-gray-100">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank you for contacting SHRISTI ESTATE.</h3>
        <p className="text-gray-600 mb-8">
          Your requirement has been received. Our property consultant will contact you shortly.
        </p>
        <button
          onClick={openWhatsApp}
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all bg-green-500 rounded-xl hover:bg-green-600 shadow-lg shadow-green-500/30"
        >
          <MessageCircle className="w-6 h-6 mr-2" />
          CHAT ON WHATSAPP
        </button>
      </div>
    )
  }

  const today = format(new Date(), 'yyyy-MM-dd')

  return (
    <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl max-w-4xl mx-auto border border-gray-100">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-3">TELL US YOUR SPACE REQUIREMENT</h2>
        <p className="text-slate-600">Share your requirement and our property experts will help you find the right commercial space.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Field 1: Full Name */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">Full Name *</label>
            <input
              {...register('name')}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Enter your full name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Field 2: Mobile Number */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">Mobile Number *</label>
            <input
              {...register('mobile')}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Enter 10-digit mobile number"
              type="tel"
            />
            {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile.message}</p>}
          </div>

          {/* Field 3: Email */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">Email Address</label>
            <input
              {...register('email')}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Enter your email address"
              type="email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Field 4: Property Type */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">What type of property do you need? *</label>
            <select
              {...register('property_type')}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
            >
              <option value="">Select Property Type</option>
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
            {errors.property_type && <p className="text-red-500 text-sm">{errors.property_type.message}</p>}
          </div>

          {/* Field 5: Required Space */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">Required Space</label>
            <input
              {...register('required_space')}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Example: 2500 Sq. Ft."
              list="spaceOptions"
            />
            <datalist id="spaceOptions">
              <option value="500 Sq. Ft." />
              <option value="1500 Sq. Ft." />
              <option value="2500 Sq. Ft." />
              <option value="5000 Sq. Ft." />
              <option value="10000 Sq. Ft." />
              <option value="25000 Sq. Ft." />
            </datalist>
          </div>

          {/* Field 6: Preferred Location */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">Preferred Location *</label>
            <select
              {...register('preferred_location')}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
            >
              <option value="">Select Location</option>
              <option value="Noida Sector 1">Noida Sector 1</option>
              <option value="Noida Sector 2">Noida Sector 2</option>
              <option value="Noida Sector 3">Noida Sector 3</option>
              <option value="Noida Sector 16">Noida Sector 16</option>
              <option value="Noida Sector 18">Noida Sector 18</option>
              <option value="Noida Sector 62">Noida Sector 62</option>
              <option value="Noida Sector 63">Noida Sector 63</option>
              <option value="Noida Sector 83">Noida Sector 83</option>
              <option value="Noida Sector 85">Noida Sector 85</option>
              <option value="Noida Sector 125">Noida Sector 125</option>
              <option value="Noida Sector 132">Noida Sector 132</option>
              <option value="Noida Sector 135">Noida Sector 135</option>
              <option value="Noida Expressway">Noida Expressway</option>
              <option value="Noida Film City">Noida Film City</option>
              <option value="Indirapuram">Indirapuram</option>
              <option value="Greater Noida">Greater Noida</option>
              <option value="Ecotech">Ecotech</option>
              <option value="Phase II Noida">Phase II Noida</option>
              <option value="Delhi-NCR">Delhi-NCR</option>
              <option value="Other">Other</option>
            </select>
            {errors.preferred_location && <p className="text-red-500 text-sm">{errors.preferred_location.message}</p>}
          </div>

          {/* Field 7: Budget */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">Budget Range</label>
            <select
              {...register('budget')}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
            >
              <option value="">Select Budget Range</option>
              <option value="Below ₹50,000">Below ₹50,000</option>
              <option value="₹50,000 – ₹1 Lakh">₹50,000 – ₹1 Lakh</option>
              <option value="₹1 Lakh – ₹3 Lakh">₹1 Lakh – ₹3 Lakh</option>
              <option value="₹3 Lakh – ₹5 Lakh">₹3 Lakh – ₹5 Lakh</option>
              <option value="₹5 Lakh – ₹10 Lakh">₹5 Lakh – ₹10 Lakh</option>
              <option value="₹10 Lakh+">₹10 Lakh+</option>
              <option value="Discuss with Consultant">Discuss with Consultant</option>
            </select>
          </div>
        </div>

        <hr className="border-gray-100" />

        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-6">SCHEDULE A PROPERTY VISIT</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Field 8: Visit Date */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">Preferred Visit Date</label>
              <input
                {...register('visit_date')}
                type="date"
                min={today}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Field 9: Visit Time */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">Preferred Visit Time</label>
              <select
                {...register('visit_time')}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
              >
                <option value="">Select Time</option>
                <option value="9:00 AM">9:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="1:00 PM">1:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="3:00 PM">3:00 PM</option>
                <option value="4:00 PM">4:00 PM</option>
                <option value="5:00 PM">5:00 PM</option>
                <option value="6:00 PM">6:00 PM</option>
              </select>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 mb-8">
            <input
              type="checkbox"
              id="flexible_timing"
              {...register('flexible_timing')}
              className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
            />
            <label htmlFor="flexible_timing" className="text-sm font-medium text-slate-700 cursor-pointer">
              Flexible Timing
            </label>
          </div>
        </div>

        {/* Field 10: Additional Requirements */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-slate-700">Additional Requirements</label>
          <textarea
            {...register('requirements')}
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
            placeholder="Tell us more about your requirement — furnished/unfurnished, parking, metro connectivity, possession date, preferred building, etc."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 px-6 bg-slate-900 text-white font-semibold text-lg rounded-xl hover:bg-slate-800 focus:ring-4 focus:ring-slate-200 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'SUBMITTING...' : 'SUBMIT REQUIREMENT'}
        </button>
      </form>
    </div>
  )
}
