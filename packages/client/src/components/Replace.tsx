export const Replace: React.FC = () => {
  const baseMessage = "サンプルテキスト{hoge}{fuga}";

  const replace = (obj: Record<string, string>) => {
    let OldMessage = baseMessage;
    let NewMessage;
    Object.keys(obj).forEach((key) => {
      NewMessage = OldMessage.replace("{" + key + "}", obj[key]);
      OldMessage = NewMessage;
    });
    console.log(NewMessage);
  };
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Replace</h1>

        <div className="field is-grouped">
          <div className="control">
            <button
              className="button is-link"
              onClick={() => replace({ hoge: "あああ", fuga: "３３３" })}
            >
              replace
            </button>
          </div>
          <div className="control">
            <button className="button is-link is-light">昇順</button>
          </div>
        </div>
      </div>
    </section>
  );
};
