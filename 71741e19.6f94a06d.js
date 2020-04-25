(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"Highlight",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(6),c=(n(0),n(122)),o={id:"payments",title:"Payments"},s={id:"payments",title:"Payments",description:"You can find a list of request body parameters and possible outcomes [here](https://api-reference.checkout.com/#tag/Payments).",source:"@site/docs/payments.md",permalink:"/checkout-sdk-node/docs/payments",sidebar:"someSidebar",previous:{title:"Error Handling",permalink:"/checkout-sdk-node/docs/errors"},next:{title:"Sources",permalink:"/checkout-sdk-node/docs/sources"}},i=[{value:'Request a card payment with a <Highlight color="#25c2a0">card token</Highlight>',id:"request-a-card-payment-with-a-card-token",children:[]},{value:'Request a card payment with a <Highlight color="#25c2a0">full card details</Highlight>',id:"request-a-card-payment-with-a-full-card-details",children:[]},{value:'Request a card payment with a <Highlight color="#25c2a0">an existing card</Highlight>',id:"request-a-card-payment-with-a-an-existing-card",children:[]},{value:'Request a card payment with a <Highlight color="#25c2a0">an existing customer</Highlight>',id:"request-a-card-payment-with-a-an-existing-customer",children:[]},{value:'Request a payment for a <Highlight color="#25c2a0">local payment method</Highlight>',id:"request-a-payment-for-a-local-payment-method",children:[]},{value:'Request a <Highlight color="#25c2a0">3D Secure payment</Highlight>',id:"request-a-3d-secure-payment",children:[]},{value:'Handle card <Highlight color="#25c2a0">payment responses</Highlight>',id:"handle-card-payment-responses",children:[]}],l=function(e){var t=e.children,n=e.color;return Object(c.b)("span",{style:{color:n,padding:"0.2rem"}},t)},p={rightToc:i,Highlight:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"You can find a list of request body parameters and possible outcomes ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://api-reference.checkout.com/#tag/Payments"}),"here"),"."),Object(c.b)("h2",{id:"request-a-card-payment-with-a-card-token"},"Request a card payment with a ",Object(c.b)(l,{color:"#25c2a0",mdxType:"Highlight"},"card token")),Object(c.b)("p",null,"The card token is generated by on of the Front End integration options like ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.checkout.com/docs/frames"}),"Checkout.Frames"),"or one of the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.checkout.com/docs/sdks#section-mobile-sdk-libraries"}),"Mobile SDKs"),". Keep in mind that this token expires in 15 minutes, and it's a single time use token."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const payment = await cko.payments.request({\n    source: {\n        // type:\"token\" is inferred\n        token: 'tok_bzi43qc6jeee5mmnfo4gnsnera'\n    },\n    customer: {\n        email: 'user@email.com',\n        name: 'James Bond'\n    },\n    currency: 'EUR',\n    amount: 1000, // cents\n    reference: 'ORDER123'\n});\n")),Object(c.b)("h2",{id:"request-a-card-payment-with-a-full-card-details"},"Request a card payment with a ",Object(c.b)(l,{color:"#25c2a0",mdxType:"Highlight"},"full card details")),Object(c.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"You need to have a high level of PCI Compliance (SAQ-D) to be able to send requests with full card details. Note that unless this payment option is enabled on your account by Checkout.com, the ",Object(c.b)(l,{color:"#5A522C",mdxType:"Highlight"},"request will fail"),". Contact you account manager to request access for this payment interaction."))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const payment = await cko.payments.request({\n    source: {\n        // type:\"card\" is inferred\n        number: '4242424242424242',\n        expiry_month: 6,\n        expiry_year: 2029,\n        cvv: '100'\n    },\n    customer: {\n        email: 'user@email.com',\n        name: 'James Bond'\n    },\n    currency: 'EUR',\n    amount: 1000, // cents\n    reference: 'ORDER123'\n});\n")),Object(c.b)("h2",{id:"request-a-card-payment-with-a-an-existing-card"},"Request a card payment with a ",Object(c.b)(l,{color:"#25c2a0",mdxType:"Highlight"},"an existing card")),Object(c.b)("p",null,"After you perform at least one successful payment for a customer, Checkout.com will return a ",Object(c.b)(l,{color:"#02b48f",mdxType:"Highlight"},"source.id"),". This id does not expire, so it can be used perform payments without needing the customer to enter the card details again."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const payment = await cko.payments.request({\n    source: {\n        // type:\"id\" is inferred\n        id: 'src_vg3tm54ndfbefotjlmgrrvbxli'\n    },\n    customer: {\n        email: 'user@email.com',\n        name: 'James Bond'\n    },\n    currency: 'EUR',\n    amount: 1000, // cents\n    reference: 'ORDER123'\n});\n")),Object(c.b)("h2",{id:"request-a-card-payment-with-a-an-existing-customer"},"Request a card payment with a ",Object(c.b)(l,{color:"#25c2a0",mdxType:"Highlight"},"an existing customer")),Object(c.b)("p",null,"After you perform at least one successful payment for a customer, Checkout.com will return a ",Object(c.b)(l,{color:"#02b48f",mdxType:"Highlight"},"customer.id"),". This id can be used perform payments without needing the customer to enter the card details again."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const payment = await cko.payments.request({\n    source: {\n        // type:\"customer\" is inferred\n        id: 'cus_6artgoevd77u7ojah2wled32sa'\n    },\n    currency: 'EUR',\n    amount: 1000, // cents\n    reference: 'ORDER123'\n});\n")),Object(c.b)("h2",{id:"request-a-payment-for-a-local-payment-method"},"Request a payment for a ",Object(c.b)(l,{color:"#25c2a0",mdxType:"Highlight"},"local payment method")),Object(c.b)("p",null,"The ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://api-reference.checkout.com/"}),"API Reference")," contains a list of local payment options that you can use, as well as the other information required in the payment source (if required)"),Object(c.b)("p",null,"This is an example of a payment request for ",Object(c.b)(l,{color:"#25c2a0",mdxType:"Highlight"},"Sofort"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const response = await cko.payments.request({\n    source: {\n        type: 'sofort'\n    },\n    currency: 'EUR', // Sofort only works with EUR\n    amount: 1000\n});\n")),Object(c.b)("p",null,"As you can see from the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://api-reference.checkout.com/"}),"API Reference")," this request is meant to return a redirection URL, so you can let the customer complete the transaction on the local payment's website. Normally a successful response would look like this:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "id": "pay_y3gars76cvrudairph27ekzpvm",\n    "status": "Pending",\n    "customer": {\n        "id": "cus_zbsnutwm2hoevnxnyj6o26sibe"\n    },\n    "_links": {\n        "self": {\n            "href": "https://api.sandbox.checkout.com/payments/pay_y3gars76cvrudairph27ekzpvm"\n        },\n        "redirect": {\n            "href": "https://sandbox.checkout.com/LP.Core/api/payment/191952"\n        }\n    }\n}\n')),Object(c.b)("p",null,"To make it easier to access the redirection URL, instead of accessing it as ",Object(c.b)(l,{color:"#25c2a0",mdxType:"Highlight"},"response.","_","links.redirect.href")," the response body is appended with a parameter called ",Object(c.b)(l,{color:"#25c2a0",mdxType:"Highlight"},"redirectLink")," by the SDK, so the same URL will be accessible as ",Object(c.b)(l,{color:"#25c2a0",mdxType:"Highlight"},"response.redirectLink")),Object(c.b)("h2",{id:"request-a-3d-secure-payment"},"Request a ",Object(c.b)(l,{color:"#25c2a0",mdxType:"Highlight"},"3D Secure payment")),Object(c.b)("p",null,"You have the ability to request 3DS in a payment request. The request body is similar to normal card payments, but with some additional parameters. ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.checkout.com/docs/3d-secure-payments"}),"Read more about 3DS")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const payment = await cko.payments.request({\n    source: {\n        // type:\"token\" is inferred\n        token: 'tok_bzi43qc6jeee5mmnfo4gnsnera'\n    },\n    '3ds': {\n        enabled: true\n    },\n    customer: {\n        email: 'user@email.com',\n        name: 'James Bond'\n    },\n    currency: 'EUR',\n    amount: 1000, // cents\n    reference: 'ORDER123'\n});\n")),Object(c.b)("p",null,"Similar to local payment options, 3D Secure payments will return a redirection URL. Here is an example of a 3DS response:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "id": "pay_krq2q22lblsevfkay2gfyvatta",\n    "status": "Pending",\n    "customer": {\n        "id": "cus_c5c7d5f4avnehbhhgmnkdadkdu"\n    },\n    "3ds": {\n        "downgraded": false,\n        "enrolled": "Y"\n    },\n    "_links": {\n        "self": {\n            "href": "https://api.sandbox.checkout.com/payments/pay_krq2q22lblsevfkay2gfyvatta"\n        },\n        "redirect": {\n            "href": "https://3ds2-sandbox.ckotech.co/interceptor/3ds_dr6us33uu57utjwh7yl5szcgqy"\n        }\n    }\n}\n')),Object(c.b)("p",null,"To make it easier to access the redirection URL, instead of accessing it as ",Object(c.b)(l,{color:"#25c2a0",mdxType:"Highlight"},"response.","_","links.redirect.href")," the response body is appended with a parameter called ",Object(c.b)(l,{color:"#25c2a0",mdxType:"Highlight"},"redirectLink")," by the SDK, so the same URL will be accessible as ",Object(c.b)(l,{color:"#25c2a0",mdxType:"Highlight"},"response.redirectLink")),Object(c.b)("h2",{id:"handle-card-payment-responses"},"Handle card ",Object(c.b)(l,{color:"#25c2a0",mdxType:"Highlight"},"payment responses")),Object(c.b)("p",null,"Payment requests are influenced by risk rules so you can have situations where a card payment is requested without 3D Secure, but upgraded by a risk rule, resulting in a 3D Secure response. You are free to handle the response in any way you want, but bellow you have a good example for a starting point:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"try {\n    const payment = await cko.payments.request({...});\n\n    if (payment.status === 'Pending') {\n      // The payment is 3DS. Redirect the customer to payment.redirectLink\n    } else if (approved == true && risk.flagged == false) {\n      // The payment was successful and not flagged by any risk rule\n    } else if (approved == true && risk.flagged == true) {\n      // The payment was successful but it was flagged by a risk rule; this means you have to manually decide if you want to capture it or void it\n    } else if (approved == false) {\n      // the payment was declined\n    }\n\n} catch (error) {\n    console.log(error.name);\n}\n")))}u.isMDXComponent=!0},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,b=u["".concat(o,".").concat(m)]||u[m]||d[m]||c;return n?r.a.createElement(b,s({ref:t},l,{components:n})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<c;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);