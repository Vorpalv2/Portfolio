interface EmailTemplateProps {
  Name: string;
  Message: string;
  Email: string;
}

export function EmailTemplate({ Name, Message, Email }: EmailTemplateProps) {
  return (
    <div>
      <h1>Hey Aakash! You've got an entry from {Name}</h1>
      <p> regarding {Message}</p>
      <p>and they can be reached on {Email}</p>
    </div>
  );
}
