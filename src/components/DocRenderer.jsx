import React, { useState, useEffect } from 'react';
import mammoth from 'mammoth';

function DocxRenderer({ docxFilePath }) {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    mammoth.convertToHtml({ path: docxFilePath })
      .then(result => {
        const html = result.value;
        setHtmlContent(html);
      })
      .catch(error => {
        console.error('Error converting DOCX to HTML:', error);
      });
  }, [docxFilePath]);

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

export default DocxRenderer;
