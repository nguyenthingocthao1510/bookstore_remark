type BookDetail = {
    kind?: string;
    id?: string;
    etag?: string;
    selfLink?: string;
    volumeInfo?: VolumeInfo;
    saleInfo?: SaleInfo;
    accessInfo?: AccessInfo;
};

type VolumeInfo = {
    title?: string;
    authors?: string[];
    publisher?: string;
    publishedDate?: string;
    description?: string;
    industryIdentifiers?: IndustryIdentifier[];
    pageCount?: number;
    dimensions?: Dimensions;
    printType?: string;
    mainCategory?: string;
    categories?: string[];
    averageRating?: number;
    ratingsCount?: number;
    contentVersion?: string;
    imageLinks?: ImageLinks;
    language?: string;
    infoLink?: string;
    canonicalVolumeLink?: string;
};

type IndustryIdentifier = {
    type?: string;
    identifier?: string;
};

type Dimensions = {
    height?: string;
    width?: string;
    thickness?: string;
};

type ImageLinks = {
    smallThumbnail?: string;
    thumbnail?: string;
    small?: string;
    medium?: string;
    large?: string;
    extraLarge?: string;
};

type SaleInfo = {
    country?: string;
    saleability?: string;
    isEbook?: boolean;
    listPrice?: ListPrice;
    retailPrice?: RetailPrice;
    buyLink?: string;
};

type ListPrice = {
    amount?: number;
    currencyCode?: string;
};

type RetailPrice = {
    amount?: number;
    currencyCode?: string;
};

type AccessInfo = {
    country?: string;
    viewability?: string;
    embeddable?: boolean;
    publicDomain?: boolean;
    textToSpeechPermission?: string;
    epub?: Epub;
    pdf?: Pdf;
    accessViewStatus?: string;
};

type Epub = {
    isAvailable?: boolean;
    acsTokenLink?: string;
};

type Pdf = {
    isAvailable?: boolean;
};

export { 
    BookDetail,
    AccessInfo,
    Dimensions,
    Epub,
    ImageLinks,
    IndustryIdentifier,
    ListPrice,
    Pdf,
    RetailPrice,
    SaleInfo,
    VolumeInfo,
 };