import useSWR from "swr";
import { BooksResponse } from "src/constants/types/books/book";
import fetcher from "src/utils/fetcher";
import { BookDetail } from "src/constants/types/books/bookDetail";

export const useBook = (
  param: string = "book",
  startIndex: number = 0,
  maxResults: number = 20,
  filter: string = 'paid-ebooks'
) => {
  const shouldFetch = !!param;
  const query = `/volumes?q=${param}&startIndex=${startIndex}&maxResults=${maxResults}&filter=${filter}`;

  const { data, error, isLoading, mutate } = useSWR<BooksResponse>(
    shouldFetch ? query : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
    mutate
  };
};

export const useBookDetail = (
  param?: string,
) => {
  const shouldFetch = !!param;
  const {data, error, isLoading, mutate} = useSWR<BookDetail>(
    shouldFetch ? `/volumes/${param}` : null,
    fetcher
  );
  return {
    data, 
    error,
    isLoading,
    mutate
  }
}
