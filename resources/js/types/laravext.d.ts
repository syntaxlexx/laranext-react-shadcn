declare module "@laravext/react" {
  export const createLaravextApp: any;
  export const createLaravextSsrApp: any;
  export const laravextPageData: any;
  export const version: any;
  export const nexus: any;
  export const nexusProps: any;
  // export function sharedProps<T extends SharedProps>(): Page<T>; // the T generic will combine any type you add to it & the PageProps interface defined in @inertiajs/core
  export const sharedProps: any;
  export const routeParams: any;
  export const routeName: any;
  export const queryParams: any;
}

declare module "@laravext/react/server" {
  export const serve: any;
}

declare module "@laravext/react/tools" {
  export const resolveComponent: any;
}

declare module "@laravext/react/router" {
  export const visit: any;
}

declare module "@laravext/react/progress" {
  export const injectCSS: any;
  export const setupProgress: any;
  export const startProgress: any;
  export const moveProgress: any;
  export const endProgress: any;
}
