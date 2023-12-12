import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const downloadPdf = (rootElementId, downloadFileName) => {
    const input = document.getElementById(rootElementId);
    const width = input.offsetWidth;
    const height = input.offsetHeight;
  
    html2canvas(input, { scale: 1 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", [width, height]);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const x = (pdfWidth - width) / 2;
      const y = (pdfHeight - height) / 2;
      pdf.addImage(imgData, "PNG", x, y, width, height);
      pdf.save(`${downloadFileName}.pdf`);
    });
  };
  

export default downloadPdf;
