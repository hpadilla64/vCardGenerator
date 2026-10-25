const fs = require("fs");
const { default: fetch } = require("node-fetch");
const VCard = require("vcard-creator").default;
const QRCode = require("qrcode");

async function createVCard() {
  if (process.argv.length >= 3) {
    try {
      const config = await JSON.parse(fs.readFileSync(process.argv[2]));

      const {
        firstName,
        lastName,
        additionalName,
        namePrefix,
        email,
        job,
        role,
        phones,
        address,
        social,
        photoURL
      } = config;

      const vCard = new VCard("vcard");

      // Base vCard
      vCard
        .addName(lastName, firstName, additionalName, namePrefix)
        .addJobtitle(job)
        .addRole(role)
        .addEmail(email);

      // Phone numbers
      // 'type' may be PREF | WORK | HOME | VOICE | FAX | MSG | CELL | PAGER | BBS | CAR | MODEM | ISDN | VIDEO or any senseful combination, e.g. 'PREF;WORK;VOICE'
      phones.forEach(({ number, type }) => {
        vCard.addPhoneNumber(number, type);
      });

      // Addresses
      address.forEach(({ street, city, region, zip, country, type }) => {
        vCard.addAddress(
          undefined,
          undefined,
          street,
          city,
          region,
          zip,
          country,
          type
        );
      });

      // Social networks
      social.forEach(({ url, type, user }) => {
        vCard.addSocial(url, type, user);
      });

      // QR Code generator
      console.log("Creating QR image...");
      vCard.addPhotoURL(photoURL);
      fs.writeFileSync("./output/test.txt", vCard.toString());
      QRCode.toFile(
        "output/test.png",
        [{ data: Buffer.from(vCard.toString(), "utf-8"), mode: "byte" }],
        config.qr
      );

      const imgResponse = await fetch(photoURL);
      if (imgResponse.status >= 200 && imgResponse.status < 300) {
        const imgBase64 = (await imgResponse.buffer()).toString("base64");
        vCard.properties = vCard.properties.filter(
          ({ key }) => key !== "PHOTO;VALUE=uri"
        );
        vCard.definedElements.photo = false;
        vCard.addPhoto(imgBase64);
      }
      fs.writeFileSync("./output/test.vcf", vCard.toString());

      console.log("vCard File(s) generated");
      return;
    } catch (error) {
      throw error;
    }
  }
  throw new Error("Missing config file path");
}

createVCard();
