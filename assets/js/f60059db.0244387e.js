"use strict";(self.webpackChunklearngenomics_dev=self.webpackChunklearngenomics_dev||[]).push([[386],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,y=u["".concat(s,".").concat(f)]||u[f]||h[f]||i;return n?o.createElement(y,r(r({ref:t},l),{},{components:n})):o.createElement(y,r({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6596:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return h}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],p={title:"Genotype, Phenotype and Haplotype",track:"Biological Foundations"},s=void 0,c={unversionedId:"biological-foundations/genotype-phenotype-haplotype",id:"biological-foundations/genotype-phenotype-haplotype",title:"Genotype, Phenotype and Haplotype",description:"Genotype",source:"@site/docs/01-biological-foundations/05-genotype-phenotype-haplotype.md",sourceDirName:"01-biological-foundations",slug:"/biological-foundations/genotype-phenotype-haplotype",permalink:"/docs/biological-foundations/genotype-phenotype-haplotype",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/01-biological-foundations/05-genotype-phenotype-haplotype.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Genotype, Phenotype and Haplotype",track:"Biological Foundations"},sidebar:"tutorialSidebar",previous:{title:"Translation",permalink:"/docs/biological-foundations/translation"},next:{title:"Genomic Variation",permalink:"/docs/genomic-variation/"}},l={},h=[{value:"Genotype",id:"genotype",level:2},{value:"Phenotype",id:"phenotype",level:2},{value:"Haplotype",id:"haplotype",level:2}],u={toc:h};function f(e){var t=e.components,p=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"genotype"},"Genotype"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Genotype")," is an overloaded term that can mean one of two things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Most commonly within the area of computational genomics, the term genotype\nrefers to the particular alleles found a given position or locus within the\ngenome. So, for instance, if position 7 on the theoretical chromosome in the\nfigure below contains an ",(0,i.kt)("inlineCode",{parentName:"li"},"A")," on one copy and a ",(0,i.kt)("inlineCode",{parentName:"li"},"G")," on the other copy. This is\nsaid to be a genotype call of ",(0,i.kt)("inlineCode",{parentName:"li"},"A/G")," at position 7."),(0,i.kt)("li",{parentName:"ul"},"Less commonly within the area of computational genomics, the term genotype\nwill be used to reference an organism's complete set of genetic material,\nincluding all of the variants included therein.  ")),(0,i.kt)("p",null,"Which definition is implied is largely based on the context of the conversation: if one\nis talking about a system-wide effect that is likely to be caused by the complicated\ninteraction(s) between various parts of the organism's genetic code, then the second\ndefinition is more suited. Within computational genomics, we are often concerned with\nhighly focal changes, hence the preference of the first definition above. "),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Throughout this guide, we'll assume the first definition for genotype unless otherwise\nspecified.")),(0,i.kt)("h2",{id:"phenotype"},"Phenotype"),(0,i.kt)("p",null,"An observed (often physical) trait that specific genes confer is known as\na\xa0",(0,i.kt)("strong",{parentName:"p"},"phenotype"),". When we see a person with blue eyes (a phenotype), we know that\nthey carry a set specific genetic sequences that makes that eye color possible\n(a genotype). In cancer, the features of the disease are the phenotype and the\nmutations and variants within the individual make up the genotype. In genomics,\nbiologists seek to link genotypes to phenotypes to improve diagnoses and\nunderstand how cancer works. This phenomenon is known as a ",(0,i.kt)("strong",{parentName:"p"},"genotype-phenotype\nrelationship"),"."),(0,i.kt)("h2",{id:"haplotype"},"Haplotype"),(0,i.kt)("p",null,"Recall that each human genome is composed of pairs of chromosomes, one inherited from\neach parent. That means, with a few exceptions, nearly every gene has two copies. Often\nthe two DNA sequences of that encoded gene differ. Each distinct copy is\na\xa0",(0,i.kt)("strong",{parentName:"p"},"haplotype"),"\xa0for that gene. Together the two haplotypes make up the genotype, and the\nproteins they produce determines the phenotype. A variant is often detected on only one\ncopy of the gene. If the variant causes a loss of function in an important gene, that\none mutation may be insufficient to cause cancer but may create a predisposition to\ncancer later in life."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Figure showing the relationship between a genotype, a phenotype, and a haplotype",src:n(3986).Z,width:"2259",height:"1068"})))}f.isMDXComponent=!0},3986:function(e,t,n){t.Z=n.p+"assets/images/1.7-genotype-phenotype-haplotype-3db02c98a8b8a919fa4a4cf57aff58b2.jpg"}}]);