
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LaPosteEspaceClientCollector extends SketchCollector {

    static CONFIG = {
        id: "la_poste_espace_client",
        name: "La Poste - Espace Client",
        description: "i18n.collectors.la_poste_espace_client.description",
        version: "0",
        website: "https://moncompte.laposte.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1750704.jpg",
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
        entryUrl: "https://moncompte.laposte.fr/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LaPosteEspaceClientCollector.CONFIG);
    }
}
