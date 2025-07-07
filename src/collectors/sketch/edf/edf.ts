import { SketchCollector } from '../../sketchCollector';

export class EdfCollector extends SketchCollector {

    static CONFIG = {
        id: "edf",
        name: "Électricité de France (EDF)",
        description: "i18n.collectors.edf.description",
        version: "0",
        website: "https://www.edf.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/%C3%89lectricit%C3%A9_de_France_logo.svg"
    }

    constructor() {
        super(EdfCollector.CONFIG);
    }
}
