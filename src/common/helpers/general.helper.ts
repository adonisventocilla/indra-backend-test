export class GeneralHelper {
  static processTextToBeObjectKey(text: string): string {
    const accentsMap: { [accented: string]: string } = {
      á: "a",
      é: "e",
      í: "i",
      ó: "o",
      ú: "u",
      Á: "A",
      É: "E",
      Í: "I",
      Ó: "O",
      Ú: "U",
      ñ: "n",
      Ñ: "N"
    }

    const key: string = text
      .trim()
      .replaceAll(" ", "_")
      .replace(/[áéíóúÁÉÍÓÚñÑ]/g, (accented) => accentsMap[accented] || accented)

    return key
  }

  static existsAndNotEmpty({ object, key }: { object: any; key: any }): boolean {
    return Object.prototype.hasOwnProperty.call(object, key) && object.key !== ""
  }
}
