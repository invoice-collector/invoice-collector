
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleSmenoCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_smeno",
        name: "Mutuelle Smeno",
        description: "i18n.collectors.mutuelle_smeno.description",
        version: "0",
        website: "https://espace-perso.smeno.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/130818.jpg",
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
        entryUrl: "https://espace-perso.smeno.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MutuelleSmenoCollector.CONFIG);
    }
}
