export function resolveReference(v:string){
 const m=v.match(/^\{(.+)\}$/);
 if(!m) return v;
 const p=m[1].split(".");
 const map:{[k:string]:string}={colors:"color",sizes:"size",spacing:"spacing",radius:"radius",typography:"typography"};
 p[0]=map[p[0]]??p[0];
 return `var(--mf-${p.join("-")})`;
}
