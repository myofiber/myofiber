import {promises as fs} from "node:fs";
import path from "node:path";
import {isObject,kebabCase} from "./utils";
import {writeCss} from "./writer";

const MAP:any={colors:"color",sizes:"size",spacing:"spacing",radius:"radius",typography:"typography"};
function flat(o:any,p:string[]=[]):string[]{
 let r:string[]=[];
 for(const[k,v] of Object.entries(o)){
  const c=[...p,kebabCase(k)];
  if(isObject(v)) r.push(...flat(v,c));
  else r.push(`  --mf-${c.join("-")}: ${v};`);
 }
 return r;
}
export async function generateGlobalTokens(){
 const src=path.resolve(process.cwd(),"src");
 const vars:string[]=[];
 for(const f of await fs.readdir(src)){
  if(!f.endsWith(".json")) continue;
  const ns=MAP[path.basename(f,".json")]; if(!ns) continue;
  const j=JSON.parse(await fs.readFile(path.join(src,f),"utf8"));
  vars.push(...flat(j,[ns]));
 }
 await writeCss(path.resolve(process.cwd(),"dist","tokens.css"),vars);
}
