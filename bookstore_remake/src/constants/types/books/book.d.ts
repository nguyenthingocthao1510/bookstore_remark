import { ListPrice, RetailPrice } from "./bookDetail";

type BooksResponse = {
  kind?: string;
  totalItems?: number;
  items?: Books[];
};

type Books = {
    kind?: string;
    id?: string;
    etag?: string;
    selfLink?: string;
    volumeInfo?: VolumeInfo;
    saleInfo?: SaleInfo;
    accessInfo?: AccessInfo;
    searchInfo?: SearchInfo;
};

type VolumeInfo = {
    title?: string;
    publishedDate?: string;
    description?: string;
    readingModes: ReadingModes;
    pageCount?: number;
    printType?: string;
    averageRating?: number;
    ratingsCount?: number;
    maturityRating?: string;
    allowAnonLogging?: boolean;
    contentVersion?: string;
    imageLinks?: ImageLinks;
    language?: string;
    previewLink?: string;
    infoLink?: string;
    canonicalVolumeLink?: string;
};

type ReadingModes = {
    text?: boolean;
    image?: boolean;
};

type ImageLinks = {
    smallThumbnail?: string;
    thumbnail?: string;
};

type SaleInfo = {
    country?: string;
    saleability?: string;
    isEbook?: boolean;
    listPrice: ListPrice;
    retailPrice: RetailPrice;
    buyLink?: string;
    offers?: Offers[];
};

type Offers = {
    finskyOfferType?: number;
    listPrice?: ListPrice;
    retailPrice?: RetailPrice;
}

type AccessInfo = {
    country?: string;
    viewability?: string;
    embeddable?: boolean;
    publicDomain?: boolean;
    textToSpeechPermission?: string;
    epub: Epub;
    pdf: Pdf;
    webReaderLink?: string;
    accessViewStatus?: string;
    quoteSharingAllowed?: boolean;
};

type Epub = {
    isAvailable?: boolean;
};

type Pdf = {
    isAvailable?: boolean;
};

type SearchInfo = {
    textSnippet?: string;
};

export {
    AccessInfo,
    Books,
    BooksResponse,
    Epub,
    ImageLinks,
    Pdf,
    ReadingModes,
    SaleInfo,
    SearchInfo,
    VolumeInfo,
    Offers,
}