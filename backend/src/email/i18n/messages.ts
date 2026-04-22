import {
  normalizeEmailLocale,
  SUPPORTED_EMAIL_LOCALES,
  SupportedEmailLocale,
} from "./locales";

type MailSection = {
  subject: string;
  preheader: string;
  title: string;
  intro: string;
  actionLabel: string;
};

export type EmailCopy = {
  labels: {
    sender: string;
    senderEmail: string;
    availability: string;
    message: string;
    accountEmail: string;
    temporaryPassword: string;
  };
  common: {
    someone: string;
    noEmail: string;
    noDescription: string;
    noNote: string;
    neverExpires: string;
    securityNotice: string;
    footerPrefix: string;
  };
  shareRecipients: MailSection & {
    intro: string;
    availabilityLine: string;
    messageLine: string;
  };
  reverseShare: MailSection & {
    messageLine: string;
  };
  resetPassword: MailSection & {
    intro: string;
  };
  invite: MailSection & {
    intro: string;
    credentialsLine: string;
  };
  testMail: MailSection & {
    intro: string;
  };
};

const emailMessages: Record<SupportedEmailLocale, EmailCopy> = {
  "en-US": {
    labels: {
      sender: "Sender",
      senderEmail: "Sender email",
      availability: "Availability",
      message: "Message",
      accountEmail: "Account email",
      temporaryPassword: "Temporary password",
    },
    common: {
      someone: "Someone",
      noEmail: "Not provided",
      noDescription: "No message provided.",
      noNote: "No note provided.",
      neverExpires: "Never",
      securityNotice:
        "This message was sent automatically by {appName}. If you did not expect it, you can safely ignore it.",
      footerPrefix: "Powered by",
    },
    shareRecipients: {
      subject: "New files shared with you via {appName}",
      preheader: "Open your secure link to view and download shared files.",
      title: "Files were shared with you",
      intro: "{creator} ({creatorEmail}) shared files with you.",
      actionLabel: "Open shared files",
      availabilityLine: "This link is available until {expires}.",
      messageLine: "Note from sender: {description}",
    },
    reverseShare: {
      subject: "A data request upload was completed in {appName}",
      preheader: "A recipient finished the upload for your data request.",
      title: "Your data request has new files",
      intro: "A recipient completed your data request and uploaded files for you.",
      actionLabel: "Review uploaded files",
      messageLine: "Sender note: {note}",
    },
    resetPassword: {
      subject: "Reset your {appName} password",
      preheader: "Use the secure link to reset your password.",
      title: "Password reset requested",
      intro: "Use the button below to reset your password. The reset link expires in one hour.",
      actionLabel: "Reset password",
    },
    invite: {
      subject: "You were invited to {appName}",
      preheader: "Sign in with your temporary credentials to get started.",
      title: "You are invited",
      intro: "An administrator invited you to {appName}. Use the temporary credentials below and sign in.",
      actionLabel: "Sign in now",
      credentialsLine: "Sign in with email {email} and temporary password {password}.",
    },
    testMail: {
      subject: "{appName} email configuration test",
      preheader: "Your SMTP setup is working.",
      title: "Email setup successful",
      intro: "This is a test email from {appName}. Your SMTP configuration is working correctly.",
      actionLabel: "Open application",
    },
  },
  "de-DE": {
    labels: {
      sender: "Absender",
      senderEmail: "Absender-E-Mail",
      availability: "Verfugbarkeit",
      message: "Nachricht",
      accountEmail: "Konto-E-Mail",
      temporaryPassword: "Temporeres Passwort",
    },
    common: {
      someone: "Jemand",
      noEmail: "Nicht angegeben",
      noDescription: "Keine Nachricht angegeben.",
      noNote: "Keine Notiz angegeben.",
      neverExpires: "Niemals",
      securityNotice:
        "Diese Nachricht wurde automatisch von {appName} gesendet. Wenn Sie sie nicht erwartet haben, konnen Sie sie ignorieren.",
      footerPrefix: "Bereitgestellt von",
    },
    shareRecipients: {
      subject: "Neue Dateien wurden mit Ihnen uber {appName} geteilt",
      preheader: "Offnen Sie Ihren sicheren Link, um die Dateien anzusehen und herunterzuladen.",
      title: "Dateien wurden mit Ihnen geteilt",
      intro: "{creator} ({creatorEmail}) hat Dateien mit Ihnen geteilt.",
      actionLabel: "Geteilte Dateien offnen",
      availabilityLine: "Dieser Link ist bis {expires} verfugbar.",
      messageLine: "Nachricht vom Absender: {description}",
    },
    reverseShare: {
      subject: "Ein Datenaustausch-Upload wurde in {appName} abgeschlossen",
      preheader: "Ein Empfanger hat den Upload fur Ihre Datenanfrage abgeschlossen.",
      title: "Neue Dateien fur Ihre Datenanfrage",
      intro: "Ein Empfanger hat Ihre Datenanfrage abgeschlossen und Dateien hochgeladen.",
      actionLabel: "Hochgeladene Dateien ansehen",
      messageLine: "Notiz des Absenders: {note}",
    },
    resetPassword: {
      subject: "{appName} Passwort zurucksetzen",
      preheader: "Verwenden Sie den sicheren Link, um Ihr Passwort zuruckzusetzen.",
      title: "Passwort zurucksetzen angefordert",
      intro: "Verwenden Sie die Schaltflache unten, um Ihr Passwort zuruckzusetzen. Der Link ist eine Stunde gultig.",
      actionLabel: "Passwort zurucksetzen",
    },
    invite: {
      subject: "Sie wurden zu {appName} eingeladen",
      preheader: "Melden Sie sich mit Ihren temporaren Zugangsdaten an.",
      title: "Sie wurden eingeladen",
      intro: "Ein Administrator hat Sie zu {appName} eingeladen. Verwenden Sie die Zugangsdaten unten und melden Sie sich an.",
      actionLabel: "Jetzt anmelden",
      credentialsLine:
        "Melden Sie sich mit der E-Mail {email} und dem temporaren Passwort {password} an.",
    },
    testMail: {
      subject: "{appName} E-Mail-Konfigurationstest",
      preheader: "Ihre SMTP-Konfiguration funktioniert.",
      title: "E-Mail-Einrichtung erfolgreich",
      intro: "Dies ist eine Test-E-Mail von {appName}. Ihre SMTP-Konfiguration funktioniert korrekt.",
      actionLabel: "Anwendung offnen",
    },
  },
  "fr-FR": {
    labels: {
      sender: "Expediteur",
      senderEmail: "E-mail expediteur",
      availability: "Disponibilite",
      message: "Message",
      accountEmail: "E-mail du compte",
      temporaryPassword: "Mot de passe temporaire",
    },
    common: {
      someone: "Quelqu'un",
      noEmail: "Non renseigne",
      noDescription: "Aucun message fourni.",
      noNote: "Aucune note fournie.",
      neverExpires: "Jamais",
      securityNotice:
        "Ce message a ete envoye automatiquement par {appName}. Si vous ne l'attendiez pas, vous pouvez l'ignorer.",
      footerPrefix: "Propulse par",
    },
    shareRecipients: {
      subject: "De nouveaux fichiers ont ete partages avec vous via {appName}",
      preheader: "Ouvrez votre lien securise pour consulter et telecharger les fichiers.",
      title: "Des fichiers ont ete partages avec vous",
      intro: "{creator} ({creatorEmail}) a partage des fichiers avec vous.",
      actionLabel: "Ouvrir les fichiers",
      availabilityLine: "Ce lien est disponible jusqu'au {expires}.",
      messageLine: "Message de l'expediteur: {description}",
    },
    reverseShare: {
      subject: "Un televersement de demande de donnees est termine dans {appName}",
      preheader: "Un destinataire a termine l'envoi pour votre demande de donnees.",
      title: "Votre demande de donnees a de nouveaux fichiers",
      intro: "Un destinataire a complete votre demande de donnees et a televerse des fichiers.",
      actionLabel: "Consulter les fichiers",
      messageLine: "Note de l'expediteur: {note}",
    },
    resetPassword: {
      subject: "Reinitialisez votre mot de passe {appName}",
      preheader: "Utilisez le lien securise pour reinitialiser votre mot de passe.",
      title: "Demande de reinitialisation du mot de passe",
      intro: "Utilisez le bouton ci-dessous pour reinitialiser votre mot de passe. Le lien expire dans une heure.",
      actionLabel: "Reinitialiser le mot de passe",
    },
    invite: {
      subject: "Vous avez ete invite a rejoindre {appName}",
      preheader: "Connectez-vous avec vos identifiants temporaires pour commencer.",
      title: "Vous etes invite",
      intro: "Un administrateur vous a invite a rejoindre {appName}. Utilisez les identifiants temporaires ci-dessous.",
      actionLabel: "Se connecter",
      credentialsLine:
        "Connectez-vous avec l'e-mail {email} et le mot de passe temporaire {password}.",
    },
    testMail: {
      subject: "Test de configuration e-mail {appName}",
      preheader: "Votre configuration SMTP fonctionne.",
      title: "Configuration e-mail reussie",
      intro: "Ceci est un e-mail de test envoye par {appName}. Votre configuration SMTP fonctionne correctement.",
      actionLabel: "Ouvrir l'application",
    },
  },
  "es-ES": {
    labels: {
      sender: "Remitente",
      senderEmail: "Correo del remitente",
      availability: "Disponibilidad",
      message: "Mensaje",
      accountEmail: "Correo de la cuenta",
      temporaryPassword: "Contrasena temporal",
    },
    common: {
      someone: "Alguien",
      noEmail: "No disponible",
      noDescription: "No se proporciono mensaje.",
      noNote: "No se proporciono nota.",
      neverExpires: "Nunca",
      securityNotice:
        "Este mensaje fue enviado automaticamente por {appName}. Si no lo esperaba, puede ignorarlo.",
      footerPrefix: "Desarrollado por",
    },
    shareRecipients: {
      subject: "Se compartieron nuevos archivos contigo en {appName}",
      preheader: "Abre tu enlace seguro para ver y descargar los archivos compartidos.",
      title: "Se compartieron archivos contigo",
      intro: "{creator} ({creatorEmail}) compartio archivos contigo.",
      actionLabel: "Abrir archivos compartidos",
      availabilityLine: "Este enlace estara disponible hasta {expires}.",
      messageLine: "Mensaje del remitente: {description}",
    },
    reverseShare: {
      subject: "Se completo una carga de solicitud de datos en {appName}",
      preheader: "Un destinatario completo la carga para tu solicitud de datos.",
      title: "Tu solicitud de datos tiene archivos nuevos",
      intro: "Un destinatario completo tu solicitud de datos y subio archivos para ti.",
      actionLabel: "Revisar archivos cargados",
      messageLine: "Nota del remitente: {note}",
    },
    resetPassword: {
      subject: "Restablece tu contrasena de {appName}",
      preheader: "Usa el enlace seguro para restablecer tu contrasena.",
      title: "Se solicito restablecer la contrasena",
      intro: "Usa el boton de abajo para restablecer tu contrasena. El enlace expira en una hora.",
      actionLabel: "Restablecer contrasena",
    },
    invite: {
      subject: "Te invitaron a {appName}",
      preheader: "Inicia sesion con tus credenciales temporales para empezar.",
      title: "Has sido invitado",
      intro: "Un administrador te invito a {appName}. Usa las credenciales temporales de abajo para iniciar sesion.",
      actionLabel: "Iniciar sesion",
      credentialsLine:
        "Inicia sesion con el correo {email} y la contrasena temporal {password}.",
    },
    testMail: {
      subject: "Prueba de configuracion de correo de {appName}",
      preheader: "Tu configuracion SMTP funciona correctamente.",
      title: "Configuracion de correo correcta",
      intro: "Este es un correo de prueba de {appName}. Tu configuracion SMTP funciona correctamente.",
      actionLabel: "Abrir aplicacion",
    },
  },
  "it-IT": {
    labels: {
      sender: "Mittente",
      senderEmail: "Email mittente",
      availability: "Disponibilita",
      message: "Messaggio",
      accountEmail: "Email account",
      temporaryPassword: "Password temporanea",
    },
    common: {
      someone: "Qualcuno",
      noEmail: "Non disponibile",
      noDescription: "Nessun messaggio fornito.",
      noNote: "Nessuna nota fornita.",
      neverExpires: "Mai",
      securityNotice:
        "Questo messaggio e stato inviato automaticamente da {appName}. Se non lo aspettavi, puoi ignorarlo.",
      footerPrefix: "Powered by",
    },
    shareRecipients: {
      subject: "Nuovi file condivisi con te tramite {appName}",
      preheader: "Apri il tuo link sicuro per visualizzare e scaricare i file.",
      title: "Sono stati condivisi file con te",
      intro: "{creator} ({creatorEmail}) ha condiviso dei file con te.",
      actionLabel: "Apri file condivisi",
      availabilityLine: "Questo link e disponibile fino a {expires}.",
      messageLine: "Messaggio del mittente: {description}",
    },
    reverseShare: {
      subject: "Un caricamento per richiesta dati e stato completato in {appName}",
      preheader: "Un destinatario ha completato il caricamento per la tua richiesta dati.",
      title: "La tua richiesta dati ha nuovi file",
      intro: "Un destinatario ha completato la tua richiesta dati e ha caricato file per te.",
      actionLabel: "Controlla i file caricati",
      messageLine: "Nota del mittente: {note}",
    },
    resetPassword: {
      subject: "Reimposta la password di {appName}",
      preheader: "Usa il link sicuro per reimpostare la password.",
      title: "Richiesta reimpostazione password",
      intro: "Usa il pulsante qui sotto per reimpostare la password. Il link scade tra un'ora.",
      actionLabel: "Reimposta password",
    },
    invite: {
      subject: "Sei stato invitato a {appName}",
      preheader: "Accedi con le credenziali temporanee per iniziare.",
      title: "Sei stato invitato",
      intro: "Un amministratore ti ha invitato a {appName}. Usa le credenziali temporanee qui sotto per accedere.",
      actionLabel: "Accedi ora",
      credentialsLine:
        "Accedi con l'email {email} e la password temporanea {password}.",
    },
    testMail: {
      subject: "Test configurazione email di {appName}",
      preheader: "La configurazione SMTP funziona correttamente.",
      title: "Configurazione email riuscita",
      intro: "Questa e una email di test da {appName}. La configurazione SMTP funziona correttamente.",
      actionLabel: "Apri applicazione",
    },
  },
};

