
import { SketchCollector } from '../../sketchCollector';

export class EdfReunionCollector extends SketchCollector {

    static CONFIG = {
        id: "edf_reunion",
        name: "EDF Reunion",
        description: "i18n.collectors.edf_reunion.description",
        version: "0",
        website: "https://sei-ael-reunion.edf.com/aelEDF/jsp/arc/habilitation/login.jsp",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/%C3%89lectricit%C3%A9_de_France_logo.svg",
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://sei-ael-reunion.edf.com/aelEDF/jsp/arc/habilitation/login.jsp",
    }

    constructor() {
        super(EdfReunionCollector.CONFIG);
    }
}
