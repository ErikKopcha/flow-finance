import { HeadContent, Scripts } from '@tanstack/react-router'

import appStyles from '@/app/styles/global.css?url'

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <head>
        <HeadContent />
        <link rel="stylesheet" href={appStyles} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
