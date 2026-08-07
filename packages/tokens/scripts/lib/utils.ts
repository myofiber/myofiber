export function kebabCase(v:string){
 return v.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();
}
export function isObject(v:unknown):v is Record<string,unknown>{
 return typeof v==="object"&&v!==null&&!Array.isArray(v);
}
