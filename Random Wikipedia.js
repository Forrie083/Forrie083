// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-green; icon-glyph: graduation-cap;
const lang = "en" //use the language of your choice "en", "de", "it", "fr", etc.
const url = `https://${lang}.wikipedia.org/api/rest_v1/page/random/summary`
const req = new Request(url)
const res = await req.loadJSON()
const i = new Request(res.thumbnail.source);
const img = await i.loadImage();

let widget = createWidget(res.title, img, res.content_urls.mobile.page)
if (config.runsInWidget) {
  // create and show widget
  Script.setWidget(widget)
  Script.complete()
}
else {
  widget.presentSmall()
}

function createWidget(title, img, widgeturl) {
  console.log("Title: "+title)
  let w = new ListWidget()
  w.backgroundColor = new Color("#1A1A1A")
  let image = w.addImage(img);
  image.centerAlignImage();
  let titleTxt = w.addText(title)
  titleTxt.textColor = Color.white()
  titleTxt.font = Font.systemFont(12)
  titleTxt.centerAlignText()
  w.url = widgeturl
  w.setPadding(0, 5, 0, 0)
  return w
}