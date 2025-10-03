
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RolserBoutiqueCollector extends SketchCollector {

    static CONFIG = {
        id: "rolser_boutique",
        name: "Rolser Boutique",
        description: "i18n.collectors.rolser_boutique.description",
        version: "0",
        website: "https://www.rolser.com/fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122795.jpg",
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
        entryUrl: "https://www.rolser.com/fr/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RolserBoutiqueCollector.CONFIG);
    }
}
