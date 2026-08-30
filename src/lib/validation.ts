import { z } from 'zod'

export const requirementSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  mobile: z.string().regex(/^[6-9]\d{9}$/, { message: 'Please enter a valid 10-digit Indian mobile number.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }).optional().or(z.literal('')),
  property_type: z.string().min(1, { message: 'Please select a property type.' }),
  required_space: z.string().optional(),
  preferred_location: z.string().min(1, { message: 'Please select a preferred location.' }),
  budget: z.string().optional(),
  visit_date: z.string().optional(),
  visit_time: z.string().optional(),
  flexible_timing: z.boolean().optional(),
  requirements: z.string().optional(),
})

export type RequirementFormData = z.infer<typeof requirementSchema>
