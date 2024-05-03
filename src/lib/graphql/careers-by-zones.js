// export default `query GetCareersByZones {
//   careers {
//     nodes {
//       id
//       title
//       locationMeta {
//         city
//         state
//       }
//       careersMeta {
//        salary 
//       }
//       zones {
//         nodes {
//           name
//         }
//       }
//     }
//   }
// }`

export default {
	query: `
		{
			careers {
				edges {
					node {
						title
						content
						locationMeta {
							city
							state
						}
            careersMeta {
              position
              salary 
            }
            zones {
              nodes {
                name
              }
            }
					}
				}
			}
		} 
	`,
}