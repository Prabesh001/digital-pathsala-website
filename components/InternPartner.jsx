import React from "react";

const InternPartner = () => {
  const partners = [
    "https://codeit.com.np/storage/01JKZAY669VRSFVZJ32016X405.avif",
    "https://codeit.com.np/storage/01JKX6T0WJ1SSEVWS904YY68RB.avif",
    "https://codeit.com.np/storage/01JKWFVAWCGKEF2GZ70Y9NWDMA.avif",
    "https://codeit.com.np/storage/01JKQR9F4SGQRJHY359QABGXZG.avif",
    "https://codeit.com.np/storage/01JKB0ZT0GR7CDBP50F7FCTYYV.avif",
    "https://codeit.com.np/storage/01JK5RT360358JCV659CQGBPKQ.avif",
    "https://codeit.com.np/storage/01JJX298W8YWYWWSD0M1VJCXEQ.avif",
    "https://codeit.com.np/storage/01JJX2C5EF85H6KB8Z4HPVRRNH.avif",
    "https://codeit.com.np/storage/01JK5NNYBNQTD6WH9JMDRYGKP4.png",
    "https://codeit.com.np/storage/01JJX2GRK46GBM2XA36VFRTY58.avif",
    "https://codeit.com.np/storage/01JJX2JPXWMKT9A9SYXGCC0K25.avif",
  ];

  return (
    <section className="p-4 sm:p-10">
      <div>
        <div className="flex justify-between items-center">
          <div className="md:w-[50%]">
            <h1 className="font-bold text-3xl">Intern Partners</h1>
            <p className="text-gray-500">
              Internship partners typically refer to organizations,
              institutions, or companies that collaborate with Code IT to offer
              internship opportunities to students.
            </p>
          </div>
        </div>
        <div className="py-5">
          <ul className="flex flex-wrap justify-center gap-10">
            {partners.map((src, index) => (
              <li key={index} className="flex items-center justify-center">
                <a href="#" target="_blank">
                  <img
                    src={src}
                    className="object-contain h-32 w-auto"
                    alt="Image"
                    loading="lazy"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InternPartner;
