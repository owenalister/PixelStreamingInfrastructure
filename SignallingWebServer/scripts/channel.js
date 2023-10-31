/*
    Channel representation for EnterAgora
*/
class Channel {
    constructor(name, owner, isPrivate) {
        this.name = name
        this.owner = owner;
        this.isPrivate = isPrivate;
    }

    setName(name) {
        this.name = name;
    }

    setOwner(owner) {
        this.owner = owner;
    }

    setPrivate(value) {
        this.isPrivate = value;
    }
}