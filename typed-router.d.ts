
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

/// <reference types="unplugin-vue-router/client" />

import type {
  // type safe route locations
  RouteLocationTypedList,
  RouteLocationResolvedTypedList,
  RouteLocationNormalizedTypedList,
  RouteLocationNormalizedLoadedTypedList,

  // helper types
  // route definitions
  RouteRecordInfo,
  ParamValue,
  ParamValueOneOrMore,
  ParamValueZeroOrMore,
  ParamValueZeroOrOne,

  // vue-router extensions
  _RouterTyped,
  RouterLinkTyped,
  NavigationGuard,
  UseLinkFnTyped,
} from 'unplugin-vue-router'

declare module '@vue-router/routes' {
  export interface RouteNamedMap {
    'home': RouteRecordInfo<'home', '/', Record<never, never>, Record<never, never>>,
    'not-found': RouteRecordInfo<'not-found', '/:all(.*)', { all: ParamValue<true> }, { all: ParamValue<false> }>,
    '/balancesheet': RouteRecordInfo<'/balancesheet', '/balancesheet', Record<never, never>, Record<never, never>>,
    '/contact': RouteRecordInfo<'/contact', '/contact', Record<never, never>, Record<never, never>>,
    '/conversion': RouteRecordInfo<'/conversion', '/conversion', Record<never, never>, Record<never, never>>,
    '/facilities': RouteRecordInfo<'/facilities', '/facilities', Record<never, never>, Record<never, never>>,
    '/land': RouteRecordInfo<'/land', '/land', Record<never, never>, Record<never, never>>,
    '/library': RouteRecordInfo<'/library', '/library', Record<never, never>, Record<never, never>>,
    '/map': RouteRecordInfo<'/map', '/map', Record<never, never>, Record<never, never>>,
    '/ncte': RouteRecordInfo<'/ncte', '/ncte', Record<never, never>, Record<never, never>>,
    '/noc': RouteRecordInfo<'/noc', '/noc', Record<never, never>, Record<never, never>>,
    '/society': RouteRecordInfo<'/society', '/society', Record<never, never>, Record<never, never>>,
    '/staff': RouteRecordInfo<'/staff', '/staff', Record<never, never>, Record<never, never>>,
    '/students': RouteRecordInfo<'/students', '/students', Record<never, never>, Record<never, never>>,
  }
}

declare module '@vue-router' {
  import type { RouteNamedMap } from '@vue-router/routes'

  export type RouterTyped = _RouterTyped<RouteNamedMap>

  /**
   * Type safe version of `RouteLocationNormalized` (the type of `to` and `from` in navigation guards).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalized<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationNormalizedLoaded` (the return type of `useRoute()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationNormalizedLoaded<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocationResolved` (the returned route of `router.resolve()`).
   * Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocationResolved<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationResolvedTypedList<RouteNamedMap>[Name]

  /**
   * Type safe version of `RouteLocation` . Allows passing the name of the route to be passed as a generic.
   */
  export type RouteLocation<Name extends keyof RouteNamedMap = keyof RouteNamedMap> = RouteLocationTypedList<RouteNamedMap>[Name]

  /**
   * Generate a type safe params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParams<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['params']
  /**
   * Generate a type safe raw params for a route location. Requires the name of the route to be passed as a generic.
   */
  export type RouteParamsRaw<Name extends keyof RouteNamedMap> = RouteNamedMap[Name]['paramsRaw']

  export function useRouter(): RouterTyped
  export function useRoute<Name extends keyof RouteNamedMap = keyof RouteNamedMap>(name?: Name): RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[Name]

  export const useLink: UseLinkFnTyped<RouteNamedMap>

  export function onBeforeRouteLeave(guard: NavigationGuard<RouteNamedMap>): void
  export function onBeforeRouteUpdate(guard: NavigationGuard<RouteNamedMap>): void
}

declare module 'vue-router' {
  import type { RouteNamedMap } from '@vue-router/routes'

  export interface TypesConfig {
    beforeRouteUpdate: NavigationGuard<RouteNamedMap>
    beforeRouteLeave: NavigationGuard<RouteNamedMap>

    $route: RouteLocationNormalizedLoadedTypedList<RouteNamedMap>[keyof RouteNamedMap]
    $router: _RouterTyped<RouteNamedMap>

    RouterLink: RouterLinkTyped<RouteNamedMap>
  }
}
