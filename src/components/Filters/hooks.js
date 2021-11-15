export const useFilter = (adverts, { name, range, tags, type }) => {
  // const prueba = {
  //   range: {
  //     minVal: 0,
  //     maxVal: 0,
  //   },
  //   tags: {
  //     lifestyle: false,
  //     mobile: true,
  //   },
  //   type: "All",
  // }
  // console.log(adverts)

  const filtrados = adverts
    .filter(filterByName(name))
    .filter(filterByPrice(range))
    .filter(filterByTags(tags))

  console.log("filtré: ", filtrados)
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
    console.log("llegan:", tags)

    for (const [key, value] of Object.entries(chosenTags)) {
      if (value === true) filterTags.push(key)
    }

    if (filterTags.length === 0) return true
    return filterTags.every((tag) => tags.includes(tag))
  }
