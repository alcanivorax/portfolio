// export function Separator() {
//   return (
//     <div className="my-28 border-t border-black/10 dark:border-white/10" />
//   );
// }

// export function Separator() {
//   return (
//     <div
//       className="
//         my-28 h-px
//         bg-[repeating-linear-gradient(
//           45deg,
//           transparent,
//           transparent_6px,
//           rgba(0,0,0,0.08)_6px,
//           rgba(0,0,0,0.08)_7px
//         )]
//         dark:bg-[repeating-linear-gradient(
//           45deg,
//           transparent,
//           transparent_6px,
//           rgba(255,255,255,0.08)_6px,
//           rgba(255,255,255,0.08)_7px
//         )]
//       "
//     />
//   );
// }

export function Separator() {
  return (
    <div
      className="
        w-full
        h-10
        my-10
        bg-neutral-100 dark:bg-neutral-900
        bg-[repeating-linear-gradient(
          -45deg,
          transparent,
          transparent_6px,
          rgba(0,0,0,0.08)_6px,
          rgba(0,0,0,0.08)_7px
        )]
        dark:bg-[repeating-linear-gradient(
          -45deg,
          transparent,
          transparent_6px,
          rgba(255,255,255,0.08)_6px,
          rgba(255,255,255,0.08)_7px
        )]
      "
    />
  );
}
