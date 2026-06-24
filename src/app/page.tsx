

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { useStore } from "@/store/useStore";

// export default function HomePage() {
//   const router = useRouter();

//   const { setUser } = useStore();

//   const [form, setForm] = useState({
//     name: "",
//     username: "",
//     email: "",
//     mobile: "",
//     shareData: false,
//   });

//   const [errors, setErrors] = useState<Record<string, string>>({});

//   const validate = () => {
//     const newErrors: Record<string, string> = {};

//     if (!form.name.trim()) {
//       newErrors.name = "Name is required";
//     }

//     if (!form.username.trim()) {
//       newErrors.username = "Username is required";
//     }

//     if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
//       newErrors.email = "Enter a valid email";
//     }

//     if (!form.mobile.match(/^[0-9]{10}$/)) {
//       newErrors.mobile = "Enter a valid mobile number";
//     }

//     if (!form.shareData) {
//       newErrors.shareData = "Please accept the checkbox";
//     }

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = () => {
//     if (!validate()) return;

//     setUser({
//       name: form.name,
//       username: form.username,
//       email: form.email,
//       mobile: form.mobile,
//     });

//     router.push("/categories");
//   };

//   return (
//     <main className="min-h-screen bg-black text-white flex">

//       {/* Left */}

//       <section className="hidden lg:flex w-1/2 flex-col justify-between p-12">

//         <div>

//           <Image
//             src="/images/logo.png"
//             alt="logo"
//             width={180}
//             height={60}
//           />

//         </div>

//         <div>

//           <h1 className="text-7xl font-bold leading-tight">
//             Discover new things on Superapp
//           </h1>

//         </div>

//         <Image
//           src="/images/hero.png"
//           alt="hero"
//           width={700}
//           height={700}
//           className="object-contain"
//         />

//       </section>

//       {/* Right */}

//       <section className="flex w-full lg:w-1/2 items-center justify-center p-10">

//         <div className="w-full max-w-md space-y-5">

//           <h2 className="text-center text-6xl font-bold text-green-500">
//             Super app
//           </h2>

//           <p className="text-center text-2xl">
//             Create your new account
//           </p>

//           <input
//             placeholder="Name"
//             className="w-full rounded bg-[#292929] p-4 outline-none"
//             value={form.name}
//             onChange={(e) =>
//               setForm({
//                 ...form,
//                 name: e.target.value,
//               })
//             }
//           />

//           {errors.name && (
//             <p className="text-sm text-red-500">
//               {errors.name}
//             </p>
//           )}

//           <input
//             placeholder="Username"
//             className="w-full rounded bg-[#292929] p-4 outline-none"
//             value={form.username}
//             onChange={(e) =>
//               setForm({
//                 ...form,
//                 username: e.target.value,
//               })
//             }
//           />

//           {errors.username && (
//             <p className="text-sm text-red-500">
//               {errors.username}
//             </p>
//           )}

//           <input
//             placeholder="Email"
//             className="w-full rounded bg-[#292929] p-4 outline-none"
//             value={form.email}
//             onChange={(e) =>
//               setForm({
//                 ...form,
//                 email: e.target.value,
//               })
//             }
//           />

//           {errors.email && (
//             <p className="text-sm text-red-500">
//               {errors.email}
//             </p>
//           )}

//           <input
//             placeholder="Mobile"
//             className="w-full rounded bg-[#292929] p-4 outline-none"
//             value={form.mobile}
//             onChange={(e) =>
//               setForm({
//                 ...form,
//                 mobile: e.target.value,
//               })
//             }
//           />

//           {errors.mobile && (
//             <p className="text-sm text-red-500">
//               {errors.mobile}
//             </p>
//           )}

//           <label className="flex items-center gap-3 text-sm">

//             <input
//               type="checkbox"
//               checked={form.shareData}
//               onChange={(e) =>
//                 setForm({
//                   ...form,
//                   shareData: e.target.checked,
//                 })
//               }
//             />

//             Share my registration data with Superapp

//           </label>

//           {errors.shareData && (
//             <p className="text-sm text-red-500">
//               {errors.shareData}
//             </p>
//           )}

//           <button
//             onClick={handleSubmit}
//             className="w-full rounded bg-green-500 py-4 text-xl font-bold text-black transition hover:bg-green-400"
//           >
//             SIGN UP
//           </button>

//         </div>

//       </section>

//     </main>
//   );
// }

import Image from "next/image";
import RegisterForm from "@/components/forms/RegisterForm";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white lg:grid lg:grid-cols-2">

      {/* Left */}

      <section className="relative hidden lg:block">

        <Image
          src="/images/hero.png"
          alt="Hero"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute bottom-12 left-10">

          {/* <h1 className="text-7xl font-bold leading-tight text-white">
            Discover new
            <br />
            things on
            <br />
            Superapp
          </h1> */}

        </div>

      </section>

      {/* Right */}

      <section className="flex items-center justify-center px-6 py-10">

        <div className="w-full max-w-md">

          <Image
            src="/images/logo.png"
            alt="Super App"
            width={220}
            height={70}
            className="mx-auto mb-8 h-auto"
          />

          <h2 className="mb-8 text-center text-2xl text-white">
            Create your new account
          </h2>

          <RegisterForm />

          <div className="mt-8 space-y-4 text-xs leading-6 text-[#7C7C7C]">

            <p>
              By clicking on Sign up, you agree to Superapp{" "}
              <span className="text-[#72DB73]">
                Terms and Conditions of Use
              </span>
            </p>

            <p>
              To learn more about how Superapp collects, uses, shares and
              protects your personal data please read our{" "}
              <span className="text-[#72DB73]">
                Privacy Policy
              </span>
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}