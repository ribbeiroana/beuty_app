/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/_sitemap` | `/beuty` | `/beuty/favoritos` | `/beuty/perfil` | `/beuty/pesquisa` | `/beuty/principal` | `/cadastro` | `/detalhes` | `/detalhes/` | `/login`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
