class ProfilePage {

  elements = {
    myInfoTab: () => cy.contains('', ''),
    profileImageWrapper: () => cy.get(''),
    fileInput: () => cy.get(''),
    saveButton: () => cy.contains('', ''),
    uploadedImage: () => cy.get('')
  };

  // Test Case 1: Full flow of uploading image
  uploadProfilePicture(imageFileName) {
  }
}

export default ProfilePage;
