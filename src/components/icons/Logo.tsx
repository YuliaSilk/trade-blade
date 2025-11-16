import React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & {
 className?: string;
 width?: number | string;
 height?: number | string;
};

export function Logo({className, width = 80, height = 34, ...props}: IconProps) {
 return (
  <svg
   xmlns="http://www.w3.org/2000/svg"
   width={width}
   height={height}
   fill="none"
   viewBox="0 0 80 34"
   className={className}
   {...props}
  >
   <path
    fill="#fff"
    d="M9.867 18.01H3.383L0 33.57h6.984c5.024 0 6.516-2.765 6.533-4.948.016-1.902-1.064-2.68-2.083-3.015l.033-.173c1.43-.313 3.163-1.48 3.183-3.88.018-2.312-1.77-3.543-4.784-3.543ZM4.603 30.395l.685-3.09h2.758c1.053 0 1.678.432 1.67 1.329-.007.929-.716 1.76-2.206 1.76H4.603Zm1.371-6.267.641-2.94H9.16c1.053 0 1.636.4 1.629 1.254-.007.886-.674 1.686-2.196 1.686H5.974ZM16.672 18.01 13.29 33.57h11.148l.74-3.37h-7.102l2.643-12.19h-4.046ZM32.303 18.01l-7.628 15.237-.066.324h3.843l1.495-3.242h4.546l.09 3.242h3.684l.066-.324-1.005-15.236h-5.025Zm-.84 9.056 2.623-5.673h.17l.146 5.673h-2.938Z"
   />
   <path
    fill="#fff"
    d="M45.986 18.01h-4.375l-3.383 15.56h5.386c6.782 0 9.005-5.056 9.04-9.379.032-4.008-2.6-6.18-6.668-6.18Zm-3.058 12.276 1.935-8.99h.97c1.873 0 2.94 1.037 2.924 3.014-.024 2.885-1.475 5.976-4.584 5.976h-1.245ZM54.9 18.01l-3.383 15.56H63.12l.685-3.176h-7.643l.674-3.069h6.43l.686-3.177h-6.42l.642-2.96h7.494l.686-3.177H54.9ZM16.106 0l-.72 3.328h4.408L17.13 15.56h4.002l2.665-12.232h4.407L28.923 0H16.106ZM35.708 0h-6.292l-3.383 15.56h3.917l1.327-6.116h.213l3.155 6.116h3.97l.067-.324-3.179-5.77c3.878-.324 5.312-2.561 5.334-5.273C40.858 1.513 38.88 0 35.707 0Zm-3.812 6.592.752-3.415h2.502c1.213 0 1.901.486 1.894 1.437-.008.994-.72 1.978-2.486 1.978h-2.662Z"
   />
   <path
    fill="#fff"
    d="M45.558 0 37.93 15.236l-.067.324h3.843l1.496-3.241h4.545l.091 3.241h3.684l.066-.324L50.583 0h-5.025Zm-.84 9.055 2.622-5.673h.17l.147 5.673h-2.939Z"
   />
   <path
    fill="#fff"
    d="M59.241 0h-4.375l-3.384 15.56h5.387c6.781 0 9.005-5.057 9.04-9.38C65.94 2.173 63.308 0 59.24 0Zm-3.059 12.275 1.936-8.99h.969c1.873 0 2.94 1.037 2.924 3.015-.023 2.885-1.475 5.975-4.583 5.975h-1.246ZM68.155 0 64.77 15.56h11.604l.686-3.177h-7.644l.674-3.068h6.43l.686-3.177h-6.42l.642-2.961h7.495L79.609 0H68.155Z"
   />
  </svg>
 );
}

// Named export = MainIcon (the more complex SVG with filters)
export function MainIcon({className, width = 105, height = 96, ...props}: IconProps) {
 return (
  <svg
   xmlns="http://www.w3.org/2000/svg"
   width={width}
   height={height}
   fill="none"
   viewBox="20 20 65 61"
   className={className}
   {...props}
  >
   <path
    fill="#5E47FF"
    d="M45.339 63.743 20 20l12.586 10.1 16.088 27.866-3.335 5.777ZM69.124 37.26 43.911 81.075l2.454-15.95L62.453 37.26h6.671Zm-34.681-7.08 50.552-.073-15.04 5.85H37.779l-3.336-5.778Z"
   />
   <path
    fill="#5E47FF"
    d="M45.339 63.743 20 20l12.586 10.1 16.088 27.866-3.335 5.777ZM69.124 37.26 43.911 81.075l2.454-15.95L62.453 37.26h6.671Z"
   />
   <g>
    <path
     fill="#5E47FF"
     d="m34.443 30.18 50.552-.073-15.04 5.85H37.779l-3.336-5.778Z"
    />
   </g>
   <path
    fill="#57E1FF"
    d="m49.583 54.664 9.53-16.507h-19.06l9.53 16.507Z"
   />
   <g>
    <path
     fill="#5E47FF"
     d="M45.339 63.743 20 20l12.586 10.1 16.088 27.866-3.335 5.777Z"
    />
   </g>
   <g>
    <path
     fill="#5E47FF"
     d="M69.124 37.26 43.911 81.075l2.454-15.95L62.453 37.26h6.671Z"
    />
   </g>
   <path
    fill="#5E47FF"
    d="m34.443 30.18 50.552-.073-15.04 5.85H37.779l-3.336-5.778Z"
   />
   <defs>
    <filter
     id="a"
     width="90.552"
     height="45.85"
     x="14.443"
     y="10.107"
     colorInterpolationFilters="sRGB"
     filterUnits="userSpaceOnUse"
    >
     <feFlood
      floodOpacity="0"
      result="BackgroundImageFix"
     />
     <feBlend
      in="SourceGraphic"
      in2="BackgroundImageFix"
      result="shape"
     />
     <feGaussianBlur
      result="effect1_foregroundBlur_554_633"
      stdDeviation="10"
     />
    </filter>
    <filter
     id="b"
     width="68.674"
     height="83.743"
     x="0"
     y="0"
     colorInterpolationFilters="sRGB"
     filterUnits="userSpaceOnUse"
    >
     <feFlood
      floodOpacity="0"
      result="BackgroundImageFix"
     />
     <feBlend
      in="SourceGraphic"
      in2="BackgroundImageFix"
      result="shape"
     />
     <feGaussianBlur
      result="effect1_foregroundBlur_554_633"
      stdDeviation="10"
     />
    </filter>
    <filter
     id="c"
     width="65.213"
     height="83.815"
     x="23.911"
     y="17.26"
     colorInterpolationFilters="sRGB"
     filterUnits="userSpaceOnUse"
    >
     <feFlood
      floodOpacity="0"
      result="BackgroundImageFix"
     />
     <feBlend
      in="SourceGraphic"
      in2="BackgroundImageFix"
      result="shape"
     />
     <feGaussianBlur
      result="effect1_foregroundBlur_554_633"
      stdDeviation="10"
     />
    </filter>
   </defs>
  </svg>
 );
}
