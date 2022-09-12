class TagManager {
    constructor (parent) {
        this.id = parent;
        this.parent = document.getElementById(parent);

        
        this.container = this.createElements();
        this.tags = new Set();
        
        this.loadTags();
        this.updateTags();

        this.parent.appendChild(this.container);
    }

    loadTags() {
        const set = localStorage.getItem(`tags_${this.id}`);
        this.tags = new Set(JSON.parse(set));
    }

    saveTags() {
        localStorage.setItem(`tags_${this.id}`, JSON.stringify([...this.tags]));
    }

    addTag (string) {
        string = string.trim().toLowerCase();
        this.tags.add(string);
    }

    removeTag (string) {
        string = string.trim().toLowerCase();
        this.tags.delete(string);
    }

    updateTags () {

        this.saveTags();

        this.contOutput.innerHTML = '';

        this.tags.forEach(tag => {
            const btnTag = document.createElement('button');
            btnTag.textContent = tag;

            btnTag.addEventListener('click', () => {
                this.removeTag(tag);
                this.saveTags();
                btnTag.remove();
            });

            this.contOutput.appendChild(btnTag);
        });
    }

    createElements () {

        const container = document.createElement('div');
        const contInput = document.createElement('div');

        const inpTag = document.createElement('input');
        inpTag.type = 'text';
        inpTag.placeholder = 'Tag...';
        contInput.appendChild(inpTag);

        const btnAdd = document.createElement('button');
        btnAdd.textContent = 'ADD';
        btnAdd.className = 'btn-add';
        contInput.appendChild(btnAdd);

        btnAdd.addEventListener('click', () => {
            const val = inpTag.value.trim();
            if (!val) return;

            this.addTag(val);
            this.updateTags();

            inpTag.value = '';
        });

        inpTag.addEventListener('keypress', e => {
            if (e.key !== 'Enter') return;

            e.preventDefault();
            e.stopPropagation();

            btnAdd.click();
        });


        this.contOutput = document.createElement('div');
        this.contOutput.className = 'tag-container';

        container.appendChild(contInput);
        container.appendChild(this.contOutput);

        return container;
    }
}

