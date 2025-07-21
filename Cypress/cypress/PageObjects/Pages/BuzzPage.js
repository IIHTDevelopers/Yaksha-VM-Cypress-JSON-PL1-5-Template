class BuzzPage {
  elements = {
    buzzTab: () => cy.contains('', ''),
    sharePhotoButton: () => cy.contains('', 'S'),
    imageUploadArea: () => cy.get('').contains(''),
    fileInput: () => cy.get('', { timeout: 10000 }),
    shareButton: () => cy.get('').contains(''),
    shareTextArea: () => cy.get(''),
    uploadedImage: () => cy.get(''),
    uploadSuccessToast: () => cy.contains('', ''),
    firstPostContainer: () => cy.get('').first(),
    firstLikeButton: () => cy.get('').first().find(''),
    firstLikeCountText: () => cy.get('').first().find('').find('').contains(''),
    commentIconOnFirstPost: () =>
      cy.get('', { timeout: 10000 })
        .first()
        .should('')
        .parents(''),
    commentInput: () => cy.get('', { timeout: 10000 }),
    moreOptionsButton: () => cy.get('').parents(''),
    editPostOption: () => cy.contains('', ''),
    editTextArea: () => cy.get('').first(),
    postButton: () => cy.get('').contains('').first(),
  }

  // Test Case 7
  postImageWithTimestampText(imageName, postMessage) {
  }

  // Test Case 8 Objects
  getFirstPost() {
  }

  getLikeCount($post) {
  }

  getFirstLikeCount() {
  }

  clickLikeButton($post) {
  }

  // Test Case 9
  addCommentToFirstPost(commentText) {
  }

  // Test Case 10
  editFirstPostWithText(newText) {
  }
}

export default BuzzPage;