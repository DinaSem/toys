import DOMPurify from 'isomorphic-dompurify';

/**
 * Очищает переданный текст от определенных тегов с использованием DOMPurify.
 * Разрешенные теги для сохранения в тексте: ['i', 'em', 'p', 'span', 'div'].
 * @param {string} text Текст, который требуется очистить.
 * @returns {string} Очищенный текст без определенных тегов.
 */
export const sanitizeTextOnly = (text: string) => {
  const allowedTags = ['p', 'span', 'div'];
  const modifiedText = text
    .replace(/<\/(p|div|h1|h2|h3|h4|h5|h6)>/g, '</$1> ')
    .replace(/<br><br>/g, ' ')
    .replace(/<br>/g, ' ');
  const config = {
    ALLOWED_TAGS: allowedTags,
  };

  return DOMPurify.sanitize(modifiedText, config);
};
