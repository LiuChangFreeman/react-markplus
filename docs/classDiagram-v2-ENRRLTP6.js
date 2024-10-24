!function(e,t,n,i,r){var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof s[i]&&s[i],o=a.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function d(t,n){if(!o[t]){if(!e[t]){var r="function"==typeof s[i]&&s[i];if(!n&&r)return r(t,!0);if(a)return a(t,!0);if(l&&"string"==typeof t)return l(t);var h=Error("Cannot find module '"+t+"'");throw h.code="MODULE_NOT_FOUND",h}c.resolve=function(n){var i=e[t][1][n];return null!=i?i:n},c.cache={};var g=o[t]=new d.Module(t);e[t][0].call(g.exports,c,g,g.exports,this)}return o[t].exports;function c(e){var t=c.resolve(e);return!1===t?{}:d(t)}}d.isParcelRequire=!0,d.Module=function(e){this.id=e,this.bundle=d,this.exports={}},d.modules=e,d.cache=o,d.parent=a,d.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(d,"root",{get:function(){return s[i]}}),s[i]=d;for(var h=0;h<t.length;h++)d(t[h])}({kcinP:[function(e,t,n){var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(n),i.export(n,"diagram",()=>J);var r=e("./chunk-WMZTR77G.mjs"),s=e("./chunk-RZWOMDKR.mjs"),a=e("./chunk-B7GIP3BC.mjs"),o=e("./chunk-KW7S66XI.mjs"),l=e("./chunk-KZHXEMGG.mjs"),d=e("./chunk-CN5XARC6.mjs"),h=e("./chunk-ULVYQCHC.mjs"),g=e("./chunk-F3FIDV27.mjs");e("./chunk-GKOISANM.mjs");var c=e("./chunk-ZXHTWV66.mjs");e("./chunk-TZBO7MLI.mjs"),e("./chunk-GRZAG2UZ.mjs"),e("./chunk-HD3LK5B5.mjs");var u=e("./chunk-DLQEHMXD.mjs"),f={},p={},_={},m=/* @__PURE__ */(0,u.__name)(()=>{p={},_={},f={}},"clear"),w=/* @__PURE__ */(0,u.__name)((e,t)=>((0,c.log).trace("In isDescendant",t," ",e," = ",p[t].includes(e)),!!p[t].includes(e)),"isDescendant"),v=/* @__PURE__ */(0,u.__name)((e,t)=>((0,c.log).info("Descendants of ",t," is ",p[t]),(0,c.log).info("Edge is ",e),e.v!==t&&e.w!==t&&(p[t]?p[t].includes(e.v)||w(e.v,t)||w(e.w,t)||p[t].includes(e.w):((0,c.log).debug("Tilt, ",t,",not in descendants"),!1))),"edgeInCluster"),y=/* @__PURE__ */(0,u.__name)((e,t,n,i)=>{(0,c.log).warn("Copying children of ",e,"root",i,"data",t.node(e),i);let r=t.children(e)||[];e!==i&&r.push(e),(0,c.log).warn("Copying (nodes) clusterId",e,"nodes",r),r.forEach(r=>{if(t.children(r).length>0)y(r,t,n,i);else{let s=t.node(r);(0,c.log).info("cp ",r," to ",i," with parent ",e),n.setNode(r,s),i!==t.parent(r)&&((0,c.log).warn("Setting parent",r,t.parent(r)),n.setParent(r,t.parent(r))),e!==i&&r!==e?((0,c.log).debug("Setting parent",r,e),n.setParent(r,e)):((0,c.log).info("In copy ",e,"root",i,"data",t.node(e),i),(0,c.log).debug("Not Setting parent for node=",r,"cluster!==rootId",e!==i,"node!==clusterId",r!==e));let a=t.edges(r);(0,c.log).debug("Copying Edges",a),a.forEach(r=>{(0,c.log).info("Edge",r);let s=t.edge(r.v,r.w,r.name);(0,c.log).info("Edge data",s,i);try{v(r,i)?((0,c.log).info("Copying as ",r.v,r.w,s,r.name),n.setEdge(r.v,r.w,s,r.name),(0,c.log).info("newGraph edges ",n.edges(),n.edge(n.edges()[0]))):(0,c.log).info("Skipping copy of edge ",r.v,"-->",r.w," rootId: ",i," clusterId:",e)}catch(e){(0,c.log).error(e)}})}(0,c.log).debug("Removing node",r),t.removeNode(r)})},"copy"),b=/* @__PURE__ */(0,u.__name)((e,t)=>{let n=t.children(e),i=[...n];for(let r of n)_[r]=e,i=[...i,...b(r,t)];return i},"extractDescendants"),C=/* @__PURE__ */(0,u.__name)((e,t)=>{(0,c.log).trace("Searching",e);let n=t.children(e);if((0,c.log).trace("Searching children of id ",e,n),n.length<1)return(0,c.log).trace("This is a valid node",e),e;for(let i of n){let n=C(i,t);if(n)return(0,c.log).trace("Found replacement for",e," => ",n),n}},"findNonClusterChild"),x=/* @__PURE__ */(0,u.__name)(e=>f[e]&&f[e].externalConnections&&f[e]?f[e].id:e,"getAnchorId"),E=/* @__PURE__ */(0,u.__name)((e,t)=>{if(!e||t>10){(0,c.log).debug("Opting out, no graph ");return}for(let t of((0,c.log).debug("Opting in, graph "),e.nodes().forEach(function(t){e.children(t).length>0&&((0,c.log).warn("Cluster identified",t," Replacement id in edges: ",C(t,e)),p[t]=b(t,e),f[t]={id:C(t,e),clusterData:e.node(t)})}),e.nodes().forEach(function(t){let n=e.children(t),i=e.edges();n.length>0?((0,c.log).debug("Cluster identified",t,p),i.forEach(e=>{e.v!==t&&e.w!==t&&w(e.v,t)^w(e.w,t)&&((0,c.log).warn("Edge: ",e," leaves cluster ",t),(0,c.log).warn("Descendants of XXX ",t,": ",p[t]),f[t].externalConnections=!0)})):(0,c.log).debug("Not a cluster ",t,p)}),Object.keys(f))){let n=f[t].id,i=e.parent(n);i!==t&&f[i]&&!f[i].externalConnections&&(f[t].id=i)}e.edges().forEach(function(t){let n=e.edge(t);(0,c.log).warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(t)),(0,c.log).warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(e.edge(t)));let i=t.v,r=t.w;if((0,c.log).warn("Fix XXX",f,"ids:",t.v,t.w,"Translating: ",f[t.v]," --- ",f[t.w]),f[t.v]&&f[t.w]&&f[t.v]===f[t.w]){(0,c.log).warn("Fixing and trixing link to self - removing XXX",t.v,t.w,t.name),(0,c.log).warn("Fixing and trixing - removing XXX",t.v,t.w,t.name),i=x(t.v),r=x(t.w),e.removeEdge(t.v,t.w,t.name);let s=t.w+"---"+t.v;e.setNode(s,{domId:s,id:s,labelStyle:"",labelText:n.label,padding:0,shape:"labelRect",style:""});let a=structuredClone(n),o=structuredClone(n);a.label="",a.arrowTypeEnd="none",o.label="",a.fromCluster=t.v,o.toCluster=t.v,e.setEdge(i,s,a,t.name+"-cyclic-special"),e.setEdge(s,r,o,t.name+"-cyclic-special")}else(f[t.v]||f[t.w])&&((0,c.log).warn("Fixing and trixing - removing XXX",t.v,t.w,t.name),i=x(t.v),r=x(t.w),e.removeEdge(t.v,t.w,t.name),i!==t.v&&(f[e.parent(i)].externalConnections=!0,n.fromCluster=t.v),r!==t.w&&(f[e.parent(r)].externalConnections=!0,n.toCluster=t.w),(0,c.log).warn("Fix Replacing with XXX",i,r,t.name),e.setEdge(i,r,n,t.name))}),(0,c.log).warn("Adjusted Graph",(0,a.write)(e)),k(e,0),(0,c.log).trace(f)},"adjustClustersAndEdges"),k=/* @__PURE__ */(0,u.__name)((e,t)=>{if((0,c.log).warn("extractor - ",t,(0,a.write)(e),e.children("D")),t>10){(0,c.log).error("Bailing out");return}let n=e.nodes(),i=!1;for(let t of n){let n=e.children(t);i=i||n.length>0}if(!i){(0,c.log).debug("Done, no node has children",e.nodes());return}for(let i of((0,c.log).debug("Nodes = ",n,t),n))if((0,c.log).debug("Extracting node",i,f,f[i]&&!f[i].externalConnections,!e.parent(i),e.node(i),e.children("D")," Depth ",t),f[i]){if(!f[i].externalConnections&&e.children(i)&&e.children(i).length>0){(0,c.log).warn("Cluster without external connections, without a parent and with children",i,t);let n="TB"===e.graph().rankdir?"LR":"TB";f[i]?.clusterData?.dir&&(n=f[i].clusterData.dir,(0,c.log).warn("Fixing dir",f[i].clusterData.dir,n));let r=new(0,h.Graph)({multigraph:!0,compound:!0}).setGraph({rankdir:n,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});(0,c.log).warn("Old graph before copy",(0,a.write)(e)),y(i,e,r,i),e.setNode(i,{clusterNode:!0,id:i,clusterData:f[i].clusterData,labelText:f[i].labelText,graph:r}),(0,c.log).warn("New graph after copy node: (",i,")",(0,a.write)(r)),(0,c.log).debug("Old graph after copy",(0,a.write)(e))}else(0,c.log).warn("Cluster ** ",i," **not meeting the criteria !externalConnections:",!f[i].externalConnections," no parent: ",!e.parent(i)," children ",e.children(i)&&e.children(i).length>0,e.children("D"),t),(0,c.log).debug(f)}else(0,c.log).debug("Not a cluster",i,t);for(let i of(n=e.nodes(),(0,c.log).warn("New list of nodes",n),n)){let n=e.node(i);(0,c.log).warn(" Now next level",i,n),n.clusterNode&&k(n.graph,t+1)}},"extractor"),N=/* @__PURE__ */(0,u.__name)((e,t)=>{if(0===t.length)return[];let n=Object.assign(t);return t.forEach(t=>{let i=e.children(t),r=N(e,i);n=[...n,...r]}),n},"sorter"),j=/* @__PURE__ */(0,u.__name)(e=>N(e,e.children()),"sortNodesByHierarchy"),D=/* @__PURE__ */(0,u.__name)((e,t)=>{(0,c.log).info("Creating subgraph rect for ",t.id,t);let n=(0,c.getConfig2)(),i=e.insert("g").attr("class","cluster"+(t.class?" "+t.class:"")).attr("id",t.id),s=i.insert("rect",":first-child"),a=(0,c.evaluate)(n.flowchart.htmlLabels),d=i.insert("g").attr("class","cluster-label"),h="markdown"===t.labelType?(0,l.createText)(d,t.labelText,{style:t.labelStyle,useHtmlLabels:a},n):d.node().appendChild((0,r.createLabel_default)(t.labelText,t.labelStyle,void 0,!0)),g=h.getBBox();if((0,c.evaluate)(n.flowchart.htmlLabels)){let e=h.children[0],t=(0,c.select_default)(h);g=e.getBoundingClientRect(),t.attr("width",g.width),t.attr("height",g.height)}let u=0*t.padding,f=t.width<=g.width+u?g.width+u:t.width;t.width<=g.width+u?t.diff=(g.width-t.width)/2-t.padding/2:t.diff=-t.padding/2,(0,c.log).trace("Data ",t,JSON.stringify(t)),s.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-f/2).attr("y",t.y-t.height/2-u/2).attr("width",f).attr("height",t.height+u);let{subGraphTitleTopMargin:p}=(0,o.getSubGraphTitleMargins)(n);a?d.attr("transform",`translate(${t.x-g.width/2}, ${t.y-t.height/2+p})`):d.attr("transform",`translate(${t.x}, ${t.y-t.height/2+p})`);let _=s.node().getBBox();return t.width=_.width,t.height=_.height,t.intersect=function(e){return(0,r.intersect_rect_default)(t,e)},i},"rect"),T=/* @__PURE__ */(0,u.__name)((e,t)=>{let n=e.insert("g").attr("class","note-cluster").attr("id",t.id),i=n.insert("rect",":first-child"),s=0*t.padding,a=s/2;i.attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-t.width/2-a).attr("y",t.y-t.height/2-a).attr("width",t.width+s).attr("height",t.height+s).attr("fill","none");let o=i.node().getBBox();return t.width=o.width,t.height=o.height,t.intersect=function(e){return(0,r.intersect_rect_default)(t,e)},n},"noteGroup"),L={rect:D,roundedWithTitle:/* @__PURE__ */(0,u.__name)((e,t)=>{let n=(0,c.getConfig2)(),i=e.insert("g").attr("class",t.classes).attr("id",t.id),s=i.insert("rect",":first-child"),a=i.insert("g").attr("class","cluster-label"),l=i.append("rect"),d=a.node().appendChild((0,r.createLabel_default)(t.labelText,t.labelStyle,void 0,!0)),h=d.getBBox();if((0,c.evaluate)(n.flowchart.htmlLabels)){let e=d.children[0],t=(0,c.select_default)(d);h=e.getBoundingClientRect(),t.attr("width",h.width),t.attr("height",h.height)}h=d.getBBox();let g=0*t.padding,u=g/2,f=t.width<=h.width+t.padding?h.width+t.padding:t.width;t.width<=h.width+t.padding?t.diff=(h.width+0*t.padding-t.width)/2:t.diff=-t.padding/2,s.attr("class","outer").attr("x",t.x-f/2-u).attr("y",t.y-t.height/2-u).attr("width",f+g).attr("height",t.height+g),l.attr("class","inner").attr("x",t.x-f/2-u).attr("y",t.y-t.height/2-u+h.height-1).attr("width",f+g).attr("height",t.height+g-h.height-3);let{subGraphTitleTopMargin:p}=(0,o.getSubGraphTitleMargins)(n);a.attr("transform",`translate(${t.x-h.width/2}, ${t.y-t.height/2-t.padding/3+((0,c.evaluate)(n.flowchart.htmlLabels)?5:3)+p})`);let _=s.node().getBBox();return t.height=_.height,t.intersect=function(e){return(0,r.intersect_rect_default)(t,e)},i},"roundedWithTitle"),noteGroup:T,divider:/* @__PURE__ */(0,u.__name)((e,t)=>{let n=e.insert("g").attr("class",t.classes).attr("id",t.id),i=n.insert("rect",":first-child"),s=0*t.padding;i.attr("class","divider").attr("x",t.x-t.width/2-s/2).attr("y",t.y-t.height/2).attr("width",t.width+s).attr("height",t.height+s);let a=i.node().getBBox();return t.width=a.width,t.height=a.height,t.diff=-t.padding/2,t.intersect=function(e){return(0,r.intersect_rect_default)(t,e)},n},"divider")},S={},X=/* @__PURE__ */(0,u.__name)((e,t)=>{(0,c.log).trace("Inserting cluster");let n=t.shape||"rect";S[t.id]=L[n](e,t)},"insertCluster"),O=/* @__PURE__ */(0,u.__name)(()=>{S={}},"clear"),M=/* @__PURE__ */(0,u.__name)(async(e,t,n,i,s,l)=>{(0,c.log).info("Graph in recursive render: XXX",(0,a.write)(t),s);let h=t.graph().rankdir;(0,c.log).trace("Dir in recursive render - dir:",h);let g=e.insert("g").attr("class","root");t.nodes()?(0,c.log).info("Recursive render XXX",t.nodes()):(0,c.log).info("No nodes found for",t),t.edges().length>0&&(0,c.log).trace("Recursive edges",t.edge(t.edges()[0]));let u=g.insert("g").attr("class","clusters"),p=g.insert("g").attr("class","edgePaths"),_=g.insert("g").attr("class","edgeLabels"),m=g.insert("g").attr("class","nodes");await Promise.all(t.nodes().map(async function(e){let a=t.node(e);if(void 0!==s){let n=JSON.parse(JSON.stringify(s.clusterData));(0,c.log).info("Setting data for cluster XXX (",e,") ",n,s),t.setNode(s.id,n),t.parent(e)||((0,c.log).trace("Setting parent",e,s.id),t.setParent(e,s.id,n))}if((0,c.log).info("(Insert) Node XXX"+e+": "+JSON.stringify(t.node(e))),a?.clusterNode){(0,c.log).info("Cluster identified",e,a.width,t.node(e));let{ranksep:s,nodesep:o}=t.graph();a.graph.setGraph({...a.graph.graph(),ranksep:s,nodesep:o});let d=await M(m,a.graph,n,i,t.node(e),l),h=d.elem;(0,r.updateNodeBounds)(a,h),a.diff=d.diff||0,(0,c.log).info("Node bounds (abc123)",e,a,a.width,a.x,a.y),(0,r.setNodeElem)(h,a),(0,c.log).warn("Recursive render complete ",h,a)}else t.children(e).length>0?((0,c.log).info("Cluster - the non recursive path XXX",e,a.id,a,t),(0,c.log).info(C(a.id,t)),f[a.id]={id:C(a.id,t),node:a}):((0,c.log).info("Node - the non recursive path",e,a.id,a),await (0,r.insertNode)(m,t.node(e),{config:l,dir:h}))})),t.edges().forEach(async function(e){let n=t.edge(e.v,e.w,e.name);(0,c.log).info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e)),(0,c.log).info("Edge "+e.v+" -> "+e.w+": ",e," ",JSON.stringify(t.edge(e))),(0,c.log).info("Fix",f,"ids:",e.v,e.w,"Translating: ",f[e.v],f[e.w]),await (0,r.insertEdgeLabel)(_,n)}),t.edges().forEach(function(e){(0,c.log).info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e))}),(0,c.log).info("Graph before layout:",JSON.stringify((0,a.write)(t))),(0,c.log).info("#############################################"),(0,c.log).info("###                Layout                 ###"),(0,c.log).info("#############################################"),(0,c.log).info(t),(0,d.layout)(t),(0,c.log).info("Graph after layout:",JSON.stringify((0,a.write)(t)));let w=0,{subGraphTitleTotalMargin:v}=(0,o.getSubGraphTitleMargins)(l);return j(t).forEach(function(e){let n=t.node(e);(0,c.log).info("Position "+e+": "+JSON.stringify(t.node(e))),(0,c.log).info("Position "+e+": ("+n.x,","+n.y,") width: ",n.width," height: ",n.height),n?.clusterNode?(n.y+=v,(0,r.positionNode)(n)):t.children(e).length>0?(n.height+=v,X(u,n),f[n.id].node=n):(n.y+=v/2,(0,r.positionNode)(n))}),t.edges().forEach(function(e){let s=t.edge(e);(0,c.log).info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(s),s),s.points.forEach(e=>e.y+=v/2);let a=(0,r.insertEdge)(p,e,s,f,n,t,i);(0,r.positionEdgeLabel)(s,a)}),t.nodes().forEach(function(e){let n=t.node(e);(0,c.log).info(e,n.type,n.diff),"group"===n.type&&(w=n.diff)}),{elem:g,diff:w}},"recursiveRender"),B=/* @__PURE__ */(0,u.__name)(async(e,t,n,i,s)=>{(0,r.markers_default)(e,n,i,s),(0,r.clear)(),(0,r.clear2)(),O(),m(),(0,c.log).warn("Graph at first:",JSON.stringify((0,a.write)(t))),E(t),(0,c.log).warn("Graph after:",JSON.stringify((0,a.write)(t)));let o=(0,c.getConfig2)();await M(e,t,i,s,void 0,o)},"render"),I=/* @__PURE__ */(0,u.__name)(e=>(0,c.common_default).sanitizeText(e,(0,c.getConfig2)()),"sanitizeText"),G={dividerMargin:10,padding:5,textHeight:10,curve:void 0},F=/* @__PURE__ */(0,u.__name)(function(e,t,n,i){(0,c.log).info("keys:",[...e.keys()]),(0,c.log).info(e),e.forEach(function(e){let r={shape:"rect",id:e.id,domId:e.domId,labelText:I(e.id),labelStyle:"",style:"fill: none; stroke: black",padding:c.getConfig2().flowchart?.padding??c.getConfig2().class?.padding};t.setNode(e.id,r),R(e.classes,t,n,i,e.id),(0,c.log).info("setNode",r)})},"addNamespaces"),R=/* @__PURE__ */(0,u.__name)(function(e,t,n,i,r){(0,c.log).info("keys:",[...e.keys()]),(0,c.log).info(e),[...e.values()].filter(e=>e.parent===r).forEach(function(e){let n=e.cssClasses.join(" "),s=(0,g.getStylesFromArray)(e.styles),a=e.label??e.id,o={labelStyle:s.labelStyle,shape:"class_box",labelText:I(a),classData:e,rx:0,ry:0,class:n,style:s.style,id:e.id,domId:e.domId,tooltip:i.db.getTooltip(e.id,r)||"",haveCallback:e.haveCallback,link:e.link,width:"group"===e.type?500:void 0,type:e.type,padding:c.getConfig2().flowchart?.padding??c.getConfig2().class?.padding};t.setNode(e.id,o),r&&t.setParent(e.id,r),(0,c.log).info("setNode",o)})},"addClasses"),A=/* @__PURE__ */(0,u.__name)(function(e,t,n,i){(0,c.log).info(e),e.forEach(function(e,r){let s={labelStyle:"",shape:"note",labelText:I(e.text),noteData:e,rx:0,ry:0,class:"",style:"",id:e.id,domId:e.id,tooltip:"",type:"note",padding:c.getConfig2().flowchart?.padding??c.getConfig2().class?.padding};if(t.setNode(e.id,s),(0,c.log).info("setNode",s),!e.class||!i.has(e.class))return;let a=n+r,o={id:`edgeNote${a}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:(0,g.interpolateToCurve)(G.curve,c.linear_default)};t.setEdge(e.id,e.class,o,a)})},"addNotes"),P=/* @__PURE__ */(0,u.__name)(function(e,t){let n=(0,c.getConfig2)().flowchart,i=0;e.forEach(function(e){i++;let r={classes:"relation",pattern:1==e.relation.lineType?"dashed":"solid",id:(0,g.getEdgeId)(e.id1,e.id2,{prefix:"id",counter:i}),arrowhead:"arrow_open"===e.type?"none":"normal",startLabelRight:"none"===e.relationTitle1?"":e.relationTitle1,endLabelLeft:"none"===e.relationTitle2?"":e.relationTitle2,arrowTypeStart:H(e.relation.type1),arrowTypeEnd:H(e.relation.type2),style:"fill:none",labelStyle:"",curve:(0,g.interpolateToCurve)(n?.curve,c.linear_default)};if((0,c.log).info(r,e),void 0!==e.style){let t=(0,g.getStylesFromArray)(e.style);r.style=t.style,r.labelStyle=t.labelStyle}e.text=e.title,void 0===e.text?void 0!==e.style&&(r.arrowheadStyle="fill: #333"):(r.arrowheadStyle="fill: #333",r.labelpos="c",c.getConfig2().flowchart?.htmlLabels??(0,c.getConfig2)().htmlLabels?(r.labelType="html",r.label='<span class="edgeLabel">'+e.text+"</span>"):(r.labelType="text",r.label=e.text.replace(c.common_default.lineBreakRegex,"\n"),void 0===e.style&&(r.style=r.style||"stroke: #333; stroke-width: 1.5px;fill:none"),r.labelStyle=r.labelStyle.replace("color:","fill:"))),t.setEdge(e.id1,e.id2,r,i)})},"addRelations"),Z=/* @__PURE__ */(0,u.__name)(function(e){G={...G,...e}},"setConf"),U=/* @__PURE__ */(0,u.__name)(async function(e,t,n,i){let r;(0,c.log).info("Drawing class - ",t);let s=(0,c.getConfig2)().flowchart??(0,c.getConfig2)().class,a=(0,c.getConfig2)().securityLevel;(0,c.log).info("config:",s);let o=s?.nodeSpacing??50,l=s?.rankSpacing??50,d=new(0,h.Graph)({multigraph:!0,compound:!0}).setGraph({rankdir:i.db.getDirection(),nodesep:o,ranksep:l,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),u=i.db.getNamespaces(),f=i.db.getClasses(),p=i.db.getRelations(),_=i.db.getNotes();(0,c.log).info(p),F(u,d,t,i),R(f,d,t,i),P(p,d),A(_,d,p.length+1,f),"sandbox"===a&&(r=(0,c.select_default)("#i"+t));let m="sandbox"===a?(0,c.select_default)(r.nodes()[0].contentDocument.body):(0,c.select_default)("body"),w=m.select(`[id="${t}"]`),v=m.select("#"+t+" g");if(await B(v,d,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",t),(0,g.utils_default).insertTitle(w,"classTitleText",s?.titleTopMargin??5,i.db.getDiagramTitle()),(0,c.setupGraphViewbox)(d,w,s?.diagramPadding,s?.useMaxWidth),!s?.htmlLabels){let e="sandbox"===a?r.nodes()[0].contentDocument:document;for(let n of e.querySelectorAll('[id="'+t+'"] .edgeLabel .label')){let t=n.getBBox(),i=e.createElementNS("http://www.w3.org/2000/svg","rect");i.setAttribute("rx",0),i.setAttribute("ry",0),i.setAttribute("width",t.width),i.setAttribute("height",t.height),n.insertBefore(i,n.firstChild)}}},"draw");function H(e){let t;switch(e){case 0:t="aggregation";break;case 1:t="extension";break;case 2:t="composition";break;case 3:t="dependency";break;case 4:t="lollipop";break;default:t="none"}return t}(0,u.__name)(H,"getArrowMarker");var J={parser:s.classDiagram_default,db:s.classDb_default,renderer:{setConf:Z,draw:U},styles:s.styles_default,init:/* @__PURE__ */(0,u.__name)(e=>{e.class||(e.class={}),e.class.arrowMarkerAbsolute=e.arrowMarkerAbsolute,(0,s.classDb_default).clear()},"init")}},{"./chunk-WMZTR77G.mjs":"fD6Q5","./chunk-RZWOMDKR.mjs":"9BcCS","./chunk-B7GIP3BC.mjs":"bXFk4","./chunk-KW7S66XI.mjs":"4Tjwt","./chunk-KZHXEMGG.mjs":"kFezN","./chunk-CN5XARC6.mjs":"jzIXo","./chunk-ULVYQCHC.mjs":"gr6zv","./chunk-F3FIDV27.mjs":"4aBfS","./chunk-GKOISANM.mjs":"9F7Gp","./chunk-ZXHTWV66.mjs":"iF86s","./chunk-TZBO7MLI.mjs":"9m8dA","./chunk-GRZAG2UZ.mjs":"4I8cr","./chunk-HD3LK5B5.mjs":"cz0yX","./chunk-DLQEHMXD.mjs":"1MRh8","@parcel/transformer-js/src/esmodule-helpers.js":"XTfsy"}],bXFk4:[function(e,t,n){var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(n),i.export(n,"write",()=>a);var r=e("./chunk-TZBO7MLI.mjs"),s=e("./chunk-DLQEHMXD.mjs");function a(e){var t={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:o(e),edges:l(e)};return(0,r.isUndefined_default)(e.graph())||(t.value=(0,r.clone_default)(e.graph())),t}function o(e){return(0,r.map_default)(e.nodes(),function(t){var n=e.node(t),i=e.parent(t),s={v:t};return(0,r.isUndefined_default)(n)||(s.value=n),(0,r.isUndefined_default)(i)||(s.parent=i),s})}function l(e){return(0,r.map_default)(e.edges(),function(t){var n=e.edge(t),i={v:t.v,w:t.w};return(0,r.isUndefined_default)(t.name)||(i.name=t.name),(0,r.isUndefined_default)(n)||(i.value=n),i})}(0,s.__name)(a,"write"),(0,s.__name)(o,"writeNodes"),(0,s.__name)(l,"writeEdges")},{"./chunk-TZBO7MLI.mjs":"9m8dA","./chunk-DLQEHMXD.mjs":"1MRh8","@parcel/transformer-js/src/esmodule-helpers.js":"XTfsy"}],gr6zv:[function(e,t,n){var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(n),i.export(n,"Graph",()=>l);var r=e("./chunk-TZBO7MLI.mjs"),s=e("./chunk-GRZAG2UZ.mjs"),a=e("./chunk-HD3LK5B5.mjs"),o=e("./chunk-DLQEHMXD.mjs"),l=class{static{(0,o.__name)(this,"Graph")}constructor(e={}){this._isDirected=!(0,r.has_default)(e,"directed")||e.directed,this._isMultigraph=!!(0,r.has_default)(e,"multigraph")&&e.multigraph,this._isCompound=!!(0,r.has_default)(e,"compound")&&e.compound,this._label=void 0,this._defaultNodeLabelFn=(0,a.constant_default)(void 0),this._defaultEdgeLabelFn=(0,a.constant_default)(void 0),this._nodes={},this._isCompound&&(this._parent={},this._children={},this._children["\0"]={}),this._in={},this._preds={},this._out={},this._sucs={},this._edgeObjs={},this._edgeLabels={}}isDirected(){return this._isDirected}isMultigraph(){return this._isMultigraph}isCompound(){return this._isCompound}setGraph(e){return this._label=e,this}graph(){return this._label}setDefaultNodeLabel(e){return(0,a.isFunction_default)(e)||(e=(0,a.constant_default)(e)),this._defaultNodeLabelFn=e,this}nodeCount(){return this._nodeCount}nodes(){return(0,r.keys_default)(this._nodes)}sources(){var e=this;return(0,r.filter_default)(this.nodes(),function(t){return(0,s.isEmpty_default)(e._in[t])})}sinks(){var e=this;return(0,r.filter_default)(this.nodes(),function(t){return(0,s.isEmpty_default)(e._out[t])})}setNodes(e,t){var n=arguments,i=this;return(0,r.forEach_default)(e,function(e){n.length>1?i.setNode(e,t):i.setNode(e)}),this}setNode(e,t){return(0,r.has_default)(this._nodes,e)?arguments.length>1&&(this._nodes[e]=t):(this._nodes[e]=arguments.length>1?t:this._defaultNodeLabelFn(e),this._isCompound&&(this._parent[e]="\0",this._children[e]={},this._children["\0"][e]=!0),this._in[e]={},this._preds[e]={},this._out[e]={},this._sucs[e]={},++this._nodeCount),this}node(e){return this._nodes[e]}hasNode(e){return(0,r.has_default)(this._nodes,e)}removeNode(e){var t=this;if((0,r.has_default)(this._nodes,e)){var n=/* @__PURE__ */(0,o.__name)(function(e){t.removeEdge(t._edgeObjs[e])},"removeEdge");delete this._nodes[e],this._isCompound&&(this._removeFromParentsChildList(e),delete this._parent[e],(0,r.forEach_default)(this.children(e),function(e){t.setParent(e)}),delete this._children[e]),(0,r.forEach_default)((0,r.keys_default)(this._in[e]),n),delete this._in[e],delete this._preds[e],(0,r.forEach_default)((0,r.keys_default)(this._out[e]),n),delete this._out[e],delete this._sucs[e],--this._nodeCount}return this}setParent(e,t){if(!this._isCompound)throw Error("Cannot set parent in a non-compound graph");if((0,r.isUndefined_default)(t))t="\0";else{t+="";for(var n=t;!(0,r.isUndefined_default)(n);n=this.parent(n))if(n===e)throw Error("Setting "+t+" as parent of "+e+" would create a cycle");this.setNode(t)}return this.setNode(e),this._removeFromParentsChildList(e),this._parent[e]=t,this._children[t][e]=!0,this}_removeFromParentsChildList(e){delete this._children[this._parent[e]][e]}parent(e){if(this._isCompound){var t=this._parent[e];if("\0"!==t)return t}}children(e){if((0,r.isUndefined_default)(e)&&(e="\0"),this._isCompound){var t=this._children[e];if(t)return(0,r.keys_default)(t)}else if("\0"===e)return this.nodes();else if(this.hasNode(e))return[]}predecessors(e){var t=this._preds[e];if(t)return(0,r.keys_default)(t)}successors(e){var t=this._sucs[e];if(t)return(0,r.keys_default)(t)}neighbors(e){var t=this.predecessors(e);if(t)return(0,r.union_default)(t,this.successors(e))}isLeaf(e){return 0===(this.isDirected()?this.successors(e):this.neighbors(e)).length}filterNodes(e){var t=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});t.setGraph(this.graph());var n=this;(0,r.forEach_default)(this._nodes,function(n,i){e(i)&&t.setNode(i,n)}),(0,r.forEach_default)(this._edgeObjs,function(e){t.hasNode(e.v)&&t.hasNode(e.w)&&t.setEdge(e,n.edge(e))});var i={};function s(e){var r=n.parent(e);return void 0===r||t.hasNode(r)?(i[e]=r,r):r in i?i[r]:s(r)}return(0,o.__name)(s,"findParent"),this._isCompound&&(0,r.forEach_default)(t.nodes(),function(e){t.setParent(e,s(e))}),t}setDefaultEdgeLabel(e){return(0,a.isFunction_default)(e)||(e=(0,a.constant_default)(e)),this._defaultEdgeLabelFn=e,this}edgeCount(){return this._edgeCount}edges(){return(0,r.values_default)(this._edgeObjs)}setPath(e,t){var n=this,i=arguments;return(0,r.reduce_default)(e,function(e,r){return i.length>1?n.setEdge(e,r,t):n.setEdge(e,r),r}),this}setEdge(){var e,t,n,i,s=!1,a=arguments[0];"object"==typeof a&&null!==a&&"v"in a?(e=a.v,t=a.w,n=a.name,2==arguments.length&&(i=arguments[1],s=!0)):(e=a,t=arguments[1],n=arguments[3],arguments.length>2&&(i=arguments[2],s=!0)),e=""+e,t=""+t,(0,r.isUndefined_default)(n)||(n=""+n);var o=g(this._isDirected,e,t,n);if((0,r.has_default)(this._edgeLabels,o))return s&&(this._edgeLabels[o]=i),this;if(!(0,r.isUndefined_default)(n)&&!this._isMultigraph)throw Error("Cannot set a named edge when isMultigraph = false");this.setNode(e),this.setNode(t),this._edgeLabels[o]=s?i:this._defaultEdgeLabelFn(e,t,n);var l=c(this._isDirected,e,t,n);return e=l.v,t=l.w,Object.freeze(l),this._edgeObjs[o]=l,d(this._preds[t],e),d(this._sucs[e],t),this._in[t][o]=l,this._out[e][o]=l,this._edgeCount++,this}edge(e,t,n){var i=1==arguments.length?u(this._isDirected,arguments[0]):g(this._isDirected,e,t,n);return this._edgeLabels[i]}hasEdge(e,t,n){var i=1==arguments.length?u(this._isDirected,arguments[0]):g(this._isDirected,e,t,n);return(0,r.has_default)(this._edgeLabels,i)}removeEdge(e,t,n){var i=1==arguments.length?u(this._isDirected,arguments[0]):g(this._isDirected,e,t,n),r=this._edgeObjs[i];return r&&(e=r.v,t=r.w,delete this._edgeLabels[i],delete this._edgeObjs[i],h(this._preds[t],e),h(this._sucs[e],t),delete this._in[t][i],delete this._out[e][i],this._edgeCount--),this}inEdges(e,t){var n=this._in[e];if(n){var i=(0,r.values_default)(n);return t?(0,r.filter_default)(i,function(e){return e.v===t}):i}}outEdges(e,t){var n=this._out[e];if(n){var i=(0,r.values_default)(n);return t?(0,r.filter_default)(i,function(e){return e.w===t}):i}}nodeEdges(e,t){var n=this.inEdges(e,t);if(n)return n.concat(this.outEdges(e,t))}};function d(e,t){e[t]?e[t]++:e[t]=1}function h(e,t){--e[t]||delete e[t]}function g(e,t,n,i){var s=""+t,a=""+n;if(!e&&s>a){var o=s;s=a,a=o}return s+"\x01"+a+"\x01"+((0,r.isUndefined_default)(i)?"\0":i)}function c(e,t,n,i){var r=""+t,s=""+n;if(!e&&r>s){var a=r;r=s,s=a}var o={v:r,w:s};return i&&(o.name=i),o}function u(e,t){return g(e,t.v,t.w,t.name)}l.prototype._nodeCount=0,l.prototype._edgeCount=0,(0,o.__name)(d,"incrementOrInitEntry"),(0,o.__name)(h,"decrementOrRemoveEntry"),(0,o.__name)(g,"edgeArgsToId"),(0,o.__name)(c,"edgeArgsToObj"),(0,o.__name)(u,"edgeObjToId")},{"./chunk-TZBO7MLI.mjs":"9m8dA","./chunk-GRZAG2UZ.mjs":"4I8cr","./chunk-HD3LK5B5.mjs":"cz0yX","./chunk-DLQEHMXD.mjs":"1MRh8","@parcel/transformer-js/src/esmodule-helpers.js":"XTfsy"}]},[],0,"parcelRequire20b6");