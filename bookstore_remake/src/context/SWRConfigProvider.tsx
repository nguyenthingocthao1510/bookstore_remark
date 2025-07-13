import { SWRConfig } from "swr";
import fetcher from "src/utils/fetcher";

const SWRConfigProvider = ({ children }: { children: React.ReactNode }) => (
  <SWRConfig value={{ fetcher }}>{children}</SWRConfig>
);

export default SWRConfigProvider;