type RecordString = Record<string, unknown>;

function flattenTranslationKeys(value: unknown, prefix = ""): string[] {
  if (typeof value !== "object" || value == null) return [prefix];
  return Object.entries(value as RecordString).flatMap(([key, nested]) =>
    flattenTranslationKeys(nested, prefix ? `${prefix}.${key}` : key),
  );
}

function extractPlaceholders(text: string): string[] {
  return [...text.matchAll(/\{([a-zA-Z0-9]+)\}/g)]
    .map((match) => match[1])
    .sort();
}

function validateEmailTranslations() {
  const base = emailMessages["en-US"];
  const baseKeys = flattenTranslationKeys(base).sort();

  for (const [locale, translation] of Object.entries(emailMessages)) {
    const translationKeys = flattenTranslationKeys(translation).sort();
    if (baseKeys.join("|") !== translationKeys.join("|")) {
      throw new Error(`Email translation keys mismatch for locale ${locale}`);
    }

    for (const key of baseKeys) {
      const baseValue = key
        .split(".")
        .reduce<unknown>((acc, path) => (acc as RecordString)[path], base);
      const translationValue = key
        .split(".")
        .reduce<unknown>(
          (acc, path) => (acc as RecordString)[path],
          translation as RecordString,
        );

      if (typeof baseValue !== "string" || typeof translationValue !== "string") {
        continue;
      }

      if (
        extractPlaceholders(baseValue).join("|") !==
        extractPlaceholders(translationValue).join("|")
      ) {
        throw new Error(
          `Email placeholders mismatch for locale ${locale} at key ${key}`,
        );
      }
    }
  }
}

