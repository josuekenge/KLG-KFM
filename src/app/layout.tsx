// @ts-nocheck
/* eslint-disable */
import React from 'react';
/* eslint-disable @next/next/no-sync-scripts */
export const metadata = {
  title: "Kyeto Logistics Group | Elite Fleet Intelligence",
  description: "Enterprise fleet management and logistics intelligence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://unpkg.com/lucide@latest"></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            tailwind.config = {
                theme: {
                    extend: {
                        colors: {
                            navy: {
                                950: '#050c1a',
                                900: '#0A1A33',
                                850: '#0d1f3b',
                                800: '#102544',
                                700: '#152C52',
                            },
                            kyeto: {
                                blue: '#2B68E6',
                                light: '#4C82F5',
                                dark: '#0B1221',
                            }
                        },
                        fontFamily: {
                            sans: ['Inter', 'sans-serif'],
                            display: ['Plus Jakarta Sans', 'sans-serif'],
                        },
                        backgroundImage: {
                            'hero-gradient': 'linear-gradient(180deg, #0A1A33 0%, #0F2342 100%)',
                            'subtle-light': 'linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 100%)',
                            'navy-gradient': 'linear-gradient(180deg, #0F2342 0%, #050C18 100%)',
                            'card-shine': 'linear-gradient(145deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 60%)',
                        },
                        boxShadow: {
                            'glow': '0 0 20px rgba(43, 104, 230, 0.3)',
                            'card-hover': '0 20px 40px -5px rgba(10, 26, 51, 0.08)',
                        }
                    }
                }
            }
          `,
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            /* Removed Custom Cursor as requested */
            
            /* Smooth reveal animation */
            .reveal {
                opacity: 0;
                transform: translateY(20px);
                animation: revealAnim 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
            }
    
            @keyframes revealAnim {
                to { opacity: 1; transform: translateY(0); }
            }
    
            /* Animations */
            @keyframes float {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
                100% { transform: translateY(0px); }
            }
            @keyframes pulse-soft {
                0% { box-shadow: 0 0 0 0 rgba(43, 104, 230, 0.4); }
                70% { box-shadow: 0 0 0 10px rgba(43, 104, 230, 0); }
                100% { box-shadow: 0 0 0 0 rgba(43, 104, 230, 0); }
            }
    
            .animate-float { animation: float 6s ease-in-out infinite; }
            .pulse-marker { animation: pulse-soft 2s cubic-bezier(0.2, 0, 0, 1) infinite; }
            
            /* Enhanced Glass Effects */
            .glass-nav {
                background: rgba(10, 26, 51, 0.75);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                border-bottom: 1px solid rgba(255, 255, 255, 0.06);
            }
    
            .glass-panel-dark {
                background: rgba(16, 37, 68, 0.6);
                backdrop-filter: blur(24px);
                border: 1px solid rgba(255, 255, 255, 0.08);
                box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.6);
            }
    
            .no-scrollbar::-webkit-scrollbar { display: none; }
            .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            
            .delay-100 { animation-delay: 100ms; }
            .delay-200 { animation-delay: 200ms; }
            .delay-300 { animation-delay: 300ms; }
    
            /* Smooth section transitions */
            .section-fade-bottom {
                background: linear-gradient(to bottom, transparent, rgba(248, 250, 252, 1));
            }
          `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-slate-50 text-navy-900 selection:bg-kyeto-blue selection:text-white">
        {children}
      </body>
    </html>
  );
}