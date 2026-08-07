import { generateGlobalTokens } from "./lib/global-generator";
import { generateComponentTokens } from "./lib/component-generator";

async function main(){
  await generateGlobalTokens();
  await generateComponentTokens();
}
main().catch(console.error);
