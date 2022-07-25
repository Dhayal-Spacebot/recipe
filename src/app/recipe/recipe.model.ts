export class Recipe{
  public name: string;
  public description: string;
  public imagePath: string

  constructor(name: string, descri: string, image: string)
  {
    this.name = name;
    this.description = descri;
    this.imagePath = image;

  }
}
