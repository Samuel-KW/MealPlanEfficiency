class TabManager {
    constructor() {
        this.tabs = [];
        this.selected = '';
    }

    select(id) {

        // Deselect previous element
        const prevNav = document.getElementById(`nav${this.selected}`);
        if (prevNav) prevNav.classList.remove('selected');

        const prevTab = document.getElementById(`tab${this.selected}`);
        if (prevTab) prevTab.classList.remove('selected');


        this.selected = id;

        // Update tabs
        for (let i = 0; i < this.tabs.length; ++i) {
            if (this.tabs[i].id === id)
                this.tabs[i].selected = true;
        }

        // Select new element
        document.getElementById(`nav${this.selected}`).classList.add('selected');
        document.getElementById(`tab${this.selected}`).classList.add('selected');
    }

    addTab(id, options={}) {
        
        if (options.selected) 
            this.select(id);

        this.tabs.push({
            selected: options.selected ?? false,
            title: options.title ?? 'Unknown tab',
            id
        });

        document.getElementById(`nav${id}`).addEventListener('click', () => this.select(id));
    }
}