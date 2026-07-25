/**
 * Favorito (noticia, artigo opinativo, postagem de blog, etc.) interface
 * @interface IFavorito
 */

export interface IFavorito {
  /**
   * Identificador único do favorito
   */
  id: number;
  /**
   * Url da imagem que ilustra o favorito.
   */
  imagem: string;
  /**
   * Titulo (descrição curta) do favorito.
   */
  titulo: string;
  /**
   * Descrição (longa) / chamada do favorito.
   */
  descricao: string;
  /**
   * Url do favorito.
   */
  url: string;
}
