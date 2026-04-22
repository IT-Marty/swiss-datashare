export type EmailBranding = {
  appName: string;
  appUrl: string;
  logoUrl: string;
  footerBrandText: string;
  footerBrandUrl: string;
};

type DetailRow = {
  label: string;
  value: string;
};

type EmailTemplateInput = {
  preheader: string;
  title: string;
  introLines: string[];
  actionLabel: string;
  actionUrl: string;
  detailRows?: DetailRow[];
  securityNotice: string;
  branding: EmailBranding;
};

type RenderedEmail = {
  html: string;
  text: string;
};

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function renderEmailTemplate(input: EmailTemplateInput): RenderedEmail {
  const introHtml = input.introLines
    .map(
      (line) =>
        `<p style="margin:0 0 14px;color:#334155;font-size:15px;line-height:1.6;">${escapeHtml(line)}</p>`,
    )
    .join("");

  const detailRows = input.detailRows ?? [];
  const detailsHtml = detailRows.length
    ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:20px 0 0;border-collapse:collapse;">
${detailRows
  .map(
    (row) =>
      `<tr>
  <td style="padding:10px 14px;border:1px solid #e2e8f0;background:#f8fafc;color:#0f172a;font-size:13px;font-weight:600;width:38%;">${escapeHtml(row.label)}</td>
  <td style="padding:10px 14px;border:1px solid #e2e8f0;background:#ffffff;color:#334155;font-size:13px;">${escapeHtml(row.value)}</td>
</tr>`,
  )
  .join("")}
</table>`
    : "";

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(input.title)}</title>
  </head>
  <body style="margin:0;padding:0;background:#f1f5f9;font-family:Inter,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
    <span style="display:none;visibility:hidden;opacity:0;height:0;width:0;overflow:hidden;">${escapeHtml(input.preheader)}</span>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="640" cellpadding="0" cellspacing="0" style="width:100%;max-width:640px;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e2e8f0;">
            <tr>
              <td style="padding:24px 28px;background:linear-gradient(120deg,#0f172a 0%,#1d4ed8 100%);">
                <img src="${escapeHtml(input.branding.logoUrl)}" alt="${escapeHtml(input.branding.appName)}" style="max-height:34px;display:block;" />
              </td>
            </tr>
            <tr>
              <td style="padding:30px 28px 24px;">
                <h1 style="margin:0 0 16px;color:#0f172a;font-size:25px;line-height:1.35;">${escapeHtml(input.title)}</h1>
                ${introHtml}
                <table role="presentation" cellpadding="0" cellspacing="0" style="margin:22px 0 0;">
                  <tr>
                    <td style="border-radius:10px;background:#1d4ed8;">
                      <a href="${escapeHtml(input.actionUrl)}" style="display:inline-block;padding:12px 20px;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;">${escapeHtml(input.actionLabel)}</a>
                    </td>
                  </tr>
                </table>
                ${detailsHtml}
              </td>
            </tr>
            <tr>
              <td style="padding:18px 28px;border-top:1px solid #e2e8f0;background:#f8fafc;">
                <p style="margin:0 0 8px;color:#475569;font-size:12px;line-height:1.5;">${escapeHtml(input.securityNotice)}</p>
                <p style="margin:0;color:#64748b;font-size:12px;line-height:1.5;">
                  ${escapeHtml(input.branding.footerBrandText)}
                  <a href="${escapeHtml(input.branding.footerBrandUrl)}" style="color:#1d4ed8;text-decoration:none;">${escapeHtml(input.branding.footerBrandUrl)}</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const detailText = detailRows.map((row) => `${row.label}: ${row.value}`).join("\n");
  const text = [
    input.title,
    "",
    ...input.introLines,
    "",
    `${input.actionLabel}: ${input.actionUrl}`,
    detailText ? `\n${detailText}` : "",
    "",
    input.securityNotice,
    `${input.branding.footerBrandText} ${input.branding.footerBrandUrl}`,
  ]
    .filter(Boolean)
    .join("\n");

  return { html, text };
}
