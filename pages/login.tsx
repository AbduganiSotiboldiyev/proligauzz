
import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../components/plasmic/proliga_clone/PlasmicGlobalContextsProvider";
// import { ScreenVariantProvider } from "../components/plasmic/proliga_clone/PlasmicGlobalVariant__Screen";
// import { UnnamedGlobalGroupOfVariantsContext } from "../components/plasmic/proliga_clone/PlasmicGlobalVariant__UnnamedGlobalGroupOfVariants";
import { PlasmicLogin } from "../components/plasmic/proliga_clone/PlasmicLogin";
import { useRouter } from "next/router";

function Login() {

  return (
    // <UnnamedGlobalGroupOfVariantsContext.Provider value={undefined}>
      <GlobalContextsProvider>
        <PageParamsProvider__
          route={useRouter()?.pathname}
          params={useRouter()?.query}
          query={useRouter()?.query}
        >
          <PlasmicLogin />
        </PageParamsProvider__>
      </GlobalContextsProvider>
    // </UnnamedGlobalGroupOfVariantsContext.Provider>
  );
}

export default Login;
