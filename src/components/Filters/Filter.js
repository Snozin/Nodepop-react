export const useFilter = (adverts, { name, range, tags, type }) => {
  const filtered = adverts
    .filter(filterByName(name))
    .filter(filterByPrice(range))
    .filter(filterByTags(tags))
    .filter(filterByType(type))

  // console.log("filtré: ", filtered)

  return filtered
}

// const filterByName = (param) => {
//   return (arrayToFilter) => {
//     if(param === '') return true
//     return arrayToFilter.name.includes(param)
//   }
// }
const filterByName =
  (param) =>
  ({ name }) => {
    if (param === "") return true
    return name.includes(param)
  }

const filterByPrice =
  ({ minVal, maxVal }) =>
  ({ price }) => {
    if (minVal === "" && maxVal === "") return true
    if (minVal <= price && maxVal === "") return true
    if (minVal === "" && price <= maxVal) return true

    return price >= minVal && price <= maxVal
  }

const filterByTags =
  (chosenTags) =>
  ({ tags }) => {
    const filterTags = []
    for (const [key, value] of Object.entries(chosenTags)) {
      if (value === true) filterTags.push(key)
    }

    if (filterTags.length === 0) return true
    return filterTags.every((tag) => tags.includes(tag))
  }

const filterByType =
  (filterParam) =>
  ({ sale }) => {
    let condition = false

    if (filterParam === "All") return true
    filterParam === "Sell" ? (condition = true) : (condition = false)

    return condition === sale
  }
