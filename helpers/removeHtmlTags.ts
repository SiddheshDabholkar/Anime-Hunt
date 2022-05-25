export const removeHtmlTags = (data: string) => {
  return data.replace(/<[^>]*>/g, '');
};
