(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports={header:"MainNavigation_header__Bh_vx",logo:"MainNavigation_logo__Lrek4",nav:"MainNavigation_nav__3xMd5",active:"MainNavigation_active__4IAqc"}},function(e,t,n){e.exports={form:"QuoteForm_form__1mVF_",loading:"QuoteForm_loading__1GTWm",control:"QuoteForm_control__a6dm7",actions:"QuoteForm_actions__2xv5Q"}},,,function(e,t,n){e.exports={form:"NewCommentForm_form__gkKtQ",loading:"NewCommentForm_loading__3Inhc",control:"NewCommentForm_control__9CQgG",actions:"NewCommentForm_actions__2DULk"}},,,,function(e,t,n){e.exports={list:"QuoteList_list__1iJcF",sorting:"QuoteList_sorting__2TE3_"}},,,,function(e,t,n){e.exports={main:"Layout_main__axzls"}},function(e,t,n){e.exports={item:"QuoteItem_item__2TM7-"}},function(e,t,n){e.exports={card:"Card_card__17dPU"}},function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__1N9f7"}},function(e,t,n){e.exports={comments:"Comments_comments__1u4Uj"}},function(e,t,n){e.exports={quote:"HighlightedQuote_quote__7OK1K"}},,,,function(e,t,n){},,,,,,,,,,function(e,t,n){"use strict";n.r(t);var c=n(20),o=n.n(c),s=(n(32),n(2)),r=n(1),a=n(7),i=n(11),j=n.n(i),l=n(0),u=function(){return Object(l.jsx)(r.Fragment,{children:Object(l.jsxs)("header",{className:j.a.header,children:[Object(l.jsx)("div",{className:j.a.logo,children:"Great Quotes"}),Object(l.jsx)("nav",{className:j.a.nav,children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(a.b,{activeClassName:j.a.active,to:"/quotes",children:"All Quotes"})}),Object(l.jsx)("li",{children:Object(l.jsx)(a.b,{activeClassName:j.a.active,to:"/new-quote",children:"Add Quote"})})]})})]})})},d=n(23),m=n.n(d),x=function(e){return Object(l.jsxs)(r.Fragment,{children:[Object(l.jsx)(u,{}),Object(l.jsx)("main",{className:m.a.main,children:e.children})]})},b=n(8),h=n(24),O=n.n(h),f=function(e){return Object(l.jsxs)("li",{className:O.a.item,children:[Object(l.jsxs)("figure",{children:[Object(l.jsx)("blockquote",{children:Object(l.jsx)("p",{children:e.text})}),Object(l.jsx)("figcaption",{children:e.author})]}),Object(l.jsx)(a.a,{to:"/quotes/".concat(e.id),className:"btn",children:"View Fullscreen"})]})},_=n(19),p=n.n(_),v=function(e){var t=Object(b.useHistory)(),n=Object(b.useLocation)(),c=new URLSearchParams(n.search);console.log(c.get("sort"));var o,s,a="asc"===c.get("sort"),i=(o=e.quotes,s=a,o.sort((function(e,t){return s?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(l.jsxs)(r.Fragment,{children:[Object(l.jsx)("div",{className:p.a.sorting,children:Object(l.jsxs)("button",{onClick:function(){t.push("/quotes/?sort="+(a?"dsc":"asc"))},children:["Sort ",a?"Ascending":"Descending"]})}),Object(l.jsx)("ul",{className:p.a.list,children:i.map((function(e){return Object(l.jsx)(f,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},g=[{id:"q1",author:"Harshit",text:"One should always be a learner!"},{id:"q2",author:"Marmat",text:"One day all hard-work will pay off!"}],N=function(){return Object(l.jsx)(v,{quotes:g})},q=n(14),w=n(17),F=n(25),C=n.n(F),Q=function(e){return Object(l.jsx)("div",{className:C.a.card,children:e.children})},y=n(26),R=n.n(y),A=function(){return Object(l.jsx)("div",{className:R.a.spinner})},k=n(12),L=n.n(k),I=function(e){var t=Object(r.useRef)(),n=Object(r.useRef)(),c=Object(r.useState)(!1),o=Object(q.a)(c,2),a=o[0],i=o[1];return Object(l.jsxs)(w.Fragment,{children:[Object(l.jsx)(s.Prompt,{when:a,message:function(e){return"Are you sure you want to leave? All your data will lost!"}}),Object(l.jsx)(Q,{children:Object(l.jsxs)("form",{onFocus:function(){i(!0)},className:L.a.form,onSubmit:function(c){c.preventDefault();var o=t.current.value,s=n.current.value;e.onAddQuote({author:o,text:s})},children:[e.isLoading&&Object(l.jsx)("div",{className:L.a.loading,children:Object(l.jsx)(A,{})}),Object(l.jsxs)("div",{className:L.a.control,children:[Object(l.jsx)("label",{htmlFor:"author",children:"Author"}),Object(l.jsx)("input",{type:"text",id:"author",ref:t})]}),Object(l.jsxs)("div",{className:L.a.control,children:[Object(l.jsx)("label",{htmlFor:"text",children:"Text"}),Object(l.jsx)("textarea",{id:"text",rows:"5",ref:n})]}),Object(l.jsx)("div",{className:L.a.actions,children:Object(l.jsx)("button",{onClick:function(){i(!1)},className:"btn",children:"Add Quote"})})]})})]})},S=function(){var e=Object(b.useHistory)();return Object(l.jsx)(I,{onAddQuote:function(t){console.log(t),e.push("/quotes")}})},M=n(27),H=n.n(M),P=n(15),U=n.n(P),D=function(e){var t=Object(r.useRef)(),n=function(e){e.preventDefault()};return Object(l.jsxs)("form",{className:U.a.form,onSubmit:n,children:[Object(l.jsxs)("div",{className:U.a.control,onSubmit:n,children:[Object(l.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(l.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(l.jsx)("div",{className:U.a.actions,children:Object(l.jsx)("button",{className:"btn",children:"Add Comment"})})]})},T=function(){var e=Object(r.useState)(!1),t=Object(q.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)("section",{className:H.a.comments,children:[Object(l.jsx)("h2",{children:"User Comments"}),!n&&Object(l.jsx)("button",{className:"btn",onClick:function(){c(!0)},children:"Add a Comment"}),n&&Object(l.jsx)(D,{}),Object(l.jsx)("p",{children:"Comments..."})]})},B=n(28),G=n.n(B),J=function(e){return Object(l.jsxs)("figure",{className:G.a.quote,children:[Object(l.jsx)("p",{children:e.text}),Object(l.jsx)("figcaption",{children:e.author})]})},K=function(){var e=Object(s.useParams)(),t=[{id:"q1",author:"Harshit",text:"One should always be a learner!"},{id:"q2",author:"Marmat",text:"One day all hard-work will pay off!"}].find((function(t){return t.id===e.quoteId}));return t?(console.log(t),Object(l.jsxs)(r.Fragment,{children:[Object(l.jsx)(J,{text:t.text,author:t.author}),Object(l.jsx)(s.Route,{path:"/quotes/".concat(e.quoteId),exact:!0,children:Object(l.jsx)("div",{className:"centered",children:Object(l.jsx)(a.a,{className:"btn--flat",to:"/quotes/".concat(e.quoteId,"/comment"),children:"Load Comments"})})}),Object(l.jsx)(s.Route,{path:"/quotes/".concat(e.quoteId,"/comment"),children:Object(l.jsx)(T,{})})]})):Object(l.jsx)("p",{children:"No quote found!"})},E=function(){return Object(l.jsx)("div",{className:"centered",children:Object(l.jsx)("p",{children:"Page Not Found"})})};var V=function(){return Object(l.jsx)(x,{children:Object(l.jsxs)(s.Switch,{children:[Object(l.jsx)(s.Route,{path:"/",exact:!0,children:Object(l.jsx)(s.Redirect,{to:"/quotes"})}),Object(l.jsx)(s.Route,{path:"/quotes",exact:!0,children:Object(l.jsx)(N,{})}),Object(l.jsx)(s.Route,{path:"/quotes/:quoteId",children:Object(l.jsx)(K,{})}),Object(l.jsx)(s.Route,{path:"/new-quote",children:Object(l.jsx)(S,{})}),Object(l.jsx)(s.Route,{path:"*",children:Object(l.jsx)(E,{})})]})})};o.a.render(Object(l.jsx)(b.BrowserRouter,{children:Object(l.jsx)(V,{})}),document.getElementById("root"))}],[[42,1,2]]]);
//# sourceMappingURL=main.b7419b51.chunk.js.map