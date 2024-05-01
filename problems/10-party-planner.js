class PartyPlanner {
	constructor(name, guestList = []) {
		this.name = name
		this.guestList = guestList
	}

	addToGuestList(name) {
		this.guestList.push(name)
	}

	throwParty() {
		let sent = "Welcome to the party " + this.guestList[0]
		if(this.guestList.length === 0) {
			return "Gotta add people to the guest list"
		} else if (this.guestList.length === 1){
			return sent
		} else {
			for (let i = 1; i < this.guestList.length; i++) {
				let guest = this.guestList[i]
				sent += " and " + guest
			}
		} return sent
	}
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
