const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		randomKey: "Something random.",
		contacts: [
		  {
			name: "Test Contact",
			email: "test@test.co",
			phone: "(234) 567-8910",
			address: "123 Nonesuch St",
			imageUrl: "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
		  }
		],
	  },
	  actions: {
		addContact: () => { },
		editContact: (contact, index) => {
		  let tempContacts = getStore().contacts.toSpliced(index, 1, contact);
		  setStore({ contacts: tempContacts });
		},
		removeContact: () => { },
	  }
	};
  };
  
  export default getState;
