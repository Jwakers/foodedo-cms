import {StructureBuilder} from 'sanity/structure'

/**
 * Desk structure: what appears in the Studio sidebar.
 * Edit this file to add sections or reorder document types.
 */
export const structure = (S: StructureBuilder) => {
  const blogSection = S.listItem()
    .title('Blog')
    .child(
      S.list()
        .title('Blog')
        .items([S.documentTypeListItem('post').title('Posts')])
    )

  const otherTypes = S.documentTypeListItems().filter(
    (item) => item.getId() !== 'post'
  )

  return S.list()
    .title('Content')
    .items([blogSection, ...otherTypes])
}
