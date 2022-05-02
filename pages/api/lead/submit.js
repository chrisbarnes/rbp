const mapFormDataToTave = (formData) => {
  return {
    Brand: "Rae Barnes Photography",
    Email: formData.email ? formData.email : null,
    FirstName: formData.firstName ? formData.firstName : null,
    LastName: formData.lastName ? formData.lastName : null,
    MobilePhone: formData.phone ? formData.phone : null,
    Source: formData.leadSource ? formData.leadSource : null,
    JobType: formData.shootType ? formData.shootType : null,
    EventDate: formData.date ? formData.date : null,
    Message: formData.message ? formData.message : null,
  };
};

const submitLead = async (data) => {
  const url = process.env.TAVE_CREATE_LEAD_ENDPOINT;
  const secret = process.env.TAVE_SECRET;
  const formData = mapFormDataToTave(data);
  const taveData = { SecretKey: secret, ...formData };
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlEncodedData = new URLSearchParams(taveData);

  return await fetch(url, {
    method: "POST",
    body: urlEncodedData,
    headers: myHeaders,
  });
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const leadResponse = await submitLead(req.body);

    if (leadResponse.status === 200) {
      const responseData = await leadResponse.text();

      res.status(200).json({ message: "Success" });
    } else {
      console.log("error", {
        status: leadResponse.status,
        statusText: leadResponse.statusText,
        text: await leadResponse.text(),
      });

      res.status(500).json({ message: "Failure" });
    }
  }
}
