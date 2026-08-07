import {promises as fs} from "node:fs";
import path from "node:path";
import {resolveReference} from "./resolver";
import {writeCss} from "./writer";

export async function generateComponentTokens(){
 const dir=path.resolve(process.cwd(),"src","components");
 try{
  const files=await fs.readdir(dir);
  for(const f of files){
   if(!f.endsWith(".json")) continue;
   const name=path.basename(f,".json");
   const j=JSON.parse(await fs.readFile(path.join(dir,f),"utf8"));
   const vars:string[]=[];
   if(j.variants){
    for(const [variant,obj] of Object.entries<any>(j.variants))
      for(const [k,v] of Object.entries<any>(obj))
        vars.push(`  --mf-${name}-${variant}-${k.replace(/[A-Z]/g,m=>"-"+m.toLowerCase())}: ${resolveReference(String(v))};`);
   }
   if(j.sizes){
    for(const [size,obj] of Object.entries<any>(j.sizes))
      for(const [k,v] of Object.entries<any>(obj))
        vars.push(`  --mf-${name}-${size}-${k.replace(/[A-Z]/g,m=>"-"+m.toLowerCase())}: ${resolveReference(String(v))};`);
   }
   await writeCss(path.resolve(process.cwd(),"dist","components",name+".css"),vars);
  }
 }catch{}
}
