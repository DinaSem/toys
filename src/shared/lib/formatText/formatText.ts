import DOMPurify from 'isomorphic-dompurify';

export const formatText = (text: string) => {
  const lastCommaIndex = text.lastIndexOf(',');
  if (lastCommaIndex === -1) return text;

  const beforeComma = text.slice(0, lastCommaIndex + 1);
  const afterComma = text.slice(lastCommaIndex + 1);

  return `${DOMPurify.sanitize(beforeComma)}<span style="color: black" >${DOMPurify.sanitize(afterComma)}</span>`;
};
