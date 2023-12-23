export interface getIdeaParams {
  pageNumber?: number;
  pageSize?: number;
  append?: ("small_image" | "medium_image")[];
  sort?: "published_at" | "-published_at";
}

export const getIdea = (param?: getIdeaParams) => {
  const params = [];
  if (param?.pageNumber != null)
    params.push(`page[number]=${param?.pageNumber}`);
  if (param?.pageSize != null) params.push(`page[size]=${param?.pageSize}`);
  if (param?.sort != null) params.push(`sort=${param?.sort}`);
  if (param?.append != null) {
    param?.append.forEach((e) => {
      params.push(`append[]=${e}`);
    });
  }

  const paramString = params.join("&");

  return `api/ideas?${paramString}`;
};
