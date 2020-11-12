class SwapService {
    _apiBase = 'https://swapi.dev/api';

    async getResource(url){
        const res = await fetch(`${this._apiBase}/` + url);
        if (!res.ok)
            throw new Error(`Could not fetch ${url}`)
        const body = await res.json();
        return body;
    }

    async getAllPeople(){
        const res = await this.getResource(`people`);
        return res.results;
    }

    getPerson(id){
        return this.getResource(`people/${id}`);
    }

    getPlanet(id){
        return this.getResource(`planets/${id}`);
    }

    async getAllStarShips(){
        const res = await this.getResource(`starships`);
        return res.results;
    }

    getStartShip(id){
        return this.getResource(`starships/${id}`);
    }
}