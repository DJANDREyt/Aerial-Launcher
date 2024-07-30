import type { MouseEventHandler, PropsWithChildren } from 'react'

import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { Link } from '@tanstack/react-router'
import { forwardRef } from 'react'

import packageJson from '../../../package.json'

import {
  repositoryReleasesURL,
  repositoryURL,
  supportDiscordServerURL,
} from '../../config/about/links'

import { Button } from '../ui/button'
import { ScrollArea } from '../ui/scroll-area'
import { Separator } from '../ui/separator'
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from '../ui/tooltip'

import { useAccountListStore } from '../../state/accounts/list'

import { cn } from '../../lib/utils'

const currentClassNameHover =
  'hover:opacity-75 dark:opacity-100 dark:hover:text-white'
const activeClassName = 'opacity-75 dark:text-white'

export function SidebarMenu({
  onOpenChange,
}: {
  onOpenChange?: (open: boolean) => void
}) {
  const accounts = useAccountListStore((state) => state.accounts)
  const total = Object.keys(accounts).length
  const areThereAccounts = total > 0
  const totalInText = new Intl.NumberFormat().format(total)

  const goToPage = () => {
    onOpenChange?.(false)
  }
  const goToDiscordServerURL: MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    event.preventDefault()
    window.electronAPI.openExternalURL(supportDiscordServerURL)
  }
  const goToRepositoryURL: MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    event.preventDefault()
    window.electronAPI.openExternalURL(repositoryURL)
  }
  const goToReleasesURL: MouseEventHandler<HTMLAnchorElement> = (
    event
  ) => {
    event.preventDefault()
    window.electronAPI.openExternalURL(repositoryReleasesURL)
  }

  return (
    <ScrollArea className="h-full max-h-[calc(100vh-3.5rem)]">
      <div className="flex-1 pb-6">
        <nav className="grid items-start p-2 text-sm font-medium select-none lg:p-4 lg:pb-2">
          <Title className="pb-0">STW Operations</Title>
          <div
            className={cn(
              'px-3 py-2 text-muted-foreground',
              '[&_.item>a]:flex'
            )}
          >
            <ul className="list-disc ml-5">
              <li className="item">
                <Link
                  to="/stw-operations/party"
                  className={currentClassNameHover}
                  activeProps={{
                    className: cn(activeClassName),
                  }}
                  onClick={goToPage}
                >
                  Party
                </Link>
              </li>
              <li className="item">
                <Link
                  to="/stw-operations/save-quests"
                  className={currentClassNameHover}
                  activeProps={{
                    className: cn(activeClassName),
                  }}
                  onClick={goToPage}
                >
                  Save Quests
                </Link>
              </li>
              <li className="item">
                <Link
                  to="/stw-operations/homebase-name"
                  className={currentClassNameHover}
                  activeProps={{
                    className: cn(activeClassName),
                  }}
                  onClick={goToPage}
                >
                  Homebase Name
                </Link>
              </li>
              <li className="item">
                <Link
                  to="/stw-operations/xpboosts"
                  className={currentClassNameHover}
                  activeProps={{
                    className: cn(activeClassName),
                  }}
                  onClick={goToPage}
                >
                  XP Boosts
                </Link>
              </li>
            </ul>
          </div>
          <Title className="pb-0">Account Management</Title>
          <div
            className={cn(
              'px-3 py-2 text-muted-foreground',
              '[&_.item>a]:flex'
            )}
          >
            <ul className="list-disc ml-5">
              <li className="item">
                <Link
                  to="/account-management/epic-games-settings"
                  className={cn({
                    [currentClassNameHover]: areThereAccounts,
                    'cursor-not-allowed opacity-60': !areThereAccounts,
                  })}
                  activeProps={{
                    className: cn({
                      [activeClassName]: areThereAccounts,
                    }),
                  }}
                  onClick={goToPage}
                  disabled={!areThereAccounts}
                >
                  Epic Games Settings
                </Link>
              </li>
            </ul>
          </div>

          <Title className="pb-0">Advanced Mode</Title>
          <div
            className={cn(
              'px-3 py-2 text-muted-foreground',
              '[&_.item>a]:flex'
            )}
          >
            <ul className="list-disc ml-5">
              <li className="item">
                <Link
                  to="/advanced-mode/world-info"
                  className={currentClassNameHover}
                  activeProps={{
                    className: cn(activeClassName),
                  }}
                  onClick={goToPage}
                >
                  World Info
                </Link>
              </li>
              <li className="item">
                <Link
                  to="/advanced-mode/matchmaking-track"
                  className={cn({
                    [currentClassNameHover]: areThereAccounts,
                    'cursor-not-allowed opacity-60': !areThereAccounts,
                  })}
                  activeProps={{
                    className: cn({
                      [activeClassName]: areThereAccounts,
                    }),
                  }}
                  onClick={goToPage}
                  disabled={!areThereAccounts}
                >
                  Matchmaking Track
                </Link>
              </li>
            </ul>
          </div>

          <Separator className="my-2" />

          <Title className="pb-0">My Accounts ({totalInText}):</Title>
          <div
            className={cn(
              'px-3 py-2 text-muted-foreground',
              '[&_.item>a]:flex'
            )}
          >
            <ul className="list-disc ml-5">
              <li className="item">
                <Link
                  to="/accounts/add/$type"
                  params={{ type: 'authorization-code' }}
                  className={currentClassNameHover}
                  activeProps={{
                    className: cn(activeClassName),
                  }}
                  onClick={goToPage}
                >
                  Authorization Code
                </Link>
              </li>
              <li className="item">
                <Link
                  to="/accounts/add/$type"
                  params={{ type: 'exchange-code' }}
                  className={currentClassNameHover}
                  activeProps={{
                    className: cn(activeClassName),
                  }}
                  onClick={goToPage}
                >
                  Exchange Code
                </Link>
              </li>
              <li className="item">
                <Link
                  to="/accounts/add/$type"
                  params={{ type: 'device-auth' }}
                  className={currentClassNameHover}
                  activeProps={{
                    className: cn(activeClassName),
                  }}
                  onClick={goToPage}
                >
                  Device Auth
                </Link>
              </li>
              <li className="item">
                <Link
                  to="/accounts/remove"
                  className={cn({
                    [currentClassNameHover]: areThereAccounts,
                    'cursor-not-allowed opacity-60': !areThereAccounts,
                  })}
                  activeProps={{
                    className: cn({
                      [activeClassName]: areThereAccounts,
                    }),
                  }}
                  onClick={goToPage}
                  disabled={!areThereAccounts}
                >
                  Remove Account
                </Link>
              </li>
            </ul>
          </div>

          <Separator className="my-2" />

          <div className="">
            <Button
              className={cn(
                'flex items-center gap-3 justify-start px-3 py-2 rounded-lg transition-all w-full',
                'text-muted-foreground',
                'hover:bg-muted hover:text-primary'
              )}
              size="sm"
              variant="ghost"
              onClick={goToDiscordServerURL}
              asChild
            >
              <a href={supportDiscordServerURL}>
                <svg
                  className="size-3.5 text-muted-foreground"
                  viewBox="0 0 256 199"
                  width="256"
                  height="199"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                >
                  <path
                    d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z"
                    fill="currentColor"
                  />
                </svg>
                Discord Server
              </a>
            </Button>
            <Button
              className={cn(
                'flex items-center gap-3 justify-start px-3 py-2 rounded-lg transition-all w-full',
                'text-muted-foreground',
                'hover:bg-muted hover:text-primary'
              )}
              size="sm"
              variant="ghost"
              onClick={goToRepositoryURL}
              asChild
            >
              <a href={repositoryURL}>
                <GitHubLogoIcon />
                View on GitHub
              </a>
            </Button>
          </div>
        </nav>
        <div className="px-5 text-center text-xs text-muted-foreground/60 lg:pl-7">
          <p className="">
            Release v{packageJson.version} -{' '}
            <a
              href={repositoryReleasesURL}
              className="underline hover:text-muted-foreground"
              onClick={goToReleasesURL}
            >
              All Releases
            </a>
          </p>
        </div>
        <div className="px-5 text-xs text-muted-foreground/60 lg:px-7">
          <Link
            to="/information/credits"
            className="flex justify-center mt-3 underline hover:text-muted-foreground"
          >
            Credits
          </Link>
        </div>
      </div>
    </ScrollArea>
  )
}

const Title = forwardRef<
  HTMLDivElement,
  PropsWithChildren<{ className?: string }>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'flex flex-wrap items-center px-3 py-2 rounded-lg',
        'text-muted-foreground',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})

// function OptionWithComingSoonTooltip({ text }: { text: string }) {
//   return (
//     <TooltipProvider>
//       <Tooltip
//         delayDuration={200}
//         disableHoverableContent
//       >
//         <TooltipTrigger asChild>
//           <Title>{text}</Title>
//         </TooltipTrigger>
//         <TooltipContent>
//           <p>Coming Soon!</p>
//         </TooltipContent>
//       </Tooltip>
//     </TooltipProvider>
//   )
// }
