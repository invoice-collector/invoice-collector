import { SketchCollector } from '../../sketchCollector';

export class GegCollector extends SketchCollector {

    static CONFIG = {
        id: "geg",
        name: "Gaz Électricité de Grenoble (GEG)",
        description: "i18n.collectors.geg.description",
        version: "0",
        website: "https://geg.fr",
        logo: "https://www.geg.fr/img/logo-GEG.svg",
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
        entryUrl: "https://monagence.geg.fr/aelPROD/jsp/arc/habilitation/login.jsp",
    }

    constructor() {
        super(GegCollector.CONFIG);
    }
}
