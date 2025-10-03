
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LaCompagineDesDessertsCollector extends SketchCollector {

    static CONFIG = {
        id: "la_compagine_des_desserts",
        name: "La Compagine Des Desserts",
        description: "i18n.collectors.la_compagine_des_desserts.description",
        version: "0",
        website: "https://www.compagniedesdesserts.com/en/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778785.jpg",
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
        entryUrl: "https://www.compagniedesdesserts.com/en/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LaCompagineDesDessertsCollector.CONFIG);
    }
}
