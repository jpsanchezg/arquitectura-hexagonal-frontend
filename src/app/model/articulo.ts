export class Articulo {
  id: string;
  _title: string;
  _content: string;
  _upvotes: number;
  _downvotes: number;
  constructor(id: string,title: string, content: string, upvotes: number, downvotes: number) {
    this.id = id;
    this._title = title;
    this._content = content;
    this._upvotes = upvotes;
    this._downvotes = downvotes;
  }



  /**
  * Getter $id
  * @return {string}
  */
  public get $id(): string {
    return this.id;
  }
  /**
   * Setter $_title
   * @param {string} value
   */
  public set $_title(value: string) {
    this._title = value;
  }


  /**
   * Getter $_title
   * @return {string}
   */
  public get $_title(): string {
    return this._title;
  }

  /**
 * Setter $_content
 * @param {string} value
 */
  public set $_content(value: string) {
    this._content = value;
  }

  /**
   * Getter $_content
   * @return {string}
   */
  public get $_content(): string {
    return this._content;
  }
  /**
 * Setter $_upvotes
 * @param {number} value
 */
  public set $_upvotes(value: number) {
    this._upvotes = value;
  }

  /**
   * Getter $_upvotes
   * @return {number}
   */
  public get $_upvotes(): number {
    return this._upvotes;
  }
  /**
 * Setter $_downvotes
 * @param {number} value
 */
  public set $_downvotes(value: number) {
    this._downvotes = value;
  }

  /**
   * Getter $_downvotes
   * @return {number}
   */
  public get $_downvotes(): number {
    return this._downvotes;
  }

}
