export type Certificate = {
    title: string;
    image: string;
    link: string;
    date: string;
    issuer: string;
  };
  
  export const certificates: Certificate[] = [
    {
      title: "PL-300",
      image: "/certs/cert_pl300.jpg",
      link: "https://www.credly.com/badges/b3cb9742-e6fa-4aad-b328-69373b6178d5/public_url",
      date: "10 Apr 2023",
      issuer: "Microsoft",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      image: "/certs/cert_aws.jpg",
      link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/8F6FGKNCV2RQQH3P",
      date: "11 Oct 2023",
      issuer: "Amazon Web Services (AWS)",
    },
    {
      title: "AI Literacy",
      image: "/certs/cert_ai4i.jpg",
      link: "https://f017e7ce-01d9-440c-9f94-a0fe360f6326.filesusr.com/ugd/41d0c8_1cf7a67626b94fd89125b698511025a7.pdf",
      date: "19 Apr 2023",
      issuer: "AI Singapore",
    },
  ];
  