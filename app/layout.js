import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "আজকের বাজারদর",
  description:
    "আজকের বাজারদর - ডিজিটাল বাজার মনিটরিং - আজকের বাজারদর একটি ডিজিটাল বাজার মনিটরিং প্ল্যাটফর্ম যা বাংলাদেশের বিভিন্ন বাজারের দাম এবং তথ্য সরবরাহ করে। আমাদের লক্ষ্য হলো গ্রাহকদের সঠিক এবং আপডেটেড বাজার তথ্য প্রদান করা, যাতে তারা সঠিক সিদ্ধান্ত নিতে পারে। আজকের বাজারদর প্ল্যাটফর্মে আপনি পাবেন বিভিন্ন পণ্যের দাম, বাজারের অবস্থা, এবং অন্যান্য গুরুত্বপূর্ণ তথ্য যা আপনাকে সাহায্য করবে আপনার ব্যবসা বা ব্যক্তিগত কেনাকাটার জন্য। আজকের বাজারদর - আপনার বিশ্বস্ত বাজার তথ্য সরবরাহকারী।",
};

export default function RootLayout({ children }) {
  return (
    <html className="translated-ltr">
      <Providers>
        <body className=" font-public-sans! bg-background ">{children}</body>
      </Providers>
    </html>
  );
}
