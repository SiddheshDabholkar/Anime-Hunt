export const removeHtmlTags = (data: string, slice: number) => {
  const d = data.replace(/<[^>]*>/g, '');
  const rm = d.replace(/[\r\n]+/gm, '');
  return rm.slice(0, slice) + '...';
};
