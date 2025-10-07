
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RexelFrCollector extends SketchCollector {

    static CONFIG = {
        id: "rexel_fr",
        name: "Rexel (.fr)",
        description: "i18n.collectors.rexel_fr.description",
        version: "0",
        website: "https://www.rexel.fr/frx/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/710098.jpg",
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
        entryUrl: "https://www.rexel.fr/frx/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RexelFrCollector.CONFIG);
    }
}
