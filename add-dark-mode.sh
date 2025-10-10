#!/bin/bash

# Script to add dark mode classes to all section files
# This is a helper script - changes will be reviewed before committing

echo "Adding dark mode support to all sections..."

# List of section files to update
sections=(
  "src/components/sections/FeaturesSection.tsx"
  "src/components/sections/ProductShowcase.tsx"
  "src/components/sections/AboutSection.tsx"
  "src/components/sections/BenefitsSection.tsx"
  "src/components/sections/TestimonialsSection.tsx"
  "src/components/sections/ProcessSection.tsx"
  "src/components/sections/FAQSection.tsx"
  "src/components/sections/ContactSection.tsx"
  "src/components/layout/Footer.tsx"
)

echo "Files to update:"
for file in "${sections[@]}"; do
  echo "  - $file"
done

echo ""
echo "Manual update required for each section:"
echo "1. Add dark:bg-black to sections with bg-white"
echo "2. Add dark:text-white to text-gray-900"
echo "3. Add dark:text-gray-400 to text-gray-600"
echo "4. Add dark:border-gray-800 to border-gray-200"
echo "5. Add dark:bg-gray-900 to bg-gray-50/bg-gray-100"
echo "6. Update button/card styles for dark mode"

