export interface Article {
  id: string
  title: string
  subtitle: string
  img: string
  views: number
  createdAt: string
  type: ArticleType[]
  blocks: ArticleBlock[]
}

export type ArticleBlock = ArticleBlockText | ArticleBlockImage | ArticleBlockCode

export interface ArticleBlockBase {
  id: string
  type: ArticleBlockType
}

export interface ArticleBlockText extends ArticleBlockBase {
  type: ArticleBlockType.TEXT
  title?: string
  paragraphs: string[]
}
export interface ArticleBlockImage extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE
  title: string
  src: string
}
export interface ArticleBlockCode extends ArticleBlockBase {
  type: ArticleBlockType.CODE
  code: string
}

export enum ArticleBlockType {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  CODE = 'CODE'
}

export enum ArticleType {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMY = 'ECONOMY'
}
