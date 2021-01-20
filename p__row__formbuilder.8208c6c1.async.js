(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"6ouq":function(le,J,e){"use strict";e.r(J);var je=e("h7lp"),Oe=e("bf48"),t=e("nKUr"),r=e("q1tI"),de=e.n(r),o=e("VTBJ"),xe=e("lUTK"),re=e("BvKs"),Re=e("B9cy"),F=e("Ol7k"),B=e("+L6B"),P=e("2/Rp"),L=e("/xke"),j=e("TeRw"),Q=e("/zsF"),M=e("PArb"),ue=e("5Dmo"),K=e("3S7+"),Jt=e("DYRE"),ye=e("zeV3"),Yt=e("miYZ"),Ee=e("tsqr"),C=e("KQm4"),Ze=e("o0o1"),me=e.n(Ze),ke=e("HaE+"),$t=e("y8nQ"),Se=e("Vl3Y"),f=e("ODXe"),qe=e("9kvl"),_e=e("9BLJ"),et=e("Fvcw"),Ie=e("GYYy"),tt=e("3R4v"),nt=e("IehP"),ot=e("+GxG"),at=e("su5N"),lt=e("gL5p"),Qt="5bO0",rt=new Date().getTime(),fe=function(){return rt++},pt={chosen:!1,filtered:!1,selected:!1};function it(H){return H.map(function(a){return Object(o.a)(Object(o.a)(Object(o.a)({},pt),a),{},{id:fe()})})}var ct=[{type:"Input",field:"input",name:"\u8F93\u5165\u6846"},{type:"Input.TextArea",field:"textarea",name:"\u6587\u672C\u57DF"},{type:"Input.Password",field:"password",name:"\u5BC6\u7801\u8F93\u5165\u6846"},{type:"InputNumber",field:"inputnumber",name:"\u6570\u5B57\u8F93\u5165\u6846"},{type:"Switch",field:"CustomSwitch",name:"\u5F00\u5173",valuePropName:"checked"},{type:"Radio.Group",field:{type:"CustomRadioGroup",props:{options:[{value:"apple",label:"\u82F9\u679C"},{value:"banana",label:"\u9999\u8549"}]}},name:"\u5355\u9009\u6846\u7EC4\u5408"},{type:"Checkbox.Group",field:{type:"CustomCheckboxGroup",props:{options:[{value:"apple",label:"\u82F9\u679C"},{value:"banana",label:"\u9999\u8549"}]}},name:"\u590D\u9009\u6846\u7EC4\u5408"},{type:"DatePicker",field:{type:"datepicker",props:{valueFormat:!0}},name:"\u65E5\u671F\u9009\u62E9\u5668"},{type:"DatePicker.RangePicker",field:{type:"rangepicker",props:{valueFormat:!0}},name:"\u533A\u95F4\u9009\u62E9\u5668"},{type:"TimePicker",field:{type:"timepicker",props:{valueFormat:!0}},name:"\u65F6\u95F4\u9009\u62E9\u5668"},{type:"Select",field:{type:"select",props:{options:[{value:"apple",label:"\u82F9\u679C"},{value:"banana",label:"\u9999\u8549"}]}},name:"\u4E0B\u62C9\u9009\u62E9\u6846"},{type:"SelectSearch",alias:"Select",field:{type:"SelectSearch",props:{options:[{value:"apple",label:"\u82F9\u679C"},{value:"banana",label:"\u9999\u8549"}],showSearch:!0,filterOption:!1,showArrow:!1,labelInValue:!0}},name:"\u4E0B\u62C9\u641C\u7D22\u6846"},{type:"TreeSelect",field:{type:"treeselect",props:{treeData:[{title:"\u6C34\u679C",value:"fruit",children:[{title:"\u82F9\u679C",value:"apple"}]}]}},name:"\u6811\u9009\u62E9"},{type:"Upload",field:{type:"SinaS3Upload",props:{action:"/v1/upload/upload",slice:-1,data:{}}},name:"\u70B9\u51FB\u4E0A\u4F20",valuePropName:"fileList"},{type:"Rate",field:"rate",name:"\u8BC4\u5206"}],Fe=e("quqF"),st="sz82",dt=function(a){var c=a.sortableProps,s=Object(r.useState)([]),m=Object(f.a)(s,2),b=m[0],N=m[1],O=function(k){var I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;N(I===null?it(k):k)};return Object(r.useEffect)(function(){O(ct)},[]),Object(t.jsx)(t.Fragment,{children:Object(t.jsx)(Fe.b,{fields:b.map(function(g){return{field:g.field,name:"".concat(g.type,"_").concat(g.id),label:g.name,valuePropName:g.valuePropName,initialSource:g.initialSource}}),container:{type:"ReactSortable",props:Object(o.a)({list:b,setList:O},c)},layout:"vertical",mode:"view"},"".concat(st,"11"))})},ut=dt,De=e("Ff2n"),X=e("rePB"),mt="GdbL",ft=function(a){var c=a.mode,s=a.sortable,m=a.sortableProps,b=a.settingTrigger,N=a.changedFieldSetting,O=a.allFieldSetting,g=a.deletedField,k=a.copiedField,I=a.setHistory,x=de.a.createRef(),_=Object(r.useState)([]),G=Object(f.a)(_,2),h=G[0],w=G[1],U=Object(r.useState)(),A=Object(f.a)(U,2),D=A[0],z=A[1];Object(r.useEffect)(function(){x.current.resetFields()},[c]),Object(r.useEffect)(function(){!k||w([].concat(Object(C.a)(h),Object(C.a)(h.filter(function(n){return n.id===k}).map(function(n){var i=fe();return Object(o.a)(Object(o.a)({},n),{},{id:i,"Form.Item":Object(o.a)(Object(o.a)({},n["Form.Item"]),{},{name:"".concat(n.type,"_").concat(i)})})}))))},[k]),Object(r.useEffect)(function(){!g||w(Object(C.a)(h.filter(function(n){return n.id!==g})))},[g]),Object(r.useEffect)(function(){!D||N===void 0||w(Object(C.a)(h.map(function(n){if(n.id===D){var i;return Object(o.a)(Object(o.a)({},n),{},(i={},Object(X.a)(i,n.type,Object(o.a)(Object(o.a)({},n[n.type]),N[n.type])),Object(X.a)(i,"Form.Item",Object(o.a)(Object(o.a)({},n["Form.Item"]),N["Form.Item"])),i))}return n})))},[D,N]),Object(r.useEffect)(function(){O!=null&&w(Object(C.a)(O.map(function(n){var i=n.field,ee=n.valuePropName,T=n.initialSource,d=n.type,V=n.id,W=Object(De.a)(n,["field","valuePropName","initialSource","type","id"]);return{field:i,valuePropName:ee,initialSource:T,type:d,id:V,"Form.Item":W}})))},[O]),Object(r.useEffect)(function(){var n=h.map(function(i){return Object(o.a)({field:Object(o.a)(Object(o.a)({},typeof i.field=="string"?{type:i.field}:i.field),{},{props:Object(o.a)(Object(o.a)({},i.field.props),i[i.type])}),name:"".concat(i.type,"_").concat(i.id),label:i.name,valuePropName:i.valuePropName,initialSource:i.initialSource,type:i.type,id:i.id},i["Form.Item"])});I&&I(n)},[h]);var $=function(i){console.log("Received values of form: ",i)};return Object(t.jsx)(Fe.b,{ref:x,mode:c,fields:h.map(function(n){return Object(o.a)({field:Object(o.a)(Object(o.a)({},typeof n.field=="string"?{type:n.field}:n.field),{},{props:Object(o.a)(Object(o.a)({},n.field.props),n[n.type])}),name:"".concat(n.type,"_").concat(n.id),label:n.name,valuePropName:n.valuePropName,initialSource:n.initialSource,className:D===n.id?"sform-item-chosen":void 0,onClick:s&&c==="view"?function(i){i.preventDefault(),z(n.id),b&&b(n)}:void 0},n["Form.Item"])}),actionsRender:c==="edit"&&h.length?[{type:"button",props:{children:"\u63D0\u4EA4",type:"primary"},action:[function(n){n.form.submit()}]}]:void 0,onFinish:$,container:s&&c==="view"?{type:"ReactSortable",props:Object(o.a)({list:h,setList:w},m)}:void 0,layout:"vertical"},"".concat(mt,"11"))},bt=ft,gt=e("d8FT"),be=e.n(gt),ht=e("lfch"),vt=e("/MfK"),jt=e("4i/N"),Xt="ZIvX",pe={Input:{addonAfter:[`<p>\u5E26\u6807\u7B7E\u7684 input\uFF0C\u8BBE\u7F6E\u540E\u7F6E\u6807\u7B7E</p>
`,"ReactNode","",""],addonBefore:[`<p>\u5E26\u6807\u7B7E\u7684 input\uFF0C\u8BBE\u7F6E\u524D\u7F6E\u6807\u7B7E</p>
`,"ReactNode","",""],allowClear:[`<p>\u53EF\u4EE5\u70B9\u51FB\u6E05\u9664\u56FE\u6807\u5220\u9664\u5185\u5BB9</p>
`,"boolean","",""],bordered:[`<p>\u662F\u5426\u6709\u8FB9\u6846</p>
`,"boolean",!0,"4.5.0"],defaultValue:[`<p>\u8F93\u5165\u6846\u9ED8\u8BA4\u5185\u5BB9</p>
`,"string","",""],disabled:[`<p>\u662F\u5426\u7981\u7528\u72B6\u6001\uFF0C\u9ED8\u8BA4\u4E3A false</p>
`,"boolean",!1,""],id:[`<p>\u8F93\u5165\u6846\u7684 id</p>
`,"string","",""],maxLength:[`<p>\u6700\u5927\u957F\u5EA6</p>
`,"number","",""],prefix:[`<p>\u5E26\u6709\u524D\u7F00\u56FE\u6807\u7684 input</p>
`,"ReactNode","",""],size:[`<p>\u63A7\u4EF6\u5927\u5C0F\u3002\u6CE8\uFF1A\u6807\u51C6\u8868\u5355\u5185\u7684\u8F93\u5165\u6846\u5927\u5C0F\u9650\u5236\u4E3A <code>large</code></p>
`,"`large` | `middle` | `small`","",""],suffix:[`<p>\u5E26\u6709\u540E\u7F00\u56FE\u6807\u7684 input</p>
`,"ReactNode","",""],type:[`<p>\u58F0\u660E input \u7C7B\u578B\uFF0C\u540C\u539F\u751F input \u6807\u7B7E\u7684 type \u5C5E\u6027\uFF0C\u89C1\uFF1A<a target="__blank" href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#%E5%B1%9E%E6%80%A7">MDN</a>(\u8BF7\u76F4\u63A5\u4F7F\u7528 <code>Input.TextArea</code> \u4EE3\u66FF <code>type=&quot;textarea&quot;</code>)</p>
`,"string","text",""],value:[`<p>\u8F93\u5165\u6846\u5185\u5BB9</p>
`,"string","",""],onChange:[`<p>\u8F93\u5165\u6846\u5185\u5BB9\u53D8\u5316\u65F6\u7684\u56DE\u8C03</p>
`,"function(e)","",""],onPressEnter:[`<p>\u6309\u4E0B\u56DE\u8F66\u7684\u56DE\u8C03</p>
`,"function(e)","",""]},"Input.TextArea":{allowClear:[`<p>\u53EF\u4EE5\u70B9\u51FB\u6E05\u9664\u56FE\u6807\u5220\u9664\u5185\u5BB9</p>
`,"boolean",!1,""],autoSize:[`<p>\u81EA\u9002\u5E94\u5185\u5BB9\u9AD8\u5EA6\uFF0C\u53EF\u8BBE\u7F6E\u4E3A true | false \u6216\u5BF9\u8C61\uFF1A{ minRows: 2, maxRows: 6 }</p>
`,"boolean | object",!1,""],bordered:[`<p>\u662F\u5426\u6709\u8FB9\u6846</p>
`,"boolean",!0,"4.5.0"],countFormatter:[`<p>\u6307\u5B9A\u5B57\u6570\u5C55\u793A\u7684\u683C\u5F0F</p>
`,"(count: number, maxLength?: number) => string","","4.10.0"],defaultValue:[`<p>\u8F93\u5165\u6846\u9ED8\u8BA4\u5185\u5BB9</p>
`,"string","",""],maxLength:[`<p>\u5185\u5BB9\u6700\u5927\u957F\u5EA6</p>
`,"number","","4.7.0"],showCount:[`<p>\u662F\u5426\u5C55\u793A\u5B57\u6570</p>
`,"boolean | { formatter: ({ count: number, maxLength?: number }) => string }",!1,"4.7.0 (formatter: 4.10.0)"],value:[`<p>\u8F93\u5165\u6846\u5185\u5BB9</p>
`,"string","",""],onPressEnter:[`<p>\u6309\u4E0B\u56DE\u8F66\u7684\u56DE\u8C03</p>
`,"function(e)","",""],onResize:[`<p>resize \u56DE\u8C03</p>
`,"function({ width, height })","",""]},"Input.Search":{enterButton:[`<p>\u662F\u5426\u6709\u786E\u8BA4\u6309\u94AE\uFF0C\u53EF\u8BBE\u4E3A\u6309\u94AE\u6587\u5B57\u3002\u8BE5\u5C5E\u6027\u4F1A\u4E0E <code>addonAfter</code> \u51B2\u7A81\u3002</p>
`,"boolean | ReactNode",!1],loading:[`<p>\u641C\u7D22 loading</p>
`,"boolean",!1],onSearch:[`<p>\u70B9\u51FB\u641C\u7D22\u56FE\u6807\u3001\u6E05\u9664\u56FE\u6807\uFF0C\u6216\u6309\u4E0B\u56DE\u8F66\u952E\u65F6\u7684\u56DE\u8C03</p>
`,"function(value, event)",""]},"Input.Group":{compact:[`<p>\u662F\u5426\u7528\u7D27\u51D1\u6A21\u5F0F</p>
`,"boolean",!1],size:[`<p><code>Input.Group</code> \u4E2D\u6240\u6709\u7684 <code>Input</code> \u7684\u5927\u5C0F\uFF0C\u53EF\u9009 <code>large</code> <code>default</code> <code>small</code></p>
`,"string","default"]},"Input.Password":{iconRender:[`<p>\u81EA\u5B9A\u4E49\u5207\u6362\u6309\u94AE</p>
`,"(visible) => ReactNode",null,"4.3.0"],visibilityToggle:[`<p>\u662F\u5426\u663E\u793A\u5207\u6362\u6309\u94AE</p>
`,"boolean",!0,""]},InputNumber:{autoFocus:[`<p>\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</p>
`,"boolean",!1,"-"],decimalSeparator:[`<p>\u5C0F\u6570\u70B9</p>
`,"string","","-"],defaultValue:[`<p>\u521D\u59CB\u503C</p>
`,"number","","-"],disabled:[`<p>\u7981\u7528</p>
`,"boolean",!1,"-"],formatter:[`<p>\u6307\u5B9A\u8F93\u5165\u6846\u5C55\u793A\u503C\u7684\u683C\u5F0F</p>
`,"function(value: number | string): string","","-"],max:[`<p>\u6700\u5927\u503C</p>
`,"number",null,"-"],min:[`<p>\u6700\u5C0F\u503C</p>
`,"number",null,"-"],parser:[`<p>\u6307\u5B9A\u4ECE <code>formatter</code> \u91CC\u8F6C\u6362\u56DE\u6570\u5B57\u7684\u65B9\u5F0F\uFF0C\u548C <code>formatter</code> \u642D\u914D\u4F7F\u7528</p>
`,"function(string): number","","-"],precision:[`<p>\u6570\u503C\u7CBE\u5EA6</p>
`,"number","","-"],readOnly:[`<p>\u53EA\u8BFB</p>
`,"boolean",!1,"-"],size:[`<p>\u8F93\u5165\u6846\u5927\u5C0F</p>
`,"`large` | `middle` | `small`","","-"],step:[`<p>\u6BCF\u6B21\u6539\u53D8\u6B65\u6570\uFF0C\u53EF\u4EE5\u4E3A\u5C0F\u6570</p>
`,"number | string",1,"-"],value:[`<p>\u5F53\u524D\u503C</p>
`,"number","","-"],onChange:[`<p>\u53D8\u5316\u56DE\u8C03</p>
`,"function(value: number | string)","","-"],onPressEnter:[`<p>\u6309\u4E0B\u56DE\u8F66\u7684\u56DE\u8C03</p>
`,"function(e)","","-"],onStep:[`<p>\u70B9\u51FB\u4E0A\u4E0B\u7BAD\u5934\u7684\u56DE\u8C03</p>
`,"(value: number, info: { offset: number, type: 'up' | 'down' }) => void","","4.7.0"]},Switch:{autoFocus:[`<p>\u7EC4\u4EF6\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</p>
`,"boolean",!1],checked:[`<p>\u6307\u5B9A\u5F53\u524D\u662F\u5426\u9009\u4E2D</p>
`,"boolean",!1],checkedChildren:[`<p>\u9009\u4E2D\u65F6\u7684\u5185\u5BB9</p>
`,"ReactNode",""],className:[`<p>Switch \u5668\u7C7B\u540D</p>
`,"string",""],defaultChecked:[`<p>\u521D\u59CB\u662F\u5426\u9009\u4E2D</p>
`,"boolean",!1],disabled:[`<p>\u662F\u5426\u7981\u7528</p>
`,"boolean",!1],loading:[`<p>\u52A0\u8F7D\u4E2D\u7684\u5F00\u5173</p>
`,"boolean",!1],size:[`<p>\u5F00\u5173\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\uFF1A<code>default</code> <code>small</code></p>
`,"string","default"],unCheckedChildren:[`<p>\u975E\u9009\u4E2D\u65F6\u7684\u5185\u5BB9</p>
`,"ReactNode",""],onChange:[`<p>\u53D8\u5316\u65F6\u56DE\u8C03\u51FD\u6570</p>
`,"function(checked: boolean, event: Event)",""],onClick:[`<p>\u70B9\u51FB\u65F6\u56DE\u8C03\u51FD\u6570</p>
`,"function(checked: boolean, event: Event)",""]},Radio:{"blur()":[`<p>\u79FB\u9664\u7126\u70B9</p>
`],"focus()":[`<p>\u83B7\u53D6\u7126\u70B9</p>
`]},"Radio.Button":{autoFocus:[`<p>\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</p>
`,"boolean",!1],checked:[`<p>\u6307\u5B9A\u5F53\u524D\u662F\u5426\u9009\u4E2D</p>
`,"boolean",!1],defaultChecked:[`<p>\u521D\u59CB\u662F\u5426\u9009\u4E2D</p>
`,"boolean",!1],disabled:[`<p>\u7981\u7528 Radio</p>
`,"boolean",!1],value:[`<p>\u6839\u636E value \u8FDB\u884C\u6BD4\u8F83\uFF0C\u5224\u65AD\u662F\u5426\u9009\u4E2D</p>
`,"any",""]},"Radio.Group":{buttonStyle:[`<p>RadioButton \u7684\u98CE\u683C\u6837\u5F0F\uFF0C\u76EE\u524D\u6709\u63CF\u8FB9\u548C\u586B\u8272\u4E24\u79CD\u98CE\u683C</p>
`,"`outline` | `solid`","outline","",""],defaultValue:[`<p>\u9ED8\u8BA4\u9009\u4E2D\u7684\u503C</p>
`,"any","","",""],disabled:[`<p>\u7981\u9009\u6240\u6709\u5B50\u5355\u9009\u5668</p>
`,"boolean",!1,"",""],name:[`<p>RadioGroup \u4E0B\u6240\u6709 <code>input[type=&quot;radio&quot;]</code> \u7684 <code>name</code> \u5C5E\u6027</p>
`,"string","","",""],options:[`<p>\u4EE5\u914D\u7F6E\u5F62\u5F0F\u8BBE\u7F6E\u5B50\u5143\u7D20</p>
`,"string[] | Array&lt;{ label: string value: string disabled?: boolean }>","","",""],optionType:[`<p>\u7528\u4E8E\u8BBE\u7F6E Radio <code>options</code> \u7C7B\u578B</p>
`,"`default` | `button`","default","4.4.0",""],size:[`<p>\u5927\u5C0F\uFF0C\u53EA\u5BF9\u6309\u94AE\u6837\u5F0F\u751F\u6548</p>
`,"`large` | `middle` | `small`","","",""],value:[`<p>\u7528\u4E8E\u8BBE\u7F6E\u5F53\u524D\u9009\u4E2D\u7684\u503C</p>
`,"any","","",""],onChange:[`<p>\u9009\u9879\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570</p>
`,"function(e:Event)","","",""]},TimePicker:{allowClear:[`<p>\u662F\u5426\u5C55\u793A\u6E05\u9664\u6309\u94AE</p>
`,"boolean",!0,""],autoFocus:[`<p>\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</p>
`,"boolean",!1,""],bordered:[`<p>\u662F\u5426\u6709\u8FB9\u6846</p>
`,"boolean",!0,""],className:[`<p>\u9009\u62E9\u5668\u7C7B\u540D</p>
`,"string","",""],clearIcon:[`<p>\u81EA\u5B9A\u4E49\u7684\u6E05\u9664\u56FE\u6807</p>
`,"ReactNode","",""],clearText:[`<p>\u6E05\u9664\u6309\u94AE\u7684\u63D0\u793A\u6587\u6848</p>
`,"string",null,""],defaultValue:[`<p>\u9ED8\u8BA4\u65F6\u95F4</p>
`,"[moment](http://momentjs.com/)","",""],disabled:[`<p>\u7981\u7528\u5168\u90E8\u64CD\u4F5C</p>
`,"boolean",!1,""],disabledHours:[`<p>\u7981\u6B62\u9009\u62E9\u90E8\u5206\u5C0F\u65F6\u9009\u9879</p>
`,"function()","",""],disabledMinutes:[`<p>\u7981\u6B62\u9009\u62E9\u90E8\u5206\u5206\u949F\u9009\u9879</p>
`,"function(selectedHour)","",""],disabledSeconds:[`<p>\u7981\u6B62\u9009\u62E9\u90E8\u5206\u79D2\u9009\u9879</p>
`,"function(selectedHour, selectedMinute)","",""],format:[`<p>\u5C55\u793A\u7684\u65F6\u95F4\u683C\u5F0F</p>
`,"string","HH:mm:ss",""],getPopupContainer:[`<p>\u5B9A\u4E49\u6D6E\u5C42\u7684\u5BB9\u5668\uFF0C\u9ED8\u8BA4\u4E3A body \u4E0A\u65B0\u5EFA div</p>
`,"function(trigger)","",""],hideDisabledOptions:[`<p>\u9690\u85CF\u7981\u6B62\u9009\u62E9\u7684\u9009\u9879</p>
`,"boolean",!1,""],hourStep:[`<p>\u5C0F\u65F6\u9009\u9879\u95F4\u9694</p>
`,"number",1,""],inputReadOnly:[`<p>\u8BBE\u7F6E\u8F93\u5165\u6846\u4E3A\u53EA\u8BFB\uFF08\u907F\u514D\u5728\u79FB\u52A8\u8BBE\u5907\u4E0A\u6253\u5F00\u865A\u62DF\u952E\u76D8\uFF09</p>
`,"boolean",!1,""],minuteStep:[`<p>\u5206\u949F\u9009\u9879\u95F4\u9694</p>
`,"number",1,""],open:[`<p>\u9762\u677F\u662F\u5426\u6253\u5F00</p>
`,"boolean","",""],placeholder:[`<p>\u6CA1\u6709\u503C\u7684\u65F6\u5019\u663E\u793A\u7684\u5185\u5BB9</p>
`,"string | [string, string]","\u8BF7\u9009\u62E9\u65F6\u95F4",""],popupClassName:[`<p>\u5F39\u51FA\u5C42\u7C7B\u540D</p>
`,"string","",""],popupStyle:[`<p>\u5F39\u51FA\u5C42\u6837\u5F0F\u5BF9\u8C61</p>
`,"object","",""],renderExtraFooter:[`<p>\u9009\u62E9\u6846\u5E95\u90E8\u663E\u793A\u81EA\u5B9A\u4E49\u7684\u5185\u5BB9</p>
`,"() => ReactNode","",""],secondStep:[`<p>\u79D2\u9009\u9879\u95F4\u9694</p>
`,"number",1,""],showNow:[`<p>\u9762\u677F\u662F\u5426\u663E\u793A\u201C\u6B64\u523B\u201D\u6309\u94AE</p>
`,"boolean","","4.4.0"],suffixIcon:[`<p>\u81EA\u5B9A\u4E49\u7684\u9009\u62E9\u6846\u540E\u7F00\u56FE\u6807</p>
`,"ReactNode","",""],use12Hours:[`<p>\u4F7F\u7528 12 \u5C0F\u65F6\u5236\uFF0C\u4E3A true \u65F6 <code>format</code> \u9ED8\u8BA4\u4E3A <code>h:mm:ss a</code></p>
`,"boolean",!1,""],value:[`<p>\u5F53\u524D\u65F6\u95F4</p>
`,"[moment](http://momentjs.com/)","",""],onChange:[`<p>\u65F6\u95F4\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03</p>
`,"function(time: moment, timeString: string): void","",""],onOpenChange:[`<p>\u9762\u677F\u6253\u5F00/\u5173\u95ED\u65F6\u7684\u56DE\u8C03</p>
`,"(open: boolean) => void","",""]},"TimePicker.RangePicker":{order:[`<p>\u59CB\u672B\u65F6\u95F4\u662F\u5426\u81EA\u52A8\u6392\u5E8F</p>
`,"boolean",!0,"4.1.0"]},Select:{allowClear:[`<p>\u652F\u6301\u6E05\u9664</p>
`,"boolean",!1,""],autoClearSearchValue:[`<p>\u662F\u5426\u5728\u9009\u4E2D\u9879\u540E\u6E05\u7A7A\u641C\u7D22\u6846\uFF0C\u53EA\u5728 <code>mode</code> \u4E3A <code>multiple</code> \u6216 <code>tags</code> \u65F6\u6709\u6548</p>
`,"boolean",!0,""],autoFocus:[`<p>\u9ED8\u8BA4\u83B7\u53D6\u7126\u70B9</p>
`,"boolean",!1,""],bordered:[`<p>\u662F\u5426\u6709\u8FB9\u6846</p>
`,"boolean",!0,""],clearIcon:[`<p>\u81EA\u5B9A\u4E49\u7684\u591A\u9009\u6846\u6E05\u7A7A\u56FE\u6807</p>
`,"ReactNode","",""],defaultActiveFirstOption:[`<p>\u662F\u5426\u9ED8\u8BA4\u9AD8\u4EAE\u7B2C\u4E00\u4E2A\u9009\u9879</p>
`,"boolean",!0,""],defaultOpen:[`<p>\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355</p>
`,"boolean","",""],defaultValue:[`<p>\u6307\u5B9A\u9ED8\u8BA4\u9009\u4E2D\u7684\u6761\u76EE</p>
`,"string | string[]<br />number | number[]<br />LabeledValue | LabeledValue[]","",""],disabled:[`<p>\u662F\u5426\u7981\u7528</p>
`,"boolean",!1,""],dropdownClassName:[`<p>\u4E0B\u62C9\u83DC\u5355\u7684 className \u5C5E\u6027</p>
`,"string","",""],dropdownMatchSelectWidth:[`<p>\u4E0B\u62C9\u83DC\u5355\u548C\u9009\u62E9\u5668\u540C\u5BBD\u3002\u9ED8\u8BA4\u5C06\u8BBE\u7F6E <code>min-width</code>\uFF0C\u5F53\u503C\u5C0F\u4E8E\u9009\u62E9\u6846\u5BBD\u5EA6\u65F6\u4F1A\u88AB\u5FFD\u7565\u3002false \u65F6\u4F1A\u5173\u95ED\u865A\u62DF\u6EDA\u52A8</p>
`,"boolean | number",!0,""],dropdownRender:[`<p>\u81EA\u5B9A\u4E49\u4E0B\u62C9\u6846\u5185\u5BB9</p>
`,"(originNode: ReactNode) => ReactNode","",""],dropdownStyle:[`<p>\u4E0B\u62C9\u83DC\u5355\u7684 style \u5C5E\u6027</p>
`,"CSSProperties","",""],filterOption:[`<p>\u662F\u5426\u6839\u636E\u8F93\u5165\u9879\u8FDB\u884C\u7B5B\u9009\u3002\u5F53\u5176\u4E3A\u4E00\u4E2A\u51FD\u6570\u65F6\uFF0C\u4F1A\u63A5\u6536 <code>inputValue</code> <code>option</code> \u4E24\u4E2A\u53C2\u6570\uFF0C\u5F53 <code>option</code> \u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u65F6\uFF0C\u5E94\u8FD4\u56DE true\uFF0C\u53CD\u4E4B\u5219\u8FD4\u56DE false</p>
`,"boolean | function(inputValue, option)",!0,""],filterSort:[`<p>\u641C\u7D22\u65F6\u5BF9\u7B5B\u9009\u7ED3\u679C\u9879\u7684\u6392\u5E8F\u51FD\u6570, \u7C7B\u4F3C<a target="__blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort">Array.sort</a>\u91CC\u7684 compareFunction</p>
`,"(optionA: Option, optionB: Option) => number","","4.9.0"],getPopupContainer:[`<p>\u83DC\u5355\u6E32\u67D3\u7236\u8282\u70B9\u3002\u9ED8\u8BA4\u6E32\u67D3\u5230 body \u4E0A\uFF0C\u5982\u679C\u4F60\u9047\u5230\u83DC\u5355\u6EDA\u52A8\u5B9A\u4F4D\u95EE\u9898\uFF0C\u8BD5\u8BD5\u4FEE\u6539\u4E3A\u6EDA\u52A8\u7684\u533A\u57DF\uFF0C\u5E76\u76F8\u5BF9\u5176\u5B9A\u4F4D\u3002<a target="__blank" href="https://codesandbox.io/s/4j168r7jw0">\u793A\u4F8B</a></p>
`,"function(triggerNode)",null,""],labelInValue:[`<p>\u662F\u5426\u628A\u6BCF\u4E2A\u9009\u9879\u7684 label \u5305\u88C5\u5230 value \u4E2D\uFF0C\u4F1A\u628A Select \u7684 value \u7C7B\u578B\u4ECE <code>string</code> \u53D8\u4E3A { value: string, label: ReactNode } \u7684\u683C\u5F0F</p>
`,"boolean",!1,""],listHeight:[`<p>\u8BBE\u7F6E\u5F39\u7A97\u6EDA\u52A8\u9AD8\u5EA6</p>
`,"number",256,""],loading:[`<p>\u52A0\u8F7D\u4E2D\u72B6\u6001</p>
`,"boolean",!1,""],maxTagCount:[`<p>\u6700\u591A\u663E\u793A\u591A\u5C11\u4E2A tag\uFF0C\u54CD\u5E94\u5F0F\u6A21\u5F0F\u4F1A\u5BF9\u6027\u80FD\u4EA7\u751F\u635F\u8017</p>
`,"number | `responsive`","","responsive: 4.10"],maxTagPlaceholder:[`<p>\u9690\u85CF tag \u65F6\u663E\u793A\u7684\u5185\u5BB9</p>
`,"ReactNode | function(omittedValues)","",""],maxTagTextLength:[`<p>\u6700\u5927\u663E\u793A\u7684 tag \u6587\u672C\u957F\u5EA6</p>
`,"number","",""],menuItemSelectedIcon:[`<p>\u81EA\u5B9A\u4E49\u591A\u9009\u65F6\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE\u56FE\u6807</p>
`,"ReactNode","",""],mode:[`<p>\u8BBE\u7F6E Select \u7684\u6A21\u5F0F\u4E3A\u591A\u9009\u6216\u6807\u7B7E</p>
`,"`multiple` | `tags`","",""],notFoundContent:[`<p>\u5F53\u4E0B\u62C9\u5217\u8868\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u5185\u5BB9</p>
`,"ReactNode","Not Found",""],open:[`<p>\u662F\u5426\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355</p>
`,"boolean","",""],optionFilterProp:[`<p>\u641C\u7D22\u65F6\u8FC7\u6EE4\u5BF9\u5E94\u7684 <code>option</code> \u5C5E\u6027\uFF0C\u5982\u8BBE\u7F6E\u4E3A <code>children</code> \u8868\u793A\u5BF9\u5185\u5D4C\u5185\u5BB9\u8FDB\u884C\u641C\u7D22\u3002\u82E5\u901A\u8FC7 <code>options</code> \u5C5E\u6027\u914D\u7F6E\u9009\u9879\u5185\u5BB9\uFF0C\u5EFA\u8BAE\u8BBE\u7F6E <code>optionFilterProp=&quot;label&quot;</code> \u6765\u5BF9\u5185\u5BB9\u8FDB\u884C\u641C\u7D22\u3002</p>
`,"string","value",""],optionLabelProp:[`<p>\u56DE\u586B\u5230\u9009\u62E9\u6846\u7684 Option \u7684\u5C5E\u6027\u503C\uFF0C\u9ED8\u8BA4\u662F Option \u7684\u5B50\u5143\u7D20\u3002\u6BD4\u5982\u5728\u5B50\u5143\u7D20\u9700\u8981\u9AD8\u4EAE\u6548\u679C\u65F6\uFF0C\u6B64\u503C\u53EF\u4EE5\u8BBE\u4E3A <code>value</code>\u3002<a target="__blank" href="https://codesandbox.io/s/antd-reproduction-template-tk678">\u793A\u4F8B</a></p>
`,"string","children",""],options:[`<p>\u6570\u636E\u5316\u914D\u7F6E\u9009\u9879\u5185\u5BB9\uFF0C\u76F8\u6BD4 jsx \u5B9A\u4E49\u4F1A\u83B7\u5F97\u66F4\u597D\u7684\u6E32\u67D3\u6027\u80FD</p>
`,"{ label, value }[]","",""],placeholder:[`<p>\u9009\u62E9\u6846\u9ED8\u8BA4\u6587\u672C</p>
`,"string","",""],removeIcon:[`<p>\u81EA\u5B9A\u4E49\u7684\u591A\u9009\u6846\u6E05\u9664\u56FE\u6807</p>
`,"ReactNode","",""],searchValue:[`<p>\u63A7\u5236\u641C\u7D22\u6587\u672C</p>
`,"string","",""],showArrow:[`<p>\u662F\u5426\u663E\u793A\u4E0B\u62C9\u5C0F\u7BAD\u5934</p>
`,"boolean",null,""],showSearch:[`<p>\u4F7F\u5355\u9009\u6A21\u5F0F\u53EF\u641C\u7D22</p>
`,"boolean",!1,""],size:[`<p>\u9009\u62E9\u6846\u5927\u5C0F</p>
`,"`large` | `middle` | `small`","middle",""],suffixIcon:[`<p>\u81EA\u5B9A\u4E49\u7684\u9009\u62E9\u6846\u540E\u7F00\u56FE\u6807</p>
`,"ReactNode","",""],tagRender:[`<p>\u81EA\u5B9A\u4E49 tag \u5185\u5BB9 render</p>
`,"(props) => ReactNode","",""],tokenSeparators:[`<p>\u5728 <code>tags</code> \u548C <code>multiple</code> \u6A21\u5F0F\u4E0B\u81EA\u52A8\u5206\u8BCD\u7684\u5206\u9694\u7B26</p>
`,"string[]","",""],value:[`<p>\u6307\u5B9A\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE</p>
`,"string | string[]<br />number | number[]<br />LabeledValue | LabeledValue[]","",""],virtual:[`<p>\u8BBE\u7F6E false \u65F6\u5173\u95ED\u865A\u62DF\u6EDA\u52A8</p>
`,"boolean",!0,"4.1.0"],onBlur:[`<p>\u5931\u53BB\u7126\u70B9\u65F6\u56DE\u8C03</p>
`,"function","",""],onChange:[`<p>\u9009\u4E2D option\uFF0C\u6216 input \u7684 value \u53D8\u5316\u65F6\uFF0C\u8C03\u7528\u6B64\u51FD\u6570</p>
`,"function(value, option:Option | Array&lt;Option>)","",""],onClear:[`<p>\u6E05\u9664\u5185\u5BB9\u65F6\u56DE\u8C03</p>
`,"function","","4.6.0"],onDeselect:[`<p>\u53D6\u6D88\u9009\u4E2D\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A\u9009\u4E2D\u9879\u7684 value (\u6216 key) \u503C\uFF0C\u4EC5\u5728 <code>multiple</code> \u6216 <code>tags</code> \u6A21\u5F0F\u4E0B\u751F\u6548</p>
`,"function(string | number | LabeledValue)","",""],onDropdownVisibleChange:[`<p>\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355\u7684\u56DE\u8C03</p>
`,"function(open)","",""],onFocus:[`<p>\u83B7\u5F97\u7126\u70B9\u65F6\u56DE\u8C03</p>
`,"function","",""],onInputKeyDown:[`<p>\u6309\u952E\u6309\u4E0B\u65F6\u56DE\u8C03</p>
`,"function","",""],onMouseEnter:[`<p>\u9F20\u6807\u79FB\u5165\u65F6\u56DE\u8C03</p>
`,"function","",""],onMouseLeave:[`<p>\u9F20\u6807\u79FB\u51FA\u65F6\u56DE\u8C03</p>
`,"function","",""],onPopupScroll:[`<p>\u4E0B\u62C9\u5217\u8868\u6EDA\u52A8\u65F6\u7684\u56DE\u8C03</p>
`,"function","",""],onSearch:[`<p>\u6587\u672C\u6846\u503C\u53D8\u5316\u65F6\u56DE\u8C03</p>
`,"function(value: string)","",""],onSelect:[`<p>\u88AB\u9009\u4E2D\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A\u9009\u4E2D\u9879\u7684 value (\u6216 key) \u503C</p>
`,"function(string | number | LabeledValue, option: Option)","",""]},"Select.Option":{className:[`<p>Option \u5668\u7C7B\u540D</p>
`,"string","",""],disabled:[`<p>\u662F\u5426\u7981\u7528</p>
`,"boolean",!1,""],title:[`<p>\u9009\u4E2D\u8BE5 Option \u540E\uFF0CSelect \u7684 title</p>
`,"string","",""],value:[`<p>\u9ED8\u8BA4\u6839\u636E\u6B64\u5C5E\u6027\u503C\u8FDB\u884C\u7B5B\u9009</p>
`,"string | number","",""]},"Select.OptGroup":{key:[`<p>Key</p>
`,"string","",""],label:[`<p>\u7EC4\u540D</p>
`,"string | React.Element","",""]},Checkbox:{autoFocus:[`<p>\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</p>
`,"boolean",!1,""],checked:[`<p>\u6307\u5B9A\u5F53\u524D\u662F\u5426\u9009\u4E2D</p>
`,"boolean",!1,""],defaultChecked:[`<p>\u521D\u59CB\u662F\u5426\u9009\u4E2D</p>
`,"boolean",!1,""],disabled:[`<p>\u5931\u6548\u72B6\u6001</p>
`,"boolean",!1,""],indeterminate:[`<p>\u8BBE\u7F6E indeterminate \u72B6\u6001\uFF0C\u53EA\u8D1F\u8D23\u6837\u5F0F\u63A7\u5236</p>
`,"boolean",!1,""],onChange:[`<p>\u53D8\u5316\u65F6\u56DE\u8C03\u51FD\u6570</p>
`,"function(e:Event)","",""]},"Checkbox.Group":{defaultValue:[`<p>\u9ED8\u8BA4\u9009\u4E2D\u7684\u9009\u9879</p>
`,"string[]",null,""],disabled:[`<p>\u6574\u7EC4\u5931\u6548</p>
`,"boolean",!1,""],name:[`<p>CheckboxGroup \u4E0B\u6240\u6709 <code>input[type=&quot;checkbox&quot;]</code> \u7684 <code>name</code> \u5C5E\u6027</p>
`,"string","",""],options:[`<p>\u6307\u5B9A\u53EF\u9009\u9879</p>
`,"string[] | Option[]",null,""],value:[`<p>\u6307\u5B9A\u9009\u4E2D\u7684\u9009\u9879</p>
`,"string[]",null,""],onChange:[`<p>\u53D8\u5316\u65F6\u56DE\u8C03\u51FD\u6570</p>
`,"function(checkedValue)","",""]},Form:{colon:[`<p>\u914D\u7F6E Form.Item \u7684 <code>colon</code> \u7684\u9ED8\u8BA4\u503C\u3002\u8868\u793A\u662F\u5426\u663E\u793A label \u540E\u9762\u7684\u5192\u53F7 (\u53EA\u6709\u5728\u5C5E\u6027 layout \u4E3A horizontal \u65F6\u6709\u6548)</p>
`,"boolean",!0,""],component:[`<p>\u8BBE\u7F6E Form \u6E32\u67D3\u5143\u7D20\uFF0C\u4E3A <code>false</code> \u5219\u4E0D\u521B\u5EFA DOM \u8282\u70B9</p>
`,"ComponentType | false",null,""],fields:[`<p>\u901A\u8FC7\u72B6\u6001\u7BA1\u7406\uFF08\u5982 redux\uFF09\u63A7\u5236\u8868\u5355\u5B57\u6BB5\uFF0C\u5982\u975E\u5F3A\u9700\u6C42\u4E0D\u63A8\u8350\u4F7F\u7528\u3002\u67E5\u770B<a target="__blank" href="https://ant.design/components/form-cn#components-form-demo-global-state">\u793A\u4F8B</a></p>
`,"[FieldData](#FieldData)[]","",""],form:[`<p>\u7ECF <code>Form.useForm()</code> \u521B\u5EFA\u7684 form \u63A7\u5236\u5B9E\u4F8B\uFF0C\u4E0D\u63D0\u4F9B\u65F6\u4F1A\u81EA\u52A8\u521B\u5EFA</p>
`,"[FormInstance](#FormInstance)","",""],initialValues:[`<p>\u8868\u5355\u9ED8\u8BA4\u503C\uFF0C\u53EA\u6709\u521D\u59CB\u5316\u4EE5\u53CA\u91CD\u7F6E\u65F6\u751F\u6548</p>
`,"object","",""],labelAlign:[`<p>label \u6807\u7B7E\u7684\u6587\u672C\u5BF9\u9F50\u65B9\u5F0F</p>
`,"`left` | `right`","right",""],labelCol:[`<p>label \u6807\u7B7E\u5E03\u5C40\uFF0C\u540C <code>&lt;Col&gt;</code> \u7EC4\u4EF6\uFF0C\u8BBE\u7F6E <code>span</code> <code>offset</code> \u503C\uFF0C\u5982 <code>{span: 3, offset: 12}</code> \u6216 <code>sm: {span: 3, offset: 12}</code></p>
`,"[object](/components/grid/#Col)","",""],layout:[`<p>\u8868\u5355\u5E03\u5C40</p>
`,"`horizontal` | `vertical` | `inline`","horizontal",""],name:[`<p>\u8868\u5355\u540D\u79F0\uFF0C\u4F1A\u4F5C\u4E3A\u8868\u5355\u5B57\u6BB5 <code>id</code> \u524D\u7F00\u4F7F\u7528</p>
`,"string","",""],preserve:[`<p>\u5F53\u5B57\u6BB5\u88AB\u5220\u9664\u65F6\u4FDD\u7559\u5B57\u6BB5\u503C</p>
`,"boolean",!0,"4.4.0"],requiredMark:[`<p>\u5FC5\u9009\u6837\u5F0F\uFF0C\u53EF\u4EE5\u5207\u6362\u4E3A\u5FC5\u9009\u6216\u8005\u53EF\u9009\u5C55\u793A\u6837\u5F0F\u3002\u6B64\u4E3A Form \u914D\u7F6E\uFF0CForm.Item \u65E0\u6CD5\u5355\u72EC\u914D\u7F6E</p>
`,"boolean | `optional`",!0,"4.6.0"],scrollToFirstError:[`<p>\u63D0\u4EA4\u5931\u8D25\u81EA\u52A8\u6EDA\u52A8\u5230\u7B2C\u4E00\u4E2A\u9519\u8BEF\u5B57\u6BB5</p>
`,"boolean | [Options](https://github.com/stipsan/scroll-into-view-if-needed/tree/ece40bd9143f48caf4b99503425ecb16b0ad8249#options)",!1,""],size:[`<p>\u8BBE\u7F6E\u5B57\u6BB5\u7EC4\u4EF6\u7684\u5C3A\u5BF8\uFF08\u4EC5\u9650 antd \u7EC4\u4EF6\uFF09</p>
`,"`small` | `middle` | `large`","",""],validateMessages:[`<p>\u9A8C\u8BC1\u63D0\u793A\u6A21\u677F\uFF0C\u8BF4\u660E<a target="__blank" href="https://ant.design/components/form-cn#validateMessages">\u89C1\u4E0B</a></p>
`,"[ValidateMessages](https://github.com/react-component/field-form/blob/master/src/utils/messages.ts)","",""],validateTrigger:[`<p>\u7EDF\u4E00\u8BBE\u7F6E\u5B57\u6BB5\u6821\u9A8C\u89C4\u5219</p>
`,"string | string[]","onChange","4.3.0"],wrapperCol:[`<p>\u9700\u8981\u4E3A\u8F93\u5165\u63A7\u4EF6\u8BBE\u7F6E\u5E03\u5C40\u6837\u5F0F\u65F6\uFF0C\u4F7F\u7528\u8BE5\u5C5E\u6027\uFF0C\u7528\u6CD5\u540C labelCol</p>
`,"[object](/components/grid/#Col)","",""],onFieldsChange:[`<p>\u5B57\u6BB5\u66F4\u65B0\u65F6\u89E6\u53D1\u56DE\u8C03\u4E8B\u4EF6</p>
`,"function(changedFields, allFields)","",""],onFinish:[`<p>\u63D0\u4EA4\u8868\u5355\u4E14\u6570\u636E\u9A8C\u8BC1\u6210\u529F\u540E\u56DE\u8C03\u4E8B\u4EF6</p>
`,"function(values)","",""],onFinishFailed:[`<p>\u63D0\u4EA4\u8868\u5355\u4E14\u6570\u636E\u9A8C\u8BC1\u5931\u8D25\u540E\u56DE\u8C03\u4E8B\u4EF6</p>
`,"function({ values, errorFields, outOfDate })","",""],onValuesChange:[`<p>\u5B57\u6BB5\u503C\u66F4\u65B0\u65F6\u89E6\u53D1\u56DE\u8C03\u4E8B\u4EF6</p>
`,"function(changedValues, allValues)","",""]},"Form.Item":{colon:[`<p>\u914D\u5408 <code>label</code> \u5C5E\u6027\u4F7F\u7528\uFF0C\u8868\u793A\u662F\u5426\u663E\u793A <code>label</code> \u540E\u9762\u7684\u5192\u53F7</p>
`,"boolean",!0,""],dependencies:[`<p>\u8BBE\u7F6E\u4F9D\u8D56\u5B57\u6BB5\uFF0C\u8BF4\u660E<a target="__blank" href="https://ant.design/components/form-cn#dependencies">\u89C1\u4E0B</a></p>
`,"[NamePath](#NamePath)[]","",""],extra:[`<p>\u989D\u5916\u7684\u63D0\u793A\u4FE1\u606F\uFF0C\u548C <code>help</code> \u7C7B\u4F3C\uFF0C\u5F53\u9700\u8981\u9519\u8BEF\u4FE1\u606F\u548C\u63D0\u793A\u6587\u6848\u540C\u65F6\u51FA\u73B0\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A\u3002</p>
`,"ReactNode","",""],getValueFromEvent:[`<p>\u8BBE\u7F6E\u5982\u4F55\u5C06 event \u7684\u503C\u8F6C\u6362\u6210\u5B57\u6BB5\u503C</p>
`,"(..args: any[]) => any","",""],getValueProps:[`<p>\u4E3A\u5B50\u5143\u7D20\u6DFB\u52A0\u989D\u5916\u7684\u5C5E\u6027</p>
`,"(value: any) => any","","4.2.0"],hasFeedback:[`<p>\u914D\u5408 <code>validateStatus</code> \u5C5E\u6027\u4F7F\u7528\uFF0C\u5C55\u793A\u6821\u9A8C\u72B6\u6001\u56FE\u6807\uFF0C\u5EFA\u8BAE\u53EA\u914D\u5408 Input \u7EC4\u4EF6\u4F7F\u7528</p>
`,"boolean",!1,""],help:[`<p>\u63D0\u793A\u4FE1\u606F\uFF0C\u5982\u4E0D\u8BBE\u7F6E\uFF0C\u5219\u4F1A\u6839\u636E\u6821\u9A8C\u89C4\u5219\u81EA\u52A8\u751F\u6210</p>
`,"ReactNode","",""],hidden:[`<p>\u662F\u5426\u9690\u85CF\u5B57\u6BB5\uFF08\u4F9D\u7136\u4F1A\u6536\u96C6\u548C\u6821\u9A8C\u5B57\u6BB5\uFF09</p>
`,"boolean",!1,""],htmlFor:[`<p>\u8BBE\u7F6E\u5B50\u5143\u7D20 label <code>htmlFor</code> \u5C5E\u6027</p>
`,"string","",""],initialValue:[`<p>\u8BBE\u7F6E\u5B50\u5143\u7D20\u9ED8\u8BA4\u503C\uFF0C\u5982\u679C\u4E0E Form \u7684 <code>initialValues</code> \u51B2\u7A81\u5219\u4EE5 Form \u4E3A\u51C6</p>
`,"string","","4.2.0"],label:[`<p><code>label</code> \u6807\u7B7E\u7684\u6587\u672C</p>
`,"ReactNode","",""],labelAlign:[`<p>\u6807\u7B7E\u6587\u672C\u5BF9\u9F50\u65B9\u5F0F</p>
`,"`left` | `right`","right",""],labelCol:[`<p><code>label</code> \u6807\u7B7E\u5E03\u5C40\uFF0C\u540C <code>&lt;Col&gt;</code> \u7EC4\u4EF6\uFF0C\u8BBE\u7F6E <code>span</code> <code>offset</code> \u503C\uFF0C\u5982 <code>{span: 3, offset: 12}</code> \u6216 <code>sm: {span: 3, offset: 12}</code>\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7 Form \u7684 <code>labelCol</code> \u8FDB\u884C\u7EDF\u4E00\u8BBE\u7F6E\uFF0C\uFF0C\u4E0D\u4F1A\u4F5C\u7528\u4E8E\u5D4C\u5957 Item\u3002\u5F53\u548C Form \u540C\u65F6\u8BBE\u7F6E\u65F6\uFF0C\u4EE5 Item \u4E3A\u51C6</p>
`,"[object](/components/grid/#Col)","",""],messageVariables:[`<p>\u9ED8\u8BA4\u9A8C\u8BC1\u5B57\u6BB5\u7684\u4FE1\u606F</p>
`,"Record&lt;string, string>","","4.7.0"],name:[`<p>\u5B57\u6BB5\u540D\uFF0C\u652F\u6301\u6570\u7EC4</p>
`,"[NamePath](#NamePath)","",""],normalize:[`<p>\u7EC4\u4EF6\u83B7\u53D6\u503C\u540E\u8FDB\u884C\u8F6C\u6362\uFF0C\u518D\u653E\u5165 Form \u4E2D\u3002\u4E0D\u652F\u6301\u5F02\u6B65</p>
`,"(value, prevValue, prevValues) => any","",""],noStyle:[`<p>\u4E3A <code>true</code> \u65F6\u4E0D\u5E26\u6837\u5F0F\uFF0C\u4F5C\u4E3A\u7EAF\u5B57\u6BB5\u63A7\u4EF6\u4F7F\u7528</p>
`,"boolean",!1,""],preserve:[`<p>\u5F53\u5B57\u6BB5\u88AB\u5220\u9664\u65F6\u4FDD\u7559\u5B57\u6BB5\u503C</p>
`,"boolean",!0,"4.4.0"],required:[`<p>\u5FC5\u586B\u6837\u5F0F\u8BBE\u7F6E\u3002\u5982\u4E0D\u8BBE\u7F6E\uFF0C\u5219\u4F1A\u6839\u636E\u6821\u9A8C\u89C4\u5219\u81EA\u52A8\u751F\u6210</p>
`,"boolean",!1,""],rules:[`<p>\u6821\u9A8C\u89C4\u5219\uFF0C\u8BBE\u7F6E\u5B57\u6BB5\u7684\u6821\u9A8C\u903B\u8F91\u3002\u70B9\u51FB<a target="__blank" href="https://ant.design/components/form-cn#components-form-demo-basic">\u6B64\u5904</a>\u67E5\u770B\u793A\u4F8B</p>
`,"[Rule](#Rule)[]","",""],shouldUpdate:[`<p>\u81EA\u5B9A\u4E49\u5B57\u6BB5\u66F4\u65B0\u903B\u8F91\uFF0C\u8BF4\u660E<a target="__blank" href="https://ant.design/components/form-cn#shouldUpdate">\u89C1\u4E0B</a></p>
`,"boolean | (prevValue, curValue) => boolean",!1,""],tooltip:[`<p>\u914D\u7F6E\u63D0\u793A\u4FE1\u606F</p>
`,"ReactNode | [TooltipProps & { icon: ReactNode }](/components/tooltip#API)","","4.7.0"],trigger:[`<p>\u8BBE\u7F6E\u6536\u96C6\u5B57\u6BB5\u503C\u53D8\u66F4\u7684\u65F6\u673A\u3002\u70B9\u51FB<a target="__blank" href="https://ant.design/components/form-cn#components-form-demo-customized-form-controls">\u6B64\u5904</a>\u67E5\u770B\u793A\u4F8B</p>
`,"string","onChange",""],validateFirst:[`<p>\u5F53\u67D0\u4E00\u89C4\u5219\u6821\u9A8C\u4E0D\u901A\u8FC7\u65F6\uFF0C\u662F\u5426\u505C\u6B62\u5269\u4E0B\u7684\u89C4\u5219\u7684\u6821\u9A8C\u3002\u8BBE\u7F6E <code>parallel</code> \u65F6\u4F1A\u5E76\u884C\u6821\u9A8C</p>
`,"boolean | `parallel`",!1,"`parallel`: 4.5.0"],validateStatus:[`<p>\u6821\u9A8C\u72B6\u6001\uFF0C\u5982\u4E0D\u8BBE\u7F6E\uFF0C\u5219\u4F1A\u6839\u636E\u6821\u9A8C\u89C4\u5219\u81EA\u52A8\u751F\u6210\uFF0C\u53EF\u9009\uFF1A'success' 'warning' 'error' 'validating'</p>
`,"string","",""],validateTrigger:[`<p>\u8BBE\u7F6E\u5B57\u6BB5\u6821\u9A8C\u7684\u65F6\u673A</p>
`,"string | string[]","onChange",""],valuePropName:[`<p>\u5B50\u8282\u70B9\u7684\u503C\u7684\u5C5E\u6027\uFF0C\u5982 Switch \u7684\u662F 'checked'\u3002\u8BE5\u5C5E\u6027\u4E3A <code>getValueProps</code> \u7684\u5C01\u88C5\uFF0C\u81EA\u5B9A\u4E49 <code>getValueProps</code> \u540E\u4F1A\u5931\u6548</p>
`,"string","value",""],wrapperCol:[`<p>\u9700\u8981\u4E3A\u8F93\u5165\u63A7\u4EF6\u8BBE\u7F6E\u5E03\u5C40\u6837\u5F0F\u65F6\uFF0C\u4F7F\u7528\u8BE5\u5C5E\u6027\uFF0C\u7528\u6CD5\u540C <code>labelCol</code>\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7 Form \u7684 <code>wrapperCol</code> \u8FDB\u884C\u7EDF\u4E00\u8BBE\u7F6E\uFF0C\u4E0D\u4F1A\u4F5C\u7528\u4E8E\u5D4C\u5957 Item\u3002\u5F53\u548C Form \u540C\u65F6\u8BBE\u7F6E\u65F6\uFF0C\u4EE5 Item \u4E3A\u51C6</p>
`,"[object](/components/grid/#Col)","",""]},"Form.List":{children:[`<p>\u6E32\u67D3\u51FD\u6570</p>
`,"(fields: Field[], operation: { add, remove, move }, meta: { errors }) => React.ReactNode","",""],initialValue:[`<p>\u8BBE\u7F6E\u5B50\u5143\u7D20\u9ED8\u8BA4\u503C\uFF0C\u5982\u679C\u4E0E Form \u7684 <code>initialValues</code> \u51B2\u7A81\u5219\u4EE5 Form \u4E3A\u51C6</p>
`,"any[]","","4.9.0"],name:[`<p>\u5B57\u6BB5\u540D\uFF0C\u652F\u6301\u6570\u7EC4</p>
`,"[NamePath](#NamePath)","",""],rules:[`<p>\u6821\u9A8C\u89C4\u5219\uFF0C\u4EC5\u652F\u6301\u81EA\u5B9A\u4E49\u89C4\u5219\u3002\u9700\u8981\u914D\u5408 <a target="__blank" href="https://ant.design/components/form-cn#Form.ErrorList">ErrorList</a> \u4E00\u540C\u4F7F\u7528\u3002</p>
`,"{ validator, message }[]","","4.7.0"]},"Form.ErrorList":{errors:[`<p>\u9519\u8BEF\u5217\u8868</p>
`,"ReactNode[]",""]},"Form.Provider":{onFormChange:[`<p>\u5B50\u8868\u5355\u5B57\u6BB5\u66F4\u65B0\u65F6\u89E6\u53D1</p>
`,"function(formName: string, info: { changedFields, forms })",""],onFormFinish:[`<p>\u5B50\u8868\u5355\u63D0\u4EA4\u65F6\u89E6\u53D1</p>
`,"function(formName: string, info: { values, forms })",""]},Upload:{accept:[`<p>\u63A5\u53D7\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B, \u8BE6\u89C1 <a target="__blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept">input accept Attribute</a></p>
`,"string","",""],action:[`<p>\u4E0A\u4F20\u7684\u5730\u5740</p>
`,"string | (file) => Promise&lt;string>","",""],beforeUpload:[`<p>\u4E0A\u4F20\u6587\u4EF6\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u53C2\u6570\u4E3A\u4E0A\u4F20\u7684\u6587\u4EF6\uFF0C\u82E5\u8FD4\u56DE <code>false</code> \u5219\u505C\u6B62\u4E0A\u4F20\u3002\u652F\u6301\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61\uFF0CPromise \u5BF9\u8C61 reject \u65F6\u5219\u505C\u6B62\u4E0A\u4F20\uFF0Cresolve \u65F6\u5F00\u59CB\u4E0A\u4F20\uFF08 resolve \u4F20\u5165 <code>File</code> \u6216 <code>Blob</code> \u5BF9\u8C61\u5219\u4E0A\u4F20 resolve \u4F20\u5165\u5BF9\u8C61\uFF09\u3002<strong>\u6CE8\u610F\uFF1AIE9 \u4E0D\u652F\u6301\u8BE5\u65B9\u6CD5</strong></p>
`,"(file, fileList) => boolean | Promise&lt;File>","",""],customRequest:[`<p>\u901A\u8FC7\u8986\u76D6\u9ED8\u8BA4\u7684\u4E0A\u4F20\u884C\u4E3A\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u81EA\u5DF1\u7684\u4E0A\u4F20\u5B9E\u73B0</p>
`,"function","",""],data:[`<p>\u4E0A\u4F20\u6240\u9700\u989D\u5916\u53C2\u6570\u6216\u8FD4\u56DE\u4E0A\u4F20\u989D\u5916\u53C2\u6570\u7684\u65B9\u6CD5</p>
`,"object|(file) => object | Promise&lt;object>","",""],defaultFileList:[`<p>\u9ED8\u8BA4\u5DF2\u7ECF\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868</p>
`,"object[]","",""],directory:[`<p>\u652F\u6301\u4E0A\u4F20\u6587\u4EF6\u5939\uFF08<a target="__blank" href="https://caniuse.com/#feat=input-file-directory">caniuse</a>\uFF09</p>
`,"boolean",!1,""],disabled:[`<p>\u662F\u5426\u7981\u7528</p>
`,"boolean",!1,""],fileList:[`<p>\u5DF2\u7ECF\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868\uFF08\u53D7\u63A7\uFF09\uFF0C\u4F7F\u7528\u6B64\u53C2\u6570\u65F6\uFF0C\u5982\u679C\u9047\u5230 <code>onChange</code> \u53EA\u8C03\u7528\u4E00\u6B21\u7684\u95EE\u9898\uFF0C\u8BF7\u53C2\u8003 <a target="__blank" href="https://github.com/ant-design/ant-design/issues/2423">#2423</a></p>
`,"object[]","",""],headers:[`<p>\u8BBE\u7F6E\u4E0A\u4F20\u7684\u8BF7\u6C42\u5934\u90E8\uFF0CIE10 \u4EE5\u4E0A\u6709\u6548</p>
`,"object","",""],iconRender:[`<p>\u81EA\u5B9A\u4E49\u663E\u793A icon</p>
`,"(file: UploadFile, listType?: UploadListType) => ReactNode","",""],isImageUrl:[`<p>\u81EA\u5B9A\u4E49\u7F29\u7565\u56FE\u662F\u5426\u4F7F\u7528 &lt;img /&gt; \u6807\u7B7E\u8FDB\u884C\u663E\u793A</p>
`,"(file: UploadFile) => boolean",null,""],itemRender:[`<p>\u81EA\u5B9A\u4E49\u4E0A\u4F20\u5217\u8868\u9879</p>
`,"(originNode: ReactElement, file: UploadFile, fileList?: object[]) => React.ReactNode","","4.7.0"],listType:[`<p>\u4E0A\u4F20\u5217\u8868\u7684\u5185\u5EFA\u6837\u5F0F\uFF0C\u652F\u6301\u4E09\u79CD\u57FA\u672C\u6837\u5F0F <code>text</code>, <code>picture</code> \u548C <code>picture-card</code></p>
`,"string","text",""],method:[`<p>\u4E0A\u4F20\u8BF7\u6C42\u7684 http method</p>
`,"string","post",""],multiple:[`<p>\u662F\u5426\u652F\u6301\u591A\u9009\u6587\u4EF6\uFF0C<code>ie10+</code> \u652F\u6301\u3002\u5F00\u542F\u540E\u6309\u4F4F ctrl \u53EF\u9009\u62E9\u591A\u4E2A\u6587\u4EF6</p>
`,"boolean",!1,""],name:[`<p>\u53D1\u5230\u540E\u53F0\u7684\u6587\u4EF6\u53C2\u6570\u540D</p>
`,"string","file",""],openFileDialogOnClick:[`<p>\u70B9\u51FB\u6253\u5F00\u6587\u4EF6\u5BF9\u8BDD\u6846</p>
`,"boolean",!0,""],previewFile:[`<p>\u81EA\u5B9A\u4E49\u6587\u4EF6\u9884\u89C8\u903B\u8F91</p>
`,"(file: File | Blob) => Promise&lt;dataURL: string>","",""],progress:[`<p>\u81EA\u5B9A\u4E49\u8FDB\u5EA6\u6761\u6837\u5F0F</p>
`,'[ProgressProps](/components/progress/#API)\uFF08\u4EC5\u652F\u6301 `type="line"`\uFF09',null,"4.3.0"],showUploadList:[`<p>\u662F\u5426\u5C55\u793A\u6587\u4EF6\u5217\u8868, \u53EF\u8BBE\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u7528\u4E8E\u5355\u72EC\u8BBE\u5B9A <code>showPreviewIcon</code>, <code>showRemoveIcon</code>, <code>showDownloadIcon</code>, <code>removeIcon</code> \u548C <code>downloadIcon</code></p>
`,"boolean | { showPreviewIcon?: boolean, showRemoveIcon?: boolean, showDownloadIcon?: boolean, removeIcon?: ReactNode | (file: UploadFile) => ReactNode, downloadIcon?: ReactNode | (file: UploadFile) => ReactNode }",!0,"function: 4.7.0"],withCredentials:[`<p>\u4E0A\u4F20\u8BF7\u6C42\u65F6\u662F\u5426\u643A\u5E26 cookie</p>
`,"boolean",!1,""],onChange:[`<p>\u4E0A\u4F20\u6587\u4EF6\u6539\u53D8\u65F6\u7684\u72B6\u6001\uFF0C\u8BE6\u89C1 <a target="__blank" href="https://ant.design/components/upload-cn#onChange">onChange</a></p>
`,"function","",""],onDownload:[`<p>\u70B9\u51FB\u4E0B\u8F7D\u6587\u4EF6\u65F6\u7684\u56DE\u8C03\uFF0C\u5982\u679C\u6CA1\u6709\u6307\u5B9A\uFF0C\u5219\u9ED8\u8BA4\u8DF3\u8F6C\u5230\u6587\u4EF6 url \u5BF9\u5E94\u7684\u6807\u7B7E\u9875</p>
`,"function(file): void",null,""],onPreview:[`<p>\u70B9\u51FB\u6587\u4EF6\u94FE\u63A5\u6216\u9884\u89C8\u56FE\u6807\u65F6\u7684\u56DE\u8C03</p>
`,"function(file)","",""],onRemove:[`<p>\u70B9\u51FB\u79FB\u9664\u6587\u4EF6\u65F6\u7684\u56DE\u8C03\uFF0C\u8FD4\u56DE\u503C\u4E3A false \u65F6\u4E0D\u79FB\u9664\u3002\u652F\u6301\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61\uFF0CPromise \u5BF9\u8C61 resolve(false) \u6216 reject \u65F6\u4E0D\u79FB\u9664</p>
`,"function(file): boolean | Promise","",""]},DatePicker:{allowClear:[`<p>\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE</p>
`,"boolean",!0,""],autoFocus:[`<p>\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</p>
`,"boolean",!1,""],bordered:[`<p>\u662F\u5426\u6709\u8FB9\u6846</p>
`,"boolean",!0,""],className:[`<p>\u9009\u62E9\u5668 className</p>
`,"string","",""],dateRender:[`<p>\u81EA\u5B9A\u4E49\u65E5\u671F\u5355\u5143\u683C\u7684\u5185\u5BB9</p>
`,"function(currentDate: moment, today: moment) => React.ReactNode","",""],disabled:[`<p>\u7981\u7528</p>
`,"boolean",!1,""],disabledDate:[`<p>\u4E0D\u53EF\u9009\u62E9\u7684\u65E5\u671F</p>
`,"(currentDate: moment) => boolean","",""],dropdownClassName:[`<p>\u989D\u5916\u7684\u5F39\u51FA\u65E5\u5386 className</p>
`,"string","",""],getPopupContainer:[`<p>\u5B9A\u4E49\u6D6E\u5C42\u7684\u5BB9\u5668\uFF0C\u9ED8\u8BA4\u4E3A body \u4E0A\u65B0\u5EFA div</p>
`,"function(trigger)","",""],inputReadOnly:[`<p>\u8BBE\u7F6E\u8F93\u5165\u6846\u4E3A\u53EA\u8BFB\uFF08\u907F\u514D\u5728\u79FB\u52A8\u8BBE\u5907\u4E0A\u6253\u5F00\u865A\u62DF\u952E\u76D8\uFF09</p>
`,"boolean",!1,""],locale:[`<p>\u56FD\u9645\u5316\u914D\u7F6E</p>
`,"object",null,""],mode:[`<p>\u65E5\u671F\u9762\u677F\u7684\u72B6\u6001\uFF08<a target="__blank" href="https://ant.design/docs/react/faq#%E5%BD%93%E6%88%91%E6%8C%87%E5%AE%9A%E4%BA%86-DatePicker/RangePicker-%E7%9A%84-mode-%E5%B1%9E%E6%80%A7%E5%90%8E%EF%BC%8C%E7%82%B9%E5%87%BB%E5%90%8E%E6%97%A0%E6%B3%95%E9%80%89%E6%8B%A9%E5%B9%B4%E4%BB%BD/%E6%9C%88%E4%BB%BD%EF%BC%9F">\u8BBE\u7F6E\u540E\u65E0\u6CD5\u9009\u62E9\u5E74\u4EFD/\u6708\u4EFD\uFF1F</a>\uFF09</p>
`,"`time` | `date` | `month` | `year` | `decade`","",""],open:[`<p>\u63A7\u5236\u5F39\u5C42\u662F\u5426\u5C55\u5F00</p>
`,"boolean","",""],panelRender:[`<p>\u81EA\u5B9A\u4E49\u6E32\u67D3\u9762\u677F</p>
`,"(panelNode) => ReactNode","","4.5.0"],picker:[`<p>\u8BBE\u7F6E\u9009\u62E9\u5668\u7C7B\u578B</p>
`,"`date` | `week` | `month` | `quarter` | `year`","date","`quarter`: 4.1.0"],placeholder:[`<p>\u8F93\u5165\u6846\u63D0\u793A\u6587\u5B57</p>
`,"string | [string, string]","",""],popupStyle:[`<p>\u989D\u5916\u7684\u5F39\u51FA\u65E5\u5386\u6837\u5F0F</p>
`,"CSSProperties","{}",""],size:[`<p>\u8F93\u5165\u6846\u5927\u5C0F\uFF0C<code>large</code> \u9AD8\u5EA6\u4E3A 40px\uFF0C<code>small</code> \u4E3A 24px\uFF0C\u9ED8\u8BA4\u662F 32px</p>
`,"`large` | `middle` | `small`","",""],style:[`<p>\u81EA\u5B9A\u4E49\u8F93\u5165\u6846\u6837\u5F0F</p>
`,"CSSProperties","{}",""],suffixIcon:[`<p>\u81EA\u5B9A\u4E49\u7684\u9009\u62E9\u6846\u540E\u7F00\u56FE\u6807</p>
`,"ReactNode","",""],onOpenChange:[`<p>\u5F39\u51FA\u65E5\u5386\u548C\u5173\u95ED\u65E5\u5386\u7684\u56DE\u8C03</p>
`,"function(open)","",""],onPanelChange:[`<p>\u65E5\u671F\u9762\u677F\u53D8\u5316\u65F6\u7684\u56DE\u8C03</p>
`,"function(value, mode)","",""],defaultPickerValue:[`<p>\u9ED8\u8BA4\u9762\u677F\u65E5\u671F</p>
`,"[moment](http://momentjs.com/)","",""],defaultValue:[`<p>\u9ED8\u8BA4\u65E5\u671F\uFF0C\u5982\u679C\u5F00\u59CB\u65F6\u95F4\u6216\u7ED3\u675F\u65F6\u95F4\u4E3A <code>null</code> \u6216\u8005 <code>undefined</code>\uFF0C\u65E5\u671F\u8303\u56F4\u5C06\u662F\u4E00\u4E2A\u5F00\u533A\u95F4</p>
`,"[moment](http://momentjs.com/)","",""],disabledTime:[`<p>\u4E0D\u53EF\u9009\u62E9\u7684\u65F6\u95F4</p>
`,"function(date)","",""],format:[`<p>\u8BBE\u7F6E\u65E5\u671F\u683C\u5F0F\uFF0C\u4E3A\u6570\u7EC4\u65F6\u652F\u6301\u591A\u683C\u5F0F\u5339\u914D\uFF0C\u5C55\u793A\u4EE5\u7B2C\u4E00\u4E2A\u4E3A\u51C6\u3002\u914D\u7F6E\u53C2\u8003 <a target="__blank" href="http://momentjs.com/">moment.js</a>\uFF0C\u652F\u6301<a target="__blank" href="https://ant.design/components/date-picker-cn#components-date-picker-demo-format">\u81EA\u5B9A\u4E49\u683C\u5F0F</a></p>
`,"string | (value: moment) => string | (string | (value: moment) => string)[]","YYYY-MM-DD",""],renderExtraFooter:[`<p>\u5728\u9762\u677F\u4E2D\u6DFB\u52A0\u989D\u5916\u7684\u9875\u811A</p>
`,"(mode) => React.ReactNode","",""],showNow:[`<p>\u5F53\u8BBE\u5B9A\u4E86 <code>showTime</code> \u7684\u65F6\u5019\uFF0C\u9762\u677F\u662F\u5426\u663E\u793A\u201C\u6B64\u523B\u201D\u6309\u94AE</p>
`,"boolean","","4.4.0"],showTime:[`<p>\u589E\u52A0\u65F6\u95F4\u9009\u62E9\u529F\u80FD</p>
`,"Object | boolean",null,""],"showTime.defaultValue":[`<p>\u8BBE\u7F6E\u7528\u6237\u9009\u62E9\u65E5\u671F\u65F6\u9ED8\u8BA4\u7684\u65F6\u5206\u79D2\uFF0C<a target="__blank" href="https://ant.design/components/date-picker-cn#components-date-picker-demo-disabled-date">\u4F8B\u5B50</a></p>
`,"[moment](http://momentjs.com/)",null,""],showToday:[`<p>\u662F\u5426\u5C55\u793A\u201C\u4ECA\u5929\u201D\u6309\u94AE</p>
`,"boolean",!0,""],value:[`<p>\u65E5\u671F</p>
`,"[moment](http://momentjs.com/)","",""],onChange:[`<p>\u65F6\u95F4\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03</p>
`,"function(date: moment, dateString: string)","",""],onOk:[`<p>\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u7684\u56DE\u8C03</p>
`,"function()","",""]},"DatePicker.RangePicker":{allowClear:[`<p>\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE</p>
`,"boolean",!0,""],autoFocus:[`<p>\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</p>
`,"boolean",!1,""],bordered:[`<p>\u662F\u5426\u6709\u8FB9\u6846</p>
`,"boolean",!0,""],className:[`<p>\u9009\u62E9\u5668 className</p>
`,"string","",""],dateRender:[`<p>\u81EA\u5B9A\u4E49\u65E5\u671F\u5355\u5143\u683C\u7684\u5185\u5BB9\u3002<code>info</code> \u53C2\u6570\u81EA 4.3.0 \u6DFB\u52A0</p>
`,"function(currentDate: moment, today: moment, info: { range: `start` | `end` }) => React.ReactNode","",""],disabled:[`<p>\u7981\u7528\u8D77\u59CB\u9879</p>
`,"[boolean, boolean]","",""],disabledDate:[`<p>\u4E0D\u53EF\u9009\u62E9\u7684\u65E5\u671F</p>
`,"(currentDate: moment) => boolean","",""],dropdownClassName:[`<p>\u989D\u5916\u7684\u5F39\u51FA\u65E5\u5386 className</p>
`,"string","",""],getPopupContainer:[`<p>\u5B9A\u4E49\u6D6E\u5C42\u7684\u5BB9\u5668\uFF0C\u9ED8\u8BA4\u4E3A body \u4E0A\u65B0\u5EFA div</p>
`,"function(trigger)","",""],inputReadOnly:[`<p>\u8BBE\u7F6E\u8F93\u5165\u6846\u4E3A\u53EA\u8BFB\uFF08\u907F\u514D\u5728\u79FB\u52A8\u8BBE\u5907\u4E0A\u6253\u5F00\u865A\u62DF\u952E\u76D8\uFF09</p>
`,"boolean",!1,""],locale:[`<p>\u56FD\u9645\u5316\u914D\u7F6E</p>
`,"object",null,""],mode:[`<p>\u65E5\u671F\u9762\u677F\u7684\u72B6\u6001\uFF08<a target="__blank" href="https://ant.design/docs/react/faq#%E5%BD%93%E6%88%91%E6%8C%87%E5%AE%9A%E4%BA%86-DatePicker/RangePicker-%E7%9A%84-mode-%E5%B1%9E%E6%80%A7%E5%90%8E%EF%BC%8C%E7%82%B9%E5%87%BB%E5%90%8E%E6%97%A0%E6%B3%95%E9%80%89%E6%8B%A9%E5%B9%B4%E4%BB%BD/%E6%9C%88%E4%BB%BD%EF%BC%9F">\u8BBE\u7F6E\u540E\u65E0\u6CD5\u9009\u62E9\u5E74\u4EFD/\u6708\u4EFD\uFF1F</a>\uFF09</p>
`,"`time` | `date` | `month` | `year` | `decade`","",""],open:[`<p>\u63A7\u5236\u5F39\u5C42\u662F\u5426\u5C55\u5F00</p>
`,"boolean","",""],panelRender:[`<p>\u81EA\u5B9A\u4E49\u6E32\u67D3\u9762\u677F</p>
`,"(panelNode) => ReactNode","","4.5.0"],picker:[`<p>\u8BBE\u7F6E\u9009\u62E9\u5668\u7C7B\u578B</p>
`,"`date` | `week` | `month` | `quarter` | `year`","date","`quarter`: 4.1.0"],placeholder:[`<p>\u8F93\u5165\u6846\u63D0\u793A\u6587\u5B57</p>
`,"string | [string, string]","",""],popupStyle:[`<p>\u989D\u5916\u7684\u5F39\u51FA\u65E5\u5386\u6837\u5F0F</p>
`,"CSSProperties","{}",""],size:[`<p>\u8F93\u5165\u6846\u5927\u5C0F\uFF0C<code>large</code> \u9AD8\u5EA6\u4E3A 40px\uFF0C<code>small</code> \u4E3A 24px\uFF0C\u9ED8\u8BA4\u662F 32px</p>
`,"`large` | `middle` | `small`","",""],style:[`<p>\u81EA\u5B9A\u4E49\u8F93\u5165\u6846\u6837\u5F0F</p>
`,"CSSProperties","{}",""],suffixIcon:[`<p>\u81EA\u5B9A\u4E49\u7684\u9009\u62E9\u6846\u540E\u7F00\u56FE\u6807</p>
`,"ReactNode","",""],onOpenChange:[`<p>\u5F39\u51FA\u65E5\u5386\u548C\u5173\u95ED\u65E5\u5386\u7684\u56DE\u8C03</p>
`,"function(open)","",""],onPanelChange:[`<p>\u65E5\u5386\u9762\u677F\u5207\u6362\u7684\u56DE\u8C03</p>
`,"function(value, mode)","",""],allowEmpty:[`<p>\u5141\u8BB8\u8D77\u59CB\u9879\u90E8\u5206\u4E3A\u7A7A</p>
`,"[boolean, boolean]",null,""],defaultPickerValue:[`<p>\u9ED8\u8BA4\u9762\u677F\u65E5\u671F</p>
`,"[moment](http://momentjs.com/)[]","",""],defaultValue:[`<p>\u9ED8\u8BA4\u65E5\u671F</p>
`,"[moment](http://momentjs.com/)[]","",""],disabledTime:[`<p>\u4E0D\u53EF\u9009\u62E9\u7684\u65F6\u95F4</p>
`,"function(date: moment, partial: `start` | `end`)","",""],format:[`<p>\u5C55\u793A\u7684\u65E5\u671F\u683C\u5F0F</p>
`,"string","YYYY-MM-DD HH:mm:ss",""],ranges:[`<p>\u9884\u8BBE\u65F6\u95F4\u8303\u56F4\u5FEB\u6377\u9009\u62E9</p>
`,"{ [range: string]: [moment](http://momentjs.com/)[] } | { [range: string]: () => [moment](http://momentjs.com/)[] }","",""],renderExtraFooter:[`<p>\u5728\u9762\u677F\u4E2D\u6DFB\u52A0\u989D\u5916\u7684\u9875\u811A</p>
`,"() => React.ReactNode","",""],separator:[`<p>\u8BBE\u7F6E\u5206\u9694\u7B26</p>
`,"string","~",""],showTime:[`<p>\u589E\u52A0\u65F6\u95F4\u9009\u62E9\u529F\u80FD</p>
`,"Object|boolean",null,""],"showTime.defaultValue":[`<p>\u8BBE\u7F6E\u7528\u6237\u9009\u62E9\u65E5\u671F\u65F6\u9ED8\u8BA4\u7684\u65F6\u5206\u79D2\uFF0C<a target="__blank" href="https://ant.design/components/date-picker-cn#components-date-picker-demo-disabled-date">\u4F8B\u5B50</a></p>
`,"[moment](http://momentjs.com/)[]",null,""],value:[`<p>\u65E5\u671F</p>
`,"[moment](http://momentjs.com/)[]","",""],onCalendarChange:[`<p>\u5F85\u9009\u65E5\u671F\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03\u3002<code>info</code> \u53C2\u6570\u81EA 4.4.0 \u6DFB\u52A0</p>
`,"function(dates: [moment, moment], dateStrings: [string, string], info: { range:`start`|`end` })","",""],onChange:[`<p>\u65E5\u671F\u8303\u56F4\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03</p>
`,"function(dates: [moment, moment], dateStrings: [string, string])","",""]},Rate:{allowClear:[`<p>\u662F\u5426\u5141\u8BB8\u518D\u6B21\u70B9\u51FB\u540E\u6E05\u9664</p>
`,"boolean",!0,""],allowHalf:[`<p>\u662F\u5426\u5141\u8BB8\u534A\u9009</p>
`,"boolean",!1,""],autoFocus:[`<p>\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</p>
`,"boolean",!1,""],character:[`<p>\u81EA\u5B9A\u4E49\u5B57\u7B26</p>
`,"ReactNode | (RateProps) => ReactNode",null,"function(): 4.4.0"],className:[`<p>\u81EA\u5B9A\u4E49\u6837\u5F0F\u7C7B\u540D</p>
`,"string","",""],count:[`<p>star \u603B\u6570</p>
`,"number",5,""],defaultValue:[`<p>\u9ED8\u8BA4\u503C</p>
`,"number",0,""],disabled:[`<p>\u53EA\u8BFB\uFF0C\u65E0\u6CD5\u8FDB\u884C\u4EA4\u4E92</p>
`,"boolean",!1,""],style:[`<p>\u81EA\u5B9A\u4E49\u6837\u5F0F\u5BF9\u8C61</p>
`,"CSSProperties","",""],tooltips:[`<p>\u81EA\u5B9A\u4E49\u6BCF\u9879\u7684\u63D0\u793A\u4FE1\u606F</p>
`,"string[]","",""],value:[`<p>\u5F53\u524D\u6570\uFF0C\u53D7\u63A7\u503C</p>
`,"number","",""],onBlur:[`<p>\u5931\u53BB\u7126\u70B9\u65F6\u7684\u56DE\u8C03</p>
`,"function()","",""],onChange:[`<p>\u9009\u62E9\u65F6\u7684\u56DE\u8C03</p>
`,"function(value: number)","",""],onFocus:[`<p>\u83B7\u53D6\u7126\u70B9\u65F6\u7684\u56DE\u8C03</p>
`,"function()","",""],onHoverChange:[`<p>\u9F20\u6807\u7ECF\u8FC7\u65F6\u6570\u503C\u53D8\u5316\u7684\u56DE\u8C03</p>
`,"function(value: number)","",""],onKeyDown:[`<p>\u6309\u952E\u56DE\u8C03</p>
`,"function(event)","",""]},TreeSelect:{allowClear:[`<p>\u663E\u793A\u6E05\u9664\u6309\u94AE</p>
`,"boolean",!1,""],autoClearSearchValue:[`<p>\u5F53\u591A\u9009\u6A21\u5F0F\u4E0B\u503C\u88AB\u9009\u62E9\uFF0C\u81EA\u52A8\u6E05\u7A7A\u641C\u7D22\u6846</p>
`,"boolean",!0,""],bordered:[`<p>\u662F\u5426\u663E\u793A\u8FB9\u6846</p>
`,"boolean",!0,""],defaultValue:[`<p>\u6307\u5B9A\u9ED8\u8BA4\u9009\u4E2D\u7684\u6761\u76EE</p>
`,"string | string[]","",""],disabled:[`<p>\u662F\u5426\u7981\u7528</p>
`,"boolean",!1,""],dropdownClassName:[`<p>\u4E0B\u62C9\u83DC\u5355\u7684 className \u5C5E\u6027</p>
`,"string","",""],dropdownMatchSelectWidth:[`<p>\u4E0B\u62C9\u83DC\u5355\u548C\u9009\u62E9\u5668\u540C\u5BBD\u3002\u9ED8\u8BA4\u5C06\u8BBE\u7F6E <code>min-width</code>\uFF0C\u5F53\u503C\u5C0F\u4E8E\u9009\u62E9\u6846\u5BBD\u5EA6\u65F6\u4F1A\u88AB\u5FFD\u7565\u3002false \u65F6\u4F1A\u5173\u95ED\u865A\u62DF\u6EDA\u52A8</p>
`,"boolean | number",!0,""],dropdownRender:[`<p>\u81EA\u5B9A\u4E49\u4E0B\u62C9\u6846\u5185\u5BB9</p>
`,"(originNode: ReactNode, props) => ReactNode","",""],dropdownStyle:[`<p>\u4E0B\u62C9\u83DC\u5355\u7684\u6837\u5F0F</p>
`,"object","",""],filterTreeNode:[`<p>\u662F\u5426\u6839\u636E\u8F93\u5165\u9879\u8FDB\u884C\u7B5B\u9009\uFF0C\u9ED8\u8BA4\u7528 treeNodeFilterProp \u7684\u503C\u4F5C\u4E3A\u8981\u7B5B\u9009\u7684 TreeNode \u7684\u5C5E\u6027\u503C</p>
`,"boolean | function(inputValue: string, treeNode: TreeNode) (\u51FD\u6570\u9700\u8981\u8FD4\u56DE bool \u503C)",null,""],getPopupContainer:[`<p>\u83DC\u5355\u6E32\u67D3\u7236\u8282\u70B9\u3002\u9ED8\u8BA4\u6E32\u67D3\u5230 body \u4E0A\uFF0C\u5982\u679C\u4F60\u9047\u5230\u83DC\u5355\u6EDA\u52A8\u5B9A\u4F4D\u95EE\u9898\uFF0C\u8BD5\u8BD5\u4FEE\u6539\u4E3A\u6EDA\u52A8\u7684\u533A\u57DF\uFF0C\u5E76\u76F8\u5BF9\u5176\u5B9A\u4F4D\u3002<a target="__blank" href="https://codepen.io/afc163/pen/zEjNOy?editors=0010">\u793A\u4F8B</a></p>
`,"function(triggerNode)",null,""],labelInValue:[`<p>\u662F\u5426\u628A\u6BCF\u4E2A\u9009\u9879\u7684 label \u5305\u88C5\u5230 value \u4E2D\uFF0C\u4F1A\u628A value \u7C7B\u578B\u4ECE <code>string</code> \u53D8\u4E3A {value: string, label: ReactNode, halfChecked(treeCheckStrictly \u65F6\u6709\u6548): string[] } \u7684\u683C\u5F0F</p>
`,"boolean",!1,""],listHeight:[`<p>\u8BBE\u7F6E\u5F39\u7A97\u6EDA\u52A8\u9AD8\u5EA6</p>
`,"number",256,""],loadData:[`<p>\u5F02\u6B65\u52A0\u8F7D\u6570\u636E</p>
`,"function(node)","",""],maxTagCount:[`<p>\u6700\u591A\u663E\u793A\u591A\u5C11\u4E2A tag\uFF0C\u54CD\u5E94\u5F0F\u6A21\u5F0F\u4F1A\u5BF9\u6027\u80FD\u4EA7\u751F\u635F\u8017</p>
`,"number | `responsive`","","responsive: 4.10"],maxTagPlaceholder:[`<p>\u9690\u85CF tag \u65F6\u663E\u793A\u7684\u5185\u5BB9</p>
`,"ReactNode | function(omittedValues)","",""],multiple:[`<p>\u652F\u6301\u591A\u9009\uFF08\u5F53\u8BBE\u7F6E treeCheckable \u65F6\u81EA\u52A8\u53D8\u4E3A true\uFF09</p>
`,"boolean",!1,""],placeholder:[`<p>\u9009\u62E9\u6846\u9ED8\u8BA4\u6587\u5B57</p>
`,"string","",""],searchValue:[`<p>\u641C\u7D22\u6846\u7684\u503C\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>onSearch</code> \u83B7\u53D6\u7528\u6237\u8F93\u5165</p>
`,"string","",""],showArrow:[`<p>\u662F\u5426\u663E\u793A <code>suffixIcon</code>\uFF0C\u5355\u9009\u6A21\u5F0F\u4E0B\u9ED8\u8BA4 <code>true</code></p>
`,"boolean","",""],showCheckedStrategy:[`<p>\u5B9A\u4E49\u9009\u4E2D\u9879\u56DE\u586B\u7684\u65B9\u5F0F\u3002<code>TreeSelect.SHOW_ALL</code>: \u663E\u793A\u6240\u6709\u9009\u4E2D\u8282\u70B9(\u5305\u62EC\u7236\u8282\u70B9)\u3002<code>TreeSelect.SHOW_PARENT</code>: \u53EA\u663E\u793A\u7236\u8282\u70B9(\u5F53\u7236\u8282\u70B9\u4E0B\u6240\u6709\u5B50\u8282\u70B9\u90FD\u9009\u4E2D\u65F6)\u3002 \u9ED8\u8BA4\u53EA\u663E\u793A\u5B50\u8282\u70B9</p>
`,"`TreeSelect.SHOW_ALL` | `TreeSelect.SHOW_PARENT` | `TreeSelect.SHOW_CHILD`","TreeSelect.SHOW_CHILD",""],showSearch:[`<p>\u662F\u5426\u652F\u6301\u641C\u7D22\u6846</p>
`,"boolean",null,""],size:[`<p>\u9009\u62E9\u6846\u5927\u5C0F</p>
`,"`large` | `middle` | `small`","",""],suffixIcon:[`<p>\u81EA\u5B9A\u4E49\u7684\u9009\u62E9\u6846\u540E\u7F00\u56FE\u6807, \u591A\u9009\u6A21\u5F0F\u4E0B\u5FC5\u987B\u540C\u65F6\u8BBE\u7F6E <code>showArrow</code> \u4E3A true</p>
`,"ReactNode","",""],switcherIcon:[`<p>\u81EA\u5B9A\u4E49\u6811\u8282\u70B9\u7684\u5C55\u5F00/\u6298\u53E0\u56FE\u6807</p>
`,"ReactNode","",""],treeCheckable:[`<p>\u663E\u793A Checkbox</p>
`,"boolean",!1,""],treeCheckStrictly:[`<p><code>checkable</code> \u72B6\u6001\u4E0B\u8282\u70B9\u9009\u62E9\u5B8C\u5168\u53D7\u63A7\uFF08\u7236\u5B50\u8282\u70B9\u9009\u4E2D\u72B6\u6001\u4E0D\u518D\u5173\u8054\uFF09\uFF0C\u4F1A\u4F7F\u5F97 <code>labelInValue</code> \u5F3A\u5236\u4E3A true</p>
`,"boolean",!1,""],treeData:[`<p>treeNodes \u6570\u636E\uFF0C\u5982\u679C\u8BBE\u7F6E\u5219\u4E0D\u9700\u8981\u624B\u52A8\u6784\u9020 TreeNode \u8282\u70B9\uFF08value \u5728\u6574\u4E2A\u6811\u8303\u56F4\u5185\u552F\u4E00\uFF09</p>
`,"array&lt;{value, title, children, [disabled, disableCheckbox, selectable, checkable]}>",null,""],treeDataSimpleMode:[`<p>\u4F7F\u7528\u7B80\u5355\u683C\u5F0F\u7684 treeData\uFF0C\u5177\u4F53\u8BBE\u7F6E\u53C2\u8003\u53EF\u8BBE\u7F6E\u7684\u7C7B\u578B (\u6B64\u65F6 treeData \u5E94\u53D8\u4E3A\u8FD9\u6837\u7684\u6570\u636E\u7ED3\u6784: [{id:1, pId:0, value:'1', title:&quot;test1&quot;,...},...]\uFF0C <code>pId</code> \u662F\u7236\u8282\u70B9\u7684 id)</p>
`,"false | object&lt;{ id: string, pId: string, rootPId: string }>",!1,""],treeDefaultExpandAll:[`<p>\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u6811\u8282\u70B9</p>
`,"boolean",!1,""],treeDefaultExpandedKeys:[`<p>\u9ED8\u8BA4\u5C55\u5F00\u7684\u6811\u8282\u70B9</p>
`,"string[]","",""],treeExpandedKeys:[`<p>\u8BBE\u7F6E\u5C55\u5F00\u7684\u6811\u8282\u70B9</p>
`,"string[]","",""],treeIcon:[`<p>\u662F\u5426\u5C55\u793A TreeNode title \u524D\u7684\u56FE\u6807\uFF0C\u6CA1\u6709\u9ED8\u8BA4\u6837\u5F0F\uFF0C\u5982\u8BBE\u7F6E\u4E3A true\uFF0C\u9700\u8981\u81EA\u884C\u5B9A\u4E49\u56FE\u6807\u76F8\u5173\u6837\u5F0F</p>
`,"boolean",!1,""],treeNodeFilterProp:[`<p>\u8F93\u5165\u9879\u8FC7\u6EE4\u5BF9\u5E94\u7684 treeNode \u5C5E\u6027</p>
`,"string","value",""],treeNodeLabelProp:[`<p>\u4F5C\u4E3A\u663E\u793A\u7684 prop \u8BBE\u7F6E</p>
`,"string","title",""],value:[`<p>\u6307\u5B9A\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE</p>
`,"string | string[]","",""],virtual:[`<p>\u8BBE\u7F6E false \u65F6\u5173\u95ED\u865A\u62DF\u6EDA\u52A8</p>
`,"boolean",!0,"4.1.0"],onChange:[`<p>\u9009\u4E2D\u6811\u8282\u70B9\u65F6\u8C03\u7528\u6B64\u51FD\u6570</p>
`,"function(value, label, extra)","",""],onDropdownVisibleChange:[`<p>\u5C55\u5F00\u4E0B\u62C9\u83DC\u5355\u7684\u56DE\u8C03</p>
`,"function(open)","",""],onSearch:[`<p>\u6587\u672C\u6846\u503C\u53D8\u5316\u65F6\u56DE\u8C03</p>
`,"function(value: string)","",""],onSelect:[`<p>\u88AB\u9009\u4E2D\u65F6\u8C03\u7528</p>
`,"function(value, node, extra)","",""],onTreeExpand:[`<p>\u5C55\u793A\u8282\u70B9\u65F6\u8C03\u7528</p>
`,"function(expandedKeys)","",""]},Slider:{allowClear:[`<p>\u652F\u6301\u6E05\u9664, \u5355\u9009\u6A21\u5F0F\u6709\u6548</p>
`,"boolean",!1,""],defaultValue:[`<p>\u8BBE\u7F6E\u521D\u59CB\u53D6\u503C\u3002\u5F53 <code>range</code> \u4E3A false \u65F6\uFF0C\u4F7F\u7528 number\uFF0C\u5426\u5219\u7528 [number, number]</p>
`,"number | [number, number]",null,""],disabled:[`<p>\u503C\u4E3A true \u65F6\uFF0C\u6ED1\u5757\u4E3A\u7981\u7528\u72B6\u6001</p>
`,"boolean",!1,""],dots:[`<p>\u662F\u5426\u53EA\u80FD\u62D6\u62FD\u5230\u523B\u5EA6\u4E0A</p>
`,"boolean",!1,""],getTooltipPopupContainer:[`<p>Tooltip \u6E32\u67D3\u7236\u8282\u70B9\uFF0C\u9ED8\u8BA4\u6E32\u67D3\u5230 body \u4E0A</p>
`,"(triggerNode) => HTMLElement",null,""],included:[`<p><code>marks</code> \u4E0D\u4E3A\u7A7A\u5BF9\u8C61\u65F6\u6709\u6548\uFF0C\u503C\u4E3A true \u65F6\u8868\u793A\u503C\u4E3A\u5305\u542B\u5173\u7CFB\uFF0Cfalse \u8868\u793A\u5E76\u5217</p>
`,"boolean",!0,""],marks:[`<p>\u523B\u5EA6\u6807\u8BB0\uFF0Ckey \u7684\u7C7B\u578B\u5FC5\u987B\u4E3A <code>number</code> \u4E14\u53D6\u503C\u5728\u95ED\u533A\u95F4 [min, max] \u5185\uFF0C\u6BCF\u4E2A\u6807\u7B7E\u53EF\u4EE5\u5355\u72EC\u8BBE\u7F6E\u6837\u5F0F</p>
`,"object",null,""],max:[`<p>\u6700\u5927\u503C</p>
`,"number",100,""],min:[`<p>\u6700\u5C0F\u503C</p>
`,"number",0,""],range:[`<p>\u53CC\u6ED1\u5757\u6A21\u5F0F</p>
`,"boolean | [range](#range)",!1,""],reverse:[`<p>\u53CD\u5411\u5750\u6807\u8F74</p>
`,"boolean",!1,""],step:[`<p>\u6B65\u957F\uFF0C\u53D6\u503C\u5FC5\u987B\u5927\u4E8E 0\uFF0C\u5E76\u4E14\u53EF\u88AB (max - min) \u6574\u9664\u3002\u5F53 <code>marks</code> \u4E0D\u4E3A\u7A7A\u5BF9\u8C61\u65F6\uFF0C\u53EF\u4EE5\u8BBE\u7F6E <code>step</code> \u4E3A null\uFF0C\u6B64\u65F6 Slider \u7684\u53EF\u9009\u503C\u4EC5\u6709 marks \u6807\u51FA\u6765\u7684\u90E8\u5206</p>
`,"number | null",1,""],tipFormatter:[`<p>Slider \u4F1A\u628A\u5F53\u524D\u503C\u4F20\u7ED9 <code>tipFormatter</code>\uFF0C\u5E76\u5728 Tooltip \u4E2D\u663E\u793A <code>tipFormatter</code> \u7684\u8FD4\u56DE\u503C\uFF0C\u82E5\u4E3A null\uFF0C\u5219\u9690\u85CF Tooltip</p>
`,"value => ReactNode | null",null,""],tooltipPlacement:[`<p>\u8BBE\u7F6E Tooltip \u5C55\u793A\u4F4D\u7F6E\u3002\u53C2\u8003 <a target="__blank" href="https://ant.design/components/tooltip/">Tooltip</a></p>
`,"string","",""],tooltipVisible:[`<p>\u503C\u4E3A true \u65F6\uFF0CTooltip \u5C06\u4F1A\u59CB\u7EC8\u663E\u793A\uFF1B\u5426\u5219\u59CB\u7EC8\u4E0D\u663E\u793A\uFF0C\u54EA\u6015\u5728\u62D6\u62FD\u53CA\u79FB\u5165\u65F6</p>
`,"boolean","",""],value:[`<p>\u8BBE\u7F6E\u5F53\u524D\u53D6\u503C\u3002\u5F53 <code>range</code> \u4E3A false \u65F6\uFF0C\u4F7F\u7528 number\uFF0C\u5426\u5219\u7528 [number, number]</p>
`,"number | [number, number]","",""],vertical:[`<p>\u503C\u4E3A true \u65F6\uFF0CSlider \u4E3A\u5782\u76F4\u65B9\u5411</p>
`,"boolean",!1,""],onAfterChange:[`<p>\u4E0E <code>onmouseup</code> \u89E6\u53D1\u65F6\u673A\u4E00\u81F4\uFF0C\u628A\u5F53\u524D\u503C\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165</p>
`,"(value) => void","",""],onChange:[`<p>\u5F53 Slider \u7684\u503C\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u4F1A\u89E6\u53D1 onChange \u4E8B\u4EF6\uFF0C\u5E76\u628A\u6539\u53D8\u540E\u7684\u503C\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165</p>
`,"(value) => void","",""]}},Ot=e("Lyp1"),yt=e("IoM6"),St=e.n(yt),Ce="K2D8",Ft=function(a){var c=a.title,s=a.content;return Object(t.jsxs)(ye.b,{size:3,children:[c,Object(t.jsx)(K.a,{title:s,overlayStyle:{whiteSpace:"pre-line"},children:Object(t.jsx)(Ot.a,{className:St.a.Icon},"".concat(Ce,"31"))},"".concat(Ce,"21"))]},"".concat(Ce,"11"))},Ct=Ft,ie="7ZSX",Te=function(a){return Object.keys(a).reduce(function(c,s){var m=a[s];switch(typeof m[2]){case"object":return Object(o.a)(Object(o.a)({},c),{},Object(X.a)({},s,m[2]?JSON.stringify(m[2]):void 0));case"string":return Object(o.a)(Object(o.a)({},c),{},Object(X.a)({},s,m[2].length===0?void 0:m[2]));default:return Object(o.a)(Object(o.a)({},c),{},Object(X.a)({},s,m[2]))}},{})},Ve=function(a,c){var s,m;if(a){var b=a.filter(function(h){return h.id===c})[0]||{},N=b.field,O=b.name,g=b.label,k=b.valuePropName,I=b.initialSource,x=b.type,_=b.id,G=Object(De.a)(b,["field","name","label","valuePropName","initialSource","type","id"]);N===void 0||typeof N=="string"?s={}:s=Object(o.a)({},N.props),m=Object(o.a)({name:O,label:g},G)}return[s,m]},Be=function(a,c){return Object.keys(a).filter(function(s){return c.includes(s)}).reduce(function(s,m){return s[m]=a[m],s},{})},Nt=function(a){var c=a.id,s=a.type,m=a.alias,b=a.onFinish,N=a.setVisible,O=a.updateSetting,g=a.setDeletedField,k=a.setCopiedField,I=a.openCode,x=a.currentFieldSetting,_=Object(r.useState)("basic"),G=Object(f.a)(_,2),h=G[0],w=G[1],U=de.a.createRef(),A=m||s,D=Te(pe["Form.Item"]),z=Te(pe[A]||{});Object(r.useEffect)(function(){w("basic"),U.current.resetFields();var T=Ve(x,c),d=Object(f.a)(T,2),V=d[0],W=d[1];U.current.setFieldsValue(Object(X.a)({"Form.Item":be()(Object(o.a)(Object(o.a)({},D),W),function(u){return u!=null})},A,be()(Object(o.a)(Object(o.a)({},z),V),function(u){return u!=null})))},[c]),Object(r.useEffect)(function(){U.current.resetFields();var T=Ve(x,c),d=Object(f.a)(T,2),V=d[0],W=d[1];U.current.setFieldsValue(Object(X.a)({"Form.Item":be()(Object(o.a)(Object(o.a)({},D),W),function(u){return u!=null})},A,be()(Object(o.a)(Object(o.a)({},z),V),function(u){return u!=null})))},[x]);var $=function(d,V){var W;return(W=Object.keys(d))===null||W===void 0?void 0:W.map(function(u){if(["value","checked","fileList","defaultValue","defaultChecked","defaultFileList"].indexOf(u)!==-1)return null;var Y,Z,ge=d[u][1].toLocaleLowerCase().match(/(function|\([^)]*\)|\w+\s*=>|{[^}]*}|array|\[[^]]*\]|string\[\]|any\[\]|any|string|boolean|number|namepath|reactnode)/)||[],Ne=Object(f.a)(ge,1),he=Ne[0];switch(he){case"number":Y={type:"CustomInputNumber",props:{onChange:function(R){U.current.setFieldValue([V,u],R)},size:"small"}},Z={trigger:"onBlur"};break;case"boolean":Y={type:"switch",props:{size:"small"}},Z={valuePropName:"checked"};break;case"any":case"string":case"reactnode":case"namepath":Y={type:"input",props:{placeholder:d[u][1],size:"small"}},Z={trigger:"onBlur",onChange:function(R){U.current.setFieldValue([V,u],R.target.value)}};break;default:if(/function|\([^)]*\)|\w+\s*=>/i.test(d[u][1]))return null;/^(?:(['`])[^'`]+\1\s*\|\s*)+\1[^'`]+\1$/.test(d[u][1])?Y={type:"CustomRadioGroup",props:{optionType:"button",size:"small",buttonStyle:"solid",options:Object(C.a)(d[u][1].split(/\s*\|\s*/).map(function(te){var R=te.replace(/(['"`])([^'"`]+)\1/,"$2").trim();return{value:R,label:R}}))}}:(Y=void 0,Z={render:{type:"link",props:{children:"\u5728\u4EE3\u7801\u4E2D\u7F16\u8F91",onClick:function(R){R.preventDefault(),I&&I(!0)}}}})}return Object(o.a)({field:Y,name:[V,u],label:Object(t.jsx)(Ct,{title:u,content:"\u7C7B\u578B: ".concat(d[u][1])},"".concat(ie,"11")),extra:de.a.createElement("div",{dangerouslySetInnerHTML:{__html:d[u][0]}})},Z)}).filter(function(u){return u!==null})},n=pe[A]||{},i=[{key:"basic",tab:"\u57FA\u7840"},{key:"field",tab:"\u5B57\u6BB5"},{key:"form",tab:"\u8868\u5355"},{key:"pro",tab:"\u9AD8\u7EA7"}],ee={basic:[].concat(Object(C.a)($(Be(pe["Form.Item"],["name","label","initialValue","hidden"]),"Form.Item")),Object(C.a)($(Be(n,["disabled"]),A))),field:$(n,A),form:$(pe["Form.Item"],"Form.Item"),pro:[{label:"\u590D\u5236\u8868\u5355\u5B57\u6BB5",name:"copy",render:{type:"button",props:{children:"\u590D\u5236",type:"default",icon:Object(t.jsx)(ht.a,{},"".concat(ie,"21")),onClick:function(d){d.preventDefault(),k&&c&&k(c)}}}},{label:"\u5220\u9664\u8868\u5355\u5B57\u6BB5",name:"del",render:{type:"button",props:{children:"\u5220\u9664",type:"danger",icon:Object(t.jsx)(vt.a,{},"".concat(ie,"31")),onClick:function(d){d.preventDefault(),g&&c&&g(c)}}}}]};return Object(t.jsx)(Fe.b,{ref:U,onValuesChange:function(d){O&&O(d)},fields:ee[h],container:{type:"card",props:{title:"\u914D\u7F6E",bordered:!1,type:"inner",size:"small",tabList:i,activeTabKey:h,onTabChange:function(d){w(d)},extra:Object(t.jsx)(jt.a,{onClick:function(d){d.preventDefault(),N&&N()}},"".concat(ie,"51")),tabProps:{size:"small"}}},onFinish:b,layout:"vertical"},"".concat(ie,"41"))},Pt=Nt,xt=e("8f1+"),E=e.n(xt),l="fXX5",Rt=function(a){var c=a.id,s=a.saveForm,m=a.getForm,b=Se.a.useForm(),N=Object(f.a)(b,1),O=N[0],g=Object(r.useState)(!0),k=Object(f.a)(g,2),I=k[0],x=k[1],_=Object(r.useState)(!1),G=Object(f.a)(_,2),h=G[0],w=G[1],U=Object(r.useState)(!1),A=Object(f.a)(U,2),D=A[0],z=A[1],$=Object(r.useState)(!1),n=Object(f.a)($,2),i=n[0],ee=n[1],T=Object(r.useState)(),d=Object(f.a)(T,2),V=d[0],W=d[1],u=Object(r.useState)(),Y=Object(f.a)(u,2),Z=Y[0],ge=Y[1],Ne=Object(r.useState)(),he=Object(f.a)(Ne,2),te=he[0],R=he[1],It=Object(r.useState)(),Le=Object(f.a)(It,2),Dt=Le[0],Me=Le[1],Tt=Object(r.useState)(),He=Object(f.a)(Tt,2),Vt=He[0],Ue=He[1],Bt=Object(r.useState)(1),ze=Object(f.a)(Bt,2),wt=ze[0],q=ze[1],At=Object(r.useState)(1),We=Object(f.a)(At,2),Ke=We[0],ce=We[1],Lt=Object(r.useState)([]),Ge=Object(f.a)(Lt,2),ne=Ge[0],Je=Ge[1],Mt=Object(r.useState)([]),Ye=Object(f.a)(Mt,2),v=Ye[0],Pe=Ye[1],Ht=Object(r.useState)("view"),$e=Object(f.a)(Ht,2),se=$e[0],Qe=$e[1];Object(r.useEffect)(function(){c===void 0||m===void 0||Object(ke.a)(me.a.mark(function y(){var p,S;return me.a.wrap(function(oe){for(;;)switch(oe.prev=oe.next){case 0:return oe.next=2,m(c);case 2:p=oe.sent;try{R(JSON.parse(p==null||(S=p.data)===null||S===void 0?void 0:S.fields))}catch(ae){}case 4:case"end":return oe.stop()}},y)}))()},[m,c]);var Ut=function(p){var S=JSON.stringify(p,null,2);Ke&&S===O.getFieldValue("fields")||(Ke&&O.setFieldsValue({fields:S}),wt&&Pe([].concat(Object(C.a)(v),[p])),q(1),ce(1),ge(void 0),R(void 0),Me(void 0),Ue(void 0))},zt=function(){D||(I?(x(!1),setTimeout(function(){z(!0)},200)):z(!0))},Xe=function(p){if(p===void 0){w(!1);return}W(p),!h&&w(!0)},Wt=function(p){switch(p.key){case"components":z(!1),setTimeout(function(){x(!I)},200);break;case"code":x(!1),setTimeout(function(){z(!D)},200);break;default:}},Kt=function(p){ce(0);try{v.length===0||JSON.stringify(v[v.length-1])!==JSON.stringify(JSON.parse(p.fields))?(q(1),R(JSON.parse(p.fields)),Ee.default.success("\u914D\u7F6E\u5DF2\u751F\u6548")):q(0)}catch(S){Ee.default.error("\u683C\u5F0F\u9519\u8BEF"),q(0)}},Gt=function(p){ge(p),q(1),ce(1)};return Object(t.jsxs)(F.a,{className:i?E.a.Fullscreen:E.a.Normalscreen,children:[Object(t.jsx)(F.a.Header,{className:E.a.Header,children:Object(t.jsxs)("div",{className:"ant-pro-global-header",children:[Object(t.jsx)(ye.b,{size:"middle",style:{flex:"1 1 0%"},children:"\u8868\u5355\u7F16\u8F91\u5668"},"".concat(l,"41")),Object(t.jsxs)(ye.b,{size:"middle",children:[Object(t.jsx)(K.a,{title:"\u9884\u89C8\u6A21\u5F0F",children:Object(t.jsx)(_e.a,{className:se==="edit"?E.a.Chosen:void 0,onClick:function(p){p.preventDefault(),Qe("edit"),x(!1),z(!1),w(!1)}},"".concat(l,"61"))},"".concat(l,"51")),Object(t.jsx)(K.a,{title:"\u7F16\u8F91\u6A21\u5F0F",children:Object(t.jsx)(et.a,{className:se==="view"?E.a.Chosen:void 0,onClick:function(p){p.preventDefault(),Qe("view"),D?(z(!1),setTimeout(function(){x(!0)},200)):x(!0)}},"".concat(l,"71"))},"".concat(l,"52")),Object(t.jsx)(K.a,{title:"\u540E\u9000",children:Object(t.jsx)(Ie.a,{className:v.length<=1?E.a.Disabled:void 0,onClick:function(p){if(p.preventDefault(),!(v===void 0||v.length<=1)){var S=v.pop();S!==void 0&&(q(0),ce(1),R(v.length>0?v[v.length-1]:[]),Pe(Object(C.a)(v)),Je([].concat(Object(C.a)(ne),[S])))}}},"".concat(l,"81"))},"".concat(l,"53")),Object(t.jsx)(K.a,{title:"\u524D\u8FDB",children:Object(t.jsx)(Ie.a,{style:{transform:"rotateY(180deg)"},className:ne.length===0?E.a.Disabled:void 0,onClick:function(p){if(p.preventDefault(),!(ne===void 0||ne.length===0)){var S=ne.pop();S!==void 0&&(q(0),ce(1),R(S),Je(Object(C.a)(ne)),Pe([].concat(Object(C.a)(v),[S])))}}},"".concat(l,"82"))},"".concat(l,"54")),Object(t.jsx)(M.a,{type:"vertical"},"".concat(l,"91")),i?Object(t.jsx)(K.a,{title:"\u9000\u51FA\u5168\u5C4F",children:Object(t.jsx)(nt.a,{onClick:function(p){p.preventDefault(),ee(!1)}},"".concat(l,"b1"))},"".concat(l,"56")):Object(t.jsx)(K.a,{title:"\u5168\u5C4F",children:Object(t.jsx)(tt.a,{onClick:function(p){p.preventDefault(),ee(!0)}},"".concat(l,"a1"))},"".concat(l,"55")),Object(t.jsx)(M.a,{type:"vertical"},"".concat(l,"92")),Object(t.jsx)(P.a,{type:"primary",onClick:function(p){p.preventDefault(),s&&Object(ke.a)(me.a.mark(function S(){var ve;return me.a.wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:return ae.next=2,s({id:c||fe().toLocaleString(),fields:JSON.stringify(v[v.length-1])});case 2:ve=ae.sent,ve&&ve.errorCode===0&&(j.default.success({message:"\u4FDD\u5B58\u6210\u529F"}),qe.history.push("/list"));case 4:case"end":return ae.stop()}},S)}))()},children:"\u4FDD\u5B58"},"".concat(l,"c1"))]},"".concat(l,"42"))]},"".concat(l,"31"))},"".concat(l,"21")),Object(t.jsxs)(F.a,{children:[se==="view"&&Object(t.jsxs)(re.a,{mode:"inline",inlineCollapsed:!0,className:E.a.Menu,onClick:Wt,selectedKeys:[].concat(Object(C.a)(I?["components"]:[]),Object(C.a)(D?["code"]:[])),children:[Object(t.jsx)(re.a.Item,{icon:Object(t.jsx)(ot.a,{},"".concat(l,"e1")),_nk:"".concat(l,"22"),children:"\u7EC4\u4EF6"},"components"),Object(t.jsx)(re.a.Item,{icon:Object(t.jsx)(at.a,{},"".concat(l,"f1")),_nk:"".concat(l,"23"),children:"\u4EE3\u7801"},"code")]},"".concat(l,"d1")),Object(t.jsx)(F.a.Sider,{collapsible:!0,collapsed:!D,width:h?"calc(50% - 174px)":"calc(50% - 24px)",collapsedWidth:0,trigger:null,className:E.a.Code,children:Object(t.jsxs)(Se.a,{form:O,onFinish:Kt,style:{height:"100%"},children:[Object(t.jsx)(Se.a.Item,{name:"fields",noStyle:!0,children:Object(t.jsx)(lt.a,{width:"100%",height:"100%",language:"json",theme:"vs",options:{selectOnLineNumbers:!0,roundedSelection:!1,readOnly:!1,cursorStyle:"line",automaticLayout:!0,minimap:{enabled:!1}}},"".concat(l,"h1"))},"".concat(l,"25")),Object(t.jsx)(P.a,{type:"primary",htmlType:"submit",style:{position:"absolute",bottom:"10px",right:"10px"},children:"\u786E\u5B9A"},"".concat(l,"c2"))]},"".concat(l,"g1"))},"".concat(l,"24")),Object(t.jsx)(F.a.Sider,{collapsible:!0,collapsed:!I,collapsedWidth:0,trigger:null,className:E.a.Components,children:Object(t.jsx)(ut,{sortableProps:{group:{name:"shared",pull:"clone",put:!1},clone:function(p){return Object(o.a)(Object(o.a)({},p),{},{id:fe()})},animation:150,sort:!1}},"".concat(l,"i1"))},"".concat(l,"26")),Object(t.jsx)(F.a.Content,{className:E.a.Main,"data-mode":se,children:Object(t.jsx)(bt,{sortable:!0,sortableProps:{group:{name:"shared",pull:"clone"},animation:150,className:E.a.SortableBox},mode:se,settingTrigger:Xe,changedFieldSetting:Z,allFieldSetting:te,deletedField:Dt,copiedField:Vt,setHistory:Ut},"".concat(l,"j1"))},"".concat(l,"27")),Object(t.jsx)(F.a.Sider,{collapsible:!0,collapsed:!h,collapsedWidth:0,width:300,trigger:null,className:E.a.Setting,children:V&&Object(t.jsx)(Pt,{id:V.id,type:V.type,onFinish:function(p){},setVisible:Xe,updateSetting:Gt,setDeletedField:Me,setCopiedField:Ue,openCode:zt,currentFieldSetting:v[v.length-1]},"".concat(l,"k1"))},"".concat(l,"28"))]},"".concat(l,"12"))]},"".concat(l,"11"))},Et=Rt,we=e("mX+h"),Ae="QnvN",kt=function(a){var c=a.match,s=c.params;return Object(t.jsx)(Oe.a,{title:"\u8868\u5355\u7F16\u8F91\u5668",className:"site-page-header",children:Object(t.jsx)(Et,{id:s==null?void 0:s.id,getForm:we.b,saveForm:we.d},"".concat(Ae,"21"))},"".concat(Ae,"11"))},Zt=J.default=kt},"8f1+":function(le,J,e){le.exports={Header:"Header___3UEyU",Chosen:"Chosen___3WZc5",Disabled:"Disabled___1fGUy",Menu:"Menu___2cV8z",Components:"Components___1Vr3F",Code:"Code___12FWg",Main:"Main___M2u-o",SortableBox:"SortableBox___2EYVU",Setting:"Setting___Xivk-",Fullscreen:"Fullscreen___3myra",Normalscreen:"Normalscreen___30BBY"}},IoM6:function(le,J,e){le.exports={Icon:"Icon___3T_nu"}},"mX+h":function(le,J,e){"use strict";e.d(J,"b",function(){return o}),e.d(J,"d",function(){return xe}),e.d(J,"a",function(){return re}),e.d(J,"c",function(){return Re});var je=e("KQm4"),Oe=e("o0o1"),t=e.n(Oe),r=e("HaE+"),de="iyPY",o=function(){var F=Object(r.a)(t.a.mark(function B(P){return t.a.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.abrupt("return",new Promise(function(Q){Q({errorCode:0,errorMessage:"success",data:{fields:localStorage.getItem("form_".concat(P))}})}));case 1:case"end":return j.stop()}},B)}));return function(P){return F.apply(this,arguments)}}(),xe=function(){var F=Object(r.a)(t.a.mark(function B(P){var L,j;return t.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return L=P.id,j=P.fields,M.abrupt("return",new Promise(function(ue){var K=JSON.parse(localStorage.getItem("form_list")||"[]");K.push(L),localStorage.setItem("form_list",JSON.stringify(Object(je.a)(new Set(Object(je.a)(K))))),localStorage.setItem("form_".concat(L),j),ue({errorCode:0,errorMessage:"success",data:null})}));case 2:case"end":return M.stop()}},B)}));return function(P){return F.apply(this,arguments)}}(),re=function(){var F=Object(r.a)(t.a.mark(function B(){return t.a.wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return L.abrupt("return",new Promise(function(j){var Q=JSON.parse(localStorage.getItem("form_list")||"[]");setTimeout(function(){j({errorCode:0,errorMessage:"success",data:Q.map(function(M){return{id:M}})})},100)}));case 1:case"end":return L.stop()}},B)}));return function(){return F.apply(this,arguments)}}(),Re=function(){var F=Object(r.a)(t.a.mark(function B(P){return t.a.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.abrupt("return",new Promise(function(Q){var M=JSON.parse(localStorage.getItem("form_list")||"[]");localStorage.setItem("form_list",JSON.stringify(M.filter(function(ue){return ue!==P}))),localStorage.removeItem("form_".concat(P)),Q({errorCode:0,errorMessage:"success",data:null})}));case 1:case"end":return j.stop()}},B)}));return function(P){return F.apply(this,arguments)}}()}}]);
