/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/_sitemap` | `/beauty` | `/beauty/favoritos` | `/beauty/perfil` | `/beauty/pesquisa` | `/beauty/principal` | `/cadastro` | `/cadastro/` | `/detalhes` | `/detalhes/` | `/login`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
