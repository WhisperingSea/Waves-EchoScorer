declare module 'dom-to-image' {
  const domtoimage: {
    toPng(node: HTMLElement, options?: any): Promise<string>;
    toJpeg(node: HTMLElement, options?: any): Promise<string>;
    toBlob(node: HTMLElement, options?: any): Promise<Blob>;
    toSvg(node: HTMLElement, options?: any): Promise<string>;
    toPixelData(node: HTMLElement, options?: any): Promise<Uint8Array>;
  };
  export default domtoimage;
}
