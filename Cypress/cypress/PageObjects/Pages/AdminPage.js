class AdminPage {

  elements = {
    adminTab: () => cy.contains('', ''),
    editButton: () => cy.get('').first(),
    editFormContainer: () => cy.get(''),
    sortButton: () => cy.get('').contains(''),
    userTable: () => cy.get(''),
    userRows: () => cy.get(''),
    userRoleDropdown: () => cy.get('').contains('').parents('').find(''),
    userRoleOption: (role) => cy.get('').contains(role),
    searchButton: () => cy.get('').contains(''),
    adminTab: () => cy.contains('', ''),
    userRoleCells: () => cy.get(''), // Assuming 3rd column is Role
  }

  // Test Case 2 : Verify the Edit Form Appears
  editUserFormAppear() {
  }
  
  // Test Case 3: Verify Admin Table Sorting
  goToAdminAndSortByUsername() {
  }

  // Test Case 4: Verify Upgrade page loads correctly after clicking the button
  NavigateToAdminPage() {
  }

  // Test Case 5: Verify User Deletion
  visitAdminForTolltip() {
  }

  // Test Case 6: Verify User Edit Form Appears
  searchAdminUsersByRole() {
  }

}

export default AdminPage;
