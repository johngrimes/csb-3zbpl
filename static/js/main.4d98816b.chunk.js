(this["webpackJsonpcardiovascular-risk-calculator"]=this["webpackJsonpcardiovascular-risk-calculator"]||[]).push([[0],{929:function(e,t,n){"use strict";n.r(t);var r=n(4),i=n(86),a=n(976),c=n(987),o=n(174),u=n(44),l=n.n(u),s=n(67),d=n(106),v=n(805),h=n.n(v),b=n(124),f=n(125),p=n(806),j=n.n(p),m=function(){function e(t){Object(b.a)(this,e),this.client=void 0,this.client=j.a.create({baseURL:t,headers:{Accept:"application/fhir+json"}})}return Object(f.a)(e,[{key:"expandValueSet",value:function(){var e=Object(s.a)(l.a.mark((function e(t){var n,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.client.get("/ValueSet/$expand?url=".concat(t));case 2:return i=e.sent,e.abrupt("return",null!==(n=null===(r=i.data.expansion)||void 0===r?void 0:r.contains)&&void 0!==n?n:[]);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),x=n(7),O="https://r4.ontoserver.csiro.au/fhir",y="14646-4",g="http://snomed.info/sct?fhir_vs=ecl/%3C%3C%2073211009%20",k="http://snomed.info/sct?fhir_vs=ecl/%3C%3C%2049601007%20",S="http://snomed.info/sct?fhir_vs=ecl/%3C%3C%2049436004%20",C=[{system:"http://snomed.info/sct",code:"163035008"},{system:"http://loinc.org",code:"55284-4"},{system:"http://loinc.org",code:"85354-9"}],w=[{system:"http://loinc.org",code:"72166-2"}],P=["8392000","LA18978-9"],A=["160617001","8517006","LA15920-4"],M=["77176002","LA18976-3","LA18977-1","LA18981-3","LA18982-1"],D=Object(r.createContext)(null);function H(e){var t=e.client,n=Object(r.useMemo)((function(){return function(e){return F.apply(this,arguments)}(t)}),[]),i=n.then((function(e){return function(e){return V.apply(this,arguments)}(e)}));return Object(x.jsx)(D.Provider,{value:i,children:e.children})}function F(){return(F=Object(s.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(t);case 2:return n=e.sent,e.t0=n,e.next=6,W(t,n);case 6:return e.t1=e.sent,e.next=9,I(t,n);case 9:return e.t2=e.sent,e.next=12,T(t,n);case 12:return e.t3=e.sent,e.next=15,Q(t,n);case 15:return e.t4=e.sent,e.next=18,N(t,n);case 18:return e.t5=e.sent,e.abrupt("return",{patient:e.t0,cholesterol:e.t1,bloodPressure:e.t2,history:e.t3,familyHistory:e.t4,smoker:e.t5});case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){return B.apply(this,arguments)}function B(){return(B=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.patient.read();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e,t){return q.apply(this,arguments)}function q(){return(q=Object(s.a)(l.a.mark((function e(t,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.request("/Observation?_sort=-date&patient=".concat(n.id,"&_count=2&")+"code=http%3A%2F%2Floinc.org%7C"+"14647-2,http%3A%2F%2Floinc.org%7C"+y);case 2:return r=e.sent,e.abrupt("return",r.entry?r.entry.filter((function(e){return e.resource})).map((function(e){return e.resource})):[]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e,t){return _.apply(this,arguments)}function _(){return(_=Object(s.a)(l.a.mark((function e(t,n){var r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=C.map((function(e){return"".concat(e.system,"|").concat(e.code)})).join(","),e.next=3,t.request("/Observation?_sort=-date&patient=".concat(n.id,"&_count=1&code=")+r);case 3:return i=e.sent,e.abrupt("return",i.entry?i.entry.filter((function(e){return e.resource})).map((function(e){return e.resource})):[]);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e,t){return E.apply(this,arguments)}function E(){return(E=Object(s.a)(l.a.mark((function e(t,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.request("/Condition?patient=".concat(n.id));case 2:return r=e.sent,e.abrupt("return",r.entry?r.entry.filter((function(e){return e.resource})).map((function(e){return e.resource})):[]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(e,t){return z.apply(this,arguments)}function z(){return(z=Object(s.a)(l.a.mark((function e(t,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.request("/FamilyMemberHistory?patient=".concat(n.id));case 2:return r=e.sent,e.abrupt("return",r.entry?r.entry.filter((function(e){return e.resource})).map((function(e){return e.resource})):[]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,t){return G.apply(this,arguments)}function G(){return(G=Object(s.a)(l.a.mark((function e(t,n){var r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=w.map((function(e){return"".concat(e.system,"|").concat(e.code)})).join(","),e.next=3,t.request("/Observation?_sort=-date&patient=".concat(n.id,"&_count=1&code=")+r);case 3:return i=e.sent,e.abrupt("return",i.entry?i.entry.filter((function(e){return e.resource})).map((function(e){return e.resource})):[]);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(){return(V=Object(s.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=R(t.cholesterol),e.t0=o.a,e.t1=Object(o.a)({birthSex:Z(t.patient),age:K(t.patient)},n),e.t2={},e.t3=U(t.bloodPressure),e.next=7,J(t.history,g);case 7:return e.t4=e.sent,e.next=10,X(t.familyHistory,k);case 10:return e.t5=e.sent,e.next=13,J(t.history,S);case 13:return e.t6=e.sent,e.t7=ee(t.smoker),e.t8={systolicBP:e.t3,diabetes:e.t4,familyHistory:e.t5,af:e.t6,smoker:e.t7},e.abrupt("return",(0,e.t0)(e.t1,e.t2,e.t8));case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e){if(!e.extension)return null;var t,n,r=e.extension.filter((function(e){return"http://hl7.org.au/fhir/StructureDefinition/au-sexassignedatbirth"===e.url}));r.length>0&&(t=null!==(n=r[0].valueCode)&&void 0!==n?n:null);return t||(e.gender?e.gender===d.PatientGenderKind._female?"248152002":e.gender===d.PatientGenderKind._male?"248153007":null:null)}function K(e){return h()().diff(e.birthDate,"years")}function R(e){var t,n,r,i;if(2!==e.length)return null;var a=e[0],c=e[1];if(!a.effectiveDateTime||!c.effectiveDateTime||a.effectiveDateTime!==c.effectiveDateTime)return null;var o=null===(t=a.valueQuantity)||void 0===t?void 0:t.value,u=null===(n=a.valueQuantity)||void 0===n?void 0:n.unit,l=null===(r=c.valueQuantity)||void 0===r?void 0:r.value,s=null===(i=c.valueQuantity)||void 0===i?void 0:i.unit;return o&&l&&u&&s&&u===s?{hdl:l,totalCholesterol:o}:null}function U(e){var t,n,r;if(1!==e.length)return null;var i=null===(t=e[0].component)||void 0===t?void 0:t.find((function(e){var t,n,r=null===(t=e.code)||void 0===t?void 0:t.coding;if(!r)return!1;var i=r.find((function(e){return"http://loinc.org"===e.system&&"8459-0"===e.code||"http://loinc.org"===e.system&&"8480-6"===e.code})),a="mmHg"===(null===(n=e.valueQuantity)||void 0===n?void 0:n.unit);return i&&a}));return null!==(n=null===i||void 0===i||null===(r=i.valueQuantity)||void 0===r?void 0:r.value)&&void 0!==n?n:null}function J(e,t){return $.apply(this,arguments)}function $(){return($=Object(s.a)(l.a.mark((function e(t,n){var r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new m(O),e.next=3,r.expandValueSet(n);case 3:return i=e.sent,e.abrupt("return",t.some((function(e){var t,n=null===(t=e.code)||void 0===t?void 0:t.coding;return!!n&&!!n.find((function(e){return i.find((function(t){return t.system===e.system&&t.code===e.code}))}))})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(e,t){return Y.apply(this,arguments)}function Y(){return(Y=Object(s.a)(l.a.mark((function e(t,n){var r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new m(O),e.next=3,r.expandValueSet(n);case 3:return i=e.sent,e.abrupt("return",t.some((function(e){var t=e.condition;return!!t&&!!t.find((function(e){return!!e.code.coding&&e.code.coding.find((function(e){return i.find((function(t){return t.system===e.system&&t.code===e.code}))}))}))})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ee(e){var t,n,r;if(1!==e.length)return null;var i=null===(t=e[0].valueCodeableConcept)||void 0===t||null===(n=t.coding)||void 0===n?void 0:n.find((function(e){return("http://loinc.org"===e.system||"http://snomed.info/sct"===e.system)&&e.code})),a=null!==(r=null===i||void 0===i?void 0:i.code)&&void 0!==r?r:"";return P.includes(a)?"8392000":A.includes(a)?"160617001":M.includes(a)?"77176002":null}var te=n(33),ne=n(991),re=n(990),ie=n(982),ae=n(994),ce=n(984),oe=n(971),ue=n(983),le=n(977),se=n(979),de=n(980),ve=n(988),he=n(985),be={baseSurvival:.974755526232,ageMean:51.79953,nzdMean:2.97293,sbpMean:129.1095,tcHdlMean:4.38906,cAge:.0675532,cEthnicity:{maori:.2899054,pacific:.1774195,indian:.2902049,asian:-.3975687},cNZDep:.0794903,cExSmoker:.0753246,cSmoker:.5058041,cFamilyHist:.1326587,cAF:.5880131,cDiabetes:.5597023,cSBP:.0163778,cTcHdl:.1283758,cOBPLM:.2947634,cOLLM:-.0537314,cOATM:.0934141,cAgeDiabetes:-.020235,cAgeSBP:-4184e-7,cObplmSBP:-.0053077},fe={baseSurvival:.983169213058,ageMean:56.13665,nzdMean:2.990826,sbpMean:129.0173,tcHdlMean:3.726268,cAge:.0756412,cEthnicity:{maori:.3910183,pacific:.2010224,indian:.1183427,asian:-.28551},cNZDep:.1080795,cExSmoker:.087476,cSmoker:.6226384,cFamilyHist:.0445534,cAF:.8927126,cDiabetes:.5447632,cSBP:.0136606,cTcHdl:.1226753,cOBPLM:.339925,cOLLM:-.0593798,cOATM:.1172496,cAgeDiabetes:-.0222549,cAgeSBP:-4425e-7,cObplmSBP:-.004313},pe=function(e){var t=e.birthSex,n=e.age,r=e.ethnicity,i=e.totalCholesterol,a=e.hdl,c=e.systolicBP,o=e.nzDep,u=e.smoker,l=e.familyHistory,s=e.af,d=e.diabetes,v=e.obplm,h=e.ollm,b=e.oatm,f="248153007"===t?be:"248152002"===t?fe:null;if(null===f)return null;var p=i&&a?i/a:void 0,j=void 0!==p?p-f.tcHdlMean:void 0,m=void 0!==n&&null!==n?Math.max(n,35)-f.ageMean:void 0,x=void 0!==o&&null!==o?o-f.nzdMean:void 0,O=void 0!==c&&null!==c?c-f.sbpMean:void 0,y=0;return void 0!==m&&(y+=f.cAge*m),void 0!==x&&(y+=f.cNZDep*x),void 0!==O&&(y+=f.cSBP*O,void 0!==m&&(y+=f.cAgeSBP*m*O)),void 0!==j&&(y+=f.cTcHdl*j),"77176002"===u?y+=f.cSmoker:"160617001"===u&&(y+=f.cExSmoker),d&&(y+=f.cDiabetes,void 0!==m&&(y+=f.cAgeDiabetes*m)),v&&(y+=f.cOBPLM,void 0!==O&&(y+=f.cObplmSBP*O)),h&&(y+=f.cOLLM),b&&(y+=f.cOATM),l&&(y+=f.cFamilyHist),s&&(y+=f.cAF),r&&r in f.cEthnicity&&(y+=f.cEthnicity[r]),100*(1-Math.pow(f.baseSurvival,Math.exp(y)))},je=n(973);function me(e){var t=e.params,n=e.client,r=pe(t),i=r?Intl.NumberFormat("en",{useGrouping:!1,maximumFractionDigits:1}).format(r):"";return Object(x.jsxs)(ve.a,{variant:"outlined",sx:{p:2},children:[Object(x.jsxs)(oe.a,{direction:"row",alignItems:"center",children:[Object(x.jsx)(re.a,{variant:"h6",component:"h2",sx:{flexGrow:1},children:"Calculated risk score"}),Object(x.jsx)(re.a,{color:"primary",sx:{textAlign:"right"},children:r?"".concat(i,"%"):"(not enough information)"})]}),Object(x.jsx)(oe.a,{direction:"row",justifyContent:"flex-end",sx:{mt:1},children:Object(x.jsx)(he.a,{variant:"contained",startIcon:Object(x.jsx)(je.a,{}),onClick:function(){if(null!==r){var e={resourceType:"Observation",status:d.ObservationStatusKind._final,code:{coding:[{system:"http://snomed.info/sct",code:"827181004",display:"Risk of cardiovascular disease"}]},valueQuantity:{value:r,unit:"%"},subject:{reference:"Patient/"+n.patient.id}};n.create(e).catch((function(e){return console.error(e)}))}},children:"Record risk score"})})]})}function xe(e){var t,n,i,a,c,o,u,l,s,d,v,h,b,f=e.initialParams,p=e.client,j=Object(r.useState)(null===f||void 0===f?void 0:f.birthSex),m=Object(te.a)(j,2),O=m[0],y=m[1],g=Object(r.useState)(null!==(t=null===f||void 0===f?void 0:f.age)&&void 0!==t?t:void 0),k=Object(te.a)(g,2),S=k[0],C=k[1],w=Object(r.useState)(null!==(n=null===f||void 0===f?void 0:f.totalCholesterol)&&void 0!==n?n:void 0),P=Object(te.a)(w,2),A=P[0],M=P[1],D=Object(r.useState)(null!==(i=null===f||void 0===f?void 0:f.hdl)&&void 0!==i?i:void 0),H=Object(te.a)(D,2),F=H[0],L=H[1],B=Object(r.useState)(null!==(a=null===f||void 0===f?void 0:f.systolicBP)&&void 0!==a?a:void 0),W=Object(te.a)(B,2),q=W[0],I=W[1],_=Object(r.useState)(null!==(c=null===f||void 0===f?void 0:f.nzDep)&&void 0!==c?c:void 0),T=Object(te.a)(_,2),E=T[0],Q=T[1],z=Object(r.useState)(null!==(o=null===f||void 0===f?void 0:f.ethnicity)&&void 0!==o?o:void 0),N=Object(te.a)(z,2),G=N[0],V=N[1],Z=Object(r.useState)(null!==(u=null===f||void 0===f?void 0:f.smoker)&&void 0!==u?u:void 0),K=Object(te.a)(Z,2),R=K[0],U=K[1],J=Object(r.useState)(null!==(l=null===f||void 0===f?void 0:f.familyHistory)&&void 0!==l?l:void 0),$=Object(te.a)(J,2),X=$[0],Y=$[1],ee=Object(r.useState)(null!==(s=null===f||void 0===f?void 0:f.af)&&void 0!==s?s:void 0),ve=Object(te.a)(ee,2),he=ve[0],be=ve[1],fe=Object(r.useState)(null!==(d=null===f||void 0===f?void 0:f.diabetes)&&void 0!==d?d:void 0),pe=Object(te.a)(fe,2),je=pe[0],xe=pe[1],Oe=Object(r.useState)(null!==(v=null===f||void 0===f?void 0:f.obplm)&&void 0!==v?v:void 0),ye=Object(te.a)(Oe,2),ge=ye[0],ke=ye[1],Se=Object(r.useState)(null!==(h=null===f||void 0===f?void 0:f.ollm)&&void 0!==h?h:void 0),Ce=Object(te.a)(Se,2),we=Ce[0],Pe=Ce[1],Ae=Object(r.useState)(null!==(b=null===f||void 0===f?void 0:f.oatm)&&void 0!==b?b:void 0),Me=Object(te.a)(Ae,2),De=Me[0],He=Me[1];return Object(x.jsx)(ne.a,{component:"form",maxWidth:"sm",sx:{pb:8},children:Object(x.jsxs)(oe.a,{spacing:4,sx:{my:4},children:[Object(x.jsx)(re.a,{variant:"h4",component:"h1",sx:{mb:4},children:"Cardiovascular risk calculator"}),Object(x.jsxs)(ie.a,{fullWidth:!0,children:[Object(x.jsx)(ue.a,{id:"birth-sex",children:"Biological sex at birth"}),Object(x.jsxs)(le.a,{labelId:"birth-sex",label:"Biological sex at birth",required:!0,value:O,onChange:function(e){return y(e.target.value)},autoFocus:!0,children:[Object(x.jsx)(se.a,{value:"248152002",children:"Female"}),Object(x.jsx)(se.a,{value:"248153007",children:"Male"}),Object(x.jsx)(se.a,{value:"32570691000036108",children:"Intersex"}),Object(x.jsx)(se.a,{value:"32570681000036106",children:"Indeterminate sex"})]})]}),Object(x.jsx)(ie.a,{fullWidth:!0,children:Object(x.jsx)(de.a,{label:"Age in years",type:"number",value:S,required:!0,onChange:function(e){return C(parseInt(e.target.value))}})}),Object(x.jsxs)(ie.a,{fullWidth:!0,children:[Object(x.jsx)(ue.a,{id:"ethnicity",children:"Ethnicity"}),Object(x.jsxs)(le.a,{label:"ethnicity",required:!0,value:G,onChange:function(e){return V(e.target.value)},children:[Object(x.jsx)(se.a,{value:"european",children:"European"}),Object(x.jsx)(se.a,{value:"maori",children:"Maori"}),Object(x.jsx)(se.a,{value:"pacific",children:"Pacific"}),Object(x.jsx)(se.a,{value:"indian",children:"Indian"}),Object(x.jsx)(se.a,{value:"asian",children:"Asian"}),Object(x.jsx)(se.a,{value:"other",children:"Other"})]})]}),Object(x.jsx)(ie.a,{fullWidth:!0,children:Object(x.jsx)(de.a,{label:"HDL (mmol/L)",type:"number",required:!0,inputProps:{min:0},value:F,onChange:function(e){return L(parseFloat(e.target.value))}})}),Object(x.jsx)(ie.a,{fullWidth:!0,children:Object(x.jsx)(de.a,{label:"Total cholesterol (mmol/L)",type:"number",required:!0,inputProps:{min:0},value:A,onChange:function(e){return M(parseFloat(e.target.value))}})}),Object(x.jsx)(ie.a,{fullWidth:!0,children:Object(x.jsx)(de.a,{label:"Systolic blood pressure (mm Hg)",type:"number",required:!0,inputProps:{min:0,max:250},value:q,onChange:function(e){return I(parseInt(e.target.value))}})}),Object(x.jsx)(ie.a,{fullWidth:!0,children:Object(x.jsx)(de.a,{label:"New Zealand Index of Socioeconomic Deprivation score",type:"number",required:!0,inputProps:{min:0,max:6},value:E,onChange:function(e){return Q(parseFloat(e.target.value))}})}),Object(x.jsxs)(ie.a,{fullWidth:!0,children:[Object(x.jsx)(ue.a,{id:"smoking",children:"Smoking status"}),Object(x.jsxs)(le.a,{labelId:"smoking",label:"Smoking status",required:!0,value:R,onChange:function(e){return U(e.target.value)},children:[Object(x.jsx)(se.a,{value:"8392000",children:"Non-smoker"}),Object(x.jsx)(se.a,{value:"160617001",children:"Stopped smoking"}),Object(x.jsx)(se.a,{value:"77176002",children:"Current smoker"})]})]}),Object(x.jsx)(ie.a,{fullWidth:!0,children:Object(x.jsx)(ae.a,{label:"Family history of cardiovascular disease?",control:Object(x.jsx)(ce.a,{checked:X,onChange:function(e){return Y(e.target.checked)}})})}),Object(x.jsx)(ie.a,{fullWidth:!0,children:Object(x.jsx)(ae.a,{label:"History of atrial fibrillation?",control:Object(x.jsx)(ce.a,{checked:he,onChange:function(e){return be(e.target.checked)}})})}),Object(x.jsx)(ie.a,{fullWidth:!0,children:Object(x.jsx)(ae.a,{label:"History of diabetes?",control:Object(x.jsx)(ce.a,{checked:je,onChange:function(e){return xe(e.target.checked)}})})}),Object(x.jsx)(ie.a,{fullWidth:!0,children:Object(x.jsx)(ae.a,{label:"Currently taking blood pressure lowering medication?",control:Object(x.jsx)(ce.a,{checked:ge,onChange:function(e){return ke(e.target.checked)}})})}),Object(x.jsx)(ie.a,{fullWidth:!0,children:Object(x.jsx)(ae.a,{label:"Currently taking lipid lowering medication?",control:Object(x.jsx)(ce.a,{checked:we,onChange:function(e){return Pe(e.target.checked)}})})}),Object(x.jsx)(ie.a,{fullWidth:!0,sx:{pb:2},children:Object(x.jsx)(ae.a,{label:"Currently taking anti-thrombotic medication?",control:Object(x.jsx)(ce.a,{checked:De,onChange:function(e){return He(e.target.checked)}})})}),Object(x.jsx)(me,{client:p,params:{birthSex:O,age:S,ethnicity:G,totalCholesterol:A,hdl:F,systolicBP:q,nzDep:E,smoker:R,familyHistory:X,af:he,diabetes:je,obplm:ge,ollm:we,oatm:De}})]})})}var Oe=n(811),ye=n.n(Oe);function ge(e){var t=e.client,n=Object(r.useContext)(D),i=ye()((function(){return n}),[]);return Object(x.jsx)(xe,{initialParams:i,client:t})}var ke=n(91),Se=n(813),Ce=Object(Se.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:ke.a.A400}}}),we=n(812),Pe=n(995);function Ae(){return Object(x.jsx)(ne.a,{sx:{py:6},children:Object(x.jsxs)(oe.a,{spacing:2,alignItems:"center",children:[Object(x.jsx)(Pe.a,{}),Object(x.jsx)(re.a,{children:"Pre-filling data from the patient record..."})]})})}var Me=document.querySelector("#root");we.oauth2.init({iss:"https://www.demo.oridashi.com.au:8102",redirectUri:"test.html",clientId:"47059543-3654-466b-9c71-495957306af0",scope:"launch patient/*.read patient/Observation.write offline_access openid fhirUser"}).then((function(e){Object(i.render)(Object(x.jsxs)(c.a,{theme:Ce,children:[Object(x.jsx)(a.a,{}),Object(x.jsx)(H,{client:e,children:Object(x.jsx)(r.Suspense,{fallback:Object(x.jsx)(Ae,{}),children:Object(x.jsx)(ge,{client:e})})})]}),Me)}),(function(e){return console.error(e)}))}},[[929,1,2]]]);
//# sourceMappingURL=main.4d98816b.chunk.js.map