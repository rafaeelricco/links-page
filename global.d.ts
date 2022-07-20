interface StaticImageData {
  src: string
  height: number
  width: number
  placeholder: string
  alt: string
}

declare module '*.png' {
  const content: StaticImageData

  export default content
}

declare module '*.svg' {
  const content: any

  export default content
}
