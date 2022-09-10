class Preferences {
    constructor (forcedTags, deniedTags) {
        this.forcedTags = forcedTags;
        this.deniedTags = deniedTags;

        this.usingTags = true;
        this.usingLimits = false;
        this.usingFruits = true;
    }

    validTags(tags) {

        for (let tag of this.forcedTags.tags) {
            if (!tags.includes(tag)) return false;
        }

        for (let tag of this.deniedTags.tags) {
            if (tags.includes(tag)) return false;
        }

        return true;
    }

    filter(item) {

        const validTags = this.validTags(item.tags);
        if (this.usingTags && !validTags) return false;

        return true;
    }

    
}