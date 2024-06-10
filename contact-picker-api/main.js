import "./../style.css";
import "./style.css";

const getContactsButton = document.querySelector(".get-contacts");
const contactList = document.querySelector(".contact-list");

const props = ["name", "tel", "icon"];
const options = {multiple: true};

const getIcon = (icon) => {
	if (icon.length > 0) {
		const imageUrl = URL.createObjectURL(icon[0]);
		const imageElement = document.createElement("img");
		imageElement.src = imageUrl;
		imageElement.className = "icon";

		return imageElement;
	}
};

const appendContacts = (contacts) => {
	contacts.forEach(({name, tel, icon}) => {
		const contactElement = document.createElement("li");

		contactElement.innerText = `${name}: ${tel}`;
		contactList.appendChild(contactElement);

		const imageElement = getIcon(icon);
		contactElement.appendChild(imageElement);
	});
};

const getContacts = async () => {
	try {
		const supported = "contacts" in navigator && "ContactsManager" in window;

		if (!supported) throw "not-supported";

		const contacts = await navigator.contacts.select(props, options);
		appendContacts(contacts);
	} catch (error) {
		error === "not-supported" ? alert("Conctacts API nos supported") : console.error(error);
	}
};

getContactsButton.addEventListener("click", getContacts);
