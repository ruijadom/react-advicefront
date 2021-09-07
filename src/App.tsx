import { useState } from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'

import { AppDataProvider } from './AppDataContext'

import routes from './routes'

import { Home } from './pages/Home'
import { Suggested } from './pages/Suggested'

import Layout from './components/Layout'
import Navigation from './components/Navigation'
import { NavItem, ActionItem } from './components/Navigation/types'

import Footer from './components/Footer'
import { FooterGroupItem } from './components/Footer/types'

import HeroImg from './assets/images/hero.png'
import { IHero } from './components/Hero/types'

export const navItems: NavItem[] = [
  { label: 'Home', link: routes.home.path },

  {
    label: 'Onboard',
  },
  {
    label: 'For Developers',
  },
  {
    label: 'Suggested',
    link: routes.suggested.path,
  },
]

export const actionsItems: ActionItem[] = [
  {
    label: 'Sign in',
    type: 'muted',
    onAction: () => {
      console.log('Sign in event')
    },
  },
  {
    label: 'Sign up',
    type: 'primary',
    onAction: () => {
      console.log('Sign up event')
    },
  },
]

export const heroData: IHero = {
  title: 'Get clients set up in hours, not weeks',
  description:
    'Fact-finding, risk tolerance, digital client agreements and recurring payments, all from a single dashboard. Onboard removes the hasle at the start of the advice journey for you and your clients, letting you get on with what you do best.',

  image: {
    source: HeroImg,
    legend: 'Photo by someone on Unsplash',
  },
  action: {
    label: actionsItems[1]?.label,
    type: actionsItems[1]?.type,
    onAction: actionsItems[1]?.onAction,
  },
}

export const footerItems: FooterGroupItem[] = [
  {
    title: 'IFAs',
    items: [
      {
        label: 'Modules',
      },
      {
        label: 'Integrations',
      },
      {
        label: 'Pricing',
      },
      {
        label: 'Why I series',
      },
    ],
  },
  {
    title: 'For developers',
    items: [
      {
        label: 'API documentation',
      },
      {
        label: 'Developer portal',
      },
      {
        label: 'Style guides',
      },
    ],
  },
  {
    title: 'Company',
    items: [
      {
        label: 'About',
      },
      {
        label: 'Careers',
      },
      {
        label: 'Support',
      },
    ],
  },
  {
    title: 'Directories',
    items: [
      {
        label: 'Help centre',
      },
      {
        label: 'Terms & Conditions',
      },
      {
        label: 'Privacy Policy',
      },
      {
        label: 'Context us',
      },
    ],
  },
]

export const FooterDescription = `This is just a text block to make your life slightly harder when doing this test 🤓`

const App = () => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <AppDataProvider>
        <BrowserRouter>
          <Layout
            header={
              <Navigation navItems={navItems} actionItems={actionsItems} />
            }
            main={
              <Switch>
                <Route exact path="/" render={() => <Home hero={heroData} />} />

                <Route
                  path="/suggested"
                  render={() => <Suggested hero={heroData} />}
                />
              </Switch>
            }
            footer={
              <Footer
                descripton={FooterDescription}
                footerItems={footerItems}
              />
            }
          />
        </BrowserRouter>
      </AppDataProvider>
    </QueryClientProvider>
  )
}

export default App
