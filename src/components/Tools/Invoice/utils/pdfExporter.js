//npm install html2canvas jspdf

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const exportPDF = async (elementId, fileName = 'invoice.pdf') => {
  const input = document.getElementById(elementId);
  if (!input) {
    console.error(`Element with ID '${elementId}' not found.`);
    return;
  }

  const canvas = await html2canvas(input, { scale: 2 });
  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF('p', 'mm', 'a4');

  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  pdf.save(fileName);
};
