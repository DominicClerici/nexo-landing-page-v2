import { ImageResponse } from "next/og"
export const size = {
  width: 32,
  height: 32,
}
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <svg
        height={32}
        width={32}
        viewBox="0 0 271 271"
        stroke="#818CF8"
        fill="transparent"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.4832 47.7597L85.7114 11.4931L149.94 47.7597V119.911L85.7114 156.178L21.4832 119.911V47.7597Z"
          strokeWidth="25"
        />
        <path
          d="M112.739 180.389L159.681 153.883L206.624 180.389V233.019L159.681 259.525L112.739 233.019V180.389Z"
          strokeWidth="25"
        />
        <path
          d="M186.896 88.509L220.57 69.3028L254.244 88.509V126.711L220.57 145.917L186.896 126.711V88.509Z"
          strokeWidth="25"
        />
      </svg>
    ),
    {
      ...size,
    },
  )
}
