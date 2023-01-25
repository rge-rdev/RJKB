//@ts-nocheck
import { useQuery } from "react-query";

function Test() {
  const {
    data,
    dataUpdatedAt,
    error,
    errorUpdatedAt,
    failureCount,
    isError,
    isFetched,
    isFetchedAfterMount,

    isFetching,

    isIdle,

    isLoading,

    isLoadingError,

    isPlaceholderData,

    isPreviousData,

    isRefetchError,

    isRefetching,

    isStale,

    isSuccess,

    refetch,

    remove,

    status,
  } = useQuery(queryKey, queryFn, {
    cacheTime,

    enabled,

    initialData,

    initialDataUpdatedAt,

    isDataEqual,

    keepPreviousData,

    meta,

    notifyOnChangeProps,

    notifyOnChangePropsExclusions,

    onError,

    onSettled,

    onSuccess,

    placeholderData,

    queryKeyHashFn,

    refetchInterval,

    refetchIntervalInBackground,

    refetchOnMount,

    refetchOnReconnect,

    refetchOnWindowFocus,

    retry,

    retryOnMount,

    retryDelay,

    select,

    staleTime,

    structuralSharing,

    suspense,

    useErrorBoundary,
  });

  const result = useQuery({
    queryKey,

    queryFn,

    enabled,
  });
}
