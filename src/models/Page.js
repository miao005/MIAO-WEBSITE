// Page model: the text shown for one nav link.
class Page {
  constructor({ name, greeting, title, body = '', tagline }) {
    this.name = name;
    this.greeting = greeting;
    this.title = title;
    this.body = body;
    this.tagline = tagline;
  }
}

export default Page;
