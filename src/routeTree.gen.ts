/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as CalendarIndexImport } from './routes/calendar/index'
import { Route as CallbackImport } from './routes/callback'
import { Route as EventsEventIdImport } from './routes/events/$eventId'
import { Route as EventsCreateImport } from './routes/events/create'
import { Route as EventsIndexImport } from './routes/events/index'
import { Route as EventsSelectImport } from './routes/events/select'
import { Route as HomeInfoCardImport } from './routes/home/infoCard'
import { Route as IndexImport } from './routes/index'
import { Route as LoginImport } from './routes/login'
import { Route as MapIndexImport } from './routes/map/index'
import { Route as SalesIndexImport } from './routes/sales/index'
import { Route as SignupImport } from './routes/signup'

// Create/Update Routes

const SignupRoute = SignupImport.update({
  path: '/signup',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const CallbackRoute = CallbackImport.update({
  path: '/callback',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SalesIndexRoute = SalesIndexImport.update({
  path: '/sales/',
  getParentRoute: () => rootRoute,
} as any)

const MapIndexRoute = MapIndexImport.update({
  path: '/map/',
  getParentRoute: () => rootRoute,
} as any)

const EventsIndexRoute = EventsIndexImport.update({
  path: '/events/',
  getParentRoute: () => rootRoute,
} as any)

const CalendarIndexRoute = CalendarIndexImport.update({
  path: '/calendar/',
  getParentRoute: () => rootRoute,
} as any)

const HomeInfoCardRoute = HomeInfoCardImport.update({
  path: '/home/infoCard',
  getParentRoute: () => rootRoute,
} as any)

const EventsSelectRoute = EventsSelectImport.update({
  path: '/events/select',
  getParentRoute: () => rootRoute,
} as any)

const EventsCreateRoute = EventsCreateImport.update({
  path: '/events/create',
  getParentRoute: () => rootRoute,
} as any)

const EventsEventIdRoute = EventsEventIdImport.update({
  path: '/events/$eventId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/callback': {
      id: '/callback'
      path: '/callback'
      fullPath: '/callback'
      preLoaderRoute: typeof CallbackImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/signup': {
      id: '/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof SignupImport
      parentRoute: typeof rootRoute
    }
    '/events/$eventId': {
      id: '/events/$eventId'
      path: '/events/$eventId'
      fullPath: '/events/$eventId'
      preLoaderRoute: typeof EventsEventIdImport
      parentRoute: typeof rootRoute
    }
    '/events/create': {
      id: '/events/create'
      path: '/events/create'
      fullPath: '/events/create'
      preLoaderRoute: typeof EventsCreateImport
      parentRoute: typeof rootRoute
    }
    '/events/select': {
      id: '/events/select'
      path: '/events/select'
      fullPath: '/events/select'
      preLoaderRoute: typeof EventsSelectImport
      parentRoute: typeof rootRoute
    }
    '/home/infoCard': {
      id: '/home/infoCard'
      path: '/home/infoCard'
      fullPath: '/home/infoCard'
      preLoaderRoute: typeof HomeInfoCardImport
      parentRoute: typeof rootRoute
    }
    '/calendar/': {
      id: '/calendar/'
      path: '/calendar'
      fullPath: '/calendar'
      preLoaderRoute: typeof CalendarIndexImport
      parentRoute: typeof rootRoute
    }
    '/events/': {
      id: '/events/'
      path: '/events'
      fullPath: '/events'
      preLoaderRoute: typeof EventsIndexImport
      parentRoute: typeof rootRoute
    }
    '/map/': {
      id: '/map/'
      path: '/map'
      fullPath: '/map'
      preLoaderRoute: typeof MapIndexImport
      parentRoute: typeof rootRoute
    }
    '/sales/': {
      id: '/sales/'
      path: '/sales'
      fullPath: '/sales'
      preLoaderRoute: typeof SalesIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/callback': typeof CallbackRoute
  '/login': typeof LoginRoute
  '/signup': typeof SignupRoute
  '/events/$eventId': typeof EventsEventIdRoute
  '/events/create': typeof EventsCreateRoute
  '/events/select': typeof EventsSelectRoute
  '/home/infoCard': typeof HomeInfoCardRoute
  '/calendar': typeof CalendarIndexRoute
  '/events': typeof EventsIndexRoute
  '/map': typeof MapIndexRoute
  '/sales': typeof SalesIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/callback': typeof CallbackRoute
  '/login': typeof LoginRoute
  '/signup': typeof SignupRoute
  '/events/$eventId': typeof EventsEventIdRoute
  '/events/create': typeof EventsCreateRoute
  '/events/select': typeof EventsSelectRoute
  '/home/infoCard': typeof HomeInfoCardRoute
  '/calendar': typeof CalendarIndexRoute
  '/events': typeof EventsIndexRoute
  '/map': typeof MapIndexRoute
  '/sales': typeof SalesIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/callback': typeof CallbackRoute
  '/login': typeof LoginRoute
  '/signup': typeof SignupRoute
  '/events/$eventId': typeof EventsEventIdRoute
  '/events/create': typeof EventsCreateRoute
  '/events/select': typeof EventsSelectRoute
  '/home/infoCard': typeof HomeInfoCardRoute
  '/calendar/': typeof CalendarIndexRoute
  '/events/': typeof EventsIndexRoute
  '/map/': typeof MapIndexRoute
  '/sales/': typeof SalesIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/callback'
    | '/login'
    | '/signup'
    | '/events/$eventId'
    | '/events/create'
    | '/events/select'
    | '/home/infoCard'
    | '/calendar'
    | '/events'
    | '/map'
    | '/sales'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/callback'
    | '/login'
    | '/signup'
    | '/events/$eventId'
    | '/events/create'
    | '/events/select'
    | '/home/infoCard'
    | '/calendar'
    | '/events'
    | '/map'
    | '/sales'
  id:
    | '__root__'
    | '/'
    | '/callback'
    | '/login'
    | '/signup'
    | '/events/$eventId'
    | '/events/create'
    | '/events/select'
    | '/home/infoCard'
    | '/calendar/'
    | '/events/'
    | '/map/'
    | '/sales/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CallbackRoute: typeof CallbackRoute
  LoginRoute: typeof LoginRoute
  SignupRoute: typeof SignupRoute
  EventsEventIdRoute: typeof EventsEventIdRoute
  EventsCreateRoute: typeof EventsCreateRoute
  EventsSelectRoute: typeof EventsSelectRoute
  HomeInfoCardRoute: typeof HomeInfoCardRoute
  CalendarIndexRoute: typeof CalendarIndexRoute
  EventsIndexRoute: typeof EventsIndexRoute
  MapIndexRoute: typeof MapIndexRoute
  SalesIndexRoute: typeof SalesIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  CallbackRoute: CallbackRoute,
  LoginRoute: LoginRoute,
  SignupRoute: SignupRoute,
  EventsEventIdRoute: EventsEventIdRoute,
  EventsCreateRoute: EventsCreateRoute,
  EventsSelectRoute: EventsSelectRoute,
  HomeInfoCardRoute: HomeInfoCardRoute,
  CalendarIndexRoute: CalendarIndexRoute,
  EventsIndexRoute: EventsIndexRoute,
  MapIndexRoute: MapIndexRoute,
  SalesIndexRoute: SalesIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/callback",
        "/login",
        "/signup",
        "/events/$eventId",
        "/events/create",
        "/events/select",
        "/home/infoCard",
        "/calendar/",
        "/events/",
        "/map/",
        "/sales/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/callback": {
      "filePath": "callback.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/signup": {
      "filePath": "signup.tsx"
    },
    "/events/$eventId": {
      "filePath": "events/$eventId.tsx"
    },
    "/events/create": {
      "filePath": "events/create.tsx"
    },
    "/events/select": {
      "filePath": "events/select.tsx"
    },
    "/home/infoCard": {
      "filePath": "home/infoCard.tsx"
    },
    "/calendar/": {
      "filePath": "calendar/index.tsx"
    },
    "/events/": {
      "filePath": "events/index.tsx"
    },
    "/map/": {
      "filePath": "map/index.tsx"
    },
    "/sales/": {
      "filePath": "sales/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
