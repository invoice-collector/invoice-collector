
import { SketchCollector } from '../../sketchCollector';

export class VertbaudetCollector extends SketchCollector {

    static CONFIG = {
        id: "vertbaudet",
        name: "Vertbaudet",
        description: "i18n.collectors.vertbaudet.description",
        version: "0",
        website: "https://www.vertbaudet.com/fr/authentification.aspx?intnavid=s_mon-compte",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/124021.jpg",
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
        entryUrl: "https://www.vertbaudet.com/fr/authentification.aspx?intnavid=s_mon-compte",
    }

    constructor() {
        super(VertbaudetCollector.CONFIG);
    }
}
