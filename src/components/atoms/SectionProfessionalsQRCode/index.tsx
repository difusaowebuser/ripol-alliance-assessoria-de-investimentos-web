"use client";
import * as React from "react";
import { QRCodeCanvas } from "qrcode.react";

export const SectionProfessionalsQRCode = ({ link }: { link: string }) => {
  return (
    <>
      <QRCodeCanvas
        value={link}
        size={256}
        className="!w-[96px] !h-[96px] bg-white rounded-lg p-2 relative block -top-[48px]"
      />
    </>
  );
};
