
const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log("Method:", req.method);
  console.log("URL:", req.url);

  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Welcome to my website!");
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("This is my About page.");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Page not found!");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});




/* const http = require("node:http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Vanakkam! My first Node.js server.");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});



# Node.js – Creating a Basic Server

பாடம் 7 • 5th Standard மாணவருக்கும் புரியும்படி எளிய தமிழில்

## 1. முதலில் ஒரு சின்னக் கதை

[TCP 3-Way Handshake, HTTP Protocol, and Packet Capture with Wireshark | by Gülşah Yarar | Medium](https://images.openai.com/static-rsc-4/ag_BgHFvQQp7v--mQANg287V9M--6lXiucMqzdkBqSM06NHbDu6vRgUrKbXZMv95NkV5mXgMKympf0TYiBy9SXRv3YdglT3pSlHDl6vzkL2Cr8MxP5e4bL93sE4myJflrlxDNbm5SjgG0aefeuVp8kc4mItCQ0JvxIZcrRYbBkI?purpose=inline)

[medium.com](https://medium.com/%40gulsahyarar/tcp-3-way-handshake-http-protocol-and-packet-capture-with-wireshark-7115ae62f7aa)

ஒரு பள்ளியில் நூலகம் இருக்கிறது என்று நினைத்துக்கொள்.

- Student (Browser): ஒரு புத்தகத்தைக் கேட்கிறார்.
- Librarian (Server): அந்தப் புத்தகத்தைத் தேடுகிறார்.
- Book (Response): மாணவருக்குப் புத்தகம் கிடைக்கிறது.

அதே மாதிரிதான் இணையத்திலும் நடக்கும்!

நீ browser-ல் `http://localhost:3000` என்று type செய்கிறாய். Node.js server உனக்கு ஒரு பதிலை அனுப்புகிறது.

## 2. Basic Server என்றால் என்ன?

Server என்பது browser அனுப்பும் request-ஐப் பெற்று, அதற்குப் பதில் கொடுக்கும் ஒரு program.

Node.js பயன்படுத்தி நாமே ஒரு சிறிய server உருவாக்கலாம்.

Browser

localhost:3000-ஐ திறக்கிறது

Node.js Server

Request-ஐ பெற்று பதில் அனுப்புகிறது

## 3. Code எழுதுவோம்

Step 1: `basic-server` என்ற folder உருவாக்கு.

Step 2: அந்த folder-க்குள் `server.js` என்ற file உருவாக்கு.

Step 3: கீழே உள்ள code-ஐ அதில் எழுது.

```

const http = require("node:http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Vanakkam! My first Node.js server.");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});

```

## 4. ஒவ்வொரு வரியும் என்ன செய்கிறது?

வரி 1

```
const http = require("node:http");
```

Node.js-ல் இருக்கும் HTTP module-ஐ எடுத்துக்கொள்கிறோம். இது server உருவாக்க உதவும் கருவி.

வரி 2

```
const server = http.createServer((req, res) => {
```

புதிய server உருவாக்குகிறோம்.

- `req` = browser அனுப்பும் Request.
- `res` = browser-க்கு அனுப்பும் Response.

வரி 3

```
res.statusCode = 200;
```

`200` என்றால் request வெற்றிகரமாக முடிந்தது.

வரி 4

```
res.setHeader("Content-Type", "text/plain");
```

நாம் அனுப்பும் பதில் சாதாரண text என்று browser-க்குச் சொல்கிறோம்.

வரி 5

```
res.end("Vanakkam! My first Node.js server.");
```

Browser-க்கு பதில் அனுப்பி அந்த request-ஐ முடிக்கிறது.

கடைசிப் பகுதி

```
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

Server-ஐ port `3000`-ல் இயக்குகிறது. Server தொடங்கியதும் terminal-ல் செய்தி காட்டும்.

## 5. எப்படி இயக்குவது?

1. VS Code-ல் `basic-server` folder-ஐ திற.
2. Terminal திறந்து இந்த command கொடு:

   `bash     node server.js     `
3. Terminal-ல் இதுபோல் வரும்:

   `text     Server running on port 3000     `
4. Chrome browser-ல் `http://localhost:3000` திற.

நீ பார்க்க வேண்டிய output:

[http://localhost:3000](http://localhost:3000)

## Vanakkam! My first Node.js server.

கவனம்: Server இயங்கிக்கொண்டிருக்கும் terminal-ஐ மூடிவிட்டால் server நின்றுவிடும். `Ctrl + C` அழுத்தியும் நிறுத்தலாம்.

## 6. நினைவில் வைக்க வேண்டிய Flow

1\. `require("node:http")` — HTTP கருவியை எடு

2\. `createServer()` — Server உருவாக்கு

3\. `listen(3000)` — Port 3000-ல் இயக்கு

4\. `res.end()` — Browser-க்கு பதில் அனுப்பு

## 7. Real-time project உதாரணம்

நீ உருவாக்கும் Login Project-ல்:

- Browser login details அனுப்பும்.
- Node.js server அவற்றைப் பெறும்.
- Server login சரியா என்று சரிபார்க்கும்.
- சரியாக இருந்தால் dashboard-க்கு அனுமதிக்கும்; தவறாக இருந்தால் error message அனுப்பும்.

இது ஒரு basic server-ஐ வளர்த்து உருவாக்கப்படும் application.

## 8. Interview-ல் எப்படி பதில் சொல்வது?

Question: How do you create a basic server in Node.js?

Simple English answer:

“We can create a basic server in Node.js using the built-in HTTP module. The `createServer()` method handles requests and responses, and the `listen()` method starts the server on a specified port.”

## 9. Mini Quiz

1\. Node.js-ல் HTTP server உருவாக்க எந்த method பயன்படுகிறது?

`createServer()`

`createFolder()`

`createBrowser()`

2\. Server-ஐ எந்த port-ல் இயக்குகிறோம்?

80 மட்டும்

3000

50000 மட்டும்

3\. `res.end()` என்ன செய்கிறது?

Server-ஐ உருவாக்கும்

Folder உருவாக்கும்

Response அனுப்பி request-ஐ முடிக்கும்

பதில்களைச் சரிபார்

### உன் முடிவு: 3 / 3

✅ createServer() server உருவாக்கும்.

✅ இந்த எடுத்துக்காட்டில் port 3000 பயன்படுத்துகிறோம்.

✅ res.end() response அனுப்பி request-ஐ முடிக்கும்.

அடுத்த பாடம்: Request and Response Handling.

நீ தயாராக இருக்கும்போது `nxt` என்று அனுப்பு.*/