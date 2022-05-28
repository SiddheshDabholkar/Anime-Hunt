export const removeHtmlTags = (data: string) => {
  const d = data.replace(/<[^>]*>/g, '');
  return d.replace(/[\r\n]+/gm, '');
};
