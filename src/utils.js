export const importAll = (requireContext) => {
  return requireContext.keys().map(requireContext)
}
