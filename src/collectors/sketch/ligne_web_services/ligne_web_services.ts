
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LigneWebServicesCollector extends SketchCollector {

    static CONFIG = {
        id: "ligne_web_services",
        name: "Ligne Web Services",
        description: "i18n.collectors.ligne_web_services.description",
        version: "0",
        website: "https://panel.lws.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9450.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://panel.lws.fr/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LigneWebServicesCollector.CONFIG);
    }
}
