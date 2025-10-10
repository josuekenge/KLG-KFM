# Dark Mode Implementation Guide

## Overview
The website now supports dark mode with an Uber-style clean black aesthetic. Users can toggle between light and dark themes using the button in the top-right corner of the navbar.

## What's Implemented

### Core Components ✅
- **ThemeContext** (`src/contexts/ThemeContext.tsx`)
  - Manages theme state (light/dark)
  - Persists preference to localStorage
  - Provides `toggleTheme()` function

- **Navbar Toggle Button** (`src/components/layout/ModernNavbar.tsx`)
  - Sun/Moon icon toggle in top-right
  - Available on both desktop and mobile
  - Smooth icon transition

- **Global Styles** (`src/app/globals.css`)
  - Dark mode base styles
  - Custom scrollbar for dark mode
  - Smooth transitions

### Sections with Dark Mode ✅
- ✅ ModernNavbar (fully implemented)
- ✅ ModernHero (partially implemented - text and badges)
- ⚠️ Dashboard mockup (needs dark mode)
- ❌ FeaturesSection (needs dark mode)
- ❌ ProductShowcase (needs dark mode)
- ❌ AboutSection (needs dark mode)
- ❌ BenefitsSection (needs dark mode)
- ❌ TestimonialsSection (needs dark mode)
- ❌ ProcessSection (needs dark mode)
- ❌ FAQSection (needs dark mode)
- ❌ ContactSection (needs dark mode)
- ❌ Footer (needs dark mode)

## Dark Mode Class Pattern

### Text Colors
```tsx
// Headings
className="text-gray-900 dark:text-white"

// Body text
className="text-gray-600 dark:text-gray-400"

// Muted text
className="text-gray-500 dark:text-gray-500"
```

### Backgrounds
```tsx
// Main backgrounds
className="bg-white dark:bg-black"

// Cards/elevated surfaces
className="bg-gray-50 dark:bg-gray-900"
className="bg-gray-100 dark:bg-gray-900"

// Hover states
className="hover:bg-gray-50 dark:hover:bg-gray-900"
```

### Borders
```tsx
className="border-gray-200 dark:border-gray-800"
```

### Buttons (Uber Style)
```tsx
// Primary CTA
className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100"

// Secondary/Ghost
className="bg-white dark:bg-black border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900"
```

### Cards
```tsx
className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white"
```

## Next Steps (To Complete Dark Mode)

### 1. Update All Section Files
For each section in `src/components/sections/`, add dark mode classes:

```tsx
// Example for FeaturesSection.tsx
<section className="py-24 bg-white dark:bg-black">
  <div className="container mx-auto px-4">
    <h2 className="text-gray-900 dark:text-white">...</h2>
    <p className="text-gray-600 dark:text-gray-400">...</p>
    <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
      ...
    </div>
  </div>
</section>
```

### 2. Update Dashboard Mockup in ModernHero
The dashboard preview needs dark mode support:
- Dark background for outer container
- Inverted colors for inner content
- Dark mode chart colors

### 3. Update Footer
Add dark mode classes to Footer component.

### 4. Update Canvas Animations
The truck animation canvas needs to render differently in dark mode:
- White/light trucks on dark background
- Inverted colors for roads/nodes

### 5. Test All Interactive Elements
- Forms (input fields, textareas)
- Hover states
- Focus states
- Modal/dialog backgrounds (if any)

## Usage

### For Users
Click the sun/moon icon in the top-right corner of the navbar to toggle between light and dark modes. Your preference is saved automatically.

### For Developers
```tsx
import { useTheme } from "@/contexts/ThemeContext";

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
```

## Design Philosophy

### Uber-Style Black
- Pure black (#000000) for backgrounds in dark mode
- High contrast white text
- Subtle gray-900 for elevated surfaces
- Minimal shadows (shadows don't work well on black)
- Clean, minimal aesthetic

### Transitions
All color transitions use `transition-colors duration-200` for smooth theme switching.

### Accessibility
- Maintains WCAG AA contrast ratios
- Focus states visible in both modes
- Clear interactive element states

## Known Issues
- Dashboard canvas animation doesn't invert colors yet
- Some subtle background patterns may need opacity adjustments in dark mode
- Floating cards in hero need dark mode variants

## Performance
- Theme preference stored in localStorage
- No flash of unstyled content (FOUC) due to `suppressHydrationWarning` on `<html>`
- Smooth transitions without layout shift

