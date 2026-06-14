export async function GET() {
  const pdf = generatePdf([
    "Sumanth Reddy",
    "AI Engineer | Generative AI Engineer | LLM Applications | RAG Systems | Workflow Automation",
    "",
    "This is a placeholder resume PDF.",
    "Replace with a designed resume export when ready."
  ]);

  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Sumanth-Reddy-Resume.pdf"'
    }
  });
}

function generatePdf(lines: string[]) {
  const objects: string[] = [];
  const add = (content: string) => {
    objects.push(content);
    return objects.length;
  };

  const stream = [
    "BT",
    "/F1 18 Tf",
    "72 760 Td",
    ...lines.flatMap((line, index) => [
      index === 0 ? `(${escapePdf(line)}) Tj` : `0 -24 Td (${escapePdf(line)}) Tj`
    ]),
    "ET"
  ].join("\n");

  add("<< /Type /Catalog /Pages 2 0 R >>");
  add("<< /Type /Pages /Kids [3 0 R] /Count 1 >>");
  add(
    `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>`
  );
  add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  add(`<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`);

  const header = "%PDF-1.4\n";
  let output = header;
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(output.length);
    output += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });
  const xrefStart = output.length;
  output += `xref\n0 ${objects.length + 1}\n`;
  output += "0000000000 65535 f \n";
  for (let i = 1; i <= objects.length; i += 1) {
    output += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
  }
  output += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;
  return new TextEncoder().encode(output);
}

function escapePdf(value: string) {
  return value.replace(/[()\\]/g, "\\$&");
}
