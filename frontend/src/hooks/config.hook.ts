import { createContext, useCallback, useContext, useMemo } from "react";
import configService from "../services/config.service";
import { ConfigHook } from "../types/config.type";

export const ConfigContext = createContext<ConfigHook>({
  configVariables: [],
  refresh: async () => {},
});

const useConfig = () => {
  const configContext = useContext(ConfigContext);
  const get = useCallback(
    (key: string) => configService.get(key, configContext.configVariables),
    [configContext.configVariables],
  );

  const refresh = useCallback(
    async () => configContext.refresh(),
    [configContext.refresh],
  );

  return useMemo(
    () => ({
      get,
      refresh,
    }),
    [get, refresh],
  );
};

export default useConfig;
