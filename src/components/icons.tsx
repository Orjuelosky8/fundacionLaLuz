
export const Logo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <defs>
            <linearGradient id="luz-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: 'hsl(var(--secondary))', stopOpacity: 1 }} />
            </linearGradient>
        </defs>
        <path d="M12 3a9 9 0 0 0-9 9c0 3.16 1.68 6.88 5.88 9.84L12 24l3.12-2.16C19.32 18.88 21 15.16 21 12a9 9 0 0 0-9-9z" fill="url(#luz-grad)" stroke="none" />
        <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" fill="hsl(var(--primary-foreground))" stroke="none" />
        <path d="M12 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" fill="hsl(var(--primary))" stroke="none" />
    </svg>
);


export const LuziaIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        {...props}
    >
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
    </svg>
);
