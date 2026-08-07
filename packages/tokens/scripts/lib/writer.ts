import {promises as fs} from "node:fs";
import path from "node:path";
export async function writeCss(file:string,vars:string[]){
 await fs.mkdir(path.dirname(file),{recursive:true});
 const css=[":root{",...vars,"}",""].join("\n");
 await fs.writeFile(file,css,"utf8");
}
