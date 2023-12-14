import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export const captureImage = (rootElementId) => {
  const input = document.getElementById(rootElementId);
  return html2canvas(input, { scale: 1 }).then((canvas) => {
    return canvas.toDataURL("image/png");
  });
};

const generatePdf = (imageData, downloadFileName) => {
  const pdf = new jsPDF("p", "mm");
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();
  const img = new Image();

  img.onload = function () {
    const imageWidth = img.width;
    const imageHeight = img.height;
    const aspectRatio = imageWidth / imageHeight;

    let targetWidth = pdfWidth;
    let targetHeight = pdfWidth / aspectRatio;

    if (targetHeight > pdfHeight) {
      targetHeight = pdfHeight;
      targetWidth = pdfHeight * aspectRatio;
    }

    const x = (pdfWidth - targetWidth) / 2;
    const y = (pdfHeight - targetHeight) / 2;

    pdf.addImage(imageData, "PNG", x, y, targetWidth, targetHeight);
    pdf.save(`${downloadFileName}.pdf`);
  };

  img.src = imageData;
};

const downloadPdf = (rootElementId, downloadFileName) => {
  captureImage(rootElementId).then((imageData) => {
    generatePdf(imageData, downloadFileName);
  });
};


  

export default downloadPdf;
