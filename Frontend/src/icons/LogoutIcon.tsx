interface SizeProps  {
  size?: "sm" | "md" | "lg"
}

const SizeProps = {
  sm : "h-3 w-3",
  md : "h-5 w-5",
  lg : "h-6 w-6",
}
export const LogoutIcon = (props:SizeProps) => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={SizeProps[props.size || "sm"]}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
</svg>

}