validateEmailTranslations();

export function getEmailCopy(locale?: string | null): EmailCopy {
  return emailMessages[normalizeEmailLocale(locale)];
}

export type EmailConfigTranslationKey =
  | "shareRecipientsSubject"
  | "shareRecipientsMessage"
  | "reverseShareSubject"
  | "reverseShareMessage"
  | "resetPasswordSubject"
  | "resetPasswordMessage"
  | "inviteSubject"
  | "inviteMessage";

export function buildDefaultEmailConfigTranslations(): Record<
  EmailConfigTranslationKey,
  Record<SupportedEmailLocale, string>
> {
  const defaults = {
    shareRecipientsSubject: {} as Record<SupportedEmailLocale, string>,
    shareRecipientsMessage: {} as Record<SupportedEmailLocale, string>,
    reverseShareSubject: {} as Record<SupportedEmailLocale, string>,
    reverseShareMessage: {} as Record<SupportedEmailLocale, string>,
    resetPasswordSubject: {} as Record<SupportedEmailLocale, string>,
    resetPasswordMessage: {} as Record<SupportedEmailLocale, string>,
    inviteSubject: {} as Record<SupportedEmailLocale, string>,
    inviteMessage: {} as Record<SupportedEmailLocale, string>,
  };

  for (const locale of SUPPORTED_EMAIL_LOCALES) {
    const copy = getEmailCopy(locale);
    defaults.shareRecipientsSubject[locale] = copy.shareRecipients.subject;
    defaults.shareRecipientsMessage[locale] = [
      copy.shareRecipients.intro,
      copy.shareRecipients.availabilityLine,
      copy.shareRecipients.messageLine,
    ].join("\n\n");
    defaults.reverseShareSubject[locale] = copy.reverseShare.subject;
    defaults.reverseShareMessage[locale] = [
      copy.reverseShare.intro,
      copy.reverseShare.messageLine,
    ].join("\n\n");
    defaults.resetPasswordSubject[locale] = copy.resetPassword.subject;
    defaults.resetPasswordMessage[locale] = `${copy.resetPassword.intro}\n\n{url}`;
    defaults.inviteSubject[locale] = copy.invite.subject;
    defaults.inviteMessage[locale] = [
      copy.invite.intro,
      copy.invite.credentialsLine,
      "{url}",
    ].join("\n\n");
  }

  return defaults;
}
