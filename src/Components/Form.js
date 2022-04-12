export default function Form() {
  return (
    <form
      action="https://formcarry.com/s/o4OXzU8PvVa"
      method="POST"
      acceptCharset="UTF-8"
      target="_blank"
      className="sombra"
    >
      <input type="text" name="name" placeholder="Your name" />
      <input type="email" name="email" placeholder="Your email" />
      <textarea
        name="message"
        rows="6"
        cols="20"
        placeholder="Your message"
        resize="false"
      ></textarea>
      <input className="form-button" type="submit" value="Submit" />
    </form>
  );
}
